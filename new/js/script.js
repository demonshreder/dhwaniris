//Script to Activate the Carousel

$(document).ready(function(){
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })
        /*var i=0;
        setInterval(function(){
            var move = -80*i;
            $('#partners').css("transform","translateX("+move+"px)");
            $('#supports').css("transform","translateX("+move+"px)");
            i=i+1;
            if(move<0&&move%4000==0){
                var hello = $('#span1').clone();
                hello.insertAfter('#span1');
            }
            if(move<0&&move%2240==0){
                var hello = $('#span2').clone();
                hello.insertAfter('#span2');
            }
        },2000);*/
        $('.owl-carousel').owlCarousel({
            margin:50,
            loop:true,
            autoWidth:true,
            items:4,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            stagePadding:50,
            smartSpeed:450,
            dots:true,
            autoplay:true,
            autoplayTimeout:1000,
            autoplayHoverPause: true,
            navigation:true
        })
//Code for fancybox
$(".fancybox").fancybox({
    padding:0,
    helpers : {
        title: {
            type: 'inside',
            position: 'top'
        },
         overlay: {
            locked: false
        },
       
    },
    nextEffect: 'fade',
    prevEffect: 'fade',

//    overlay: {
//        css: {
//                'background' :'rgba(58,42,45,0.95)'
//        }
//    }
});
    
$('.nav.navbar-nav').click(function(){
    $('.navbar-toggle').addClass('collapsed');
    $('.navbar-collapse.collapse.in').removeClass('in');
});
        
}); 