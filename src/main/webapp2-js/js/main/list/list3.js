

$.getJSON('/post/list.json', function(result) {

   console.log(result.data.list);
       var template = Handlebars.compile($('#content-template').html())
       var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       $('.content-container').append(generatedHTML) // 새 tr 태그들로 설정한다.

  }) // getJSON()ile(title)
  
  function search(){
  $.post('/post/search.json', {
		'keyword': $('#search_bar').val()
	}, function(result) {
		console.log(result.data)
		$('.content-container > li').remove();
		var template = Handlebars.compile($('#content-template').html())
//		var generatedHTML = template('') // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
		/*$('.content-container > li').text('') // tbody의 기존 tr 태그들을 지우고
		 */		var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
		  $('.content-container').append(generatedHTML) // 새 tr 태그들로 설정한다.
		 console.log(result.data)

//		 location.href = '../main_minkdak/main.html'
	}, 'json')
}