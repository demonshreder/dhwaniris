<!-- Script to Activate the Carousel -->
$(document).ready(function(){
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })
        var i=1;
        while(1){
            setTimeout(function(i){
                    if(i==1){
                        $(batch1).show();
                        $(batch2).hide();
                        $(batch3).hide();
                        $(batch4).hide();
                        $(batch5).hide();
                        i = i+1;
                    }
                    else if(i==2){
                        $(batch2).show();
                        $(batch1).hide();
                        $(batch3).hide();
                        $(batch4).hide();
                        $(batch5).hide();
                        i = i+1;
                    }
                    else if(i==3){
                        $(batch3).show();
                        $(batch2).hide();
                        $(batch1).hide();
                        $(batch4).hide();
                        $(batch5).hide();
                        i = i+1;
                    }
                    else if(i==4){
                        $(batch4).show();
                        $(batch2).hide();
                        $(batch3).hide();
                        $(batch1).hide();
                        $(batch5).hide();
                        i = i+1;
                    }
                    else if(i==5){
                        $(batch5).show();
                        $(batch2).hide();
                        $(batch3).hide();
                        $(batch4).hide();
                        $(batch1).hide();
                        i = 0;
                    }
            },2000);
        }
});