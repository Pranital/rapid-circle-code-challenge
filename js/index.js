(function(){
  //on click show loader
  $('.textwithBtnWrapr button').click(function(){
    $(this).addClass('loader')
    setTimeout(function(){
      $('.textwithBtnWrapr button').removeClass('loader')
    },2000)
  })
  //flip search box on click
  $('#ContactsearchBar').click(function(){
    $(this).toggleClass('animateSearch')
  })
  //on body click except search input it should flip back
  $('body').click(function(evt){
      if(evt.target.id != "ContactsearchBar")
       $('#ContactsearchBar').removeClass('animateSearch');
       $('#ContactsearchBar').val("")
  });
  //dropdown toggle on click for sideNav left
  $('.sidenav a.dropdown-btn').click(function(){
  	$(this).toggleClass('active');
  	 if($(this).hasClass('active'))
      {
        var height = 0;
        $(this).parent().find('.dropdown-wrapr a').each(function(){
      		height += $(this).height();
      	})
        height += ( $(this).height()+ 20);
          $('.dropdown-btn.active i.fa.fa-angle-right').addClass('bottom');
  		    $(this).parent().find('.dropdown-wrapr').animate({'display':'block','opacity':1,'height':height},1000);

          $(this).find('input[type="radio"]').attr({'checked':'checked'})
      }
      else{
          $('.dropdown-btn i.fa.fa-angle-right').removeClass('bottom');
          $(this).parent().find('.dropdown-wrapr').animate({'display':'none','opacity':0,'height':'0'},1000);
          $(this).find('input[type="radio"]').removeAttr({'checked':'checked'})
      }
      //dropdown for right hand sideNav
      if($(this).parents('.rightNavContainer')){
        if($(this).hasClass('active'))
         {
           var height1 = 0;
           $(this).parent().find('.dropdown-wrapr a').each(function(){
            height1 += $(this).height();
          })
           height1 += ( $(this).height()+ 10);

            $('.dropdown-btn.active i.fa.fa-angle-down').addClass('top');
     		    $(this).parent().find('.dropdown-wrapr').animate({'display':'block','opacity':1,'height':height1},1000);
         }
         else{
             $('.dropdown-btn i.fa.fa-angle-down').removeClass('top');
             $(this).parent().find('.dropdown-wrapr').animate({'display':'none','opacity':0,'height':'0'},1000);
         }
     }

  })
  //person content highlightening
  $('.person-content').mouseover(function(){
    $('.person-content').removeClass('bigContent');
    $(this).addClass('bigContent');
  }).mouseleave(function(){
    $(this).removeClass('bigContent');
  });
  //active class toggle on upper navbar
  $('.middleNav .navbar-collapse li').click(function(){
  	$('.middleNav .navbar-collapse li').removeClass('active');
  	$(this).addClass('active');
  })
}())
