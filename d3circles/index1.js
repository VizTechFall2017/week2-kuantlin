console.log('here');

//var indexCard = d3.select('svg');

var indexCard = d3.select('body').append('svg')
    .attr('width', 600)
    .attr('height', 400);

var clicked = true;

var circle1 = indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 200)
    .attr('r', 10)
    .attr('fill', 'blue')
    .on('click',function(d){
        if(clicked==true) {
            //do something
            d3.select(this).attr('fill', 'orange').transition().attr('r', 50);
            clicked = false;
        }
        else {   //if clikced ==fale
            //do something else
            d3.select(this).attr('fill', 'blue').transition().attr('r', 10);
            clicked = true;
        }

        console.log(clicked);
    })

    .on('mouseover', function(d){
        d3.select(this).attr('stroke','red')
            .attr('stroke-width',5)
    })
    .on('mouseout', function(d){
        d3.select(this).attr('stroke','green')
            .attr('stroke-width',5)
    });

indexCard.append('rect')
    .attr('x',100)
    .attr('y',150)
    .attr('width',20)
    .attr('height',20);


indexCard.append('line')
    .attr('x1',10)
    .attr('x2',20)
    .attr('y1',150)
    .attr('y2',250)
    .attr('stroke','green');


circle1.attr('stroke', 'purple')

indexCard.append('circle')
    .attr('cx', 250)
    .attr('cy', 250)
    .attr('r', 10)
    .attr('fill', 'green');

indexCard.append('circle')
    .attr('cx', 200)
    .attr('cy', 200)
    .attr('r', 10)
    .attr('fill', 'red');