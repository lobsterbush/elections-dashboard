/**
 * Global Elections Dashboard – Main Application
 * Renders Chart.js visualizations, filterable leader table,
 * and country-detail modal from ELECTIONS_DATA and LEADERS_DATA.
 */

(function () {
  "use strict";

  /* ── Palette & helpers ── */
  const CONTINENT_COLORS = {
    Africa: "#F59E0B",
    Americas: "#10B981",
    Asia: "#EF4444",
    Europe: "#3B82F6",
    Oceania: "#8B5CF6",
  };
  const MONTHS = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const CURRENT_YEAR = 2025;
  const MIN_YEAR = 1991;
  const MAX_YEAR = 2025;

  const chartDefaults = {
    font: { family: "'Space Grotesk', system-ui, sans-serif" },
    color: "#4a4a4a",
  };
  Chart.defaults.font.family = chartDefaults.font.family;
  Chart.defaults.color = chartDefaults.color;
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.pointStyle = "circle";

  /* ── State ── */
  let activeFilters = { continent: "", type: "", yearStart: MIN_YEAR, yearEnd: MAX_YEAR };
  const charts = {};
  let leaderSort = { key: "country", asc: true };

  /* ── Utility ── */
  function flatElections(data) {
    const out = [];
    data.forEach((c) =>
      c.elections.forEach((e) =>
        out.push({ ...e, country: c.country, iso3: c.iso3, region: c.region, continent: c.continent })
      )
    );
    return out;
  }

  function filtered() {
    let flat = flatElections(ELECTIONS_DATA);
    if (activeFilters.continent) flat = flat.filter((e) => e.continent === activeFilters.continent);
    if (activeFilters.type) flat = flat.filter((e) => e.type === activeFilters.type);
    flat = flat.filter((e) => e.year >= activeFilters.yearStart && e.year <= activeFilters.yearEnd);
    return flat;
  }

  function countBy(arr, key) {
    const m = {};
    arr.forEach((e) => { m[e[key]] = (m[e[key]] || 0) + 1; });
    return m;
  }

  function sortedEntries(obj, byValue = true, desc = true) {
    const entries = Object.entries(obj);
    if (byValue) entries.sort((a, b) => (desc ? b[1] - a[1] : a[1] - b[1]));
    else entries.sort((a, b) => (desc ? b[0].localeCompare(a[0]) : a[0].localeCompare(b[0])));
    return entries;
  }

  /* ── Populate year selects ── */
  function initYearSelects() {
    const startSel = document.getElementById("filter-year-start");
    const endSel = document.getElementById("filter-year-end");
    for (let y = MIN_YEAR; y <= MAX_YEAR; y++) {
      startSel.add(new Option(y, y, y === MIN_YEAR));
      endSel.add(new Option(y, y, y === MAX_YEAR));
    }
    startSel.value = MIN_YEAR;
    endSel.value = MAX_YEAR;
  }

  /* ── Summary cards ── */
  function updateCards(data) {
    const total = data.length;
    const countries = new Set(data.map((e) => e.country)).size;
    const presidential = data.filter((e) => e.type === "Presidential").length;
    const parliamentary = data.filter((e) => e.type === "Parliamentary").length;
    const years = activeFilters.yearEnd - activeFilters.yearStart + 1;
    document.getElementById("total-elections").textContent = total.toLocaleString();
    document.getElementById("total-countries").textContent = countries;
    document.getElementById("total-presidential").textContent = presidential.toLocaleString();
    document.getElementById("total-parliamentary").textContent = parliamentary.toLocaleString();
    document.getElementById("avg-per-year").textContent = years > 0 ? (total / years).toFixed(1) : "—";
  }

  /* ── Chart builders ── */

  function makeOrUpdate(id, config) {
    if (charts[id]) {
      charts[id].data = config.data;
      if (config.options) charts[id].options = config.options;
      charts[id].update();
    } else {
      charts[id] = new Chart(document.getElementById(id), config);
    }
  }

  function chartPerYear(data) {
    const byYear = countBy(data, "year");
    const years = [];
    for (let y = activeFilters.yearStart; y <= activeFilters.yearEnd; y++) years.push(y);
    makeOrUpdate("chart-per-year", {
      type: "bar",
      data: {
        labels: years,
        datasets: [{
          label: "Elections",
          data: years.map((y) => byYear[y] || 0),
          backgroundColor: "rgba(37,99,235,0.65)",
          borderColor: "rgba(37,99,235,1)",
          borderWidth: 1,
          borderRadius: 3,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { maxRotation: 45, font: { size: 10 } } },
          y: { beginAtZero: true, title: { display: true, text: "Number of elections" } },
        },
      },
    });
  }

  function chartTypeDist(data) {
    const byType = countBy(data, "type");
    const labels = Object.keys(byType);
    const colors = { Presidential: "#EF4444", Parliamentary: "#3B82F6", "Constituent Assembly": "#F59E0B" };
    makeOrUpdate("chart-type-dist", {
      type: "doughnut",
      data: {
        labels,
        datasets: [{
          data: labels.map((l) => byType[l]),
          backgroundColor: labels.map((l) => colors[l] || "#6B7280"),
          borderWidth: 2,
          borderColor: "#fff",
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { padding: 16, font: { size: 12 } } },
        },
      },
    });
  }

  function chartByContinent(data) {
    const byCont = countBy(data, "continent");
    const conts = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    makeOrUpdate("chart-by-continent", {
      type: "bar",
      data: {
        labels: conts,
        datasets: [{
          label: "Elections",
          data: conts.map((c) => byCont[c] || 0),
          backgroundColor: conts.map((c) => CONTINENT_COLORS[c]),
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true },
        },
      },
    });
  }

  function chartTopCountries(data) {
    const byCountry = countBy(data, "country");
    const top = sortedEntries(byCountry).slice(0, 25);
    const countryContinent = {};
    ELECTIONS_DATA.forEach((c) => { countryContinent[c.country] = c.continent; });
    makeOrUpdate("chart-top-countries", {
      type: "bar",
      data: {
        labels: top.map(([k]) => k),
        datasets: [{
          label: "Elections",
          data: top.map(([, v]) => v),
          backgroundColor: top.map(([k]) => CONTINENT_COLORS[countryContinent[k]] || "#6B7280"),
          borderRadius: 3,
        }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true },
          y: { ticks: { font: { size: 10 } } },
        },
      },
    });
    // Adjust canvas height for 25 bars
    document.getElementById("chart-top-countries").style.maxHeight = "600px";
    document.getElementById("chart-top-countries").parentElement.style.minHeight = "600px";
  }

  function chartRegionalTrends(data) {
    const bins = [];
    for (let y = MIN_YEAR; y <= MAX_YEAR; y += 5) {
      const end = Math.min(y + 4, MAX_YEAR);
      bins.push({ label: `${y}–${end}`, start: y, end });
    }
    const conts = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const datasets = conts.map((c) => ({
      label: c,
      data: bins.map((b) => data.filter((e) => e.continent === c && e.year >= b.start && e.year <= b.end).length),
      backgroundColor: CONTINENT_COLORS[c] + "99",
      borderColor: CONTINENT_COLORS[c],
      borderWidth: 1.5,
      fill: true,
      tension: 0.3,
    }));
    makeOrUpdate("chart-regional-trends", {
      type: "line",
      data: { labels: bins.map((b) => b.label), datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "top" } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, stacked: true, title: { display: true, text: "Elections" } },
        },
      },
    });
  }

  function chartByRegion(data) {
    const byRegion = countBy(data, "region");
    const sorted = sortedEntries(byRegion);
    const regionToContinent = {};
    ELECTIONS_DATA.forEach((c) => { regionToContinent[c.region] = c.continent; });
    makeOrUpdate("chart-by-region", {
      type: "bar",
      data: {
        labels: sorted.map(([k]) => k),
        datasets: [{
          label: "Elections",
          data: sorted.map(([, v]) => v),
          backgroundColor: sorted.map(([k]) => CONTINENT_COLORS[regionToContinent[k]] || "#6B7280"),
          borderRadius: 3,
        }],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true },
          y: { ticks: { font: { size: 9 } } },
        },
      },
    });
    document.getElementById("chart-by-region").style.maxHeight = "500px";
    document.getElementById("chart-by-region").parentElement.style.minHeight = "500px";
  }

  function chartByDecade(data) {
    const decades = ["1991–2000", "2001–2010", "2011–2020", "2021–2025"];
    const ranges = [[1991, 2000], [2001, 2010], [2011, 2020], [2021, 2025]];
    const conts = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const datasets = conts.map((c) => ({
      label: c,
      data: ranges.map(([s, e]) => data.filter((el) => el.continent === c && el.year >= s && el.year <= e).length),
      backgroundColor: CONTINENT_COLORS[c],
      borderRadius: 3,
    }));
    makeOrUpdate("chart-by-decade", {
      type: "bar",
      data: { labels: decades, datasets },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: "top" } },
        scales: {
          x: { stacked: true, grid: { display: false } },
          y: { stacked: true, beginAtZero: true, title: { display: true, text: "Elections" } },
        },
      },
    });
  }

  function chartAvgPerCountry(data) {
    const conts = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
    const countryCount = {};
    const elCount = {};
    ELECTIONS_DATA.forEach((c) => {
      countryCount[c.continent] = (countryCount[c.continent] || 0) + 1;
    });
    data.forEach((e) => { elCount[e.continent] = (elCount[e.continent] || 0) + 1; });
    makeOrUpdate("chart-avg-per-country", {
      type: "bar",
      data: {
        labels: conts,
        datasets: [{
          label: "Avg elections / country",
          data: conts.map((c) => countryCount[c] ? ((elCount[c] || 0) / countryCount[c]).toFixed(1) : 0),
          backgroundColor: conts.map((c) => CONTINENT_COLORS[c]),
          borderRadius: 4,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false } },
          y: { beginAtZero: true, title: { display: true, text: "Avg elections per country" } },
        },
      },
    });
  }

  /* ── Render all charts ── */
  function renderAll() {
    const data = filtered();
    updateCards(data);
    chartPerYear(data);
    chartTypeDist(data);
    chartByContinent(data);
    chartTopCountries(data);
    chartRegionalTrends(data);
    chartByRegion(data);
    chartByDecade(data);
    chartAvgPerCountry(data);
  }

  /* ── Leader table ── */

  function leaderContinent(country) {
    const found = ELECTIONS_DATA.find((c) => c.country === country);
    return found ? found.continent : "";
  }

  function enrichedLeaders() {
    return LEADERS_DATA.map((l) => ({
      ...l,
      continent: leaderContinent(l.country),
      tenure: (l.end_year || CURRENT_YEAR) - l.start_year,
    }));
  }

  function filteredLeaders(leaders) {
    const search = document.getElementById("leader-search").value.toLowerCase();
    const contFilter = document.getElementById("leader-filter-continent").value;
    const statusFilter = document.getElementById("leader-filter-current").value;
    return leaders.filter((l) => {
      if (search && !(l.name.toLowerCase().includes(search) || l.country.toLowerCase().includes(search) || l.party.toLowerCase().includes(search))) return false;
      if (contFilter && l.continent !== contFilter) return false;
      if (statusFilter === "current" && l.end_year !== null) return false;
      if (statusFilter === "former" && l.end_year === null) return false;
      return true;
    });
  }

  function renderLeaders() {
    let leaders = enrichedLeaders();
    leaders = filteredLeaders(leaders);
    // Sort
    leaders.sort((a, b) => {
      let va = a[leaderSort.key];
      let vb = b[leaderSort.key];
      if (va == null) va = leaderSort.key === "end_year" ? 9999 : "";
      if (vb == null) vb = leaderSort.key === "end_year" ? 9999 : "";
      if (typeof va === "string") return leaderSort.asc ? va.localeCompare(vb) : vb.localeCompare(va);
      return leaderSort.asc ? va - vb : vb - va;
    });

    const tbody = document.getElementById("leader-tbody");
    const maxTenure = Math.max(...leaders.map((l) => l.tenure), 1);
    tbody.innerHTML = leaders
      .map((l) => {
        const isCurrent = l.end_year === null;
        const barW = Math.round((l.tenure / maxTenure) * 60);
        return `<tr class="${isCurrent ? "current-leader" : ""}" data-country="${l.country}">
          <td>${l.country}</td>
          <td><strong>${l.name}</strong></td>
          <td>${l.title}</td>
          <td>${l.party}</td>
          <td>${l.start_year}</td>
          <td>${isCurrent ? '<span style="color:var(--accent);font-weight:600;">Current</span>' : l.end_year}</td>
          <td>${l.tenure} yr<span class="tenure-bar" style="width:${barW}px"></span></td>
        </tr>`;
      })
      .join("");
    document.getElementById("leader-count").textContent = `${leaders.length} leaders`;

    // Row click -> country modal
    tbody.querySelectorAll("tr").forEach((tr) => {
      tr.style.cursor = "pointer";
      tr.addEventListener("click", () => openCountryModal(tr.dataset.country));
    });
  }

  /* ── Country modal ── */
  let countryChart = null;

  function openCountryModal(countryName) {
    const countryData = ELECTIONS_DATA.find((c) => c.country === countryName);
    if (!countryData) return;
    const modal = document.getElementById("country-modal");
    document.getElementById("modal-country-name").textContent = countryName;

    // Meta tags
    const meta = document.getElementById("modal-meta");
    meta.innerHTML = `
      <span class="tag">${countryData.continent}</span>
      <span class="tag">${countryData.region}</span>
      <span class="tag">${countryData.elections.length} elections since 1991</span>
      <span class="tag">ISO: ${countryData.iso3}</span>
    `;

    // Timeline chart
    const byYear = {};
    countryData.elections.forEach((e) => { byYear[e.year] = (byYear[e.year] || 0) + 1; });
    const years = [];
    const minY = Math.min(...countryData.elections.map((e) => e.year));
    const maxY = Math.max(...countryData.elections.map((e) => e.year));
    for (let y = minY; y <= maxY; y++) years.push(y);

    if (countryChart) countryChart.destroy();
    countryChart = new Chart(document.getElementById("chart-country-timeline"), {
      type: "bar",
      data: {
        labels: years,
        datasets: [{
          label: "Elections",
          data: years.map((y) => byYear[y] || 0),
          backgroundColor: CONTINENT_COLORS[countryData.continent] || "#3B82F6",
          borderRadius: 3,
        }],
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { display: false }, ticks: { font: { size: 10 } } },
          y: { beginAtZero: true, ticks: { stepSize: 1 } },
        },
      },
    });

    // Elections list
    const listEl = document.getElementById("modal-elections-list");
    const sorted = [...countryData.elections].sort((a, b) => b.year - a.year || b.month - a.month);
    listEl.innerHTML = sorted
      .map((e) => {
        const cls = e.type === "Presidential" ? "presidential" : e.type === "Parliamentary" ? "parliamentary" : "constituent";
        return `<div class="election-item">
          <span>${MONTHS[e.month]} ${e.year}</span>
          <span class="election-type-badge ${cls}">${e.type}</span>
        </div>`;
      })
      .join("");

    modal.style.display = "flex";
  }

  function closeModal() {
    document.getElementById("country-modal").style.display = "none";
  }

  /* ── Event listeners ── */
  function initEvents() {
    // Filters
    document.getElementById("filter-continent").addEventListener("change", (e) => {
      activeFilters.continent = e.target.value;
      renderAll();
    });
    document.getElementById("filter-type").addEventListener("change", (e) => {
      activeFilters.type = e.target.value;
      renderAll();
    });
    document.getElementById("filter-year-start").addEventListener("change", (e) => {
      activeFilters.yearStart = parseInt(e.target.value);
      renderAll();
    });
    document.getElementById("filter-year-end").addEventListener("change", (e) => {
      activeFilters.yearEnd = parseInt(e.target.value);
      renderAll();
    });
    document.getElementById("clear-filters").addEventListener("click", () => {
      activeFilters = { continent: "", type: "", yearStart: MIN_YEAR, yearEnd: MAX_YEAR };
      document.getElementById("filter-continent").value = "";
      document.getElementById("filter-type").value = "";
      document.getElementById("filter-year-start").value = MIN_YEAR;
      document.getElementById("filter-year-end").value = MAX_YEAR;
      renderAll();
    });

    // Leader controls
    document.getElementById("leader-search").addEventListener("input", renderLeaders);
    document.getElementById("leader-filter-continent").addEventListener("change", renderLeaders);
    document.getElementById("leader-filter-current").addEventListener("change", renderLeaders);

    // Leader table sorting
    document.querySelectorAll("#leader-table th[data-sort]").forEach((th) => {
      th.addEventListener("click", () => {
        const key = th.dataset.sort;
        if (leaderSort.key === key) leaderSort.asc = !leaderSort.asc;
        else { leaderSort.key = key; leaderSort.asc = true; }
        renderLeaders();
      });
    });

    // Modal
    document.getElementById("modal-close").addEventListener("click", closeModal);
    document.getElementById("country-modal").addEventListener("click", (e) => {
      if (e.target === e.currentTarget) closeModal();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeModal();
    });
  }

  /* ── Populate leader continent filter ── */
  function initLeaderContinentFilter() {
    const sel = document.getElementById("leader-filter-continent");
    const conts = [...new Set(ELECTIONS_DATA.map((c) => c.continent))].sort();
    conts.forEach((c) => sel.add(new Option(c, c)));
  }

  /* ── Init ── */
  function init() {
    initYearSelects();
    initLeaderContinentFilter();
    initEvents();
    renderAll();
    renderLeaders();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
