Sure! Here's a clean, professional `README.md` version without emojis, styled for GitHub formatting:

---

# Scatterplot Graph Visualization – FreeCodeCamp D3 Project

## Objective

Build an interactive scatterplot graph using D3.js that meets all the user stories outlined in FreeCodeCamp’s [Data Visualization Certification project](https://scatterplot-graph.freecodecamp.rocks). The chart visualizes cyclist performance data, highlighting doping allegations.

## Features

* Interactive scatterplot showing cyclist times over the years
* Tooltip displaying detailed information on hover
* X and Y axes created using D3’s axis generators
* Ticks on axes automatically generated to align with data
* Dots representing data points with custom styling and alignment
* Color-coding to distinguish cyclists with doping allegations
* Legend explaining color meanings
* Fully passes all FreeCodeCamp test suite user stories

## How I Built It

1. **Fetched JSON data** from the provided dataset URL.
2. **Parsed data** to handle time and date formatting using `d3.timeParse` and `Date` objects.
3. **Created an SVG canvas** using D3 with defined margins and dimensions.
4. **Built scales**:

   * X-axis for years (linear scale)
   * Y-axis for time in minutes (time scale)
5. **Rendered data points** as SVG `circle` elements with appropriate `data-xvalue` and `data-yvalue` attributes.
6. **Implemented tooltips** using mouse events for interactivity.
7. **Added a legend** with `id="legend"` to explain color differences.
8. **Styled the chart** using external CSS for layout, font, hover states, and tooltip positioning.

## Code Structure

* `index.html`: Main HTML file linking CSS, D3, and JavaScript.
* `styles.css`: Custom styles for layout, chart elements, and interactivity.
* `script.js`: Handles data fetching, D3 visualization logic, and interactivity.

## Data Source

[cyclist-data.json](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json)

Each entry includes:

* `Year` and `Time`
* `Name` and `Nationality`
* Optional `Doping` allegations text

## Live Demo

You can view the live version of this project here:
https://visualize-data-with-a-bar-chart.vercel.app/

