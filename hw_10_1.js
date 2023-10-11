
var vg_0 = "choropleth_map.json";
vegaEmbed("#choropleth_map", vg_0).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);




var vg_0 = "map_aus.json";
vegaEmbed("#map_aus", vg_0).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_0 = "scatter.json";
vegaEmbed("#scatter", vg_0).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_0 = "bar_chart.json";
vegaEmbed("#bar_chart", vg_0).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_0 = "bar_chart_2.json";
vegaEmbed("#bar", vg_0).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_1 = "hw_10_1.json";
vegaEmbed("#hw_10_1", vg_1).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


var vg_2 = "hw_10_2.json";
vegaEmbed("#hw_10_2", vg_2).then(function(result) {
    
    // Access the vega view instance (https://vega.github.io/vega/docs/api/view?) as result.view

}).catch(console.error);


d3.csv("AUS_state_cleaned.csv").then(data => {
    console.log("Loaded data:", data);
});

