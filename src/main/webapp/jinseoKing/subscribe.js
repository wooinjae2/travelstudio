var mno;
var mno2;
$.getJSON('../member/header.json', function(result) {
	mno = result.data.loginMember.mno;
	console.log("---------------------");
	console.log(mno);
	console.log(result);
	console.log(result.status);
	console.log(result.data.loginMember.mno);
})


 $.getJSON('/travelstudio/follow/listByloginMember.json',{
	'mno':mno
	 },
	 function(result) { 
		
	console.log(mno)
	 console.log(result.data.list)
	 var sub_list=[];
	 var sub_count=[];
	 var suv_count=0;
	 
	 for(i=0;i<result.data.list.length;i++){
		 if(result.data.list[i]!=null){
			 if(result.data.list[i]!=undefined){
		 sub_list[sub_count++]=result.data.list[i].mno2
		 console.log(result.data.list[i].mno2)
		 mno2 =result.data.list[i].mno2;
		 console.log(mno2)
		 
			 }
	 }
		 console.log(mno2)
		 $.getJSON('/travelstudio/member/subMember.json',{
			 'mno':mno2 
		 }, function(result) {
			 console.log(result);
			 var template = Handlebars.compile($('#subMember-template').html())
			 var generatedHTML = template(result.data.subMember) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//		tbody.text('') // tbody의 기존 tr 태그들을 지우고
		   $('#sub_container').append(generatedHTML) // 새 tr 태그들로 설정한다.
		 })
	 }
}) // getJSON()
	
	
	
//	
//   select f.mno2, m.mno
//  from member m left join follow f on f.mno=m.mno
//  where m.mno=8; 
