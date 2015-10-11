<!-- Script to Activate the Carousel -->
$(document).ready(function(){
        $('.carousel').carousel({
            interval: 5000 //changes the speed
        })
        var i=1;
        var j=1;
        setInterval(function(){
                    if(i==1){
                        $('.batch1').show();
                        $('.batch2').hide();
                        $('.batch3').hide();
                        $('.batch4').hide();
                        $('.batch5').hide();
                        //alert(i);
                        if(j==1){
                            $('.batch11').show();
                            j=j+1;
                        }
                        else if(j==2){
                            $('.batch22').show();
                            $('.batch11').hide();
                            j=j+1;
                        }
                        else if(j==3){
                            $('.batch33').show();
                            $('.batch22').hide();
                            j=1;
                        }
                        
                        i = i+1;
                    }
                    else if(i==2){
                        $('.batch2').show();
                        $('.batch1').hide();
                        //alert(i);
                        if(j==1){
                            $('.batch11').show();
                            j=j+1;
                        }
                        else if(j==2){
                            $('.batch22').show();
                            $('.batch11').hide();
                            j=j+1;
                        }
                        else if(j==3){
                            $('.batch33').show();
                            $('.batch22').hide();
                            j=1;
                        }
                        i = i+1;
                    }
                    else if(i==3){
                        $('.batch3').show();
                        $('.batch2').hide();
                        //alert(i);
                        if(j==1){
                            $('.batch11').show();
                            $('.batch33').hide();
                            j=j+1;
                        }
                        else if(j==2){
                            $('.batch22').show();
                            $('.batch11').hide();
                            j=j+1;
                        }
                        else if(j==3){
                            $('.batch33').show();
                            $('.batch22').hide();
                            j=1;
                        }
                        i = i+1;
                    }
                    else if(i==4){
                        $('.batch4').show();
                        $('.batch3').hide();
                        //alert(i);
                        if(j==1){
                            $('.batch11').show();
                            $('.batch33').hide();
                            j=j+1;
                        }
                        else if(j==2){
                            $('.batch22').show();
                            $('.batch11').hide();
                            j=j+1;
                        }
                        else if(j==3){
                            $('.batch33').show();
                            $('.batch22').hide();
                            j=1;
                        }
                        i = i+1;
                    }
                    else if(i==5){
                        $('.batch5').show();
                        $('.batch4').hide();
                        if(j==1){
                            $('.batch11').show();
                            $('.batch33').hide();
                            j=j+1;
                        }
                        else if(j==2){
                            $('.batch22').show();
                            $('.batch11').hide();
                            j=j+1;
                        }
                        else if(j==3){
                            $('.batch33').show();
                            $('.batch22').hide();
                            j=1;
                        }
                        i = 1;
                        //alert(i);
                    }
            },2000);
        
});