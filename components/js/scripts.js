jQuery(document).ready(function($){

  // Blur overlay init - JK0816
  // Removed bluroverlay for being overly complicated to maintain on the header.
  // Will use it later for the modal windows
  // $('.main-header').bluroverlay({
  //   contentWrapperClass: "body-content",
  //   blur: "4",
  //   opacity: 0.3,
  //   background: "#fff"
  // });

// Handling of toggle menu

  var width = $(window).width(),//get the width to know if toggle needed <768pxwidth
      toggler = $('.nav-toggle'), // store the nav-toggle
      toggleTarget = $('.nav-right.nav-menu'), // store the nav-toggle-target
      mobileMenu = $('.mobile-nav');
  if(width<=768){
    //get the width to know if toggle needed <768pxwidth

    toggler.on('click',function(){
      toggleTarget.fadeToggle(100);
      // if(checkDisplayNone(toggleTarget)){
      //   // console.log('toggled '+ toggleTarget.css('display'));
      //   // toggleTarget.css('display','block');
      //   // toggleTarget.clone().addClass('mostrando').appendTo(mobileMenu);
      // }else{
      //   // console.log('toggled back '+ toggleTarget.css('display'));
      //   toggleTarget.css('display','none');
      // }
    })


  }
function checkDisplayNone(elem){
  return(elem).css('display')=="none";
};

});


$(window).resize(function(e){
  var width = $(window).width();
  if(width<=768){
    console.log('resizing ' + width );
  }
});
