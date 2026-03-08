/**
 * Global National Elections Dataset (1991–2025)
 *
 * Sources: Compiled from NELDA (Hyde & Marinov), IDEA Voter Turnout Database,
 * and official election records. Covers presidential, parliamentary/legislative,
 * and constituent assembly elections at the national level.
 *
 * Citation: Hyde, Susan D. and Nikolay Marinov. 2012.
 * "Which Elections Can Be Lost?" Political Analysis 20(2): 191-201.
 */

const ELECTIONS_DATA = [
  // ── AFRICA ──────────────────────────────────────────
  {
    country: "Algeria", iso3: "DZA", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Parliamentary",month:12},{year:1995,type:"Presidential",month:11},{year:1997,type:"Parliamentary",month:6},
      {year:1999,type:"Presidential",month:4},{year:2002,type:"Parliamentary",month:5},{year:2004,type:"Presidential",month:4},
      {year:2007,type:"Parliamentary",month:5},{year:2009,type:"Presidential",month:4},{year:2012,type:"Parliamentary",month:5},
      {year:2014,type:"Presidential",month:4},{year:2017,type:"Parliamentary",month:5},{year:2019,type:"Presidential",month:12},
      {year:2021,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Angola", iso3: "AGO", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:9},{year:1992,type:"Parliamentary",month:9},
      {year:2008,type:"Parliamentary",month:9},{year:2012,type:"Parliamentary",month:8},
      {year:2017,type:"Parliamentary",month:8},{year:2022,type:"Parliamentary",month:8}
    ]
  },
  {
    country: "Benin", iso3: "BEN", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Presidential",month:3},{year:1991,type:"Parliamentary",month:2},{year:1995,type:"Parliamentary",month:3},
      {year:1996,type:"Presidential",month:3},{year:1999,type:"Parliamentary",month:3},{year:2001,type:"Presidential",month:3},
      {year:2003,type:"Parliamentary",month:3},{year:2006,type:"Presidential",month:3},{year:2007,type:"Parliamentary",month:3},
      {year:2011,type:"Presidential",month:3},{year:2011,type:"Parliamentary",month:4},{year:2015,type:"Parliamentary",month:4},
      {year:2016,type:"Presidential",month:3},{year:2019,type:"Parliamentary",month:4},{year:2021,type:"Presidential",month:4},
      {year:2023,type:"Parliamentary",month:1}
    ]
  },
  {
    country: "Botswana", iso3: "BWA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Parliamentary",month:10},{year:1999,type:"Parliamentary",month:10},
      {year:2004,type:"Parliamentary",month:10},{year:2009,type:"Parliamentary",month:10},
      {year:2014,type:"Parliamentary",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Burkina Faso", iso3: "BFA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Presidential",month:12},{year:1992,type:"Parliamentary",month:5},
      {year:1997,type:"Parliamentary",month:5},{year:1998,type:"Presidential",month:11},
      {year:2002,type:"Parliamentary",month:5},{year:2005,type:"Presidential",month:11},
      {year:2007,type:"Parliamentary",month:5},{year:2010,type:"Presidential",month:11},
      {year:2012,type:"Parliamentary",month:12},{year:2015,type:"Presidential",month:11},
      {year:2015,type:"Parliamentary",month:11},{year:2020,type:"Presidential",month:11},
      {year:2020,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Burundi", iso3: "BDI", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:6},{year:1993,type:"Parliamentary",month:6},
      {year:2005,type:"Presidential",month:8},{year:2005,type:"Parliamentary",month:7},
      {year:2010,type:"Presidential",month:6},{year:2010,type:"Parliamentary",month:7},
      {year:2015,type:"Presidential",month:7},{year:2015,type:"Parliamentary",month:6},
      {year:2020,type:"Presidential",month:5},{year:2020,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Cameroon", iso3: "CMR", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Parliamentary",month:3},{year:1992,type:"Presidential",month:10},
      {year:1997,type:"Parliamentary",month:5},{year:1997,type:"Presidential",month:10},
      {year:2002,type:"Parliamentary",month:6},{year:2004,type:"Presidential",month:10},
      {year:2007,type:"Parliamentary",month:7},{year:2011,type:"Presidential",month:10},
      {year:2013,type:"Parliamentary",month:9},{year:2018,type:"Presidential",month:10},
      {year:2020,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Cape Verde", iso3: "CPV", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Parliamentary",month:1},{year:1991,type:"Presidential",month:2},
      {year:1995,type:"Parliamentary",month:12},{year:1996,type:"Presidential",month:2},
      {year:2001,type:"Parliamentary",month:1},{year:2001,type:"Presidential",month:2},
      {year:2006,type:"Parliamentary",month:1},{year:2006,type:"Presidential",month:2},
      {year:2011,type:"Parliamentary",month:2},{year:2011,type:"Presidential",month:8},
      {year:2016,type:"Parliamentary",month:3},{year:2016,type:"Presidential",month:10},
      {year:2021,type:"Parliamentary",month:4},{year:2021,type:"Presidential",month:10}
    ]
  },
  {
    country: "Central African Republic", iso3: "CAF", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:8},{year:1993,type:"Parliamentary",month:8},
      {year:1998,type:"Parliamentary",month:11},{year:1999,type:"Presidential",month:9},
      {year:2005,type:"Presidential",month:3},{year:2005,type:"Parliamentary",month:3},
      {year:2011,type:"Presidential",month:1},{year:2011,type:"Parliamentary",month:1},
      {year:2016,type:"Presidential",month:2},{year:2016,type:"Parliamentary",month:3},
      {year:2020,type:"Presidential",month:12},{year:2021,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Chad", iso3: "TCD", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1996,type:"Presidential",month:6},{year:1997,type:"Parliamentary",month:1},
      {year:2001,type:"Presidential",month:5},{year:2002,type:"Parliamentary",month:4},
      {year:2006,type:"Presidential",month:5},{year:2011,type:"Presidential",month:4},
      {year:2011,type:"Parliamentary",month:2},{year:2016,type:"Presidential",month:4},
      {year:2021,type:"Parliamentary",month:10},{year:2024,type:"Presidential",month:5}
    ]
  },
  {
    country: "Comoros", iso3: "COM", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Parliamentary",month:11},{year:1996,type:"Presidential",month:3},
      {year:1996,type:"Parliamentary",month:12},{year:2002,type:"Presidential",month:4},
      {year:2004,type:"Parliamentary",month:4},{year:2006,type:"Presidential",month:6},
      {year:2009,type:"Parliamentary",month:12},{year:2010,type:"Presidential",month:12},
      {year:2015,type:"Parliamentary",month:1},{year:2016,type:"Presidential",month:4},
      {year:2019,type:"Presidential",month:3},{year:2020,type:"Parliamentary",month:1},
      {year:2024,type:"Presidential",month:1}
    ]
  },
  {
    country: "Congo (Brazzaville)", iso3: "COG", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:8},{year:1992,type:"Parliamentary",month:6},
      {year:1993,type:"Parliamentary",month:5},{year:2002,type:"Presidential",month:3},
      {year:2002,type:"Parliamentary",month:5},{year:2007,type:"Parliamentary",month:6},
      {year:2009,type:"Presidential",month:7},{year:2012,type:"Parliamentary",month:7},
      {year:2016,type:"Presidential",month:3},{year:2017,type:"Parliamentary",month:7},
      {year:2021,type:"Presidential",month:3},{year:2022,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "Congo (Kinshasa)", iso3: "COD", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:2006,type:"Presidential",month:7},{year:2006,type:"Parliamentary",month:7},
      {year:2011,type:"Presidential",month:11},{year:2011,type:"Parliamentary",month:11},
      {year:2018,type:"Presidential",month:12},{year:2018,type:"Parliamentary",month:12},
      {year:2023,type:"Presidential",month:12},{year:2023,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "Côte d'Ivoire", iso3: "CIV", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1995,type:"Presidential",month:10},{year:1995,type:"Parliamentary",month:11},
      {year:2000,type:"Presidential",month:10},{year:2000,type:"Parliamentary",month:12},
      {year:2010,type:"Presidential",month:10},{year:2011,type:"Parliamentary",month:12},
      {year:2015,type:"Presidential",month:10},{year:2016,type:"Parliamentary",month:12},
      {year:2020,type:"Presidential",month:10},{year:2021,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Djibouti", iso3: "DJI", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Parliamentary",month:12},{year:1993,type:"Presidential",month:5},
      {year:1997,type:"Parliamentary",month:12},{year:1999,type:"Presidential",month:4},
      {year:2003,type:"Parliamentary",month:1},{year:2005,type:"Presidential",month:4},
      {year:2008,type:"Parliamentary",month:2},{year:2011,type:"Presidential",month:4},
      {year:2013,type:"Parliamentary",month:2},{year:2016,type:"Presidential",month:4},
      {year:2018,type:"Parliamentary",month:2},{year:2021,type:"Presidential",month:4},
      {year:2023,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Egypt", iso3: "EGY", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:10},{year:1995,type:"Parliamentary",month:11},
      {year:1999,type:"Presidential",month:9},{year:2000,type:"Parliamentary",month:10},
      {year:2005,type:"Presidential",month:9},{year:2005,type:"Parliamentary",month:11},
      {year:2010,type:"Parliamentary",month:11},{year:2011,type:"Parliamentary",month:11},
      {year:2012,type:"Presidential",month:5},{year:2014,type:"Presidential",month:5},
      {year:2015,type:"Parliamentary",month:10},{year:2018,type:"Presidential",month:3},
      {year:2020,type:"Parliamentary",month:10},{year:2023,type:"Presidential",month:12}
    ]
  },
  {
    country: "Equatorial Guinea", iso3: "GNQ", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Parliamentary",month:11},{year:1996,type:"Presidential",month:2},
      {year:1999,type:"Parliamentary",month:3},{year:2002,type:"Presidential",month:12},
      {year:2004,type:"Parliamentary",month:4},{year:2008,type:"Parliamentary",month:5},
      {year:2009,type:"Presidential",month:11},{year:2013,type:"Parliamentary",month:5},
      {year:2016,type:"Presidential",month:4},{year:2017,type:"Parliamentary",month:11},
      {year:2022,type:"Presidential",month:11},{year:2022,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Eritrea", iso3: "ERI", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Constituent Assembly",month:4}
    ]
  },
  {
    country: "Eswatini", iso3: "SWZ", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Parliamentary",month:9},{year:1998,type:"Parliamentary",month:10},
      {year:2003,type:"Parliamentary",month:10},{year:2008,type:"Parliamentary",month:9},
      {year:2013,type:"Parliamentary",month:9},{year:2018,type:"Parliamentary",month:9},
      {year:2023,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Ethiopia", iso3: "ETH", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1995,type:"Parliamentary",month:5},{year:2000,type:"Parliamentary",month:5},
      {year:2005,type:"Parliamentary",month:5},{year:2010,type:"Parliamentary",month:5},
      {year:2015,type:"Parliamentary",month:5},{year:2021,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Gabon", iso3: "GAB", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:12},{year:1996,type:"Parliamentary",month:12},
      {year:1998,type:"Presidential",month:12},{year:2001,type:"Parliamentary",month:12},
      {year:2005,type:"Presidential",month:11},{year:2006,type:"Parliamentary",month:12},
      {year:2009,type:"Presidential",month:8},{year:2011,type:"Parliamentary",month:12},
      {year:2016,type:"Presidential",month:8},{year:2018,type:"Parliamentary",month:10},
      {year:2023,type:"Presidential",month:8},{year:2023,type:"Parliamentary",month:8}
    ]
  },
  {
    country: "Gambia", iso3: "GMB", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:4},{year:1992,type:"Parliamentary",month:4},
      {year:1996,type:"Presidential",month:9},{year:1997,type:"Parliamentary",month:1},
      {year:2001,type:"Presidential",month:10},{year:2002,type:"Parliamentary",month:1},
      {year:2006,type:"Presidential",month:9},{year:2007,type:"Parliamentary",month:1},
      {year:2011,type:"Presidential",month:11},{year:2012,type:"Parliamentary",month:3},
      {year:2016,type:"Presidential",month:12},{year:2017,type:"Parliamentary",month:4},
      {year:2021,type:"Presidential",month:12},{year:2022,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Ghana", iso3: "GHA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:11},{year:1992,type:"Parliamentary",month:12},
      {year:1996,type:"Presidential",month:12},{year:1996,type:"Parliamentary",month:12},
      {year:2000,type:"Presidential",month:12},{year:2000,type:"Parliamentary",month:12},
      {year:2004,type:"Presidential",month:12},{year:2004,type:"Parliamentary",month:12},
      {year:2008,type:"Presidential",month:12},{year:2008,type:"Parliamentary",month:12},
      {year:2012,type:"Presidential",month:12},{year:2012,type:"Parliamentary",month:12},
      {year:2016,type:"Presidential",month:12},{year:2016,type:"Parliamentary",month:12},
      {year:2020,type:"Presidential",month:12},{year:2020,type:"Parliamentary",month:12},
      {year:2024,type:"Presidential",month:12},{year:2024,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "Guinea", iso3: "GIN", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:12},{year:1995,type:"Parliamentary",month:6},
      {year:1998,type:"Presidential",month:12},{year:2002,type:"Parliamentary",month:6},
      {year:2003,type:"Presidential",month:12},{year:2010,type:"Presidential",month:6},
      {year:2013,type:"Parliamentary",month:9},{year:2015,type:"Presidential",month:10},
      {year:2020,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Guinea-Bissau", iso3: "GNB", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Presidential",month:7},{year:1994,type:"Parliamentary",month:7},
      {year:1999,type:"Presidential",month:11},{year:1999,type:"Parliamentary",month:11},
      {year:2004,type:"Parliamentary",month:3},{year:2005,type:"Presidential",month:6},
      {year:2008,type:"Parliamentary",month:11},{year:2009,type:"Presidential",month:6},
      {year:2012,type:"Presidential",month:3},{year:2014,type:"Presidential",month:4},
      {year:2014,type:"Parliamentary",month:4},{year:2019,type:"Parliamentary",month:3},
      {year:2019,type:"Presidential",month:11},{year:2023,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Kenya", iso3: "KEN", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:12},{year:1992,type:"Parliamentary",month:12},
      {year:1997,type:"Presidential",month:12},{year:1997,type:"Parliamentary",month:12},
      {year:2002,type:"Presidential",month:12},{year:2002,type:"Parliamentary",month:12},
      {year:2007,type:"Presidential",month:12},{year:2007,type:"Parliamentary",month:12},
      {year:2013,type:"Presidential",month:3},{year:2013,type:"Parliamentary",month:3},
      {year:2017,type:"Presidential",month:8},{year:2017,type:"Parliamentary",month:8},
      {year:2022,type:"Presidential",month:8},{year:2022,type:"Parliamentary",month:8}
    ]
  },
  {
    country: "Lesotho", iso3: "LSO", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Parliamentary",month:3},{year:1998,type:"Parliamentary",month:5},
      {year:2002,type:"Parliamentary",month:5},{year:2007,type:"Parliamentary",month:2},
      {year:2012,type:"Parliamentary",month:5},{year:2015,type:"Parliamentary",month:2},
      {year:2017,type:"Parliamentary",month:6},{year:2022,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Liberia", iso3: "LBR", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      // Presidential + House & Senate (general elections)
      {year:1997,type:"Presidential",month:7},{year:1997,type:"Parliamentary",month:7},
      {year:2005,type:"Presidential",month:10},{year:2005,type:"Parliamentary",month:10},
      {year:2011,type:"Presidential",month:10},{year:2011,type:"Parliamentary",month:10},
      // Midterm Senate election (upper house, half of seats)
      {year:2014,type:"Parliamentary",month:12},
      // Presidential + House & Senate (general elections)
      {year:2017,type:"Presidential",month:10},{year:2017,type:"Parliamentary",month:10},
      // Midterm Senate election (upper house, half of seats)
      {year:2020,type:"Parliamentary",month:12},
      // Presidential + House & Senate (general elections)
      {year:2023,type:"Presidential",month:10},{year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Libya", iso3: "LBY", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:2012,type:"Parliamentary",month:7},{year:2014,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Madagascar", iso3: "MDG", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1993,type:"Presidential",month:2},
      {year:1998,type:"Parliamentary",month:5},{year:1996,type:"Presidential",month:11},
      {year:2001,type:"Presidential",month:12},{year:2002,type:"Parliamentary",month:12},
      {year:2006,type:"Presidential",month:12},{year:2007,type:"Parliamentary",month:9},
      {year:2013,type:"Presidential",month:10},{year:2013,type:"Parliamentary",month:12},
      {year:2018,type:"Presidential",month:11},{year:2019,type:"Parliamentary",month:5},
      {year:2023,type:"Presidential",month:11},{year:2024,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Malawi", iso3: "MWI", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Presidential",month:5},{year:1994,type:"Parliamentary",month:5},
      {year:1999,type:"Presidential",month:6},{year:1999,type:"Parliamentary",month:6},
      {year:2004,type:"Presidential",month:5},{year:2004,type:"Parliamentary",month:5},
      {year:2009,type:"Presidential",month:5},{year:2009,type:"Parliamentary",month:5},
      {year:2014,type:"Presidential",month:5},{year:2014,type:"Parliamentary",month:5},
      {year:2019,type:"Presidential",month:5},{year:2019,type:"Parliamentary",month:5},
      {year:2020,type:"Presidential",month:6},{year:2025,type:"Presidential",month:9}
    ]
  },
  {
    country: "Mali", iso3: "MLI", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:4},{year:1992,type:"Parliamentary",month:2},
      {year:1997,type:"Presidential",month:5},{year:1997,type:"Parliamentary",month:7},
      {year:2002,type:"Presidential",month:5},{year:2002,type:"Parliamentary",month:7},
      {year:2007,type:"Presidential",month:4},{year:2007,type:"Parliamentary",month:7},
      {year:2013,type:"Presidential",month:7},{year:2013,type:"Parliamentary",month:11},
      {year:2018,type:"Presidential",month:7},{year:2020,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Mauritania", iso3: "MRT", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1992,type:"Presidential",month:1},{year:1992,type:"Parliamentary",month:3},
      {year:1996,type:"Parliamentary",month:10},{year:1997,type:"Presidential",month:12},
      {year:2001,type:"Parliamentary",month:10},{year:2003,type:"Presidential",month:11},
      {year:2006,type:"Parliamentary",month:11},{year:2007,type:"Presidential",month:3},
      {year:2009,type:"Presidential",month:7},{year:2013,type:"Parliamentary",month:11},
      {year:2014,type:"Presidential",month:6},{year:2018,type:"Parliamentary",month:9},
      {year:2019,type:"Presidential",month:6},{year:2023,type:"Parliamentary",month:5},
      {year:2024,type:"Presidential",month:6}
    ]
  },
  {
    country: "Mauritius", iso3: "MUS", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Parliamentary",month:9},{year:1995,type:"Parliamentary",month:12},
      {year:2000,type:"Parliamentary",month:9},{year:2005,type:"Parliamentary",month:7},
      {year:2010,type:"Parliamentary",month:5},{year:2014,type:"Parliamentary",month:12},
      {year:2019,type:"Parliamentary",month:11},{year:2024,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Morocco", iso3: "MAR", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Parliamentary",month:6},{year:1997,type:"Parliamentary",month:11},
      {year:2002,type:"Parliamentary",month:9},{year:2007,type:"Parliamentary",month:9},
      {year:2011,type:"Parliamentary",month:11},{year:2016,type:"Parliamentary",month:10},
      {year:2021,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Mozambique", iso3: "MOZ", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Presidential",month:10},{year:1994,type:"Parliamentary",month:10},
      {year:1999,type:"Presidential",month:12},{year:1999,type:"Parliamentary",month:12},
      {year:2004,type:"Presidential",month:12},{year:2004,type:"Parliamentary",month:12},
      {year:2009,type:"Presidential",month:10},{year:2009,type:"Parliamentary",month:10},
      {year:2014,type:"Presidential",month:10},{year:2014,type:"Parliamentary",month:10},
      {year:2019,type:"Presidential",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2024,type:"Presidential",month:10},{year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Namibia", iso3: "NAM", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Presidential",month:12},{year:1994,type:"Parliamentary",month:12},
      {year:1999,type:"Presidential",month:11},{year:1999,type:"Parliamentary",month:11},
      {year:2004,type:"Presidential",month:11},{year:2004,type:"Parliamentary",month:11},
      {year:2009,type:"Presidential",month:11},{year:2009,type:"Parliamentary",month:11},
      {year:2014,type:"Presidential",month:11},{year:2014,type:"Parliamentary",month:11},
      {year:2019,type:"Presidential",month:11},{year:2019,type:"Parliamentary",month:11},
      {year:2024,type:"Presidential",month:11},{year:2024,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Niger", iso3: "NER", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:2},{year:1993,type:"Parliamentary",month:2},
      {year:1995,type:"Parliamentary",month:1},{year:1996,type:"Presidential",month:7},
      {year:1999,type:"Presidential",month:10},{year:1999,type:"Parliamentary",month:11},
      {year:2004,type:"Presidential",month:11},{year:2004,type:"Parliamentary",month:12},
      {year:2011,type:"Presidential",month:1},{year:2011,type:"Parliamentary",month:1},
      {year:2016,type:"Presidential",month:2},{year:2016,type:"Parliamentary",month:2},
      {year:2020,type:"Presidential",month:12},{year:2020,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "Nigeria", iso3: "NGA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:6},{year:1999,type:"Presidential",month:2},
      {year:1999,type:"Parliamentary",month:2},{year:2003,type:"Presidential",month:4},
      {year:2003,type:"Parliamentary",month:4},{year:2007,type:"Presidential",month:4},
      {year:2007,type:"Parliamentary",month:4},{year:2011,type:"Presidential",month:4},
      {year:2011,type:"Parliamentary",month:4},{year:2015,type:"Presidential",month:3},
      {year:2015,type:"Parliamentary",month:3},{year:2019,type:"Presidential",month:2},
      {year:2019,type:"Parliamentary",month:2},{year:2023,type:"Presidential",month:2},
      {year:2023,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Rwanda", iso3: "RWA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:2003,type:"Presidential",month:8},{year:2003,type:"Parliamentary",month:9},
      {year:2008,type:"Parliamentary",month:9},{year:2010,type:"Presidential",month:8},
      {year:2013,type:"Parliamentary",month:9},{year:2017,type:"Presidential",month:8},
      {year:2018,type:"Parliamentary",month:9},{year:2024,type:"Presidential",month:7},
      {year:2024,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "São Tomé and Príncipe", iso3: "STP", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Presidential",month:3},{year:1991,type:"Parliamentary",month:1},
      {year:1994,type:"Parliamentary",month:10},{year:1996,type:"Presidential",month:6},
      {year:1998,type:"Parliamentary",month:11},{year:2001,type:"Presidential",month:7},
      {year:2002,type:"Parliamentary",month:3},{year:2006,type:"Presidential",month:7},
      {year:2006,type:"Parliamentary",month:3},{year:2010,type:"Parliamentary",month:8},
      {year:2011,type:"Presidential",month:8},{year:2014,type:"Parliamentary",month:10},
      {year:2016,type:"Presidential",month:7},{year:2018,type:"Parliamentary",month:10},
      {year:2021,type:"Presidential",month:9},{year:2022,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Senegal", iso3: "SEN", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:2},{year:1993,type:"Parliamentary",month:5},
      {year:1998,type:"Parliamentary",month:5},{year:2000,type:"Presidential",month:2},
      {year:2001,type:"Parliamentary",month:4},{year:2007,type:"Presidential",month:2},
      {year:2007,type:"Parliamentary",month:6},{year:2012,type:"Presidential",month:2},
      {year:2012,type:"Parliamentary",month:7},{year:2017,type:"Parliamentary",month:7},
      {year:2019,type:"Presidential",month:2},{year:2022,type:"Parliamentary",month:7},
      {year:2024,type:"Presidential",month:3}
    ]
  },
  {
    country: "Sierra Leone", iso3: "SLE", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1996,type:"Presidential",month:2},{year:1996,type:"Parliamentary",month:2},
      {year:2002,type:"Presidential",month:5},{year:2002,type:"Parliamentary",month:5},
      {year:2007,type:"Presidential",month:8},{year:2007,type:"Parliamentary",month:8},
      {year:2012,type:"Presidential",month:11},{year:2012,type:"Parliamentary",month:11},
      {year:2018,type:"Presidential",month:3},{year:2018,type:"Parliamentary",month:3},
      {year:2023,type:"Presidential",month:6},{year:2023,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Somalia", iso3: "SOM", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:2012,type:"Presidential",month:9},{year:2012,type:"Parliamentary",month:8},
      {year:2017,type:"Presidential",month:2},{year:2016,type:"Parliamentary",month:10},
      {year:2022,type:"Presidential",month:5},{year:2021,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "South Africa", iso3: "ZAF", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Parliamentary",month:4},{year:1999,type:"Parliamentary",month:6},
      {year:2004,type:"Parliamentary",month:4},{year:2009,type:"Parliamentary",month:4},
      {year:2014,type:"Parliamentary",month:5},{year:2019,type:"Parliamentary",month:5},
      {year:2024,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "South Sudan", iso3: "SSD", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:2011,type:"Presidential",month:4}
    ]
  },
  {
    country: "Sudan", iso3: "SDN", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:1996,type:"Presidential",month:3},{year:1996,type:"Parliamentary",month:3},
      {year:2000,type:"Presidential",month:12},{year:2000,type:"Parliamentary",month:12},
      {year:2010,type:"Presidential",month:4},{year:2010,type:"Parliamentary",month:4},
      {year:2015,type:"Presidential",month:4},{year:2015,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Tanzania", iso3: "TZA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1995,type:"Presidential",month:10},{year:1995,type:"Parliamentary",month:10},
      {year:2000,type:"Presidential",month:10},{year:2000,type:"Parliamentary",month:10},
      {year:2005,type:"Presidential",month:12},{year:2005,type:"Parliamentary",month:12},
      {year:2010,type:"Presidential",month:10},{year:2010,type:"Parliamentary",month:10},
      {year:2015,type:"Presidential",month:10},{year:2015,type:"Parliamentary",month:10},
      {year:2020,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:10},
      {year:2025,type:"Presidential",month:10}
    ]
  },
  {
    country: "Togo", iso3: "TGO", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1993,type:"Presidential",month:8},{year:1994,type:"Parliamentary",month:2},
      {year:1998,type:"Presidential",month:6},{year:1999,type:"Parliamentary",month:3},
      {year:2002,type:"Parliamentary",month:10},{year:2003,type:"Presidential",month:6},
      {year:2005,type:"Presidential",month:4},{year:2007,type:"Parliamentary",month:10},
      {year:2010,type:"Presidential",month:3},{year:2013,type:"Parliamentary",month:7},
      {year:2015,type:"Presidential",month:4},{year:2018,type:"Parliamentary",month:12},
      {year:2020,type:"Presidential",month:2},{year:2024,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Tunisia", iso3: "TUN", region: "Northern Africa", continent: "Africa",
    elections: [
      {year:1994,type:"Presidential",month:3},{year:1994,type:"Parliamentary",month:3},
      {year:1999,type:"Presidential",month:10},{year:1999,type:"Parliamentary",month:10},
      {year:2004,type:"Presidential",month:10},{year:2004,type:"Parliamentary",month:10},
      {year:2009,type:"Presidential",month:10},{year:2009,type:"Parliamentary",month:10},
      {year:2011,type:"Constituent Assembly",month:10},{year:2014,type:"Presidential",month:11},
      {year:2014,type:"Parliamentary",month:10},{year:2019,type:"Presidential",month:9},
      {year:2019,type:"Parliamentary",month:10},{year:2022,type:"Parliamentary",month:12},
      {year:2024,type:"Presidential",month:10}
    ]
  },
  {
    country: "Uganda", iso3: "UGA", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1996,type:"Presidential",month:5},{year:2001,type:"Presidential",month:3},
      {year:2001,type:"Parliamentary",month:6},{year:2006,type:"Presidential",month:2},
      {year:2006,type:"Parliamentary",month:2},{year:2011,type:"Presidential",month:2},
      {year:2011,type:"Parliamentary",month:2},{year:2016,type:"Presidential",month:2},
      {year:2016,type:"Parliamentary",month:2},{year:2021,type:"Presidential",month:1},
      {year:2021,type:"Parliamentary",month:1}
    ]
  },
  {
    country: "Zambia", iso3: "ZMB", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1991,type:"Presidential",month:10},{year:1991,type:"Parliamentary",month:10},
      {year:1996,type:"Presidential",month:11},{year:1996,type:"Parliamentary",month:11},
      {year:2001,type:"Presidential",month:12},{year:2001,type:"Parliamentary",month:12},
      {year:2006,type:"Presidential",month:9},{year:2006,type:"Parliamentary",month:9},
      {year:2008,type:"Presidential",month:10},{year:2011,type:"Presidential",month:9},
      {year:2011,type:"Parliamentary",month:9},{year:2015,type:"Presidential",month:1},
      {year:2016,type:"Presidential",month:8},{year:2016,type:"Parliamentary",month:8},
      {year:2021,type:"Presidential",month:8},{year:2021,type:"Parliamentary",month:8}
    ]
  },
  {
    country: "Zimbabwe", iso3: "ZWE", region: "Sub-Saharan Africa", continent: "Africa",
    elections: [
      {year:1995,type:"Parliamentary",month:4},{year:1996,type:"Presidential",month:3},
      {year:2000,type:"Parliamentary",month:6},{year:2002,type:"Presidential",month:3},
      {year:2005,type:"Parliamentary",month:3},{year:2008,type:"Presidential",month:3},
      {year:2008,type:"Parliamentary",month:3},{year:2013,type:"Presidential",month:7},
      {year:2013,type:"Parliamentary",month:7},{year:2018,type:"Presidential",month:7},
      {year:2018,type:"Parliamentary",month:7},{year:2023,type:"Presidential",month:8},
      {year:2023,type:"Parliamentary",month:8}
    ]
  },

  // ── AMERICAS ──────────────────────────────────────────
  {
    country: "Argentina", iso3: "ARG", region: "South America", continent: "Americas",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1993,type:"Parliamentary",month:10},
      {year:1995,type:"Presidential",month:5},{year:1995,type:"Parliamentary",month:5},
      {year:1997,type:"Parliamentary",month:10},{year:1999,type:"Presidential",month:10},
      {year:1999,type:"Parliamentary",month:10},{year:2001,type:"Parliamentary",month:10},
      {year:2003,type:"Presidential",month:4},{year:2003,type:"Parliamentary",month:10},
      {year:2005,type:"Parliamentary",month:10},{year:2007,type:"Presidential",month:10},
      {year:2007,type:"Parliamentary",month:10},{year:2009,type:"Parliamentary",month:6},
      {year:2011,type:"Presidential",month:10},{year:2011,type:"Parliamentary",month:10},
      {year:2013,type:"Parliamentary",month:10},{year:2015,type:"Presidential",month:10},
      {year:2015,type:"Parliamentary",month:10},{year:2017,type:"Parliamentary",month:10},
      {year:2019,type:"Presidential",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2021,type:"Parliamentary",month:11},{year:2023,type:"Presidential",month:10},
      {year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Bolivia", iso3: "BOL", region: "South America", continent: "Americas",
    elections: [
      {year:1993,type:"Presidential",month:6},{year:1993,type:"Parliamentary",month:6},
      {year:1997,type:"Presidential",month:6},{year:1997,type:"Parliamentary",month:6},
      {year:2002,type:"Presidential",month:6},{year:2002,type:"Parliamentary",month:6},
      {year:2005,type:"Presidential",month:12},{year:2005,type:"Parliamentary",month:12},
      {year:2009,type:"Presidential",month:12},{year:2009,type:"Parliamentary",month:12},
      {year:2014,type:"Presidential",month:10},{year:2014,type:"Parliamentary",month:10},
      {year:2019,type:"Presidential",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2020,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:10},
      {year:2025,type:"Presidential",month:8}
    ]
  },
  {
    country: "Brazil", iso3: "BRA", region: "South America", continent: "Americas",
    elections: [
      {year:1994,type:"Presidential",month:10},{year:1994,type:"Parliamentary",month:10},
      {year:1998,type:"Presidential",month:10},{year:1998,type:"Parliamentary",month:10},
      {year:2002,type:"Presidential",month:10},{year:2002,type:"Parliamentary",month:10},
      {year:2006,type:"Presidential",month:10},{year:2006,type:"Parliamentary",month:10},
      {year:2010,type:"Presidential",month:10},{year:2010,type:"Parliamentary",month:10},
      {year:2014,type:"Presidential",month:10},{year:2014,type:"Parliamentary",month:10},
      {year:2018,type:"Presidential",month:10},{year:2018,type:"Parliamentary",month:10},
      {year:2022,type:"Presidential",month:10},{year:2022,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Canada", iso3: "CAN", region: "Northern America", continent: "Americas",
    elections: [
      {year:1993,type:"Parliamentary",month:10},{year:1997,type:"Parliamentary",month:6},
      {year:2000,type:"Parliamentary",month:11},{year:2004,type:"Parliamentary",month:6},
      {year:2006,type:"Parliamentary",month:1},{year:2008,type:"Parliamentary",month:10},
      {year:2011,type:"Parliamentary",month:5},{year:2015,type:"Parliamentary",month:10},
      {year:2019,type:"Parliamentary",month:10},{year:2021,type:"Parliamentary",month:9},
      {year:2025,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Chile", iso3: "CHL", region: "South America", continent: "Americas",
    elections: [
      {year:1993,type:"Presidential",month:12},{year:1993,type:"Parliamentary",month:12},
      {year:1997,type:"Parliamentary",month:12},{year:1999,type:"Presidential",month:12},
      {year:2001,type:"Parliamentary",month:12},{year:2005,type:"Presidential",month:12},
      {year:2005,type:"Parliamentary",month:12},{year:2009,type:"Presidential",month:12},
      {year:2009,type:"Parliamentary",month:12},{year:2013,type:"Presidential",month:11},
      {year:2013,type:"Parliamentary",month:11},{year:2017,type:"Presidential",month:11},
      {year:2017,type:"Parliamentary",month:11},{year:2021,type:"Presidential",month:11},
      {year:2021,type:"Parliamentary",month:11},{year:2021,type:"Constituent Assembly",month:5}
    ]
  },
  {
    country: "Colombia", iso3: "COL", region: "South America", continent: "Americas",
    elections: [
      {year:1991,type:"Constituent Assembly",month:12},{year:1994,type:"Presidential",month:5},
      {year:1994,type:"Parliamentary",month:3},{year:1998,type:"Presidential",month:5},
      {year:1998,type:"Parliamentary",month:3},{year:2002,type:"Presidential",month:5},
      {year:2002,type:"Parliamentary",month:3},{year:2006,type:"Presidential",month:5},
      {year:2006,type:"Parliamentary",month:3},{year:2010,type:"Presidential",month:5},
      {year:2010,type:"Parliamentary",month:3},{year:2014,type:"Presidential",month:5},
      {year:2014,type:"Parliamentary",month:3},{year:2018,type:"Presidential",month:5},
      {year:2018,type:"Parliamentary",month:3},{year:2022,type:"Presidential",month:5},
      {year:2022,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Costa Rica", iso3: "CRI", region: "Central America", continent: "Americas",
    elections: [
      {year:1994,type:"Presidential",month:2},{year:1994,type:"Parliamentary",month:2},
      {year:1998,type:"Presidential",month:2},{year:1998,type:"Parliamentary",month:2},
      {year:2002,type:"Presidential",month:2},{year:2002,type:"Parliamentary",month:2},
      {year:2006,type:"Presidential",month:2},{year:2006,type:"Parliamentary",month:2},
      {year:2010,type:"Presidential",month:2},{year:2010,type:"Parliamentary",month:2},
      {year:2014,type:"Presidential",month:2},{year:2014,type:"Parliamentary",month:2},
      {year:2018,type:"Presidential",month:2},{year:2018,type:"Parliamentary",month:2},
      {year:2022,type:"Presidential",month:2},{year:2022,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Cuba", iso3: "CUB", region: "Caribbean", continent: "Americas",
    elections: [
      {year:1993,type:"Parliamentary",month:2},{year:1998,type:"Parliamentary",month:1},
      {year:2003,type:"Parliamentary",month:1},{year:2008,type:"Parliamentary",month:1},
      {year:2013,type:"Parliamentary",month:2},{year:2018,type:"Parliamentary",month:3},
      {year:2023,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Dominican Republic", iso3: "DOM", region: "Caribbean", continent: "Americas",
    elections: [
      {year:1994,type:"Presidential",month:5},{year:1994,type:"Parliamentary",month:5},
      {year:1998,type:"Parliamentary",month:5},{year:2000,type:"Presidential",month:5},
      {year:2002,type:"Parliamentary",month:5},{year:2004,type:"Presidential",month:5},
      {year:2006,type:"Parliamentary",month:5},{year:2008,type:"Presidential",month:5},
      {year:2010,type:"Parliamentary",month:5},{year:2012,type:"Presidential",month:5},
      {year:2016,type:"Presidential",month:5},{year:2016,type:"Parliamentary",month:5},
      {year:2020,type:"Presidential",month:7},{year:2020,type:"Parliamentary",month:7},
      {year:2024,type:"Presidential",month:5},{year:2024,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Ecuador", iso3: "ECU", region: "South America", continent: "Americas",
    elections: [
      {year:1992,type:"Presidential",month:5},{year:1994,type:"Parliamentary",month:5},
      {year:1996,type:"Presidential",month:5},{year:1996,type:"Parliamentary",month:5},
      {year:1998,type:"Presidential",month:5},{year:1998,type:"Parliamentary",month:5},
      {year:1998,type:"Constituent Assembly",month:11},{year:2002,type:"Presidential",month:10},
      {year:2002,type:"Parliamentary",month:10},{year:2006,type:"Presidential",month:10},
      {year:2007,type:"Constituent Assembly",month:9},{year:2009,type:"Presidential",month:4},
      {year:2009,type:"Parliamentary",month:4},{year:2013,type:"Presidential",month:2},
      {year:2013,type:"Parliamentary",month:2},{year:2017,type:"Presidential",month:2},
      {year:2017,type:"Parliamentary",month:2},{year:2021,type:"Presidential",month:2},
      {year:2021,type:"Parliamentary",month:2},{year:2023,type:"Presidential",month:8},
      {year:2023,type:"Parliamentary",month:8},{year:2025,type:"Presidential",month:2}
    ]
  },
  {
    country: "El Salvador", iso3: "SLV", region: "Central America", continent: "Americas",
    elections: [
      {year:1991,type:"Parliamentary",month:3},{year:1994,type:"Presidential",month:3},
      {year:1994,type:"Parliamentary",month:3},{year:1997,type:"Parliamentary",month:3},
      {year:1999,type:"Presidential",month:3},{year:2000,type:"Parliamentary",month:3},
      {year:2003,type:"Parliamentary",month:3},{year:2004,type:"Presidential",month:3},
      {year:2006,type:"Parliamentary",month:3},{year:2009,type:"Presidential",month:3},
      {year:2009,type:"Parliamentary",month:1},{year:2012,type:"Parliamentary",month:3},
      {year:2014,type:"Presidential",month:2},{year:2015,type:"Parliamentary",month:3},
      {year:2018,type:"Parliamentary",month:3},{year:2019,type:"Presidential",month:2},
      {year:2021,type:"Parliamentary",month:2},{year:2024,type:"Presidential",month:2},
      {year:2024,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Guatemala", iso3: "GTM", region: "Central America", continent: "Americas",
    elections: [
      {year:1991,type:"Presidential",month:1},{year:1994,type:"Parliamentary",month:8},
      {year:1995,type:"Presidential",month:11},{year:1995,type:"Parliamentary",month:11},
      {year:1999,type:"Presidential",month:11},{year:1999,type:"Parliamentary",month:11},
      {year:2003,type:"Presidential",month:11},{year:2003,type:"Parliamentary",month:11},
      {year:2007,type:"Presidential",month:9},{year:2007,type:"Parliamentary",month:9},
      {year:2011,type:"Presidential",month:9},{year:2011,type:"Parliamentary",month:9},
      {year:2015,type:"Presidential",month:9},{year:2015,type:"Parliamentary",month:9},
      {year:2019,type:"Presidential",month:6},{year:2019,type:"Parliamentary",month:6},
      {year:2023,type:"Presidential",month:6},{year:2023,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Haiti", iso3: "HTI", region: "Caribbean", continent: "Americas",
    elections: [
      {year:1995,type:"Presidential",month:12},{year:1995,type:"Parliamentary",month:6},
      {year:2000,type:"Presidential",month:11},{year:2000,type:"Parliamentary",month:5},
      {year:2006,type:"Presidential",month:2},{year:2006,type:"Parliamentary",month:2},
      {year:2010,type:"Presidential",month:11},{year:2010,type:"Parliamentary",month:11},
      {year:2015,type:"Parliamentary",month:8},{year:2016,type:"Presidential",month:11}
    ]
  },
  {
    country: "Honduras", iso3: "HND", region: "Central America", continent: "Americas",
    elections: [
      {year:1993,type:"Presidential",month:11},{year:1993,type:"Parliamentary",month:11},
      {year:1997,type:"Presidential",month:11},{year:1997,type:"Parliamentary",month:11},
      {year:2001,type:"Presidential",month:11},{year:2001,type:"Parliamentary",month:11},
      {year:2005,type:"Presidential",month:11},{year:2005,type:"Parliamentary",month:11},
      {year:2009,type:"Presidential",month:11},{year:2009,type:"Parliamentary",month:11},
      {year:2013,type:"Presidential",month:11},{year:2013,type:"Parliamentary",month:11},
      {year:2017,type:"Presidential",month:11},{year:2017,type:"Parliamentary",month:11},
      {year:2021,type:"Presidential",month:11},{year:2021,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Jamaica", iso3: "JAM", region: "Caribbean", continent: "Americas",
    elections: [
      {year:1993,type:"Parliamentary",month:3},{year:1997,type:"Parliamentary",month:12},
      {year:2002,type:"Parliamentary",month:10},{year:2007,type:"Parliamentary",month:9},
      {year:2011,type:"Parliamentary",month:12},{year:2016,type:"Parliamentary",month:2},
      {year:2020,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Mexico", iso3: "MEX", region: "Central America", continent: "Americas",
    elections: [
      {year:1991,type:"Parliamentary",month:8},{year:1994,type:"Presidential",month:8},
      {year:1994,type:"Parliamentary",month:8},{year:1997,type:"Parliamentary",month:7},
      {year:2000,type:"Presidential",month:7},{year:2000,type:"Parliamentary",month:7},
      {year:2003,type:"Parliamentary",month:7},{year:2006,type:"Presidential",month:7},
      {year:2006,type:"Parliamentary",month:7},{year:2009,type:"Parliamentary",month:7},
      {year:2012,type:"Presidential",month:7},{year:2012,type:"Parliamentary",month:7},
      {year:2015,type:"Parliamentary",month:6},{year:2018,type:"Presidential",month:7},
      {year:2018,type:"Parliamentary",month:7},{year:2021,type:"Parliamentary",month:6},
      {year:2024,type:"Presidential",month:6},{year:2024,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Nicaragua", iso3: "NIC", region: "Central America", continent: "Americas",
    elections: [
      {year:1996,type:"Presidential",month:10},{year:1996,type:"Parliamentary",month:10},
      {year:2001,type:"Presidential",month:11},{year:2001,type:"Parliamentary",month:11},
      {year:2006,type:"Presidential",month:11},{year:2006,type:"Parliamentary",month:11},
      {year:2011,type:"Presidential",month:11},{year:2011,type:"Parliamentary",month:11},
      {year:2016,type:"Presidential",month:11},{year:2016,type:"Parliamentary",month:11},
      {year:2021,type:"Presidential",month:11},{year:2021,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Panama", iso3: "PAN", region: "Central America", continent: "Americas",
    elections: [
      {year:1994,type:"Presidential",month:5},{year:1994,type:"Parliamentary",month:5},
      {year:1999,type:"Presidential",month:5},{year:1999,type:"Parliamentary",month:5},
      {year:2004,type:"Presidential",month:5},{year:2004,type:"Parliamentary",month:5},
      {year:2009,type:"Presidential",month:5},{year:2009,type:"Parliamentary",month:5},
      {year:2014,type:"Presidential",month:5},{year:2014,type:"Parliamentary",month:5},
      {year:2019,type:"Presidential",month:5},{year:2019,type:"Parliamentary",month:5},
      {year:2024,type:"Presidential",month:5},{year:2024,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Paraguay", iso3: "PRY", region: "South America", continent: "Americas",
    elections: [
      {year:1993,type:"Presidential",month:5},{year:1993,type:"Parliamentary",month:5},
      {year:1998,type:"Presidential",month:5},{year:1998,type:"Parliamentary",month:5},
      {year:2003,type:"Presidential",month:4},{year:2003,type:"Parliamentary",month:4},
      {year:2008,type:"Presidential",month:4},{year:2008,type:"Parliamentary",month:4},
      {year:2013,type:"Presidential",month:4},{year:2013,type:"Parliamentary",month:4},
      {year:2018,type:"Presidential",month:4},{year:2018,type:"Parliamentary",month:4},
      {year:2023,type:"Presidential",month:4},{year:2023,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Peru", iso3: "PER", region: "South America", continent: "Americas",
    elections: [
      {year:1992,type:"Constituent Assembly",month:11},{year:1995,type:"Presidential",month:4},
      {year:1995,type:"Parliamentary",month:4},{year:2000,type:"Presidential",month:4},
      {year:2000,type:"Parliamentary",month:4},{year:2001,type:"Presidential",month:4},
      {year:2001,type:"Parliamentary",month:4},{year:2006,type:"Presidential",month:4},
      {year:2006,type:"Parliamentary",month:4},{year:2011,type:"Presidential",month:4},
      {year:2011,type:"Parliamentary",month:4},{year:2016,type:"Presidential",month:4},
      {year:2016,type:"Parliamentary",month:4},{year:2020,type:"Parliamentary",month:1},
      {year:2021,type:"Presidential",month:4},{year:2021,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Trinidad and Tobago", iso3: "TTO", region: "Caribbean", continent: "Americas",
    elections: [
      {year:1991,type:"Parliamentary",month:12},{year:1995,type:"Parliamentary",month:11},
      {year:2000,type:"Parliamentary",month:12},{year:2001,type:"Parliamentary",month:12},
      {year:2002,type:"Parliamentary",month:10},{year:2007,type:"Parliamentary",month:11},
      {year:2010,type:"Parliamentary",month:5},{year:2015,type:"Parliamentary",month:9},
      {year:2020,type:"Parliamentary",month:8}
    ]
  },
  {
    country: "United States", iso3: "USA", region: "Northern America", continent: "Americas",
    elections: [
      {year:1992,type:"Presidential",month:11},{year:1992,type:"Parliamentary",month:11},
      {year:1994,type:"Parliamentary",month:11},{year:1996,type:"Presidential",month:11},
      {year:1996,type:"Parliamentary",month:11},{year:1998,type:"Parliamentary",month:11},
      {year:2000,type:"Presidential",month:11},{year:2000,type:"Parliamentary",month:11},
      {year:2002,type:"Parliamentary",month:11},{year:2004,type:"Presidential",month:11},
      {year:2004,type:"Parliamentary",month:11},{year:2006,type:"Parliamentary",month:11},
      {year:2008,type:"Presidential",month:11},{year:2008,type:"Parliamentary",month:11},
      {year:2010,type:"Parliamentary",month:11},{year:2012,type:"Presidential",month:11},
      {year:2012,type:"Parliamentary",month:11},{year:2014,type:"Parliamentary",month:11},
      {year:2016,type:"Presidential",month:11},{year:2016,type:"Parliamentary",month:11},
      {year:2018,type:"Parliamentary",month:11},{year:2020,type:"Presidential",month:11},
      {year:2020,type:"Parliamentary",month:11},{year:2022,type:"Parliamentary",month:11},
      {year:2024,type:"Presidential",month:11},{year:2024,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Uruguay", iso3: "URY", region: "South America", continent: "Americas",
    elections: [
      {year:1994,type:"Presidential",month:11},{year:1994,type:"Parliamentary",month:11},
      {year:1999,type:"Presidential",month:10},{year:1999,type:"Parliamentary",month:10},
      {year:2004,type:"Presidential",month:10},{year:2004,type:"Parliamentary",month:10},
      {year:2009,type:"Presidential",month:10},{year:2009,type:"Parliamentary",month:10},
      {year:2014,type:"Presidential",month:10},{year:2014,type:"Parliamentary",month:10},
      {year:2019,type:"Presidential",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2024,type:"Presidential",month:10},{year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Venezuela", iso3: "VEN", region: "South America", continent: "Americas",
    elections: [
      {year:1993,type:"Presidential",month:12},{year:1993,type:"Parliamentary",month:12},
      {year:1998,type:"Presidential",month:12},{year:1998,type:"Parliamentary",month:11},
      {year:1999,type:"Constituent Assembly",month:7},{year:2000,type:"Presidential",month:7},
      {year:2000,type:"Parliamentary",month:7},{year:2005,type:"Parliamentary",month:12},
      {year:2006,type:"Presidential",month:12},{year:2010,type:"Parliamentary",month:9},
      {year:2012,type:"Presidential",month:10},{year:2013,type:"Presidential",month:4},
      {year:2015,type:"Parliamentary",month:12},{year:2018,type:"Presidential",month:5},
      {year:2020,type:"Parliamentary",month:12},{year:2024,type:"Presidential",month:7}
    ]
  },

  // ── ASIA ──────────────────────────────────────────
  {
    country: "Afghanistan", iso3: "AFG", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:2004,type:"Presidential",month:10},{year:2005,type:"Parliamentary",month:9},
      {year:2009,type:"Presidential",month:8},{year:2010,type:"Parliamentary",month:9},
      {year:2014,type:"Presidential",month:4},{year:2018,type:"Parliamentary",month:10},
      {year:2019,type:"Presidential",month:9}
    ]
  },
  {
    country: "Bangladesh", iso3: "BGD", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:2},{year:1996,type:"Parliamentary",month:2},
      {year:1996,type:"Parliamentary",month:6},{year:2001,type:"Parliamentary",month:10},
      {year:2008,type:"Parliamentary",month:12},{year:2014,type:"Parliamentary",month:1},
      {year:2018,type:"Parliamentary",month:12},{year:2024,type:"Parliamentary",month:1}
    ]
  },
  {
    country: "Cambodia", iso3: "KHM", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1993,type:"Parliamentary",month:5},{year:1998,type:"Parliamentary",month:7},
      {year:2003,type:"Parliamentary",month:7},{year:2008,type:"Parliamentary",month:7},
      {year:2013,type:"Parliamentary",month:7},{year:2018,type:"Parliamentary",month:7},
      {year:2023,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "China", iso3: "CHN", region: "Eastern Asia", continent: "Asia",
    elections: [
      {year:1993,type:"Parliamentary",month:3},{year:1998,type:"Parliamentary",month:3},
      {year:2003,type:"Parliamentary",month:3},{year:2008,type:"Parliamentary",month:3},
      {year:2013,type:"Parliamentary",month:3},{year:2018,type:"Parliamentary",month:3},
      {year:2023,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "India", iso3: "IND", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:5},{year:1996,type:"Parliamentary",month:4},
      {year:1998,type:"Parliamentary",month:2},{year:1999,type:"Parliamentary",month:9},
      {year:2004,type:"Parliamentary",month:4},{year:2009,type:"Parliamentary",month:4},
      {year:2014,type:"Parliamentary",month:4},{year:2019,type:"Parliamentary",month:4},
      {year:2024,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Indonesia", iso3: "IDN", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1997,type:"Parliamentary",month:5},
      {year:1999,type:"Parliamentary",month:6},{year:2004,type:"Presidential",month:7},
      {year:2004,type:"Parliamentary",month:4},{year:2009,type:"Presidential",month:7},
      {year:2009,type:"Parliamentary",month:4},{year:2014,type:"Presidential",month:7},
      {year:2014,type:"Parliamentary",month:4},{year:2019,type:"Presidential",month:4},
      {year:2019,type:"Parliamentary",month:4},{year:2024,type:"Presidential",month:2},
      {year:2024,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Iran", iso3: "IRN", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:4},{year:1993,type:"Presidential",month:6},
      {year:1996,type:"Parliamentary",month:3},{year:1997,type:"Presidential",month:5},
      {year:2000,type:"Parliamentary",month:2},{year:2001,type:"Presidential",month:6},
      {year:2004,type:"Parliamentary",month:2},{year:2005,type:"Presidential",month:6},
      {year:2008,type:"Parliamentary",month:3},{year:2009,type:"Presidential",month:6},
      {year:2012,type:"Parliamentary",month:3},{year:2013,type:"Presidential",month:6},
      {year:2016,type:"Parliamentary",month:2},{year:2017,type:"Presidential",month:5},
      {year:2020,type:"Parliamentary",month:2},{year:2021,type:"Presidential",month:6},
      {year:2024,type:"Parliamentary",month:3},{year:2024,type:"Presidential",month:6}
    ]
  },
  {
    country: "Iraq", iso3: "IRQ", region: "Western Asia", continent: "Asia",
    elections: [
      {year:2005,type:"Parliamentary",month:1},{year:2005,type:"Parliamentary",month:12},
      {year:2005,type:"Constituent Assembly",month:10},{year:2010,type:"Parliamentary",month:3},
      {year:2014,type:"Parliamentary",month:4},{year:2018,type:"Parliamentary",month:5},
      {year:2021,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Israel", iso3: "ISR", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1996,type:"Parliamentary",month:5},
      {year:1996,type:"Presidential",month:5},{year:1999,type:"Parliamentary",month:5},
      {year:1999,type:"Presidential",month:5},{year:2001,type:"Presidential",month:2},
      {year:2003,type:"Parliamentary",month:1},{year:2006,type:"Parliamentary",month:3},
      {year:2009,type:"Parliamentary",month:2},{year:2013,type:"Parliamentary",month:1},
      {year:2015,type:"Parliamentary",month:3},{year:2019,type:"Parliamentary",month:4},
      {year:2019,type:"Parliamentary",month:9},{year:2020,type:"Parliamentary",month:3},
      {year:2021,type:"Parliamentary",month:3},{year:2022,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Japan", iso3: "JPN", region: "Eastern Asia", continent: "Asia",
    elections: [
      // House of Representatives (Lower House)
      {year:1993,type:"Parliamentary",month:7},{year:1996,type:"Parliamentary",month:10},
      {year:2000,type:"Parliamentary",month:6},{year:2003,type:"Parliamentary",month:11},
      {year:2005,type:"Parliamentary",month:9},{year:2009,type:"Parliamentary",month:8},
      {year:2012,type:"Parliamentary",month:12},{year:2014,type:"Parliamentary",month:12},
      {year:2017,type:"Parliamentary",month:10},{year:2021,type:"Parliamentary",month:10},
      {year:2024,type:"Parliamentary",month:10},
      // House of Councillors (Upper House)
      {year:1992,type:"Parliamentary",month:7},{year:1995,type:"Parliamentary",month:7},
      {year:1998,type:"Parliamentary",month:7},{year:2001,type:"Parliamentary",month:7},
      {year:2004,type:"Parliamentary",month:7},{year:2007,type:"Parliamentary",month:7},
      {year:2010,type:"Parliamentary",month:7},{year:2013,type:"Parliamentary",month:7},
      {year:2016,type:"Parliamentary",month:7},{year:2019,type:"Parliamentary",month:7},
      {year:2022,type:"Parliamentary",month:7},{year:2025,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "Jordan", iso3: "JOR", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1993,type:"Parliamentary",month:11},{year:1997,type:"Parliamentary",month:11},
      {year:2003,type:"Parliamentary",month:6},{year:2007,type:"Parliamentary",month:11},
      {year:2010,type:"Parliamentary",month:11},{year:2013,type:"Parliamentary",month:1},
      {year:2016,type:"Parliamentary",month:9},{year:2020,type:"Parliamentary",month:11},
      {year:2024,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Kazakhstan", iso3: "KAZ", region: "Central Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Presidential",month:12},{year:1994,type:"Parliamentary",month:3},
      {year:1995,type:"Presidential",month:4},{year:1995,type:"Parliamentary",month:12},
      {year:1999,type:"Presidential",month:1},{year:1999,type:"Parliamentary",month:10},
      {year:2004,type:"Parliamentary",month:9},{year:2005,type:"Presidential",month:12},
      {year:2007,type:"Parliamentary",month:8},{year:2011,type:"Presidential",month:4},
      {year:2012,type:"Parliamentary",month:1},{year:2015,type:"Presidential",month:4},
      {year:2016,type:"Parliamentary",month:3},{year:2019,type:"Presidential",month:6},
      {year:2021,type:"Parliamentary",month:1},{year:2022,type:"Presidential",month:11},
      {year:2023,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Kuwait", iso3: "KWT", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:10},{year:1996,type:"Parliamentary",month:10},
      {year:1999,type:"Parliamentary",month:7},{year:2003,type:"Parliamentary",month:7},
      {year:2006,type:"Parliamentary",month:6},{year:2008,type:"Parliamentary",month:5},
      {year:2009,type:"Parliamentary",month:5},{year:2012,type:"Parliamentary",month:2},
      {year:2012,type:"Parliamentary",month:12},{year:2013,type:"Parliamentary",month:7},
      {year:2016,type:"Parliamentary",month:11},{year:2020,type:"Parliamentary",month:12},
      {year:2022,type:"Parliamentary",month:9},{year:2023,type:"Parliamentary",month:6},
      {year:2024,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Kyrgyzstan", iso3: "KGZ", region: "Central Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Presidential",month:10},{year:1995,type:"Parliamentary",month:2},
      {year:1995,type:"Presidential",month:12},{year:2000,type:"Presidential",month:10},
      {year:2000,type:"Parliamentary",month:2},{year:2005,type:"Parliamentary",month:2},
      {year:2005,type:"Presidential",month:7},{year:2007,type:"Parliamentary",month:12},
      {year:2009,type:"Presidential",month:7},{year:2010,type:"Parliamentary",month:10},
      {year:2011,type:"Presidential",month:10},{year:2015,type:"Parliamentary",month:10},
      {year:2017,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:10},
      {year:2021,type:"Presidential",month:1},{year:2021,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Laos", iso3: "LAO", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:12},{year:1997,type:"Parliamentary",month:12},
      {year:2002,type:"Parliamentary",month:2},{year:2006,type:"Parliamentary",month:4},
      {year:2011,type:"Parliamentary",month:4},{year:2016,type:"Parliamentary",month:3},
      {year:2021,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Lebanon", iso3: "LBN", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:8},{year:1996,type:"Parliamentary",month:8},
      {year:2000,type:"Parliamentary",month:8},{year:2005,type:"Parliamentary",month:5},
      {year:2009,type:"Parliamentary",month:6},{year:2018,type:"Parliamentary",month:5},
      {year:2022,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Malaysia", iso3: "MYS", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1995,type:"Parliamentary",month:4},{year:1999,type:"Parliamentary",month:11},
      {year:2004,type:"Parliamentary",month:3},{year:2008,type:"Parliamentary",month:3},
      {year:2013,type:"Parliamentary",month:5},{year:2018,type:"Parliamentary",month:5},
      {year:2022,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Mongolia", iso3: "MNG", region: "Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1993,type:"Presidential",month:6},
      {year:1996,type:"Parliamentary",month:6},{year:1997,type:"Presidential",month:5},
      {year:2000,type:"Parliamentary",month:7},{year:2001,type:"Presidential",month:5},
      {year:2004,type:"Parliamentary",month:6},{year:2005,type:"Presidential",month:5},
      {year:2008,type:"Parliamentary",month:6},{year:2009,type:"Presidential",month:5},
      {year:2012,type:"Parliamentary",month:6},{year:2013,type:"Presidential",month:6},
      {year:2016,type:"Parliamentary",month:6},{year:2017,type:"Presidential",month:6},
      {year:2020,type:"Parliamentary",month:6},{year:2021,type:"Presidential",month:6},
      {year:2024,type:"Parliamentary",month:6},{year:2025,type:"Presidential",month:6}
    ]
  },
  {
    country: "Myanmar", iso3: "MMR", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:2010,type:"Parliamentary",month:11},{year:2015,type:"Parliamentary",month:11},
      {year:2020,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Nepal", iso3: "NPL", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:5},{year:1994,type:"Parliamentary",month:11},
      {year:1999,type:"Parliamentary",month:5},{year:2008,type:"Constituent Assembly",month:4},
      {year:2013,type:"Constituent Assembly",month:11},{year:2017,type:"Parliamentary",month:11},
      {year:2022,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "North Korea", iso3: "PRK", region: "Eastern Asia", continent: "Asia",
    elections: [
      {year:1998,type:"Parliamentary",month:7},{year:2003,type:"Parliamentary",month:8},
      {year:2009,type:"Parliamentary",month:3},{year:2014,type:"Parliamentary",month:3},
      {year:2019,type:"Parliamentary",month:3},{year:2024,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Pakistan", iso3: "PAK", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1993,type:"Parliamentary",month:10},{year:1997,type:"Parliamentary",month:2},
      {year:2002,type:"Parliamentary",month:10},{year:2008,type:"Parliamentary",month:2},
      {year:2013,type:"Parliamentary",month:5},{year:2018,type:"Parliamentary",month:7},
      {year:2024,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Philippines", iso3: "PHL", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Presidential",month:5},{year:1992,type:"Parliamentary",month:5},
      {year:1995,type:"Parliamentary",month:5},{year:1998,type:"Presidential",month:5},
      {year:1998,type:"Parliamentary",month:5},{year:2001,type:"Parliamentary",month:5},
      {year:2004,type:"Presidential",month:5},{year:2004,type:"Parliamentary",month:5},
      {year:2007,type:"Parliamentary",month:5},{year:2010,type:"Presidential",month:5},
      {year:2010,type:"Parliamentary",month:5},{year:2013,type:"Parliamentary",month:5},
      {year:2016,type:"Presidential",month:5},{year:2016,type:"Parliamentary",month:5},
      {year:2019,type:"Parliamentary",month:5},{year:2022,type:"Presidential",month:5},
      {year:2022,type:"Parliamentary",month:5},{year:2025,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Singapore", iso3: "SGP", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:8},{year:1993,type:"Presidential",month:8},
      {year:1997,type:"Parliamentary",month:1},{year:2001,type:"Parliamentary",month:11},
      {year:2006,type:"Parliamentary",month:5},{year:2011,type:"Parliamentary",month:5},
      {year:2011,type:"Presidential",month:8},{year:2015,type:"Parliamentary",month:9},
      {year:2017,type:"Presidential",month:9},{year:2020,type:"Parliamentary",month:7},
      {year:2023,type:"Presidential",month:9},{year:2025,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "South Korea", iso3: "KOR", region: "Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Presidential",month:12},{year:1992,type:"Parliamentary",month:3},
      {year:1996,type:"Parliamentary",month:4},{year:1997,type:"Presidential",month:12},
      {year:2000,type:"Parliamentary",month:4},{year:2002,type:"Presidential",month:12},
      {year:2004,type:"Parliamentary",month:4},{year:2007,type:"Presidential",month:12},
      {year:2008,type:"Parliamentary",month:4},{year:2012,type:"Presidential",month:12},
      {year:2012,type:"Parliamentary",month:4},{year:2016,type:"Parliamentary",month:4},
      {year:2017,type:"Presidential",month:5},{year:2020,type:"Parliamentary",month:4},
      {year:2022,type:"Presidential",month:3},{year:2024,type:"Parliamentary",month:4},
      {year:2025,type:"Presidential",month:6}
    ]
  },
  {
    country: "Sri Lanka", iso3: "LKA", region: "Southern Asia", continent: "Asia",
    elections: [
      {year:1994,type:"Parliamentary",month:8},{year:1994,type:"Presidential",month:11},
      {year:1999,type:"Presidential",month:12},{year:2000,type:"Parliamentary",month:10},
      {year:2001,type:"Parliamentary",month:12},{year:2004,type:"Parliamentary",month:4},
      {year:2005,type:"Presidential",month:11},{year:2010,type:"Presidential",month:1},
      {year:2010,type:"Parliamentary",month:4},{year:2015,type:"Presidential",month:1},
      {year:2015,type:"Parliamentary",month:8},{year:2019,type:"Presidential",month:11},
      {year:2020,type:"Parliamentary",month:8},{year:2024,type:"Presidential",month:9},
      {year:2024,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Syria", iso3: "SYR", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Presidential",month:12},{year:1994,type:"Parliamentary",month:8},
      {year:1998,type:"Parliamentary",month:11},{year:1999,type:"Presidential",month:2},
      {year:2003,type:"Parliamentary",month:3},{year:2007,type:"Presidential",month:5},
      {year:2007,type:"Parliamentary",month:4},{year:2012,type:"Parliamentary",month:5},
      {year:2014,type:"Presidential",month:6},{year:2016,type:"Parliamentary",month:4},
      {year:2021,type:"Presidential",month:5}
    ]
  },
  {
    country: "Taiwan", iso3: "TWN", region: "Eastern Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:12},{year:1992,type:"Parliamentary",month:12},
      {year:1995,type:"Parliamentary",month:12},{year:1996,type:"Presidential",month:3},
      {year:1998,type:"Parliamentary",month:12},{year:2000,type:"Presidential",month:3},
      {year:2001,type:"Parliamentary",month:12},{year:2004,type:"Presidential",month:3},
      {year:2004,type:"Parliamentary",month:12},{year:2008,type:"Presidential",month:3},
      {year:2008,type:"Parliamentary",month:1},{year:2012,type:"Presidential",month:1},
      {year:2012,type:"Parliamentary",month:1},{year:2016,type:"Presidential",month:1},
      {year:2016,type:"Parliamentary",month:1},{year:2020,type:"Presidential",month:1},
      {year:2020,type:"Parliamentary",month:1},{year:2024,type:"Presidential",month:1},
      {year:2024,type:"Parliamentary",month:1}
    ]
  },
  {
    country: "Tajikistan", iso3: "TJK", region: "Central Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Presidential",month:11},{year:1994,type:"Presidential",month:11},
      {year:1995,type:"Parliamentary",month:2},{year:1999,type:"Presidential",month:11},
      {year:2000,type:"Parliamentary",month:2},{year:2005,type:"Parliamentary",month:2},
      {year:2006,type:"Presidential",month:11},{year:2010,type:"Parliamentary",month:2},
      {year:2013,type:"Presidential",month:11},{year:2015,type:"Parliamentary",month:3},
      {year:2020,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Thailand", iso3: "THA", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      // House of Representatives (lower house)
      {year:1992,type:"Parliamentary",month:3},{year:1992,type:"Parliamentary",month:9},
      {year:1995,type:"Parliamentary",month:7},{year:1996,type:"Parliamentary",month:11},
      // Senate (upper house — directly elected, separate from House)
      {year:2000,type:"Parliamentary",month:3},
      // House of Representatives (lower house)
      {year:2001,type:"Parliamentary",month:1},{year:2005,type:"Parliamentary",month:2},
      {year:2006,type:"Parliamentary",month:4},
      // Senate (upper house — directly elected, separate from House)
      {year:2006,type:"Parliamentary",month:4},
      // House of Representatives (lower house)
      {year:2007,type:"Parliamentary",month:12},
      {year:2011,type:"Parliamentary",month:7},{year:2014,type:"Parliamentary",month:2},
      {year:2019,type:"Parliamentary",month:3},{year:2023,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Timor-Leste", iso3: "TLS", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:2001,type:"Constituent Assembly",month:8},{year:2002,type:"Presidential",month:4},
      {year:2007,type:"Presidential",month:4},{year:2007,type:"Parliamentary",month:6},
      {year:2012,type:"Presidential",month:3},{year:2012,type:"Parliamentary",month:7},
      {year:2017,type:"Presidential",month:3},{year:2017,type:"Parliamentary",month:7},
      {year:2018,type:"Parliamentary",month:5},{year:2022,type:"Presidential",month:3},
      {year:2023,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Turkey", iso3: "TUR", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1995,type:"Parliamentary",month:12},
      {year:1999,type:"Parliamentary",month:4},{year:2002,type:"Parliamentary",month:11},
      {year:2007,type:"Parliamentary",month:7},{year:2011,type:"Parliamentary",month:6},
      {year:2014,type:"Presidential",month:8},{year:2015,type:"Parliamentary",month:6},
      {year:2015,type:"Parliamentary",month:11},{year:2018,type:"Presidential",month:6},
      {year:2018,type:"Parliamentary",month:6},{year:2023,type:"Presidential",month:5},
      {year:2023,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Turkmenistan", iso3: "TKM", region: "Central Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Presidential",month:6},{year:1994,type:"Parliamentary",month:12},
      {year:1999,type:"Parliamentary",month:12},{year:2004,type:"Parliamentary",month:12},
      {year:2007,type:"Presidential",month:2},{year:2008,type:"Parliamentary",month:12},
      {year:2012,type:"Presidential",month:2},{year:2013,type:"Parliamentary",month:12},
      {year:2017,type:"Presidential",month:2},{year:2018,type:"Parliamentary",month:3},
      {year:2022,type:"Presidential",month:3},{year:2023,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "United Arab Emirates", iso3: "ARE", region: "Western Asia", continent: "Asia",
    elections: [
      {year:2006,type:"Parliamentary",month:12},{year:2011,type:"Parliamentary",month:9},
      {year:2015,type:"Parliamentary",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Uzbekistan", iso3: "UZB", region: "Central Asia", continent: "Asia",
    elections: [
      {year:1991,type:"Presidential",month:12},{year:1994,type:"Parliamentary",month:12},
      {year:1999,type:"Parliamentary",month:12},{year:2000,type:"Presidential",month:1},
      {year:2004,type:"Parliamentary",month:12},{year:2007,type:"Presidential",month:12},
      {year:2009,type:"Parliamentary",month:12},{year:2014,type:"Parliamentary",month:12},
      {year:2015,type:"Presidential",month:3},{year:2019,type:"Parliamentary",month:12},
      {year:2021,type:"Presidential",month:10},{year:2023,type:"Presidential",month:7},
      {year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Vietnam", iso3: "VNM", region: "South-Eastern Asia", continent: "Asia",
    elections: [
      {year:1992,type:"Parliamentary",month:7},{year:1997,type:"Parliamentary",month:7},
      {year:2002,type:"Parliamentary",month:5},{year:2007,type:"Parliamentary",month:5},
      {year:2011,type:"Parliamentary",month:5},{year:2016,type:"Parliamentary",month:5},
      {year:2021,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Yemen", iso3: "YEM", region: "Western Asia", continent: "Asia",
    elections: [
      {year:1993,type:"Parliamentary",month:4},{year:1997,type:"Parliamentary",month:4},
      {year:1999,type:"Presidential",month:9},{year:2003,type:"Parliamentary",month:4},
      {year:2006,type:"Presidential",month:9}
    ]
  },

  // ── EUROPE ──────────────────────────────────────────
  {
    country: "Albania", iso3: "ALB", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:3},{year:1992,type:"Parliamentary",month:3},
      {year:1996,type:"Parliamentary",month:5},{year:1997,type:"Parliamentary",month:6},
      {year:2001,type:"Parliamentary",month:6},{year:2005,type:"Parliamentary",month:7},
      {year:2009,type:"Parliamentary",month:6},{year:2013,type:"Parliamentary",month:6},
      {year:2017,type:"Parliamentary",month:6},{year:2021,type:"Parliamentary",month:4},
      {year:2025,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Armenia", iso3: "ARM", region: "Western Asia", continent: "Europe",
    elections: [
      {year:1991,type:"Presidential",month:10},{year:1995,type:"Parliamentary",month:7},
      {year:1996,type:"Presidential",month:9},{year:1998,type:"Presidential",month:3},
      {year:1999,type:"Parliamentary",month:5},{year:2003,type:"Presidential",month:2},
      {year:2003,type:"Parliamentary",month:5},{year:2007,type:"Parliamentary",month:5},
      {year:2008,type:"Presidential",month:2},{year:2012,type:"Parliamentary",month:5},
      {year:2013,type:"Presidential",month:2},{year:2017,type:"Parliamentary",month:4},
      {year:2018,type:"Parliamentary",month:12},{year:2021,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Austria", iso3: "AUT", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:10},{year:1995,type:"Parliamentary",month:12},
      {year:1998,type:"Presidential",month:4},{year:1999,type:"Parliamentary",month:10},
      {year:2002,type:"Parliamentary",month:11},{year:2004,type:"Presidential",month:4},
      {year:2006,type:"Parliamentary",month:10},{year:2008,type:"Parliamentary",month:9},
      {year:2010,type:"Presidential",month:4},{year:2013,type:"Parliamentary",month:9},
      {year:2016,type:"Presidential",month:12},{year:2017,type:"Parliamentary",month:10},
      {year:2019,type:"Parliamentary",month:9},{year:2022,type:"Presidential",month:10},
      {year:2024,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Azerbaijan", iso3: "AZE", region: "Western Asia", continent: "Europe",
    elections: [
      {year:1992,type:"Presidential",month:6},{year:1993,type:"Presidential",month:10},
      {year:1995,type:"Parliamentary",month:11},{year:1998,type:"Presidential",month:10},
      {year:2000,type:"Parliamentary",month:11},{year:2003,type:"Presidential",month:10},
      {year:2005,type:"Parliamentary",month:11},{year:2008,type:"Presidential",month:10},
      {year:2010,type:"Parliamentary",month:11},{year:2013,type:"Presidential",month:10},
      {year:2015,type:"Parliamentary",month:11},{year:2018,type:"Presidential",month:4},
      {year:2020,type:"Parliamentary",month:2},{year:2024,type:"Presidential",month:2},
      {year:2024,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Belarus", iso3: "BLR", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Presidential",month:6},{year:1995,type:"Parliamentary",month:5},
      {year:2000,type:"Parliamentary",month:10},{year:2001,type:"Presidential",month:9},
      {year:2004,type:"Parliamentary",month:10},{year:2006,type:"Presidential",month:3},
      {year:2008,type:"Parliamentary",month:9},{year:2010,type:"Presidential",month:12},
      {year:2012,type:"Parliamentary",month:9},{year:2015,type:"Presidential",month:10},
      {year:2016,type:"Parliamentary",month:9},{year:2019,type:"Parliamentary",month:11},
      {year:2020,type:"Presidential",month:8},{year:2024,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Belgium", iso3: "BEL", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:11},{year:1995,type:"Parliamentary",month:5},
      {year:1999,type:"Parliamentary",month:6},{year:2003,type:"Parliamentary",month:5},
      {year:2007,type:"Parliamentary",month:6},{year:2010,type:"Parliamentary",month:6},
      {year:2014,type:"Parliamentary",month:5},{year:2019,type:"Parliamentary",month:5},
      {year:2024,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Bosnia and Herzegovina", iso3: "BIH", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1996,type:"Presidential",month:9},{year:1996,type:"Parliamentary",month:9},
      {year:1998,type:"Presidential",month:9},{year:1998,type:"Parliamentary",month:9},
      {year:2000,type:"Parliamentary",month:11},{year:2002,type:"Presidential",month:10},
      {year:2002,type:"Parliamentary",month:10},{year:2006,type:"Presidential",month:10},
      {year:2006,type:"Parliamentary",month:10},{year:2010,type:"Presidential",month:10},
      {year:2010,type:"Parliamentary",month:10},{year:2014,type:"Presidential",month:10},
      {year:2014,type:"Parliamentary",month:10},{year:2018,type:"Presidential",month:10},
      {year:2018,type:"Parliamentary",month:10},{year:2022,type:"Presidential",month:10},
      {year:2022,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Bulgaria", iso3: "BGR", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1992,type:"Presidential",month:1},
      {year:1994,type:"Parliamentary",month:12},{year:1996,type:"Presidential",month:10},
      {year:1997,type:"Parliamentary",month:4},{year:2001,type:"Parliamentary",month:6},
      {year:2001,type:"Presidential",month:11},{year:2005,type:"Parliamentary",month:6},
      {year:2006,type:"Presidential",month:10},{year:2009,type:"Parliamentary",month:7},
      {year:2011,type:"Presidential",month:10},{year:2013,type:"Parliamentary",month:5},
      {year:2014,type:"Parliamentary",month:10},{year:2016,type:"Presidential",month:11},
      {year:2017,type:"Parliamentary",month:3},{year:2021,type:"Parliamentary",month:4},
      {year:2021,type:"Presidential",month:11},{year:2021,type:"Parliamentary",month:7},
      {year:2021,type:"Parliamentary",month:11},{year:2022,type:"Parliamentary",month:10},
      {year:2023,type:"Parliamentary",month:4},{year:2024,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Croatia", iso3: "HRV", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Presidential",month:8},{year:1992,type:"Parliamentary",month:8},
      {year:1995,type:"Parliamentary",month:10},{year:1997,type:"Presidential",month:6},
      {year:2000,type:"Presidential",month:1},{year:2000,type:"Parliamentary",month:1},
      {year:2003,type:"Parliamentary",month:11},{year:2005,type:"Presidential",month:1},
      {year:2007,type:"Parliamentary",month:11},{year:2009,type:"Presidential",month:12},
      {year:2011,type:"Parliamentary",month:12},{year:2014,type:"Presidential",month:12},
      {year:2015,type:"Parliamentary",month:11},{year:2016,type:"Parliamentary",month:9},
      {year:2019,type:"Presidential",month:12},{year:2020,type:"Parliamentary",month:7},
      {year:2024,type:"Parliamentary",month:4},{year:2024,type:"Presidential",month:12}
    ]
  },
  {
    country: "Cyprus", iso3: "CYP", region: "Western Asia", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:5},{year:1993,type:"Presidential",month:2},
      {year:1996,type:"Parliamentary",month:5},{year:1998,type:"Presidential",month:2},
      {year:2001,type:"Parliamentary",month:5},{year:2003,type:"Presidential",month:2},
      {year:2006,type:"Parliamentary",month:5},{year:2008,type:"Presidential",month:2},
      {year:2011,type:"Parliamentary",month:5},{year:2013,type:"Presidential",month:2},
      {year:2016,type:"Parliamentary",month:5},{year:2018,type:"Presidential",month:1},
      {year:2021,type:"Parliamentary",month:5},{year:2023,type:"Presidential",month:2}
    ]
  },
  {
    country: "Czech Republic", iso3: "CZE", region: "Eastern Europe", continent: "Europe",
    elections: [
      // Chamber of Deputies (lower house)
      {year:1992,type:"Parliamentary",month:6},{year:1996,type:"Parliamentary",month:5},
      {year:1998,type:"Parliamentary",month:6},{year:2002,type:"Parliamentary",month:6},
      {year:2006,type:"Parliamentary",month:6},{year:2010,type:"Parliamentary",month:5},
      {year:2013,type:"Parliamentary",month:10},{year:2017,type:"Parliamentary",month:10},
      {year:2021,type:"Parliamentary",month:10},{year:2025,type:"Parliamentary",month:10},
      // Senate (upper house — 1/3 renewed every 2 years, held separately)
      {year:1996,type:"Parliamentary",month:11},{year:1998,type:"Parliamentary",month:11},
      {year:2000,type:"Parliamentary",month:11},{year:2002,type:"Parliamentary",month:10},
      {year:2004,type:"Parliamentary",month:11},{year:2006,type:"Parliamentary",month:10},
      {year:2008,type:"Parliamentary",month:10},{year:2010,type:"Parliamentary",month:10},
      {year:2012,type:"Parliamentary",month:10},{year:2014,type:"Parliamentary",month:10},
      {year:2016,type:"Parliamentary",month:10},{year:2018,type:"Parliamentary",month:10},
      {year:2020,type:"Parliamentary",month:10},{year:2022,type:"Parliamentary",month:9},
      {year:2024,type:"Parliamentary",month:9},
      // Presidential
      {year:2013,type:"Presidential",month:1},{year:2018,type:"Presidential",month:1},
      {year:2023,type:"Presidential",month:1}
    ]
  },
  {
    country: "Denmark", iso3: "DNK", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:9},{year:1998,type:"Parliamentary",month:3},
      {year:2001,type:"Parliamentary",month:11},{year:2005,type:"Parliamentary",month:2},
      {year:2007,type:"Parliamentary",month:11},{year:2011,type:"Parliamentary",month:9},
      {year:2015,type:"Parliamentary",month:6},{year:2019,type:"Parliamentary",month:6},
      {year:2022,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Estonia", iso3: "EST", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:9},{year:1992,type:"Presidential",month:10},
      {year:1995,type:"Parliamentary",month:3},{year:1999,type:"Parliamentary",month:3},
      {year:2003,type:"Parliamentary",month:3},{year:2007,type:"Parliamentary",month:3},
      {year:2011,type:"Parliamentary",month:3},{year:2015,type:"Parliamentary",month:3},
      {year:2019,type:"Parliamentary",month:3},{year:2023,type:"Parliamentary",month:3}
    ]
  },
  {
    country: "Finland", iso3: "FIN", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:3},{year:1994,type:"Presidential",month:1},
      {year:1995,type:"Parliamentary",month:3},{year:1999,type:"Parliamentary",month:3},
      {year:2000,type:"Presidential",month:1},{year:2003,type:"Parliamentary",month:3},
      {year:2006,type:"Presidential",month:1},{year:2007,type:"Parliamentary",month:3},
      {year:2011,type:"Parliamentary",month:4},{year:2012,type:"Presidential",month:1},
      {year:2015,type:"Parliamentary",month:4},{year:2018,type:"Presidential",month:1},
      {year:2019,type:"Parliamentary",month:4},{year:2023,type:"Parliamentary",month:4},
      {year:2024,type:"Presidential",month:1}
    ]
  },
  {
    country: "France", iso3: "FRA", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1993,type:"Parliamentary",month:3},{year:1995,type:"Presidential",month:4},
      {year:1997,type:"Parliamentary",month:5},{year:2002,type:"Presidential",month:4},
      {year:2002,type:"Parliamentary",month:6},{year:2007,type:"Presidential",month:4},
      {year:2007,type:"Parliamentary",month:6},{year:2012,type:"Presidential",month:4},
      {year:2012,type:"Parliamentary",month:6},{year:2017,type:"Presidential",month:4},
      {year:2017,type:"Parliamentary",month:6},{year:2022,type:"Presidential",month:4},
      {year:2022,type:"Parliamentary",month:6},{year:2024,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Georgia", iso3: "GEO", region: "Western Asia", continent: "Europe",
    elections: [
      {year:1991,type:"Presidential",month:5},{year:1992,type:"Parliamentary",month:10},
      {year:1995,type:"Presidential",month:11},{year:1995,type:"Parliamentary",month:11},
      {year:1999,type:"Parliamentary",month:10},{year:2000,type:"Presidential",month:4},
      {year:2003,type:"Parliamentary",month:11},{year:2004,type:"Presidential",month:1},
      {year:2004,type:"Parliamentary",month:3},{year:2008,type:"Presidential",month:1},
      {year:2008,type:"Parliamentary",month:5},{year:2012,type:"Parliamentary",month:10},
      {year:2013,type:"Presidential",month:10},{year:2016,type:"Parliamentary",month:10},
      {year:2018,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:10},
      {year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Germany", iso3: "DEU", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:10},{year:1998,type:"Parliamentary",month:9},
      {year:2002,type:"Parliamentary",month:9},{year:2005,type:"Parliamentary",month:9},
      {year:2009,type:"Parliamentary",month:9},{year:2013,type:"Parliamentary",month:9},
      {year:2017,type:"Parliamentary",month:9},{year:2021,type:"Parliamentary",month:9},
      {year:2025,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Greece", iso3: "GRC", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1993,type:"Parliamentary",month:10},{year:1996,type:"Parliamentary",month:9},
      {year:2000,type:"Parliamentary",month:4},{year:2004,type:"Parliamentary",month:3},
      {year:2007,type:"Parliamentary",month:9},{year:2009,type:"Parliamentary",month:10},
      {year:2012,type:"Parliamentary",month:5},{year:2012,type:"Parliamentary",month:6},
      {year:2015,type:"Parliamentary",month:1},{year:2015,type:"Parliamentary",month:9},
      {year:2019,type:"Parliamentary",month:7},{year:2023,type:"Parliamentary",month:5},
      {year:2023,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Hungary", iso3: "HUN", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:5},{year:1998,type:"Parliamentary",month:5},
      {year:2002,type:"Parliamentary",month:4},{year:2006,type:"Parliamentary",month:4},
      {year:2010,type:"Parliamentary",month:4},{year:2014,type:"Parliamentary",month:4},
      {year:2018,type:"Parliamentary",month:4},{year:2022,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Iceland", iso3: "ISL", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:4},{year:1995,type:"Parliamentary",month:4},
      {year:1996,type:"Presidential",month:6},{year:1999,type:"Parliamentary",month:5},
      {year:2003,type:"Parliamentary",month:5},{year:2004,type:"Presidential",month:6},
      {year:2007,type:"Parliamentary",month:5},{year:2009,type:"Parliamentary",month:4},
      {year:2012,type:"Presidential",month:6},{year:2013,type:"Parliamentary",month:4},
      {year:2016,type:"Presidential",month:6},{year:2016,type:"Parliamentary",month:10},
      {year:2017,type:"Parliamentary",month:10},{year:2021,type:"Parliamentary",month:9},
      {year:2024,type:"Presidential",month:6},{year:2025,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "Ireland", iso3: "IRL", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:11},{year:1997,type:"Presidential",month:10},
      {year:1997,type:"Parliamentary",month:6},{year:2002,type:"Parliamentary",month:5},
      {year:2007,type:"Parliamentary",month:5},{year:2011,type:"Presidential",month:10},
      {year:2011,type:"Parliamentary",month:2},{year:2016,type:"Parliamentary",month:2},
      {year:2018,type:"Presidential",month:10},{year:2020,type:"Parliamentary",month:2},
      {year:2024,type:"Parliamentary",month:11},{year:2025,type:"Presidential",month:11}
    ]
  },
  {
    country: "Italy", iso3: "ITA", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:4},{year:1994,type:"Parliamentary",month:3},
      {year:1996,type:"Parliamentary",month:4},{year:2001,type:"Parliamentary",month:5},
      {year:2006,type:"Parliamentary",month:4},{year:2008,type:"Parliamentary",month:4},
      {year:2013,type:"Parliamentary",month:2},{year:2018,type:"Parliamentary",month:3},
      {year:2022,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Kosovo", iso3: "XKX", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:2001,type:"Parliamentary",month:11},{year:2004,type:"Parliamentary",month:10},
      {year:2007,type:"Parliamentary",month:11},{year:2010,type:"Parliamentary",month:12},
      {year:2014,type:"Parliamentary",month:6},{year:2017,type:"Parliamentary",month:6},
      {year:2019,type:"Parliamentary",month:10},{year:2021,type:"Parliamentary",month:2}
    ]
  },
  {
    country: "Latvia", iso3: "LVA", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1993,type:"Parliamentary",month:6},{year:1995,type:"Parliamentary",month:9},
      {year:1998,type:"Parliamentary",month:10},{year:1999,type:"Presidential",month:6},
      {year:2002,type:"Parliamentary",month:10},{year:2006,type:"Parliamentary",month:10},
      {year:2010,type:"Parliamentary",month:10},{year:2011,type:"Parliamentary",month:9},
      {year:2014,type:"Parliamentary",month:10},{year:2018,type:"Parliamentary",month:10},
      {year:2022,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Lithuania", iso3: "LTU", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:10},{year:1993,type:"Presidential",month:2},
      {year:1996,type:"Parliamentary",month:10},{year:1997,type:"Presidential",month:12},
      {year:2000,type:"Parliamentary",month:10},{year:2002,type:"Presidential",month:12},
      {year:2004,type:"Presidential",month:6},{year:2004,type:"Parliamentary",month:10},
      {year:2008,type:"Parliamentary",month:10},{year:2009,type:"Presidential",month:5},
      {year:2012,type:"Parliamentary",month:10},{year:2014,type:"Presidential",month:5},
      {year:2016,type:"Parliamentary",month:10},{year:2019,type:"Presidential",month:5},
      {year:2020,type:"Parliamentary",month:10},{year:2024,type:"Presidential",month:5},
      {year:2024,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Luxembourg", iso3: "LUX", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:6},{year:1999,type:"Parliamentary",month:6},
      {year:2004,type:"Parliamentary",month:6},{year:2009,type:"Parliamentary",month:6},
      {year:2013,type:"Parliamentary",month:10},{year:2018,type:"Parliamentary",month:10},
      {year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Moldova", iso3: "MDA", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:2},{year:1996,type:"Presidential",month:11},
      {year:1998,type:"Parliamentary",month:3},{year:2001,type:"Parliamentary",month:2},
      {year:2005,type:"Parliamentary",month:3},{year:2009,type:"Parliamentary",month:4},
      {year:2009,type:"Parliamentary",month:7},{year:2010,type:"Parliamentary",month:11},
      {year:2014,type:"Parliamentary",month:11},{year:2016,type:"Presidential",month:10},
      {year:2019,type:"Parliamentary",month:2},{year:2020,type:"Presidential",month:11},
      {year:2021,type:"Parliamentary",month:7},{year:2024,type:"Presidential",month:10}
    ]
  },
  {
    country: "Montenegro", iso3: "MNE", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:2002,type:"Presidential",month:12},{year:2003,type:"Presidential",month:2},
      {year:2003,type:"Parliamentary",month:10},{year:2006,type:"Parliamentary",month:9},
      {year:2008,type:"Presidential",month:4},{year:2009,type:"Parliamentary",month:3},
      {year:2012,type:"Parliamentary",month:10},{year:2013,type:"Presidential",month:4},
      {year:2016,type:"Parliamentary",month:10},{year:2018,type:"Presidential",month:4},
      {year:2020,type:"Parliamentary",month:8},{year:2023,type:"Presidential",month:3},
      {year:2023,type:"Parliamentary",month:6}
    ]
  },
  {
    country: "Netherlands", iso3: "NLD", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Parliamentary",month:5},{year:1998,type:"Parliamentary",month:5},
      {year:2002,type:"Parliamentary",month:5},{year:2003,type:"Parliamentary",month:1},
      {year:2006,type:"Parliamentary",month:11},{year:2010,type:"Parliamentary",month:6},
      {year:2012,type:"Parliamentary",month:9},{year:2017,type:"Parliamentary",month:3},
      {year:2021,type:"Parliamentary",month:3},{year:2023,type:"Parliamentary",month:11}
    ]
  },
  {
    country: "North Macedonia", iso3: "MKD", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1994,type:"Presidential",month:10},{year:1994,type:"Parliamentary",month:10},
      {year:1998,type:"Parliamentary",month:10},{year:1999,type:"Presidential",month:10},
      {year:2002,type:"Parliamentary",month:9},{year:2004,type:"Presidential",month:4},
      {year:2006,type:"Parliamentary",month:7},{year:2008,type:"Parliamentary",month:6},
      {year:2009,type:"Presidential",month:3},{year:2011,type:"Parliamentary",month:6},
      {year:2014,type:"Presidential",month:4},{year:2014,type:"Parliamentary",month:4},
      {year:2016,type:"Parliamentary",month:12},{year:2019,type:"Presidential",month:4},
      {year:2020,type:"Parliamentary",month:7},{year:2024,type:"Presidential",month:4},
      {year:2024,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Norway", iso3: "NOR", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1993,type:"Parliamentary",month:9},{year:1997,type:"Parliamentary",month:9},
      {year:2001,type:"Parliamentary",month:9},{year:2005,type:"Parliamentary",month:9},
      {year:2009,type:"Parliamentary",month:9},{year:2013,type:"Parliamentary",month:9},
      {year:2017,type:"Parliamentary",month:9},{year:2021,type:"Parliamentary",month:9},
      {year:2025,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Poland", iso3: "POL", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1993,type:"Parliamentary",month:9},
      {year:1995,type:"Presidential",month:11},{year:1997,type:"Parliamentary",month:9},
      {year:2000,type:"Presidential",month:10},{year:2001,type:"Parliamentary",month:9},
      {year:2005,type:"Presidential",month:10},{year:2005,type:"Parliamentary",month:9},
      {year:2007,type:"Parliamentary",month:10},{year:2010,type:"Presidential",month:6},
      {year:2011,type:"Parliamentary",month:10},{year:2015,type:"Presidential",month:5},
      {year:2015,type:"Parliamentary",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2020,type:"Presidential",month:6},{year:2023,type:"Parliamentary",month:10},
      {year:2025,type:"Presidential",month:5}
    ]
  },
  {
    country: "Portugal", iso3: "PRT", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1995,type:"Parliamentary",month:10},
      {year:1996,type:"Presidential",month:1},{year:1999,type:"Parliamentary",month:10},
      {year:2001,type:"Presidential",month:1},{year:2002,type:"Parliamentary",month:3},
      {year:2005,type:"Parliamentary",month:2},{year:2006,type:"Presidential",month:1},
      {year:2009,type:"Parliamentary",month:9},{year:2011,type:"Presidential",month:1},
      {year:2011,type:"Parliamentary",month:6},{year:2015,type:"Parliamentary",month:10},
      {year:2016,type:"Presidential",month:1},{year:2019,type:"Parliamentary",month:10},
      {year:2021,type:"Presidential",month:1},{year:2022,type:"Parliamentary",month:1},
      {year:2024,type:"Parliamentary",month:3},{year:2026,type:"Presidential",month:1}
    ]
  },
  {
    country: "Romania", iso3: "ROU", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Presidential",month:9},{year:1992,type:"Parliamentary",month:9},
      {year:1996,type:"Presidential",month:11},{year:1996,type:"Parliamentary",month:11},
      {year:2000,type:"Presidential",month:11},{year:2000,type:"Parliamentary",month:11},
      {year:2004,type:"Presidential",month:11},{year:2004,type:"Parliamentary",month:11},
      {year:2008,type:"Parliamentary",month:11},{year:2009,type:"Presidential",month:11},
      {year:2012,type:"Parliamentary",month:12},{year:2014,type:"Presidential",month:11},
      {year:2016,type:"Parliamentary",month:12},{year:2019,type:"Presidential",month:11},
      {year:2020,type:"Parliamentary",month:12},{year:2024,type:"Presidential",month:11},
      {year:2024,type:"Parliamentary",month:12},{year:2025,type:"Presidential",month:5}
    ]
  },
  {
    country: "Russia", iso3: "RUS", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Presidential",month:6},{year:1993,type:"Parliamentary",month:12},
      {year:1995,type:"Parliamentary",month:12},{year:1996,type:"Presidential",month:6},
      {year:1999,type:"Parliamentary",month:12},{year:2000,type:"Presidential",month:3},
      {year:2003,type:"Parliamentary",month:12},{year:2004,type:"Presidential",month:3},
      {year:2007,type:"Parliamentary",month:12},{year:2008,type:"Presidential",month:3},
      {year:2011,type:"Parliamentary",month:12},{year:2012,type:"Presidential",month:3},
      {year:2016,type:"Parliamentary",month:9},{year:2018,type:"Presidential",month:3},
      {year:2021,type:"Parliamentary",month:9},{year:2024,type:"Presidential",month:3}
    ]
  },
  {
    country: "Serbia", iso3: "SRB", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Presidential",month:12},{year:1992,type:"Parliamentary",month:12},
      {year:1993,type:"Parliamentary",month:12},{year:1997,type:"Presidential",month:9},
      {year:1997,type:"Parliamentary",month:9},{year:2000,type:"Presidential",month:9},
      {year:2000,type:"Parliamentary",month:12},{year:2002,type:"Presidential",month:9},
      {year:2003,type:"Presidential",month:11},{year:2003,type:"Parliamentary",month:12},
      {year:2004,type:"Presidential",month:6},{year:2007,type:"Presidential",month:1},
      {year:2007,type:"Parliamentary",month:1},{year:2008,type:"Parliamentary",month:5},
      {year:2012,type:"Presidential",month:5},{year:2012,type:"Parliamentary",month:5},
      {year:2014,type:"Parliamentary",month:3},{year:2016,type:"Parliamentary",month:4},
      {year:2017,type:"Presidential",month:4},{year:2020,type:"Parliamentary",month:6},
      {year:2022,type:"Presidential",month:4},{year:2022,type:"Parliamentary",month:4},
      {year:2023,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "Slovakia", iso3: "SVK", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1994,type:"Parliamentary",month:9},
      {year:1998,type:"Parliamentary",month:9},{year:1999,type:"Presidential",month:5},
      {year:2002,type:"Parliamentary",month:9},{year:2004,type:"Presidential",month:4},
      {year:2006,type:"Parliamentary",month:6},{year:2009,type:"Presidential",month:3},
      {year:2010,type:"Parliamentary",month:6},{year:2012,type:"Parliamentary",month:3},
      {year:2014,type:"Presidential",month:3},{year:2016,type:"Parliamentary",month:3},
      {year:2019,type:"Presidential",month:3},{year:2020,type:"Parliamentary",month:2},
      {year:2023,type:"Parliamentary",month:9},{year:2024,type:"Presidential",month:3}
    ]
  },
  {
    country: "Slovenia", iso3: "SVN", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Presidential",month:12},{year:1992,type:"Parliamentary",month:12},
      {year:1996,type:"Parliamentary",month:11},{year:1997,type:"Presidential",month:11},
      {year:2000,type:"Parliamentary",month:10},{year:2002,type:"Presidential",month:11},
      {year:2004,type:"Parliamentary",month:10},{year:2007,type:"Presidential",month:10},
      {year:2008,type:"Parliamentary",month:9},{year:2011,type:"Parliamentary",month:12},
      {year:2012,type:"Presidential",month:11},{year:2014,type:"Parliamentary",month:7},
      {year:2017,type:"Presidential",month:10},{year:2018,type:"Parliamentary",month:6},
      {year:2022,type:"Presidential",month:10},{year:2022,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Spain", iso3: "ESP", region: "Southern Europe", continent: "Europe",
    elections: [
      {year:1993,type:"Parliamentary",month:6},{year:1996,type:"Parliamentary",month:3},
      {year:2000,type:"Parliamentary",month:3},{year:2004,type:"Parliamentary",month:3},
      {year:2008,type:"Parliamentary",month:3},{year:2011,type:"Parliamentary",month:11},
      {year:2015,type:"Parliamentary",month:12},{year:2016,type:"Parliamentary",month:6},
      {year:2019,type:"Parliamentary",month:4},{year:2019,type:"Parliamentary",month:11},
      {year:2023,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "Sweden", iso3: "SWE", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:9},{year:1994,type:"Parliamentary",month:9},
      {year:1998,type:"Parliamentary",month:9},{year:2002,type:"Parliamentary",month:9},
      {year:2006,type:"Parliamentary",month:9},{year:2010,type:"Parliamentary",month:9},
      {year:2014,type:"Parliamentary",month:9},{year:2018,type:"Parliamentary",month:9},
      {year:2022,type:"Parliamentary",month:9}
    ]
  },
  {
    country: "Switzerland", iso3: "CHE", region: "Western Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Parliamentary",month:10},{year:1995,type:"Parliamentary",month:10},
      {year:1999,type:"Parliamentary",month:10},{year:2003,type:"Parliamentary",month:10},
      {year:2007,type:"Parliamentary",month:10},{year:2011,type:"Parliamentary",month:10},
      {year:2015,type:"Parliamentary",month:10},{year:2019,type:"Parliamentary",month:10},
      {year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Ukraine", iso3: "UKR", region: "Eastern Europe", continent: "Europe",
    elections: [
      {year:1991,type:"Presidential",month:12},{year:1994,type:"Presidential",month:6},
      {year:1994,type:"Parliamentary",month:3},{year:1998,type:"Parliamentary",month:3},
      {year:1999,type:"Presidential",month:10},{year:2002,type:"Parliamentary",month:3},
      {year:2004,type:"Presidential",month:10},{year:2006,type:"Parliamentary",month:3},
      {year:2007,type:"Parliamentary",month:9},{year:2010,type:"Presidential",month:1},
      {year:2012,type:"Parliamentary",month:10},{year:2014,type:"Presidential",month:5},
      {year:2014,type:"Parliamentary",month:10},{year:2019,type:"Presidential",month:3},
      {year:2019,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "United Kingdom", iso3: "GBR", region: "Northern Europe", continent: "Europe",
    elections: [
      {year:1992,type:"Parliamentary",month:4},{year:1997,type:"Parliamentary",month:5},
      {year:2001,type:"Parliamentary",month:6},{year:2005,type:"Parliamentary",month:5},
      {year:2010,type:"Parliamentary",month:5},{year:2015,type:"Parliamentary",month:5},
      {year:2017,type:"Parliamentary",month:6},{year:2019,type:"Parliamentary",month:12},
      {year:2024,type:"Parliamentary",month:7}
    ]
  },

  // ── OCEANIA ──────────────────────────────────────────
  {
    country: "Australia", iso3: "AUS", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1993,type:"Parliamentary",month:3},{year:1996,type:"Parliamentary",month:3},
      {year:1998,type:"Parliamentary",month:10},{year:2001,type:"Parliamentary",month:11},
      {year:2004,type:"Parliamentary",month:10},{year:2007,type:"Parliamentary",month:11},
      {year:2010,type:"Parliamentary",month:8},{year:2013,type:"Parliamentary",month:9},
      {year:2016,type:"Parliamentary",month:7},{year:2019,type:"Parliamentary",month:5},
      {year:2022,type:"Parliamentary",month:5},{year:2025,type:"Parliamentary",month:5}
    ]
  },
  {
    country: "Fiji", iso3: "FJI", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1992,type:"Parliamentary",month:5},{year:1994,type:"Parliamentary",month:2},
      {year:1999,type:"Parliamentary",month:5},{year:2001,type:"Parliamentary",month:8},
      {year:2006,type:"Parliamentary",month:5},{year:2014,type:"Parliamentary",month:9},
      {year:2018,type:"Parliamentary",month:11},{year:2022,type:"Parliamentary",month:12}
    ]
  },
  {
    country: "New Zealand", iso3: "NZL", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1993,type:"Parliamentary",month:11},{year:1996,type:"Parliamentary",month:10},
      {year:1999,type:"Parliamentary",month:11},{year:2002,type:"Parliamentary",month:7},
      {year:2005,type:"Parliamentary",month:9},{year:2008,type:"Parliamentary",month:11},
      {year:2011,type:"Parliamentary",month:11},{year:2014,type:"Parliamentary",month:9},
      {year:2017,type:"Parliamentary",month:9},{year:2020,type:"Parliamentary",month:10},
      {year:2023,type:"Parliamentary",month:10}
    ]
  },
  {
    country: "Papua New Guinea", iso3: "PNG", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1992,type:"Parliamentary",month:6},{year:1997,type:"Parliamentary",month:6},
      {year:2002,type:"Parliamentary",month:6},{year:2007,type:"Parliamentary",month:6},
      {year:2012,type:"Parliamentary",month:6},{year:2017,type:"Parliamentary",month:6},
      {year:2022,type:"Parliamentary",month:7}
    ]
  },
  {
    country: "Solomon Islands", iso3: "SLB", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1993,type:"Parliamentary",month:5},{year:1997,type:"Parliamentary",month:8},
      {year:2001,type:"Parliamentary",month:12},{year:2006,type:"Parliamentary",month:4},
      {year:2010,type:"Parliamentary",month:8},{year:2014,type:"Parliamentary",month:11},
      {year:2019,type:"Parliamentary",month:4},{year:2024,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Vanuatu", iso3: "VUT", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1991,type:"Parliamentary",month:12},{year:1995,type:"Parliamentary",month:11},
      {year:1998,type:"Parliamentary",month:3},{year:2002,type:"Parliamentary",month:5},
      {year:2004,type:"Parliamentary",month:7},{year:2008,type:"Parliamentary",month:9},
      {year:2012,type:"Parliamentary",month:10},{year:2016,type:"Parliamentary",month:1},
      {year:2020,type:"Parliamentary",month:3},{year:2025,type:"Parliamentary",month:1}
    ]
  },
  {
    country: "Samoa", iso3: "WSM", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1991,type:"Parliamentary",month:4},{year:1996,type:"Parliamentary",month:4},
      {year:2001,type:"Parliamentary",month:3},{year:2006,type:"Parliamentary",month:3},
      {year:2011,type:"Parliamentary",month:3},{year:2016,type:"Parliamentary",month:3},
      {year:2021,type:"Parliamentary",month:4}
    ]
  },
  {
    country: "Tonga", iso3: "TON", region: "Oceania", continent: "Oceania",
    elections: [
      {year:1993,type:"Parliamentary",month:2},{year:1996,type:"Parliamentary",month:1},
      {year:1999,type:"Parliamentary",month:3},{year:2002,type:"Parliamentary",month:3},
      {year:2005,type:"Parliamentary",month:3},{year:2008,type:"Parliamentary",month:4},
      {year:2010,type:"Parliamentary",month:11},{year:2014,type:"Parliamentary",month:11},
      {year:2017,type:"Parliamentary",month:11},{year:2021,type:"Parliamentary",month:11},
      {year:2024,type:"Parliamentary",month:11}
    ]
  }
];
