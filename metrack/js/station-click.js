$(window).load(function(){
    $.gsap.enabled(true);
    var tracker=$("#svgObject");
    var node=$(".station");
    var animationtime;

    node.click(function(){
		animationtime = 0.5;
		if (tracker.hasClass("start-selected") ){
      if (tracker.hasClass("destination-selected") ){
        tracker.removeClass("destination-selected");
        //keep replaced start data; this essentially overwrites old start data
        $(e.target).style.fill="blue";
  		}
  		else {
        tracker.addClass("destination-selected");
        //send data; might overwrite old destination data
        $(e.target).style.fill="green";
  		}
		}
		else {
      if (tracker.hasClass("destination-selected") ){
        tracker.addClass("start-selected");
        //send data; overwrite scenario highly likely
        $(e.target).style.fill="red";
  		}
  		else {
        tracker.addClass("start-selected");
        //keep start data; expected entry point
        $(e.target).style.fill="yellow";
  		}
		}
  	});
});
