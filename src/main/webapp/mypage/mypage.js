var userDesc= $('.user_desc');


$.getJSON('../member/header.json', function(result) {

   console.log(result);
       var template = Handlebars.compile($('#user-info-template').html())
       var generatedHTML = template(result) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       userDesc.append(generatedHTML);
       
   $(document.body).on('click', '#mysetting', function(event) {
	   location.href = 'user_setting.html'
	   event.preventDefault()
	 })
	 
	 let str = result.memberPhoto;
    if(str == null ) {
      $('#user-img').attr('src', './usercircle.png').css('width', '170px').css('height', '170px').css('border-radius', '100%')
    } else {
	  $('#user-img').attr('src', '../upload/' + str).css('width', '170px').css('height', '170px').css('border-radius', '100%')
    }
	
//       generatedHTML.appendTo($('.user_desc')).insertAfter('#mysetting');
//.insertAfter('.')
})
