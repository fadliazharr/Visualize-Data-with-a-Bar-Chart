document.addEventListener('DOMContentLoaded', function() {
  const url = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json';

  fetch(url)
    .then(response => response.json())
    .then(data => {
      createChart(data.data);
    })
    .catch(error => console.error('Error loading data:', error));

  function createChart(dataset) {
    const margin = { top: 60, right: 30, bottom: 70, left: 60 };
    const width = 900 - margin.left - margin.right;
    const height = 500 - margin.top - margin.bottom;

    // Clear previous chart if any
    d3.select('#container').html('');

    // Create SVG container
    const svg = d3.select('#container')
      .append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left}, ${margin.top})`);

    // Parse dates and values
    const parseTime = d3.timeParse("%Y-%m-%d");
    dataset.forEach(d => {
      d.date = parseTime(d[0]);
      d.value = d[1];
    });

    // Scales
    const xScale = d3.scaleTime()
      .domain(d3.extent(dataset, d => d.date))
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain([0, d3.max(dataset, d => d.value)])
      .range([height, 0]);

    // Axes
    const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear.every(5));
    const yAxis = d3.axisLeft(yScale);

    svg.append('g')
      .attr('id', 'x-axis')
      .attr('transform', `translate(0, ${height})`)
      .call(xAxis);

    svg.append('g')
      .attr('id', 'y-axis')
      .call(yAxis);

    // Bars
    svg.selectAll('.bar')
      .data(dataset)
      .enter()
      .append('rect')
      .attr('class', 'bar')
      .attr('data-date', d => d[0])
      .attr('data-gdp', d => d[1])
      .attr('x', d => xScale(d.date))
      .attr('y', d => yScale(d.value))
      .attr('width', width / dataset.length)
      .attr('height', d => height - yScale(d.value))
      .on('mouseover', function(event, d) {
        const date = d.date;
        const year = date.getFullYear();
        let quarter;

        switch (date.getMonth()) {
          case 0: quarter = 'Q1'; break;
          case 3: quarter = 'Q2'; break;
          case 6: quarter = 'Q3'; break;
          case 9: quarter = 'Q4'; break;
        }

        d3.select('#tooltip')
          .attr('data-date', d[0])
          .html(`${year} ${quarter}<br>$${d[1]} Billion`)
          .style('left', `${event.pageX + 10}px`)
          .style('top', `${event.pageY - 28}px`)
          .style('opacity', 0.9);
      })
      .on('mouseout', function() {
        d3.select('#tooltip').style('opacity', 0);
      });
  }
});
