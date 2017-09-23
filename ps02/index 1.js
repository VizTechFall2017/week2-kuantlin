var svg = d3.select('svg');

var clicked = false;

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 500)
    .attr('r', 450)
    .attr('class', 'circle 1')
    .style('fill', 'white')
    .style('stroke', 'black')
    .style('stroke-width', '15');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 500)
    .attr('r', 350)
    .attr('class', 'circle 2')
    .style('fill', 'white')
    .style('stroke', 'black')
    .style('stroke-width', '10');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 325)
    .attr('r', 75)
    .attr('class', 'circle 3')
    .style('fill', 'darkred');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 675)
    .attr('r', 75)
    .attr('class', 'circle 3')
    .style('fill', 'darkred');

svg.append('circle')
    .attr('cx', 325)
    .attr('cy', 500)
    .attr('r', 75)
    .attr('class', 'circle 3')
    .style('fill', 'darkred');

svg.append('circle')
    .attr('cx', 675)
    .attr('cy', 500)
    .attr('r', 75)
    .attr('class', 'circle 3')
    .style('fill', 'darkred');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 150)
    .attr('r', 100)
    .attr('class', 'circle 4')
    .style('fill', 'darkblue');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 850)
    .attr('r', 100)
    .attr('class', 'circle 4')
    .style('fill', 'darkblue');

svg.append('circle')
    .attr('cx', 850)
    .attr('cy', 500)
    .attr('r', 100)
    .attr('class', 'circle 4')
    .style('fill', 'darkblue');

svg.append('circle')
    .attr('cx', 150)
    .attr('cy', 500)
    .attr('r', 100)
    .attr('class', 'circle 4')
    .style('fill', 'darkblue');

svg.append('circle')
    .attr('cx', 275)
    .attr('cy', 275)
    .attr('r', 135)
    .attr('class', 'circle 5')
    .style('fill', 'lightblue')
    .style('stroke-width', 10)
    .style('stroke', 'black');

svg.append('circle')
    .attr('cx', 275)
    .attr('cy', 725)
    .attr('r', 135)
    .attr('class', 'circle 5')
    .style('fill', 'lightblue')
    .style('stroke-width', 10)
    .style('stroke', 'black');

svg.append('circle')
    .attr('cx', 725)
    .attr('cy', 275)
    .attr('r', 135)
    .attr('class', 'circle 5')
    .style('fill', 'lightblue')
    .style('stroke-width', 10)
    .style('stroke', 'black');

svg.append('circle')
    .attr('cx', 725)
    .attr('cy', 725)
    .attr('r', 135)
    .attr('class', 'circle 5')
    .style('fill', 'lightblue')
    .style('stroke-width', 10)
    .style('stroke', 'black');

svg.append('circle')
    .attr('cx', 500)
    .attr('cy', 500)
    .attr('r', 175)
    .attr('class', 'circle 6')
    .style('fill', 'lightgreen')
    .style('stroke', 'black')
    .style('stroke-width', '10')
    .style('opacity',0.5)
    .on('click', function(d){
        if (clicked == false){
            d3.select(this).style('fill', 'orange').transition().attr('r', 350);
            clicked = true;
        }
        else{
            d3.select(this).style('fill', 'purple').transition().attr('r', 175);
            clicked = false;
        }

    });
