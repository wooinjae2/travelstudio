var userDesc= $('.user_desc');


$.getJSON('../profile/info.json', function(result) {

   console.log(result.data);
       var template = Handlebars.compile($('#user-info-template').html())
       var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       userDesc.append(generatedHTML);
       
   $(document.body).on('click', '#mysetting', function(event) {
	   location.href = 'user_setting.html?no=' + $(this).attr('data-no') 
	   event.preventDefault()
	 })
//       generatedHTML.appendTo($('.user_desc')).insertAfter('#mysetting');
//.insertAfter('.')
})
//$.getJSON('../profile/info.json', function(result){
//   console.log(result)
//   let photo = result.data.memberPhoto
//   console.log(result.data.info.memberPhoto)
///*   $('<img>').css('width','200px').attr('src','upload/'+photo+'g.jp').appendTo('#definition')
//  console.log($('img'))    */
//})
//var no = 0
//no = $('#mysetting')
//console.log(no)

//$('#imgchecker').on('click',function(event){
//    $.getJSON('dymember/detail.json', {'no':no}, function(result){
//       console.log(result)
//       let str = result.data.userPic
//       console.log(str)
//       $('<img>').css('width','200px').attr('src','upload/thumbnail/'+str+'_80.jpg').appendTo('#definition')
//      console.log($('img'))    
//    })


