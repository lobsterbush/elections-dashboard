# Global Elections Dashboard (1991–Present)

**Author:** Charles Crabtree, Senior Lecturer, School of Social Sciences, Monash University and K-Club Professor, University College, Korea University.

## Overview

An interactive dashboard visualizing national-level elections across countries since 1991. The dashboard covers 165 countries and includes presidential, parliamentary, and constituent assembly elections compiled from NELDA (Hyde & Marinov 2012), International IDEA, and official election records.

### Features

- **Summary statistics** — total elections, countries, type breakdown, average per year
- **8 interactive charts** — elections per year, type distribution, by continent, top 25 countries, regional trends, by region, by decade, average per country
- **Searchable leader table** — 390+ world leaders since 1991 with tenure bars, sortable columns, and continent/status filters
- **Country detail modal** — click any country to see its election timeline and full election list
- **Interactive filters** — filter all charts by continent, election type, and year range

## Requirements

- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required — pure HTML/CSS/JS with Chart.js via CDN

## Replication / Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/crabtree-charles/elections-dashboard.git
   ```
2. Open `index.html` in a browser, or serve locally:
   ```bash
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000`

## Data Sources

- Hyde, Susan D. and Nikolay Marinov. 2012. "Which Elections Can Be Lost?" *Political Analysis* 20(2): 191-201. [NELDA Dataset](https://nelda.co/)
- International IDEA Voter Turnout Database
- Official government election records

## Deployment

Hosted on GitHub Pages from the `main` branch.

## License

MIT
