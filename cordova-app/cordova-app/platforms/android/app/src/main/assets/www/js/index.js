var app = {
    // Application Constructor
    initialize: function() {
var main_page = `<div class="wrapper">
    <!-- Sidebar Holder -->
    <nav id="sidebar" class="">
      <div class="sidebar-header">
        <h3>       <i class="fa fa-home" style="
    font-size: 60;
    color: turquoise;
"></i>
Property App v1</h3>
        
      </div>

      <ul class="list-unstyled components">
 
        <li class="active">
          <a href="#"><i class="material-icons nav__icon">history</i> <span style="
    font-size: 22;
">History and Activity</span>

</a>

        </li>
        <li>
          <a href="#" id="messages"><i class="material-icons nav__icon">message</i> <span style="
    font-size: 22;
">Conversations</span>

</a>


        </li>
        <li>
          <a href="#"><i class="material-icons nav__icon">notifications</i> <span style="
    font-size: 22;
">Status Changes</span>

</a>
        </li>
        <li>
          <a href="#"><i class="material-icons nav__icon">help</i> <span style="
    font-size: 22;
">Help and Feedback</span>

</a>

        </li>
        
        <li>
          <a href="#"><i class="material-icons nav__icon">settings</i> <span style="
    font-size: 22;
">Settings</span>

</a>
        </li>


      </ul>

    </nav>

    <!-- Page Content Holder -->
    <div id="content" class="">

     
<div class="navbar navbar-inverse navbar-fixed-top" style="background-color: #554ca2;">
        <div class="container">

       
        

          <div class="navbar-header">
<button type="button" id="sidebarCollapse" class="btn btn-info navbar-btn" style="background-color:#50606500;border-color: #46b8da00">
                                <i class="material-icons nav__icon">menu</i>
                                
                            </button>
            
          </div>

          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      </div>
        </div>
     


    </div>
  </div>
</div>

<div data-role="page" id="page" style="margin-top: 120px">
<b style="
    font-size: 24;
    padding: 10;
">Home</b>
 <hr/>                   

<div style="margin-top: 40;;margin-left: 17;"><b style="font-size: 20;">Properties in Palatine containing Delinquent Taxes.</b></div> 
        <div class="owl-carousel owl-loaded owl-drag" id="row1" style="padding: 15;">   <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(-204px, 0px, 0px); transition: 0s; width: 818px;"><div class="owl-item" style="width: 194.333px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130610000"> <div class="footer"> 3456 Manheim Rd, Palatine, 60067 </div> </a></div><div class="owl-item active" style="width: 194.333px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130520000"> <div class="footer"> 2304 CENTRAL Rd, Palatine, 60067 </div> </a></div><div class="owl-item active" style="width: 194.333px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140240000"> <div class="footer"> 3204 W CENTRAL Rd, Palatine, 60067 Apt HSE </div> </a></div><div class="owl-item active" style="width: 194.333px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140220000"> <div class="footer"> 3202 PEACOCK ln, Palatine, 60067</div> </a></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev disabled"></button><button type="button" role="presentation" class="owl-next"><span aria-label="Next"></span></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div> <div style="font-size: 22;;margin-left: 15;"><b style="
    font-size: 20;
"> Other Nearby Properties You May Like...</b></div>

       
<div class="owl-carousel owl-loaded owl-drag" id="row2" style="padding: 10;">   <div class="owl-stage-outer"><div class="owl-stage" style="transform: translate3d(0px, 0px, 0px); transition: 0.25s; width: 1456px;"><div class="owl-item active" style="width: 354px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130610000"> <div class="footer"> 3456 Manheim Rd, Palatine, 60067 </div> </a></div><div class="owl-item active" style="width: 354px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130520000"> <div class="footer"> 2304 CENTRAL Rd, Palatine, 60067 </div> </a></div><div class="owl-item active" style="width: 354px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140240000"> <div class="footer"> 3204 W CENTRAL Rd, Palatine, 60067 Apt HSE </div> </a></div><div class="owl-item" style="width: 354px; margin-right: 10px;"><a href="#link" <div="" class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140220000"> <div class="footer"> 3202 PEACOCK ln, Palatine, 60067</div> </a></div></div></div><div class="owl-dots"><button role="button" class="owl-dot active"><span></span></button><button role="button" class="owl-dot"><span></span></button></div></div>    
</div>


<nav class="nav fixed-bottom">
          <a href="#home" class="nav__link" id="home">
            <i class="material-icons nav__icon">home</i>
            <span class="nav__text">Home</span>
    </a>
          <a href="#search" class="nav__link">
             <i class="material-icons nav__icon">search</i>
             <span class="nav__text">Search</span>
    </a>
          <a href="#profile" class="nav__link nav__link--active">
             <i class="material-icons nav__icon">person</i>
             <span class="nav__text">Profile</span>
    </a>
</nav>
`




 $(document).ready(function()
    {
	var login_page = `<div class="limiter">
<div class="container-login100">
<div class="wrap-login100">
<form class="login100-form validate-form">
<span class="login100-form-title p-b-26">
Welcome
</span>
<span class="login100-form-title p-b-48">

</span>
<div class="wrap-input100 validate-input" data-validate="Valid email is: a@b.c">
<input class="input100" type="text" name="email">
<span class="focus-input100" data-placeholder="Email"></span>
</div>
<div class="wrap-input100 validate-input" data-validate="Enter password">
<span class="btn-show-pass">
<i class="zmdi zmdi-eye"></i>
</span>
<input class="input100 has-val" type="password" name="pass">
<span class="focus-input100" data-placeholder="Password"></span>
</div>
<div class="container-login100-form-btn">
<div class="wrap-login100-form-btn">
<div class="login100-form-bgbtn"></div>
<button class="login100-form-btn" id="login_submit">
Login
</button>
</div>
</div>
<div class="text-center p-t-115">
<span class="txt1">
Don’t have an account?
</span>
<a class="txt2" href="#signup">
Sign Up
</a>
</div>
</form>
</div>
</div>
</div>
<div id="dropDownSelect1"></div>
`

	$('#main_content').html(login_page);
}
)

$(document).ready(function()
    {

$('#login_submit').click(function() {
	$('#main_content').html(main_page); 
	$("#row1").html('<a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02353060210000"> <div class="footer"> 7837 w Hollyanne rd, Palatine, 60067 </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130520000"> <div class="footer"> 2304 CENTRAL Rd, Palatine, 60067 </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140240000"> <div class="footer"> 3204 W CENTRAL Rd, Palatine, 60067 Apt HSE </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02363140220000"> <div class="footer"> 3202 PEACOCK ln, Palatine, 60067</div> </div></a>');
	$("#row2").html('<a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130590000"> <div class="footer"> 2208 Valley Rd, Skokie, 60077 </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364170480000"> <div class="footer"> 3384 Forest Ct, Palatine, 60067 </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02364130500000"> <div class="footer"> 4204 W Winona Rd, Chicago, 60087 </div> </div></a> <a href=#link <div class="item"><img src="https://maps.cookcountyil.gov/groundphotos/02354070060000"> <div class="footer"> 3202 PEACOCK ln, Palatine, 60067</div> </div></a>');          
        
    
        $(".owl-carousel").owlCarousel({
            loop:false,
            margin:10,
            responsiveClass:true,
            responsive:{
                0:{
                    items:3,
                    nav:false
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:3,
                    nav:true,
                    loop:false
                }
            }  
          });
$(document).ready(function(){
 var property_profile= `<div class="container">
	<h1 style="
    margin-bottom: 25px;
    font-size: 25px;
">7837 W Hollyanne rd</h1>
       <div class="banner">
    
    
</div>

<style>
  .banner {
    background-image: url('https://maps.cookcountyil.gov/groundphotos/02353060210000');
    background-size: cover;
    height: 200px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 32px;
  }

  .banner > p {
    color: white;
    padding: 0px;
  }
</style>
        

        <nav class="c-tabs" data-toggle="c-tabs" role="navigation">
            <ul class="c-tab--navigation">
                <li class="c-tab--item"><a href="#Tab1" class="active"> Characteristics<span style="top:calc(31px - .5em); left:calc(38px - .5em);" class="-ripple"></span></a></li>
                <li class="c-tab--item"><a href="#Tab2" class="">Tax Info</a></li>
                <li class="c-tab--item"><a href="#Tab3" class="">Docs</a></li>
                <li class="c-tab--slider">
                    <div class="c-tab-indicator" style="width: 135px; left: 0px;"></div>
                </li>
            </ul>
        </nav>
        <div class="c-tab--content-container">
            
            <div id="Tab1" class="c-tab--content" style="display: block;"> <div class="card" style="margin-bottom: 30;margin-top: 30;/* margin-left: 8; */"> <div class="container" id="101"> <p>Adress: 7837 w Hollyanne rd</p> <p>City: Palatine</p> <p>Zip: 60067</p> <p>Classification: Residential</p> <p>Stories: 1</p> <p>Number of Bedrooms: 5 </p> <p>Number of Baths: 3 </p><p>Year Built: 1978 </p><style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> </div></div><div class="card"> <div class="container" id="101"> <p>Lot Size: 1200 sqft</p> <p>Buiding Size: 800 sqft</p> <p>Exterior: Wood Frame</p> <p>Electrical Buildout: Conduit</p> <p>Basement: Yes</p> <p>Attic: No </p> <p>Central AC: Yes  </p><style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> </div></div></div>
            <div id="Tab2" class="c-tab--content" style="display: none;"> <div class="card" style="margin-top: 30px;"> <div class="container" id="102"> <p>Tax Amounts: $6780.00</p> <p>Deliquent Years: 2012-2015</p> <p> Apn: 02354070080000 </p> <p>Judgements: Demolition Order</p> <p>Building Violations: None </p> <p>Other: Weeds Violation</p> <style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> </div></div></div>            
	   <div id="Tab3" class="c-tab--content" style="display: block;"> 
 <div class="card" style="margin-top: 30px;"> <div class="container" id="103"> <h4><b>Recorded Documents: 5</b></h4> <p>Document Type: Mortgage and other</p> <p> DateRecorded: 2019-08-12</p> <p>Grantee: John Rodriguez</p> <p>Grantor: Elm Capital llc</p>

  <style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> 

</div></div>

<div id="pdf" style="margin-top: 30;    /* align-items: center; *//* margin-left: 3; */;">
   <embed width="95%" height="20%" name="plugin" src="https://www.ccrecorder.org/CCRD-WM/1997/11wm/97880072.pdf" type="application/pdf">
</div>
 <div class="card" style="margin-top: 30px;"> <div class="container" id="103">  <p>Document Type: Trustees Deed</p>
<p>Document Number: 90617604 </p> <p> Date Recorded: 2019-02-01</p> <p>Grantees: John Rodriguez, Cynthia Rodriguez </p> <p>Grantor: Alan Livingston</p>

  <style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> 

</div></div>

<div id="pdf2" style="margin-top: 30;margin-bottom: 30px;    /* align-items: center; *//* margin-left: 3; */;">
   <embed width="95%" height="20%" name="plugin" src="https://www.ccrecorder.org/CCRD-WM/1988/09wm/88433284.pdf" type="application/pdf" style="/* margin-bottom: 300px; */">
</div>

</div>
        </div>

<div class="card">
</div>
           
        
    </div> `

$('#row1,#row2').click(function() {
       	$('#page').empty()
         $('#page').html(property_profile)
         component.tabs.initTabs();
})    
$('a[href="#Tab2"]').click(function() {
  		   $('#Tab2').html('<div class="card"> <div class="container" id="102"> <h4><b>TaxAmounts: $6780.</b></h4> <p>Deliquent Years: 2012-2015</p> <p> Apn: 02354070080000 </p> <p>Judgements: Demolition Order</p> <p>Building Violations: None </p> <p>Other: Weeds Violation</p> <style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> </div></div>');
})   
		$('a[href="#Tab3"]').click(function() {
  		    $('#Tab3').html(' <div class="card"> <div class="container" id="103"> <h4><b>RecordedDocuments: 5</b></h4> <p>DocumentType: Mortgage and other</p> <p> DateRecorded: 2019-08-12</p> <p>Parties: John Rodriguez</p> <p>DocNumber: 01928374ce</p> <p>Other</p> <style>.card { box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); transition: 0.3s; width: 95%; } .card:hover { box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2); } .container { padding: 2px 16px; }</style> </div></div>');
})		
$('#sidebarCollapse').on('click', function() {
        $('#sidebar, #content').toggleClass('active');
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });

$(document).ready(function(){

var ky = `  <div class="container mt-5">
    <div class="row">
        <div class="col-lg-4 pb-5">
            <!-- Account Sidebar-->
            <div class="author-card pb-3">
                <div class="author-card-cover" style="background-image: url(https://demo.createx.studio/createx-html/img/widgets/author/cover.jpg);"><a class="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip" title="" data-original-title=""><i class="fa fa-award text-md"></i></a></div>
                <div class="author-card-profile">
                    <div class="author-card-avatar"><img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="Daniel Adams">
                    </div>
                    <div class="author-card-details">
                        <h5 class="author-card-name text-lg">Ari Rosenzweig</h5><span class="author-card-position">Joined November 06, 2020</span>
                    </div>
                </div>
            </div>
            <div class="wizard">
                <nav class="list-group list-group-flush">
                    <a class="list-group-item" href="#">
                        <div class="d-flex justify-content-between align-items-center">
                            <div><i class="fe-icon-shopping-bag mr-1 text-muted"></i>
                                <div class="d-inline-block font-weight-medium text-uppercase">Search Preferences</div>
                            </div>
                        </div>
                    </a><a class="list-group-item active" href="#"><i class="fe-icon-user text-muted"></i>Profile Settings</a><a class="list-group-item" href="#"><i class="fe-icon-map-pin text-muted"></i>Addresses</a>
                    <a class="list-group-item" href="#">
                        <div class="d-flex justify-content-between align-items-center">
                            <div><i class="fe-icon-heart mr-1 text-muted"></i>
                                <div class="d-inline-block font-weight-medium text-uppercase">Connections</div>
                            </div>
                        </div>
                    </a>
                    <a class="list-group-item" href="#">
                        <div class="d-flex justify-content-between align-items-center">
                            <div><i class="fe-icon-tag mr-1 text-muted"></i>
                                <div class="d-inline-block font-weight-medium text-uppercase">Support Tickets</div>
                            </div>
                        </div>
                    </a>
                </nav>
            </div>
        </div>
        <!-- Profile Settings-->
        
    </div>
</div>

  
  `


$('a[href="#profile"]').click(function () {
  $("#page").empty()
  $("#page").html(ky);
});
})

})

$(document).ready(function(){
var tty=`
<b style=\"
    font-size: 24;
    padding: 10;
\">Home</b>
 <hr>

<div style=\"margin-top: 40;;margin-left: 17;\"><b style=\"font-size: 20;\">Properties in Palatine containing Delinquent Taxes.</b></div>
        <div class=\"owl-carousel owl-loaded owl-drag\" id=\"row1\" style=\"padding: 15;\">   <div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 739px;\"><div class=\"owl-item active\" style=\"width: 174.667px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02353060210000\"> <div class=\"footer\"> 7837 w Hollyanne rd, Palatine, 60067 </div> </a></div><div class=\"owl-item active\" style=\"width: 174.667px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02364130520000\"> <div class=\"footer\"> 2304 CENTRAL Rd, Palatine, 60067 </div> </a></div><div class=\"owl-item active\" style=\"width: 174.667px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02363140240000\"> <div class=\"footer\"> 3204 W CENTRAL Rd, Palatine, 60067 Apt HSE </div> </a></div><div class=\"owl-item\" style=\"width: 174.667px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02363140220000\"> <div class=\"footer\"> 3202 PEACOCK ln, Palatine, 60067</div> </a></div></div></div><div class=\"owl-nav disabled\"><button type=\"button\" role=\"presentation\" class=\"owl-prev\"><span aria-label=\"Previous\">‹</span></button><button type=\"button\" role=\"presentation\" class=\"owl-next\"><span aria-label=\"Next\">›</span></button></div><div class=\"owl-dots\"><button role=\"button\" class=\"owl-dot active\"><span></span></button><button role=\"button\" class=\"owl-dot\"><span></span></button></div></div> <div style=\"font-size: 22;;margin-left: 15;\"><b style=\"
    font-size: 20;
\"> Other Nearby Properties You May Like...</b></div>

       
<div class=\"owl-carousel owl-loaded owl-drag\" id=\"row2\" style=\"padding: 10;\">   <div class=\"owl-stage-outer\"><div class=\"owl-stage\" style=\"transform: translate3d(0px, 0px, 0px); transition: 0s; width: 752px;\"><div class=\"owl-item active\" style=\"width: 178px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02364130590000\"> <div class=\"footer\"> 2208 Valley Rd, Skokie, 60077 </div> </a></div><div class=\"owl-item active\" style=\"width: 178px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02364170480000\"> <div class=\"footer\"> 3384 Forest Ct, Palatine, 60067 </div> </a></div><div class=\"owl-item active\" style=\"width: 178px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02364130500000\"> <div class=\"footer\"> 4204 W Winona Rd, Chicago, 60087 </div> </a></div><div class=\"owl-item\" style=\"width: 178px; margin-right: 10px;\"><a href=\"#link\" <div=\"\" class=\"item\"><img src=\"https://maps.cookcountyil.gov/groundphotos/02354070060000\"> <div class=\"footer\"> 3202 PEACOCK ln, Palatine, 60067</div> </a></div></div></div><div class=\"owl-nav disabled\"><button type=\"button\" role=\"presentation\" class=\"owl-prev\"><span aria-label=\"Previous\">‹</span></button><button type=\"button\" role=\"presentation\" class=\"owl-next\"><span aria-label=\"Next\">›</span></button></div><div class=\"owl-dots\"><button role=\"button\" class=\"owl-dot active\"><span></span></button><button role=\"button\" class=\"owl-dot\"><span></span></button></div></div>
`

$('a[href="#home"]').click(function () {
   $("#page").empty();
  $("#page").html(tty);
});
})
$(document).ready(function()
    {
$('#messages').click(function () {
var message_page =`<div class="container">
<h3 class=" text-center">Messaging</h3>

      
        <div class="inbox_people" style="margin: auto;padding: 10px;to;">
          <div class="headind_srch">
            <div class="recent_heading">
              <h4>Recent</h4>
            </div>
            <div class="srch_bar">            
            </div>
          </div>
          <div class="inbox_chat">
            <div class="chat_list active_chat">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Scott<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Ari<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png"> </div>
                <div class="chat_ib">
                  <h5>Alex<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Tom<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Bob<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>James<span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
            <div class="chat_list">
              <div class="chat_people">
                <div class="chat_img"> <img src="https://ptetutorials.com/images/user-profile.png" alt="sunil"> </div>
                <div class="chat_ib">
                  <h5>Sunil Rajput <span class="chat_date">Dec 25</span></h5>
                  <p>Test, which is a new approach to have all solutions 
                    astrology under one roof.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        

      
      
      
      
 </div>
`
$('#page').empty()
$('#page').html(message_page)
})
})
         
})})


}
};
app.initialize();

