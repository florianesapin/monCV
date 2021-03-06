$(document).ready(function(){
		$('a').smoothScroll();
		
		$('div.progress').each(function(index, element){
			var taux = $(element).children().attr( "aria-valuenow" );
			
			var canvas = $('<canvas id="myChart' + index + '" width="100" height="100"></canvas>');
		
			$(element).replaceWith(canvas);
		
			var data = [
			{
			value: taux,
			color:"#F7464A",
			highlight: "#F7464A",
			label: "Acquis ",
			height: "10px"
			},
			{
			value: 100-taux,
			color: "#FFFFFF",
			highlight: "#FFFFFF",
			}
			]
			
			var ctx = canvas[0].getContext("2d");
			var myDoughnutChart = new Chart(ctx).Doughnut(data,{percentageInnerCutout: 80});
			
		});
});
