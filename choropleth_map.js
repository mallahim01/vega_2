var vg_1 = "choropleth_map.json";
vegaEmbed("#choropleth_map", vg_1).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);

d3.csv("world_population.csv").then(data => {
    console.log("Loaded data:", data);
});
