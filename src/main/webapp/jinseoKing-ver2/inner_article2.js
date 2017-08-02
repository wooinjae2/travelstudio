
var content = $('#text_box');


$.getJSON('/travelstudio/post/list.json', function(result) {

	console.log(result.data.list);
	var template2 = Handlebars.compile($('#content-template-2').html())
	var generatedHTML2 = template2(result.data)

	content.append(generatedHTML2) 

}) // getJSON()


/*대표사진 div안에 들어가는 내용*/
var title = $('#blank-one');
$.getJSON('/travelstudio/post/list.json', function(result) {
	console.log(result.data.list);
	var template3 = Handlebars.compile($('#content-template-3').html())
	var generatedHTML3 = template3(result.data) 
	title.append(generatedHTML3) 
}) // getJSON()

/*게시글이 끝날 때 나타나는 작성자 프로필*/
var writer = $('#profile_box');
$.getJSON('/travelstudio/member/info.json', function(result) {
	console.log(result.data.info);
	var template4 = Handlebars.compile($('#content-template-4').html())
	var generatedHTML4 = template4(result.data) 
	writer.append(generatedHTML4)
}) // getJSON()



/*댓글 뿌리기*/
var reply = $('.comment_container');
$.getJSON('/travelstudio/comment/list.json', function(result) {
	console.log(result.data.list);
	var template = Handlebars.compile($('#comment-template').html())
	var generatedHTML = template(result.data)
	reply.append(generatedHTML) 
})

/* 댓글 insert. */
$('#send_btn').click(function() {
	console.log($('#text_reply').val())
	if($('#text_reply').val()==''){
		alert("내용을 입력하세요")
	}else{
		$.ajax({
			type: 'POST',
			url: '../comment/add.json',
			data: {'cont' : $('#text_reply').val(), 'postno':1, 'mno':1}, 
			async: false,
			success: function(data) {

//				/*새로 insert된거 어떻게 뿌림?*/
//				$.getJSON('../comment/list.json', function(result){
//					console.log(result.data.list);
//
////					var template = Handlebars.compile($('#comment-template').html())
////					var generatedHTML = template(result.data) 
////					reply.append(generatedHTML) 
//				})
				
			}
		});// ajax작업 끝나고
	}
	$('#text_reply').val("");
	$('.comment_container > #posted').remove();// 기존에 뿌려졌던 댓글 지워버림

/*새로 포함된 댓글과 함께 뿌림..ha*/
	var reply = $('.comment_container');
	$.getJSON('/travelstudio/comment/list.json', function(result) {
		console.log(result.data.list);
		var template = Handlebars.compile($('#comment-template').html())
		var generatedHTML = template(result.data)
		reply.append(generatedHTML) 


	})
})



/*댓글 delete*/
$('#delete_btn').click(function() {
	console.log("delete버튼 눌렀넹");
    $.getJSON('/travelstudio/delete.json', {'no': no}, function(result) {
    	console.log("delete버튼 눌넹");
      location.href = 'inner_article.html'
    })
  })








