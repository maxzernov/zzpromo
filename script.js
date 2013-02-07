$(document).ready(function(){
   var toggled = false;
   $("#showMagic").click(function(){
	var $this = $(this);

   	$('.b-figure').toggleClass("m-figure-show");    
   	$('.section').toggleClass("hidden");    
	if(!toggled){
	    $this.attr('value',"Hide magic");
	    toggled = true;
	}else{
	    $this.attr('value',"Show me magic");
	    toggled = false;
	}

   }) 
});
