
/*
 TWEETS
 */
$(function(){
$('#tweets').tweetable({username: 'audemedia', time: true, limit: 3, replies: true, position: 'append'});
});

/*
PRETTY PHOTO
 */
 $(document).ready(function(){
	$("a[class^='prettyPhoto']").prettyPhoto();
  });
  
jQuery('#camera_wrap_1').camera({
thumbnails: true,
height: '390px',
fx: 'scrollTop',
loader: 'bar',
loaderPadding: 0,
loaderColor: '#f2c658',
playPause: false
});



/*
 ELASTIC SLIDER HOME PAGE
 */
$('#carousel').elastislide({
	imageW 	: 212,
	minItems	: 2,
	margin		: 26
});
$(".yellowknife-carousel ul li").hover(function(){
		 $(this).children('span').animate({bgcolor:"#ebc870", padding:"25px 5px"},{queue:false,duration:300})
	}, function() {
         $(this).children('span').animate({bgcolor:"#e6e6e6", padding:"5px"},{queue:false,duration:300});
	});
	