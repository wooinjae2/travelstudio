var userDesc= $('.user_desc');

var alias= location.href.split('?')[1]
var loginMemberNo = 0;
console.log(alias)
console.log(encodeURI(alias, "UTF-8"))
if(alias!=null){
	$('#mysetting').attr('display','none;')
	$.post('../member/searchOneUser.json', {
		'alias': alias
		},function(result) {
			console.log(result.data)
			var template = Handlebars.compile($('#user-info-template').html())
		       var generatedHTML = template(result.data.Member) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//		       tbody.text('') // tbody의 기존 tr 태그들을 지우고
		       userDesc.append(generatedHTML);
		       
		   $(document.body).on('click', '#mysetting', function(event) {
			   location.href = 'user_setting.html'
			   event.preventDefault()
			 })
			 let str = result.path;
		    if(str == null ) {
		      $('#user-img').attr('src', './usercircle.png').css('width', '170px').css('height', '170px').css('border-radius', '100%')
		    } else {
			  $('#user-img').attr('src', '../upload/' + str).css('width', '170px').css('height', '170px').css('border-radius', '100%')
		    }
		    
		    var template = Handlebars.compile($('#content-template').html())
		      var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//		      tbody.text('') // tbody의 기존 tr 태그들을 지우고
		      $('.travle_list').append(generatedHTML) // 새 tr 태그들로 설정한다.
			
//		       generatedHTML.appendTo($('.user_desc')).insertAfter('#mysetting');
		//.insertAfter('.')
		})
	
}else{
$.getJSON('../member/header.json', function(result) {

   console.log(result);
       var template = Handlebars.compile($('#user-info-template').html())
       loginMemberNo=result.data.loginMember.mno
       var generatedHTML = template(result.data.loginMember) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//       tbody.text('') // tbody의 기존 tr 태그들을 지우고
       userDesc.append(generatedHTML);
       
   $(document.body).on('click', '#mysetting', function(event) {
	   location.href = 'user_setting.html'
	   event.preventDefault()
	 })
	 
	 let str = result.data.loginMember.path;
    if(str == null ) {
      $('#user-img').attr('src', './usercircle.png').css('width', '170px').css('height', '170px').css('border-radius', '100%')
    } else {
	  $('#user-img').attr('src', '../upload/' + str).css('width', '170px').css('height', '170px').css('border-radius', '100%')
    }
	
    inviteMessage(loginMemberNo)
    selectLoginUserPost()
})

function selectLoginUserPost(){
	console.log(loginMemberNo)
$.post('../post/selectOneUserPost.json',{'number':loginMemberNo}, function(result) {
	  console.log(result);
      var template = Handlebars.compile($('#content-template').html())
      var generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//      tbody.text('') // tbody의 기존 tr 태그들을 지우고
      $('.travle_list').append(generatedHTML) // 새 tr 태그들로 설정한다.
      dropdown()
  console.log(result.data.list)
  
})
}
}

/* 민섭 - 여행기 삭제 */

//삭제 버튼 클릭시 타깃 넘버 받아오기.
var targetpostno=0;
$(document).on("click",".delete_travel",function(){
	
	targetpostno=$(this).attr('data-value')

	console.log("postno 뜰거다 ================>",targetpostno)
	$('#modal').css('display','inline-block')
	$('#delete_wrap').css('display','inline-block')
	deleteYes(targetpostno)
})

function deleteYes(postno) {
$('#delete-yes-btn').click(function() {
	console.log(postno)
	$.post('../post/delete.json', {
		'postno' : postno
	}, function(result) {
		console.log(result)
	}, 'json')
	
	$('.post_list[data-post='+ postno +']').parent().parent().parent().remove()
}) 
}

/* 친구 초대 수락 */
var coworksave
var checkNo= '';
var requestPost =[];
function inviteMessage(memberNo) {
	$.post('../cowork/checkInvite.json', {mno: memberNo}, function(result) {
		console.log(result.data)
		if(result.data.length != 0) {
		for (var i = 0; i < result.data.length; i++) {
			requestPost.push(result.data[i].postno)
		} // for 문: i
		coworksave=result.data
		console.log("========>", result.data)
		console.log(result.data.length)
		console.log(coworksave.length)
			
			console.log(requestPost)
			/* 초대 받은 사진 뿌리기*/
		jQuery.ajaxSettings.traditional = true;
			$.post('../post/invitingUserPost.json', {'requestPost':requestPost}, function(result) {
		  console.log(result.data.invitingUserPost.length);
	      var template = Handlebars.compile($('#content-request-template').html())
	      var generatedHTML;
	      console.log(result.pdt)
	    	  generatedHTML = template(result.data) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
	    	  $('.travle_list').append(generatedHTML) // 새 tr 태그들로 설정한다.	    	  
	      /*dropdown()*/
	      
//	      console.log("빨리===========>", )
	      for(var j = 0; j < result.data.invitingUserPost.length; j++){
	    	for(var k = 0; k < coworksave.length; k++){
				console.log("변경전======>",result.data.invitingUserPost[j].sdt)
				if(result.data.invitingUserPost[j].postno == coworksave[k].postno) {
					result.data.invitingUserPost[j].sdt = coworksave[k].confirm 
				console.log("변경후=======>", result.data.invitingUserPost[j].sdt)
				} // if 문
				
			}// for 문: k 
	    	if(result.data.invitingUserPost[j].sdt == 1) {
	    		$('#invite_request_'+result.data.invitingUserPost[j].postno).css('display', 'none'); 
	    	}
	      }// for 문: j
	      
//	      }
	      /*if(result.sdt==0){
	    	  
	      }*/
	  console.log(result.data)
	  
	}) // $.post invitingUserPost
			acceptRequest(memberNo)
			refuseRequest(memberNo)
  } // if 문
	})// $.post
	
	
}

function loadRequestPost(requestPost) {
	
}
function acceptRequest(memberNo) {
$(document.body).on('click', '.btn_accept', function() {
	   var selectPostNo = $(this).parents('.box_request').attr('id').split('_')[2]
	   console.log(selectPostNo ,memberNo)
	   let PostMemberNo = []
	   PostMemberNo.push(selectPostNo)
	   PostMemberNo.push(memberNo)
	   
	   jQuery.ajaxSettings.traditional = true;
	   $.post('../cowork/acceptRequest.json', {'memberPostNo': PostMemberNo}, function(result) {
		   console.log(result)
		})
		
	$(this).parents('.box_request').remove();
//	   event.preventDefault()
	 })
}

function refuseRequest(memberNo) {
	$(document.body).on('click', '.btn_reject', function() {
		var selectPostNo = $(this).parents('.box_request').attr('id').split('_')[2]
		let PostMemberNo = []
		PostMemberNo.push(selectPostNo)
		PostMemberNo.push(memberNo)
		jQuery.ajaxSettings.traditional = true;
		/*$.post('../cowork/refuseRequest.json', {'memberPostNo': PostMemberNo}, function(result) {
			   console.log(result)
		})*/
		$(this).parents('.travel_item').remove()
	})
}

