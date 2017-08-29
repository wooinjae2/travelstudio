    var appendNumber = 4;
    var prependNumber = 1;
    var swiper = new Swiper('.swiper-container', {
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 4,
        centeredSlides: false,
/*        paginationClickable: true,*/
//        spaceBetween: 5
    });


    $.getJSON('../member/info.json', function(result) {
    	
    	   console.log(result.data.info);
    	       var template2 = Handlebars.compile($('#content-template-2').html())
    	       var generatedHTML2 = template2(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//    	       tbody.text('') // tbody의 기존 tr 태그들을 지우고
//    	       mainbox.append(generatedHTML2) // 새 tr 태그들로 설정한다.
    	       swiper.appendSlide(generatedHTML2)
    	       
    	       let str = result.data.memberPhoto;
    	       console.log(str)
    	      
    	     /*  if (str != undefined) {
    	       $('.travel_writer_photozone').css({
    			  'background': 'url("/upload/' + str +'")' + 'center center no-repeat'
    	       	})
    	       }*/
    	       
    	 
    	  })

var tbody = $('.slide_bar_content');

$.getJSON('../member/header.json', function(result) {

	console.log(result);
	var mno=parseInt(result.mno);
	    var template = Handlebars.compile($('#tbody-template2').html())
	    var generatedHTML = template(result) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//	    tbody.text('') // tbody의 기존 tr 태그들을 지우고
	    tbody.append(generatedHTML) // 새 tr 태그들로 설정한다.
	    
	    
	    console.log(mno);
	      $.post('../post/count.json',
	    		  {mno : mno}	
	      , function(result) {
	    	  console.log(result.data.list.length)
	    	  
	    var template = Handlebars.compile($('#tbody-template2').html())
	    var generatedHTML = template(result.data.list) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//	    tbody.text('') // tbody의 기존 tr 태그들을 지우고
	    generatedHTML='';
	    $('.counting1').html(result.data.list.length) // 새 tr 태그들로 설정한다.

  })

  }) // getJSON()
  


  