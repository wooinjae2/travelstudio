var reply = $('.comment_container');

$.getJSON('/travelstudio/comment/list.json', function(result) {

   console.log(result.data.list);
       var template = Handlebars.compile($('#comment-template').html())
       var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       reply.append(generatedHTML) // 새 tr 태그들로 설정한다.

  }) // getJSON()ile(title)
  
  
    var content = $('#text_box');
//        

$.getJSON('/travelstudio/post/list.json', function(result) {

   console.log(result.data.list);
       var template2 = Handlebars.compile($('#content-template-2').html())
       var generatedHTML2 = template2(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       content.append(generatedHTML2) // 새 tr 태그들로 설정한다.
       
  }) // getJSON()ile(title)
  
  
  
      var title = $('#blank-one');
        
$.getJSON('/travelstudio/post/list.json', function(result) {

   console.log(result.data.list);
       var template3 = Handlebars.compile($('#content-template-3').html())
       var generatedHTML3 = template3(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       title.append(generatedHTML3) // 새 tr 태그들로 설정한다.
       
  }) // getJSON()ile(title)
  

   var writer = $('#profile_box');

$.getJSON('/travelstudio/member/info.json', function(result) {

   console.log(result.data.info);
   console.log("11");
       var template4 = Handlebars.compile($('#content-template-4').html())
       var generatedHTML4 = template4(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       writer.append(generatedHTML4) // 새 tr 태그들로 설정한다.

  }) // getJSON()ile(title)
  
  
  
  
  
  
  
  /* 댓글 insert. 좋아요와 신고는 아직 적용못함.*/
$('#send_btn').click(function() {
   
   $.ajax({
      type: 'POST',
      url: '../comment/add.json',
      data: {cont : $('#text_reply').val(), postno:"1"}, 
      async: false,
      success: function(data) {
    	  
      
         $.getJSON('../comment/list.json', function(result){
        	 console.log(result.data.list);
            let templateFn = Handlebars.compile($('#comment-template').text())
            let generatedHTML5 = templateFn(result.data.list[0]) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
            $('#posted li:first').prepend(generatedHTML5) // 새 tr 태그들로 설정한다.
         })
      }
   });
   
})
  
  
//  
//  $('.submit-reply').click(function() {
//   
//   $.ajax({
//      type: 'POST',
//      url: 'reply/add.json',
//      data: {content : $('.input-reply').val(), zzalnumber : "200"}, 
//      async: false,
//      success: function(data) {
//         $.getJSON('reply/list.json',function(result){
//            let templateFn = Handlebars.compile($('   #reply-insert-template').text())
//            let generatedHTML = templateFn(result.data.list[0]) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//            $('.reply-list li:first').prepend(generatedHTML) // 새 tr 태그들로 설정한다.
//         })
//      }
//   });
//   
//   $.getJSON('reply/countreply.json', function(result) {
//      $('.replycnt span:first-child').html(result.data.countReply);
//   })
//})
  
  
//  var sendbutton = $('#sendbutton');
//      fiCont = $('#fi-cont'),
//      fiDate = $('#fi-date'),
//	  fiAlias = $('#fi-alias');
//	  
//
//  var no = 0
//  try {
//	  no = location.href.split('?')[1].split('=')[1]
//  }catch (err) {}
//  
//  if(no == 0) {
//	   $('#sendbutton').click(function() {
//		   $.post('add.json' , {
//			   'cont': fiCont.val(),
//			   'date': fiDate.val(),
//			   'alias': fiAlias.val()
//		   }, function(result) {
//			   location.href = 'inner_article.html'
//		   },'json')
//	   
//		   })
	   
//  }