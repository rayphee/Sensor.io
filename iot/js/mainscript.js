$(window).load(function(){
    var configObject = {
	autoClose: false,
    alwaysOpen:true,
	format: 'YYYY-MM-DD',
	separator: ' to ',
	language: 'auto',
	startOfWeek: 'sunday',// or monday
	getValue: function()
	{
		return $(this).val();
	},
	setValue: function(s)
	{
		if(!$(this).attr('readonly') && !$(this).is(':disabled') && s != $(this).val())
		{
			$(this).val(s);
		}
	},
	startDate: false,
	endDate: false,
	time: {
		enabled: false
	},
	minDays: 0,
	maxDays: 0,
	showShortcuts: false,
	shortcuts:
	{
        
		//'prev-days': [1,3,5,7],
		//'next-days': [3,5,7],
		//'prev' : ['week','month','year'],
		//'next' : ['week','month','year']
	},
    inline:true,
    container:'#date-range12-container',
	//duration: 200,
	stickyMonths: false,
	dayDivAttrs: [],
	dayTdAttrs: [],
	applyBtnClass: '',
	singleMonth: 'auto',
	hoveringTooltip: function(days, startTime, hoveringTime)
	{
		return days > 1 ? days + ' ' + lang('days') : '';
	},
	showTopbar: true,
	swapTime: false,
	selectForward: false,
	selectBackward: false,
	showWeekNumbers: false,
	getWeekNumber: function(date) //date will be the first day of a week
	{
		return moment(date).format('w');
	},
	monthSelect: false,
	yearSelect: false
}
    
$('#date-picker').dateRangePicker(configObject);
    
    var selectedBar = 433;
    
const colorMap = d3.interpolateRgb(
  d3.rgb(255, 200, 0),
  d3.rgb(255, 0, 0)
)    
    
d3.select('#bars')
  .selectAll("div")
  .data([433, 333, 389, 362, 315, 283, 286, 224, 136, 143, 134, 100, 152, 112, 101, 45, 62, 56, 65, 23, 15, 0, 5, 7, 0, 2, 8, 3, 0, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 16, 90, 112, 132, 212, 206, 198, 165, 375, 225, 369, 313])
  .enter()
  .append("div")
.style("background-color", (d)=> {
    return d == 0 ? '#eee' : colorMap(d/433)
  })
  .style("height", (d)=> d * .5 + "px").property({'className': 'timeSlots'});
    
    
    var data = [{
      label: "7am",
      sales: 20
    },{
      label: "8am",
      sales: 12
    }, {
      label: "9am",
      sales: 8
    }, {
      label: "10am",
      sales: 27
    }]

    var g = d3.select('#times')
      .selectAll("g")
      .data(data)
      .enter()
      .append('g')
    g.append("circle")
      .attr('cy', 40)
      .attr('cx', (d, i)=> (i+1) * 50)
      .attr('r', (d)=> d.sales)
    g.append("text")
      .attr('y', 90)
      .attr('x', (d, i)=> (i+1) * 50)
      .text((d)=> d.label)
    
    var width = 480,
    height = 500;

var nodes = [];
    
var svg = d3.select('#nodes');

var force = d3.layout.force()
    .charge(-9)
    .size([width, height])
    .nodes(nodes)
    .on("tick", tick)
    .start();

function tick() {
    
  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

var interval = setInterval(function() {
  var d = {
    x: width / 2 + 2 * Math.random() - 1,
    y: height / 2 + 2 * Math.random() - 1
  };

  svg.append("circle")
      .data([d])
      .attr("r", 1e-6)
    .transition()
      .ease(Math.sqrt)
      .attr("r", 6);

  if (nodes.push(d) > selectedBar) clearInterval(interval);
  force.start();
}, .025);
    
    $('.timeSlots').click(function(){
    selectedBar = $(event.target).height()*2;
    document.getElementById("users").innerHTML = $(event.target).height()*2;
        d3.selectAll('circle').remove();
        var nodes = [];
        force = d3.layout.force()
    .charge(-9)
    .size([width, height])
    .nodes(nodes)
    .on("tick", tick)
    .start();
        
       function tick() {
    
  svg.selectAll("circle")
      .attr("cx", function(d) { return d.x; })
      .attr("cy", function(d) { return d.y; });
}

var interval = setInterval(function() {
  var d = {
    x: width / 2 + 2 * Math.random() - 1,
    y: height / 2 + 2 * Math.random() - 1
  };

  svg.append("circle")
      .data([d])
      .attr("r", 1e-6)
    .transition()
      .ease(Math.sqrt)
      .attr("r", 6);

  if (nodes.push(d) > (selectedBar-1)) clearInterval(interval);
  force.start();
}, .025); 
    
});
    
    $('circle').click(function(){
    selectedBar = $(event.target).height()*2;
    document.getElementById("address").innerHTML = $(event.target).r;
    });

});