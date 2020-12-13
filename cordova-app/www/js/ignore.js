var url ='http://127.0.0.1:8000/types/1'
$(document).ready(function() {
    $.ajax({
        url: url,
        success: handleResult
    }); // use promises

    function handleResult(result){
var arr =result['data'].slice(0,10)
$.each(arr,function(key,value){
      $('#row1').append('<div class="item">' + '<img src="' + value.Photo_Url + '">' + '<div class="footer">' + value.PARCEL_ADD + '</div> </div>');
})
    }
$(".owl-carousel").owlCarousel({
    loop:false,
    margin:10,
    responsiveClass:true,
    responsive:{
        0:{
            items:10,
            nav:false
        },
        600:{
            items:10,
            nav:false
        },
        1000:{
            items:10,
            nav:true,
            loop:false
        }
    }  
  });
		
    }
)