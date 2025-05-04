
# Visualize Data with a Bar Chart – FreeCodeCamp D3 Project

## Objective

Build an interactive bar chart using D3.js that visualizes the Gross Domestic Product (GDP) of the United States over time. This project meets all the user stories defined in FreeCodeCamp’s Data Visualization certification.

[Live Demo](https://visualize-data-with-a-bar-chart.vercel.app/)

## Features

* Responsive bar chart visualizing US GDP from 1947 to 2015
* Interactive tooltip that displays the year and GDP on hover
* X-axis and Y-axis generated with `d3.axisBottom()` and `d3.axisLeft()`
* Each bar element corresponds to a data point with appropriate attributes
* Fully styled with custom CSS
* Passes all required FreeCodeCamp user stories

## How It Was Built

1. **Fetched the dataset** from the provided FreeCodeCamp JSON source.
2. **Parsed the dates** using D3’s `d3.timeParse()` to ensure proper scaling on the x-axis.
3. **Set up the SVG canvas** using margins, width, and height.
4. **Created D3 scales**:

   * `xScale`: a time scale mapping dates to horizontal positions
   * `yScale`: a linear scale mapping GDP values to vertical bar heights
5. **Appended axes** to the SVG using `d3.axisBottom` and `d3.axisLeft`.
6. **Rendered bars** (`<rect>`) for each data point with proper positioning and scaling.
7. **Enabled tooltips** using mouse events and dynamically updated content and position.
8. **Styled the chart** using CSS for layout, interactivity, and color transitions.

## Code Structure

* `index.html`: Contains the main structure, chart container, and script/CSS links.
* `styles.css`: Defines font, spacing, bar colors, hover effects, and tooltip styling.
* `script.js`: Handles data fetching, parsing, SVG and axis setup, rendering, and interactivity.

## Data Source

Data is fetched from FreeCodeCamp's dataset:

[https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json](https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json)

Each entry is an array with:

* A date string (e.g., `"1947-01-01"`)
* A GDP value in billions of dollars (e.g., `243.1`)



## Live Demo

[https://visualize-data-with-a-bar-chart.vercel.app/](https://visualize-data-with-a-bar-chart.vercel.app/)



