google.charts.load('current', {'packages':['corechart']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {
	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Restaurant');
	data.addColumn('number', 'Patrons');
	data.addRows([
	  ['McDonalds', 9],
	  ['Wendys', 6],
	  ['Burger King', 5],
	  ['KFC', 4],
	  ['Popeyes', 9],
	  ['Arbys', 2],
	  ['Shake Shack', 2],
	  ['Five Guys', 5],
	]);
	// Set chart options
	var options = {title:'Fast Food options with Number of Patrons.',
				   width:1200,
				   height:800,
				   colors: ["#ff4444", "#ff8080", "#555", "#333", "#E81A1A", "#686868", "#888", "101010"],
				   pieHole: 0.4
				   };
	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
	chart.draw(data, options);
}