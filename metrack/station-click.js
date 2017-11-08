$(window).load(function(){
    //$.gsap.enabled(true);
    var tracker=$("#svgObject");
    //var node=svgDoc.getElementsByClass("station");
    //var node=$(".station")
    var svgDoc=tracker.contentDocument
    //var node = svgDoc.getElementById("6THLAFAYETTED");
    var animationtime;
    var node;
    console.log("hello");
    document.getElementById("whatever").addEventListener("onClick", function() {
console.log("....")
      window.alert("click received");

    });
    /**
    document.getElementById("svgObject").addEventListener("load", function() {
   var svgDoc = svgObject.contentDocument();
   node = svgDoc.getElementById("6THLAFAYETTED");
   node.style.css("fill", "blue");
 });
*/

    //node.setAttribute("fill", "green");

    /*node.click(function(){
		animationtime = 0.5;
		if (tracker.hasClass("start-selected") ){
      if (tracker.hasClass("destination-selected") ){
        tracker.removeClass("destination-selected");
        //keep replaced start data; this essentially overwrites old start data
        //node.setAttribute("fill", "blue");
        node.style.setProperty("fill", "blue");
        $(e.target).style.fill="blue";
  		}
  		else {
        tracker.addClass("destination-selected");
        //send data; might overwrite old destination data
        //node.setAttribute("fill", "green");
        $(e.target).style.fill="green";
  		}
		}
		else {
      if (tracker.hasClass("destination-selected") ){
        tracker.addClass("start-selected");
        //send data; overwrite scenario highly likely
        //node.setAttribute("fill", "red");
        $(e.target).style.fill="red";
  		}
  		else {
        tracker.addClass("start-selected");
        //keep start data; expected entry point
        //node.setAttribute("fill", "yellow");
        $(e.target).style.fill="yellow";
  		}
		}
  	});
    */
});
