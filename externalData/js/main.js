var svg = d3.select("#chart-area")
    .append("svg")
    .attr("width", "1400")
    .attr("height", "400");

d3.csv("data/Balance.csv").then(function(data){
    console.log(data);

    data.forEach(function(d) {
        d.balance = +d.balance;
    });

    var rects = svg.selectAll("rect")
            .data(data)
        .enter().append("rect")
            .attr("y", 0)
            .attr("x", function(d, i){
                return (i * 1.2);
            })
            .attr("width", 1)
            .attr("height", function(d){
                return d.balance*0.2;
            })
            .attr("fill", function(d) {
                return "grey";
            });

})