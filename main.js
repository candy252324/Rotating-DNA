
for(var i=0; i<30; i++){
	$(".dna").append("<div class='item'><span class='left'></span><span class='middle'></span><span class='right'></span></div>")
}

var items=$(".item"),
	delayTime=0;
for(var i=0; i<items.length; i++){
	$(items[i]).css({
		"animation":"allchange 5s linear infinite "+delayTime+"s",
	})
	delayTime -=.2;
}


//记录鼠标进入初始坐标
var startX,
	stratY;

$(document).on("mouseenter",function(e){
	startX=e.pageX;
	startY=e.pageY;
})



var x=0;
var y=0;

function move(e){
	delX= e.pageX-startX,
	delY= e.pageY-startY;

	startX= e.pageX,
	startY= e.pageY;
	
	y +=delX;
	x -=delY;

    $("#facegroup").css({
    	"-webkit-transform":"rotateX("+x/5 +"deg)"+"rotateY("+ y/5+"deg)",
    	"-moz-transform":"rotateX("+x/5 +"deg)"+"rotateY("+ y/5+"deg)",
    })
}


$(document).on("mousemove",function(e) {
	move(e);
})

$(document).on("click",function(e){
	var e = $._data(this, "events"); 
    if (e && e["mousemove"]) {  
			$(document).off("mousemove")
    }else{
    	$(document).on("mousemove",function(e) {
			move(e);
		})
    }
	
})



