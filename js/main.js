//share
$('.share img').hover(function(){
	var hoverClassName='active-'+$(this).attr('class');
	$(this).attr('src','img/'+hoverClassName+'.png');
},function(){
	var className=$(this).attr('class');
	$(this).attr('src','img/'+className+'.png');
})

//eat drink hang out
$('.para img').hover(function(){
	var hoverClassName='active-'+$(this).attr('class');
	$(this).attr('src','img/'+hoverClassName+'.png');
},function(){
	var className=$(this).attr('class');
	$(this).attr('src','img/'+className+'.png');
})
// //footer icons
// $('card.img').hover(function(){
//   $("GIFT CARD").click(function(){
//     $("div").animate({left:'250px'});
//   })
// })


//tab
$('.tab-btn p').click(function(){
	$(this).addClass('btn-click').siblings().removeClass('btn-click');
	var index=$(this).index()+1;
	$('.con'+index).show().siblings().hide();
})

//about tab
$('.about-btn1').click(function(){
	$('.ground-open').css({'height':'650px','background':'url(img/about-bg.png) center bottom repeat-x'});
	$('.about').css('height','1890px');
})
$('.about-btn2').click(function(){
	$('.ground-open').css({'height':'1230px','background':'url(img/history.png) center bottom repeat-x'});
	$('.about').css('height','2470px');
})


//photos enlargement
 var firstClick=null;
 var firstClickIndex=1;
    $('.ground').click(function(){
    	firstClick=$(this);
    	firstClickIndex=$(this).attr('title');
    	$(this).siblings().hide();
    	$(this).parent().next().hide();
    	$(this).parent().prev().hide();
    	$(this).parent().parent().find('.show-big').show(1000);
    	$(this).addClass('thisPic').animate({'width':'1010px','height':'644px','margin-top':'30px','margin-left':'-108px','position':'absolute','z-index':'10'},1000);
    })

$('.offIcon').click(function(){
	$(this).parent().siblings().show();
	$(this).parent().siblings().children().show();
	$(this).parent().hide();
	$(this).parent().parent().find('.ground').removeClass('thisPic').animate({'width':'251px','height':'170px','margin-top':'50px','margin-left':'0'},0);
	
	if($(this).parent().hasClass('ground-big')){
		firstClick.attr('src','img/ground'+firstClickIndex+'.png');
		firstClick.attr('title',firstClickIndex);	
	}else{	
		firstClick.attr('src','img/anniversary'+firstClickIndex+'.png');
		firstClick.attr('title',firstClickIndex);	
	}
})

$('.aLeft').click(function(){
	var num=$('.thisPic').attr('title')-1;
	if(num<1){
		num=6;
	}
	if($(this).parent().hasClass('ground-big')){
		
		$('.thisPic').attr('src','img/ground'+num+'.png');
		$('.thisPic').attr('title',num);	
	}else{	
		$('.thisPic').attr('src','img/anniversary'+num+'.png');
		$('.thisPic').attr('title',num);	
	}
})

$('.aRight').click(function(){
	var numR=$('.thisPic').attr('title')-(-1);
	if(numR>6){
		numR=1;
	}
	if($(this).parent().hasClass('ground-big')){
		$('.thisPic').attr('src','img/ground'+numR+'.png');
		$('.thisPic').attr('title',numR);	
	}else{	
		$('.thisPic').attr('src','img/anniversary'+numR+'.png');
		$('.thisPic').attr('title',numR);	
	}
})
