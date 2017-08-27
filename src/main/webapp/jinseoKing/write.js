var fititle = $('#wirte_title'),
fisdt = $('.write_start_date'),
fiedt = $('.write_end_date'),

ficont = $('.text_write_box');

var mno =0;   
var savecount=0;
$.getJSON('../member/header.json', function(result) {

	console.log(result);
	mno=parseInt(result.mno);
	var template = Handlebars.compile($('#tbody-template2').html())
	var generatedHTML = template(result) // 템플릿 함수에 데이터를 넣고 HTML을 생성한다.
//	tbody.text('') // tbody의 기존 tr 태그들을 지우고
	tbody.append(generatedHTML) // 새 tr 태그들로 설정한다.
})

var d = new Date(); 
var localeDate  =  d.toLocaleDateString(); 

/*
$('#write_save_btn').click(function() {

	$.post('../post/add.json', {
		'title': fititle.val(),
		'sdt': fisdt.val(),
		'edt': fiedt.val(),
		'cont':ficont.val(),
		'mno': mno
		 'pdt': localeDate,
      'cont': ficont.val()
	}, function(result) {
//		location.href = '../main_minkdak/main.html'
	}, 'json')
	
	var pictures=[];
	for(i=0;i<=count;i++){
		if($('#text_parent_'+i+'> img')){
			console.log($('#text_parent_'+i+' > img'))
			pictures[i]=$('#text_parent_'+i+' > img')
		}
		console.log(pictures)
	}
	*/
	/*$.post('../post/add.json', {
		'title': fititle.val(),
		'sdt': fisdt.val(),
		'edt': fiedt.val(),
		'cont':ficont.val(),
		'mno': mno
		 'pdt': localeDate,
      'cont': ficont.val()
	}, function(result) {
//		location.href = '../main_minkdak/main.html'
	}, 'json')
	
	
})*/

//$('#file1').fileupload({
//url: '../File/upload.json',        // 서버에 요청할 URL
//dataType: 'json', /* "서버가 보낸 데이터가 JSON 문자열이다. 자바스크립트 객체로 바꿔라." 라는 의미*/
//done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
//console.log('done()...');
//console.log(data.result);
//var file = data.result.fileList[0];
//$.each(data.result.fileList, function(index, file) {
//$('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);

//});

//}
//});



var aaa=0;

/*

$('#write_save_btn').click(function() {
if(savecount==1){
	return;
}
jQuery.ajaxSettings.traditional = true;
$.post('../post/add.json', {
	'title': fititle.val(),
	'sdt': fisdt.val(),
	'edt': fiedt.val(),
	'cont':ficont.val(),
	'mno': mno,
  'cont': ficont.val()
}, function(result) {
//	location.href = '../main_minkdak/main.html'
}, 'json')

var pictures=[];
for(i=0;i<=count;i++){
	if($('#text_parent_'+i+'> img')){
		console.log($('#text_parent_'+i+' > img'))
		pictures[i]=$('#text_parent_'+i+' > img')
	}
	console.log(pictures)
}
});*/



//$('.file1').fileupload({
//    url: '../File/upload.json',        // 서버에 요청할 URL
//    dataType: 'json', /* "서버가 보낸 데이터가 JSON 문자열이다. 자바스크립트 객체로 바꿔라." 라는 의미*/
//    done: function (e, data) {
//
//		console.log($(this).val())
//		console.log(data.files);
//		var no = $(this).attr('class').split('_')[1].split(' ')[0]
//		console.log(no)
//		/*console.log(no)*/
//
//		var imagesDiv = $("#text_parent_"+aaa+"").empty();
//		adddiv()
//		imagesDiv.html("");
//		for (var i = 0; i < data.files.length; i++) {
//			try {
////				console.log($(this).attr('class').split(' ')[1]);
////				no = location.href.split('?')[1].split('=')[1]
//				if (data.files[i].preview.toDataURL) {
//					console.log($("#text_parent_" + aaa))
//					$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '700px').appendTo(imagesDiv);
//				}
//			} catch (err) {}
//		}
//		$('#write_save_btn').unbind("click");
//		$('#write_save_btn').click(function() {
//			$.post('../post/add.json', {
//				'title': fititle.val(),
//				'sdt': fisdt.val(),
//				'edt': fiedt.val(),
//				'cont':ficont.val(),
//				'mno': mno
//				/* 'pdt': localeDate,
//		      'cont': ficont.val()*/
//			}, function(result) {
////				location.href = '../main_minkdak/main.html'
//			}, 'json')
//			
//			var pictures=[];
//			for(i=0;i<=count;i++){
//				if($('#text_parent_'+i+'> img')){
//					console.log($('#text_parent_'+i+' > img'))
//					pictures[i]=$('#text_parent_'+i+' > img')
//				}
//				console.log(pictures)
//		}
//			
//		});
//	 // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
////      console.log('done()...');
////      console.log(data.result);
//      /*
//      var file = data.result.fileList[0];
//      $.each(data.result.fileList, function(index, file) {
//        $('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
//      });*/
//      
//    }
//});

/*	var content=[];
console.log()
for(i=0; i<$('.text_write_box').length;i++){
	content[i]=$('.text_write_box').val();
	console.log(content[i])
}*/
/*var tempArray = new Array();
$('.text_write_box').each(function(){
    tempArray.push($(this).attr('value'));
});
console.log(tempArray)
*/
var date = new Date();
var content = []
$('#write_save_btn').click(function() {
	if(savecount==1){
		return;
	}
	$('.text_write_box').each(function () {
	     console.log($(this).val())
	     content.push($(this).val())
	  })
	  
	console.log($('.text_write_box'))
	console.log(ficont.val());
	if(fititle.val() == null){
		alert("제목을 입력해주세요")
	}else if(fisdt.val()== null||fiedt.val()==null){
		alert("날짜를 입력해 주세요")
	}else{
		console.log(content);
		jQuery.ajaxSettings.traditional = true;

	$.post('../post/add.json', {
		'title': fititle.val(),
		'sdt': fisdt.val(),
		'edt': fiedt.val(),
		'mno': mno,
		'content': content,
		 'pdt': localeDate,
      'cont': ficont.val()
	}, function(result) {
		console.log(result.data)
		
//		location.href = '../main_minkdak/main.html'
	}, 'json')
	}
});
/*	var pictures=[];
	for(i=0;i<=count;i++){
		if($('#text_parent_'+i+'> img')){
			console.log($('#text_parent_'+i+' > img'))
			pictures[i]=$('#text_parent_'+i+' > img')
		}
		console.log(pictures)
	}*/
	


/*미리보기 파일업로드*/

$('.file1').fileupload({
	url: '../File/upload.json',        // 서버에 요청할 URL
	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	autoUpload: true,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
		previewMaxWidth: 700,   // 미리보기 이미지 너비
		previewMaxHeight: 560,  // 미리보기 이미지 높이 
		previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
		processalways: function(e, data) {

			console.log('fileuploadprocessalways()...');
			console.log($(this).val())
			console.log(data.files);
			var no = $(this).attr('class').split('_')[1].split(' ')[0]
			console.log(no)
			/*console.log(no)*/

			var imagesDiv = $("#text_parent_"+aaa+"").empty();
			adddiv()
			imagesDiv.html("");
			for (var i = 0; i < data.files.length; i++) {
				try {
					
//					console.log($(this).attr('class').split(' ')[1]);
//					no = location.href.split('?')[1].split('=')[1]
					if (data.files[i].preview.toDataURL) {
						console.log($("#text_parent_" + aaa))
						$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '700px').appendTo(imagesDiv);
					}
				} catch (err) {}
			}
			/*$('#write_save_btn').unbind("click");*/
			
		}, 
		
		
		done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
			console.log('done()...');
			console.log(data.result);
			var file = data.result.fileList[0];
			/*$('<p/>').text("name : " + data.result.name).appendTo(document.body);
			$('<p/>').text("age : " + data.result.age).appendTo(document.body);*/
			$.each(data.result.fileList, function(index, file) {
				$('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
			});
		}
});




/*미리보기 파일업로드 끝*/

/*back file 업로드 시작*/

$('#title_fileupload').fileupload({
	url: '../post/add.json',        // 서버에 요청할 URL
	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	sequentialUploads: false,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	singleFileUploads: true, // 한 요청에 여러 개의 파일을 전송시키기.
	autoUpload: false,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
		previewMaxWidth: 1920,   // 미리보기 이미지 너비
		previewMaxHeight: 800,  // 미리보기 이미지 높이 
		previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
		processalways: function(e, data) {
			savecount=1;
			console.log('fileuploadprocessalways()...');
			console.log($(this).val())
			console.log(data.files);
			/*var no = $(this).attr('class').split('_')[1].split(' ')[0]*/
			/*console.log(no)*/
			/*console.log(no)*/

			/*var imagesDiv = $("#text_parent_"+aaa+"").empty();*/
			
			/*imagesDiv.html("");*/
			for (var i = 0; i < data.files.length; i++) {
				try {
//					console.log($(this).attr('class').split(' ')[1]);
//					no = location.href.split('?')[1].split('=')[1]
					if (data.files[i].preview.toDataURL) {
						/*console.log($("#text_parent_" + aaa))*/
						var a = data.files[i].preview.toDataURL()
						console.log(a)
						var img = new Image();
						img.src = a;
						$(".blank-one").css("background-image", "url('" + img.src + "')");
						
					}
				} catch (err) {}
			} 
			/*$('#write_save_btn').unbind("click");*/
		      $('#write_save_btn').click(function() {
		    	 		          data.submit();
		      }); 
		}, submit: function (e, data){ // 서버에 전송하기 직전에 호출된다.
			    console.log('submit()...');
			    $('.text_write_box').each(function () {
	    		     /*console.log($(this).val())*/
	    		     content.push($(this).val())
	    		   console.log(data.files[0])
	    		  })
console.log(content)
			    data.formData = {
			    		title : fititle.val(),
			    		sdt: fisdt.val(),
			    		edt: fiedt.val(),
			    		mno: mno,
			    		content: content
			    }
			      /*  name: $('#name').val(),
			        age: $('#age').val()
			    };*/
			
		}, 
		
		
		done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
			console.log('done()...');
			console.log(data);
			
			/*$('<p/>').text("name : " + data.result.name).appendTo(document.body);
			$('<p/>').text("age : " + data.result.age).appendTo(document.body);*/
			$.each(data.result.fileList, function(index, file) {
				$('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
			});
			savecount=0;
		}
		
});


/* 민섭 파일 전체 올리기*/
$('#fileAllUpload').fileupload({
	url: '../File/upload4.json',        // 서버에 요청할 URL
	dataType: 'json',         // 서버가 보낸 응답이 JSON임을 지정하기
	sequentialUploads: true,  // 여러 개의 파일을 업로드 할 때 순서대로 요청하기.
	singleFileUploads: false, // 한 요청에 여러 개의 파일을 전송시키기.
	autoUpload: true,        // 파일을 추가할 때 자동 업로딩 하지 않도록 설정.
	disableImageResize: /Android(?!.*Chrome)|Opera/
		.test(window.navigator && navigator.userAgent), // 안드로이드와 오페라 브라우저는 크기 조정 비활성 시키기
		previewMaxWidth: 700,   // 미리보기 이미지 너비
		previewMaxHeight: 560,  // 미리보기 이미지 높이 
		previewCrop: true,      // 미리보기 이미지를 출력할 때 원본에서 지정된 크기로 자르기
		processalways: function(e, data) {

			console.log('fileuploadprocessalways()...');
			console.log($(this).val())
			console.log(data.files);
			/*console.log(no)*/

			var imagesDiv = $("#text_parent_"+aaa+"").empty();
			adddiv()
			imagesDiv.html("");
			for (var i = 0; i < data.files.length; i++) {
				try {
//					console.log($(this).attr('class').split(' ')[1]);
//					no = location.href.split('?')[1].split('=')[1]
					if (data.files[i].preview.toDataURL) {
						console.log($("#text_parent_" + aaa))
						$("<img>").attr('src', data.files[i].preview.toDataURL()).css('width', '100px').appendTo(imagesDiv);
					}
				} catch (err) {}
			}
			$('#write_save_btn').unbind("click");
			
		}, 
		
		
		done: function (e, data) { // 서버에서 응답이 오면 호출된다. 각 파일 별로 호출된다.
			console.log('done()...');
			console.log(data.result);
			var file = data.result.fileList;
			/*$('<p/>').text("name : " + data.result.name).appendTo(document.body);
			$('<p/>').text("age : " + data.result.age).appendTo(document.body);*/
			$.each(data.result.fileList, function(index, file) {
				$('<p/>').text(file.filename + " : " + file.filesize).appendTo(document.body);
			});
		}
});



/*back file up 끝*/




/* 드래그드롭 시작*/
function stopFunction(currentParent,$this){
	  var stopFunctionArray=[];
	   for(i=0; i<$('img', currentParent).length;i++){
		   /* if($('img',currentParent).eq(i).attr('src')!=$('img',$this).attr('src')){ */
			 stopFunctionArray[i]=$('img',currentParent).eq(i).attr('src')
		   /* } */
		   console.log('커런트 페어런츠 소스',$('img',currentParent).eq(i).attr('src'))
		   console.log('디스 이미지 소스',$('img',$this).attr('src'))
		   console.log(stopFunctionArray[i])
	   }
       console.log(currentParent)
       console.log($(currentParent).parent())
       console.log(stopFunctionArray)
          countPhoto="";
       /* if(currentCollageSize */
     		  if ($(currentParent).attr('class').split('_')[1].charAt(7) == '3') {
     	  $(currentParent)
	             .html("<div  class='two_photo_col' id='collage2-1-count" +countPhoto +"'><img id='img_4' src=''></div>"
	              + "<div  class='two_photo_col' id='collage2-2-count" +countPhoto +"'><img id='img_4' src=''></div>"
	              + "</div>")
	              $('#collage2-1-count'+ countPhoto +'> img').attr('src',stopFunctionArray[0]).css('width', '534px').css('height','534px');
	              $('#collage2-2-count'+ countPhoto +'> img').attr('src',stopFunctionArray[1]).css('height','534px');
	         /*      console.log(photo[i][0])
	              console.log(photo[i][1]) */
	              $(currentParent).attr("class","whole_collage2")
         makeDropable($(currentParent))
         makeDragable($(currentParent))
	              stopFunctionArray.splice(0,stopFunctionArray.length)
	         } else if ($(currentParent).attr('class').split('_')[1].charAt(7) == '4') {
	            
//	           
	            try {
	            	$(currentParent)
	              .html("<div class='collage3-big' id='collage3-1-big"+countPhoto+"'><img src=''></div>"
	               + "<div class='collage3_2inner_collage'>"
	               + "<div class='inner_two_collage' id='collage3-2"+countPhoto+"'><img src=''></div>"
	               + "<div class='inner_two_collage' id='collage3-3"+countPhoto+"'><img src=''></div>"
	               + "</div></div>")
	               $('#collage3-1-big'+ countPhoto +' > img').attr('src', stopFunctionArray[0]).css('width', '534px').css('height','534px');
	               $('#collage3-2'+ countPhoto +' > img').attr('src', stopFunctionArray[1]).css('width', '260px').css('height','265px');
	               $('#collage3-3'+ countPhoto +' > img').attr('src',stopFunctionArray[2]).css('width', '260px').css('height','265px');
	               $(currentParent).attr("class","whole_collage3")
	               makeDropable($(currentParent))
	               makeDragable($(currentParent))
	               stopFunctionArray.splice(0,stopFunctionArray.length)
	            } catch (err) {}
	         }else if ($(currentParent).attr('class').split('_')[1].charAt(7) == '5') {
	            
	            	$(currentParent)
	             .html("<div class='four_photo_collage' id='collage4-1" +countPhoto +"'><img src=''></div>"
	              + "<div class='four_photo_collage' id='collage4-2" +countPhoto +"'><img src=''></div>"
	              + "<div class='four_photo_collage' id='collage4-3" +countPhoto +"'><img src=''></div>"
	              + " <div class='four_photo_collage' id='collage4-4" +countPhoto +"'><img src=''></div>"
	              + "</div>"
	              )
	              
	             $('#collage4-1'+ countPhoto +' > img').attr('src', stopFunctionArray[0]).css('width', '397px').css('height','397px');
	             $('#collage4-2'+ countPhoto +' > img').attr('src', stopFunctionArray[1]).css('width', '397px').css('height','397px');
	             $('#collage4-3'+ countPhoto +' > img').attr('src', stopFunctionArray[2]).css('width', '397px').css('height','397px');
	             $('#collage4-4'+ countPhoto +' > img').attr('src', stopFunctionArray[3]).css('width', '397px').css('height','397px');
	             $(currentParent).attr("class","whole_collage4")
	             stopFunctionArray.splice(0,stopFunctionArray.length)
	             makeDropable($(currentParent))
	             makeDragable($(currentParent))
	         } else if ($(currentParent).attr('class').split('_')[1].charAt(7) == '6') {
	            
	            	$(currentParent)
	              .html("<div  class='top_three_collage' id='collage5-1" +countPhoto +"'><img src=''></div>"
	              + "<div  class='top_three_collage' id='collage5-2" +countPhoto +"'><img src=''></div>"
	              + "<div  class='top_three_collage' id='collage5-3" +countPhoto +"'><img src=''></div>"

	              + "<div  class='bottom_two_collage' id='collage5-4" +countPhoto +"'><img src=''></div>"
	              + "<div  class='bottom_two_collage' id='collage5-5" +countPhoto +"'><img src=''></div>"
	              + "</div>")
	             $('#collage5-1'+ countPhoto +' > img').attr('src', stopFunctionArray[0]).css('width', '260px').css('height','260px');
	             $('#collage5-2'+ countPhoto +' > img').attr('src', stopFunctionArray[1]).css('width', '259px').css('height','260px');
	             $('#collage5-3'+ countPhoto +' > img').attr('src', stopFunctionArray[2]).css('width', '260px').css('height','260px');
	             
	             $('#collage5-4'+ countPhoto +' > img').attr('src', stopFunctionArray[3]).css('width', '397px').css('height','397px');
	             $('#collage5-5'+ countPhoto +' > img').attr('src', stopFunctionArray[4]).css('width', '397px').css('height','397px');
	             $(currentParent).attr("class","whole_collage5")
	             stopFunctionArray.splice(0,stopFunctionArray.length)
	             makeDropable($(currentParent))
	             makeDragable($(currentParent))
	         }else if($(currentParent).attr('class').split('_')[1].charAt(7)=='7'){
       	
       	$(currentParent)
           .html("<div class='collage6-big' id='collage6-1-big'" +countPhoto +"><img id='img_4' src=''></div>"
            +"<div id='collage6-2side-collage'>"
            +"<div class='side_two_collage' id='collage6-2'" +countPhoto +"><img src=''></div>"
            +"<div class='side_two_collage' id='collage6-3'" +countPhoto +"><img src=''></div>"
            +"</div>"

            +"<div  class='bottom_three_collage' id='collage6-4" +countPhoto +"'><img id='img_4' src=''></div>"
            +"<div  class='bottom_three_collage' id='collage6-5" +countPhoto +"'><img id='img_4' src=''></div>"
            +"<div  class='bottom_three_collage' id='collage6-6" +countPhoto +"'><img id='img_4' src=''></div>"
            +"</div>"
            )
         $('#collage6-1-big'+ countPhoto +' > img').attr('src', stopFunctionArray[0]).css('width', '534px').css('height','534px');
         $('#collage6-2'+ countPhoto +' > img').attr('src', stopFunctionArray[1]).css('width', '260px').css('height','265px');
         $('#collage6-3'+ countPhoto +' > img').attr('src', stopFunctionArray[2]).css('width', '260px').css('height','265px');
         
         $('#collage6-4'+ countPhoto +' > img').attr('src', stopFunctionArray[3]).css('width', '264px').css('height','260px');
         $('#collage6-5'+ countPhoto +' > img').attr('src', stopFunctionArray[4]).css('width', '264px').css('height','260px');
         $('#collage6-6'+ countPhoto +' > img').attr('src', stopFunctionArray[5]).css('width', '264px').css('height','260px');
         $(currentParent).attr("class","whole_collage6")
         stopFunctionArray.splice(0,stopFunctionArray.length)
         makeDropable($(currentParent))
         makeDragable($(currentParent))
        } else if ($(currentParent).attr('class').split('_')[1].charAt(7) == '8') {
     	   $(currentParent)
		                .html("<div class='four_of_seven'>"
		                +"<div class='right_four_of_seven' id='collage7-1-small" +countPhoto +"'><img src=''></div>"
		                +"<div class='right_four_of_seven' id='collage7-2-small" +countPhoto +"'><img src=''></div>"
		                +"<div class='right_four_of_seven' id='collage7-3-small" +countPhoto +"'><img src=''></div>"
		                +"<div class='right_four_of_seven' id='collage7-4-small" +countPhoto +"'><img src=''></div>"
		                +"</div>"


		                +"<div  class='bottom_three_of_seven' id='collage7-5" +countPhoto +"'><img src=''></div>"
		                +"<div  class='bottom_three_of_seven' id='collage7-6" +countPhoto +"'><img src=''></div>"
		                +"<div  class='bottom_three_of_seven' id='collage7-7" +countPhoto +"'><img src=''></div>"
		                +"</div>"
		                )
		                $('#collage7-1-small'+ countPhoto +' > img').attr('src', stopFunctionArray[0]).css('width', '192px').css('height','193px');
		                $('#collage7-2-small'+ countPhoto +' > img').attr('src', stopFunctionArray[1]).css('width', '192px').css('height','193px');
		                $('#collage7-3-small'+ countPhoto +' > img').attr('src', stopFunctionArray[2]).css('width', '192px').css('height','193px');
		                $('#collage7-4-small'+ countPhoto +' > img').attr('src', stopFunctionArray[3]).css('width', '192px').css('height','193px');
		                
		                $('#collage7-5'+ countPhoto +' > img').attr('src', stopFunctionArray[4]).css('width', '397px').css('height','397px');
		                $('#collage7-6'+ countPhoto +' > img').attr('src', stopFunctionArray[5]).css('width', '397px').css('height','397px');
		                $('#collage7-7'+ countPhoto +' > img').attr('src', stopFunctionArray[6]).css('width', '397px').css('height','397px');
		                $(currentParent).attr("class","whole_collage7")
	             stopFunctionArray.splice(0,stopFunctionArray.length)
	             makeDropable($(currentParent))
	             makeDragable($(currentParent))
        }
}

function resizeCollage( $this,$item ) {
	  /* console.log($this)
	  console.log($($item).children().attr('src'))
	  console.log($($this).attr('class').split('_')[1].charAt(7))
	  console.log($('img', $this)) */
	  console.log($item)
	  console.log( $($item).children().attr('src'))
	  var resizeCollageArray=[]
	   for(i=0; i<$('img', $this).length;i++){
		   resizeCollageArray[i]=$('img', $this).eq(i).attr('src')
		   console.log(resizeCollageArray[i])
	   }
	  var countPhoto="";
	  if($($this).attr('class').split('_')[1].charAt(7)=='5'){
		        	  $($this)
	               .html("<div class='collage6-big' id='collage6-1-big'" +countPhoto +"><img id='img_4' src=''></div>"
	                +"<div id='collage6-2side-collage'>"
	                +"<div class='side_two_collage' id='collage6-2'" +countPhoto +"><img src='ca.jpg'></div>"
	                +"<div class='side_two_collage' id='collage6-3'" +countPhoto +"><img src='mrbike.PNG'></div>"
	                +"</div>"

	                +"<div  class='bottom_three_collage' id='collage6-4" +countPhoto +"'><img id='img_4' src=''></div>"
	                +"<div  class='bottom_three_collage' id='collage6-5" +countPhoto +"'><img id='img_4' src=''></div>"
	                +"<div  class='bottom_three_collage' id='collage6-6" +countPhoto +"'><img id='img_4' src=''></div>"
	                +"</div>"
	                )
	             $('#collage6-1-big'+ countPhoto +' > img').attr('src', resizeCollageArray[0]).css('width', '534px').css('height','534px');
	             $('#collage6-2'+ countPhoto +' > img').attr('src', resizeCollageArray[1]).css('width', '260px').css('height','265px');
	             $('#collage6-3'+ countPhoto +' > img').attr('src', resizeCollageArray[2]).css('width', '260px').css('height','265px');
	             
	             $('#collage6-4'+ countPhoto +' > img').attr('src', resizeCollageArray[3]).css('width', '264px').css('height','260px');
	             $('#collage6-5'+ countPhoto +' > img').attr('src', resizeCollageArray[4]).css('width', '264px').css('height','260px');
	             $('#collage6-6'+ countPhoto +' > img').attr('src', $($item).children().attr('src')).css('width', '264px').css('height','260px');
	             $($this).attr("class","whole_collage6")
	              makeDropable($($this))
         makeDragable($($this))
         resizeCollageArray.splice(0,resizeCollageArray.length)
	            return;
	         } else if ($($this).attr('class').split('_')[1].charAt(7)=='6') {
	            	$($this)
	                .html("<div class='four_of_seven'>"
	                +"<div class='right_four_of_seven' id='collage7-1-small" +countPhoto +"'><img src=''></div>"
	                +"<div class='right_four_of_seven' id='collage7-2-small" +countPhoto +"'><img src=''></div>"
	                +"<div class='right_four_of_seven' id='collage7-3-small" +countPhoto +"'><img src=''></div>"
	                +"<div class='right_four_of_seven' id='collage7-4-small" +countPhoto +"'><img src=''></div>"
	                +"</div>"


	                +"<div  class='bottom_three_of_seven' id='collage7-5" +countPhoto +"'><img src=''></div>"
	                +"<div  class='bottom_three_of_seven' id='collage7-6" +countPhoto +"'><img src=''></div>"
	                +"<div  class='bottom_three_of_seven' id='collage7-7" +countPhoto +"'><img src=''></div>"
	                +"</div>"
	                )
	                $('#collage7-1-small'+ countPhoto +' > img').attr('src', resizeCollageArray[0]).css('width', '192px').css('height','193px');
	                $('#collage7-2-small'+ countPhoto +' > img').attr('src', resizeCollageArray[1]).css('width', '192px').css('height','193px');
	                $('#collage7-3-small'+ countPhoto +' > img').attr('src', resizeCollageArray[2]).css('width', '192px').css('height','193px');
	                $('#collage7-4-small'+ countPhoto +' > img').attr('src', resizeCollageArray[3]).css('width', '192px').css('height','193px');
	                
	                $('#collage7-5'+ countPhoto +' > img').attr('src', resizeCollageArray[4]).css('width', '397px').css('height','397px');
	                $('#collage7-6'+ countPhoto +' > img').attr('src', resizeCollageArray[5]).css('width', '397px').css('height','397px');
	                $('#collage7-7'+ countPhoto +' > img').attr('src', $($item).children().attr('src')).css('width', '397px').css('height','397px');
	                    aaa=[]
	                $($this).attr("class","whole_collage7")
	                 makeDropable($($this))
         makeDragable($($this))
	                 resizeCollageArray.splice(0,resizeCollageArray.length)
	                return;
	         } else if ($($this).attr('class').split('_')[1].charAt(7)=='7') {
		            
		           		
		           		
		              $($this)
		               .html("<div class='collage8-1' id='collage8-1-big" +countPhoto +"'><img src=''></div>"
		                 +"<div  id='four_of_eight'>"
		                 +"<div class='right_four_of_eight' id='collage8-2" +countPhoto +"'><img src=''></div>"
		                 +"<div class='right_four_of_eight' id='collage8-3" +countPhoto +"'><img src=''></div>"
		                 +"<div class='right_four_of_eight' id='collage8-4" +countPhoto +"'><img src=''></div>"
		                 +"<div class='right_four_of_eight' id='collage8-5" +countPhoto +"'><img src=''></div>"
		                 +"</div>"

		                 +"<div  class='bottom_three_of_eight' id='collage8-6" +countPhoto +"'><img src=''></div>"
		                 +"<div  class='bottom_three_of_eight' id='collage8-7" +countPhoto +"'><img src=''></div>"
		                 +"<div  class='bottom_three_of_eight' id='collage8-8" +countPhoto +"'><img src=''></div>"
		                 +"</div>"
		                 )
		              

		               
		             $('#collage8-1-big'+ countPhoto +' > img').attr('src', resizeCollageArray[0]).css('width', '397px').css('height','397px');
		             $('#collage8-2'+ countPhoto +' > img').attr('src', resizeCollageArray[1]).css('width', '195px').css('height','195px');
		             $('#collage8-3'+ countPhoto +' > img').attr('src', resizeCollageArray[2]).css('width', '195px').css('height','195px');
		             $('#collage8-4'+ countPhoto +' > img').attr('src', resizeCollageArray[3]).css('width', '195px').css('height','195px');
		             $('#collage8-5'+ countPhoto +' > img').attr('src', resizeCollageArray[4]).css('width', '195px').css('height','195px');
		             
		             $('#collage8-6'+ countPhoto +' > img').attr('src', resizeCollageArray[5]).css('width', '262px').css('height','260px');
		             $('#collage8-7'+ countPhoto +' > img').attr('src', resizeCollageArray[6]).css('width', '262px').css('height','260px');
		             $('#collage8-8'+ countPhoto +' > img').attr('src', $($item).children().attr('src')).css('width', '262px').css('height','260px');
		             
		            $($this).attr("class","whole_collage8")
         resizeCollageArray.splice(0,resizeCollageArray.length)
		             makeDropable($($this))
         makeDragable($($this))
		            return;
	         }
	  console.log($item)
}



function makeDropable($thisclass){
	console.log($thisclass)
	console.log($('img',$thisclass).parent())
	console.log($('img').parent())
	  $($thisclass).droppable({
	       accept: (function(){
	    	   for(j=0; j< $('img').parent().length; j++){
	    		   return $('img').parent().eq(j)
	    	   }
	       }), 
	      drop: function( event, ui ) {
	    	  console.log(this)
	    	  /* console.log($(ui.draggable).parent().attr('class').split('_')[1].charAt(7)) */
	    	  dropdiv=$(this).attr('class').split('_')[1].charAt(7)
	    	  /* console.log($(this).attr('class').split('_')[1].charAt(7)) */
	    	  console.log($(this).attr('class'))
	    	  if($(ui.draggable).parent().attr('class') == undefined||$(ui.draggable).parent().attr('class').split('_')[0]!='whole'){
	    		  if($(this).attr('class').split('_')[1].charAt(7)!=$(ui.draggable).parent().parent().attr('class').split('_')[1].charAt(7)){
	    	    	  resizeCollage( this, ui.draggable);}
	    	  	}else{
	    	  if($(this).attr('class').split('_')[1].charAt(7)!=$(ui.draggable).parent().attr('class').split('_')[1].charAt(7)||$(ui.draggable).parent().attr('class')==undefined){
	    	  resizeCollage( this, ui.draggable);
	    	  }
	    	  }
	      }
	    })
}; 
function makeDragable($thisclass){
	console.log($("img",$thisclass))
	for(i=0; i< $("img",$thisclass).length;i++){
	 $(function() {
	    $( $("img",$thisclass).eq(i)).parent().draggable({
	    	 revert: 'invalid', 	
	    	     start: function(){
	    	    	 console.log('1111')
	    	    	 if($(this).parent().attr('class')==undefined){
	    	    		 currentCollageSize=$(this).parent().parent().attr('class').split('_')[1].charAt(7)}
	    	    	 else{
	    	    	 currentCollageSize=$(this).parent().attr('class').split('_')[1].charAt(7)
	    	    	 }
               }, /* start끝 */
	      stop: function() {
	    	  console.log(this)
	    	  currentParent = $thisclass;
	    	  console.log($(this).parent())
	    	  console.log(currentParent)
		    	 var aaa=[]
		    	 console.log("stop 들어왔다")
		  	   for(i=0; i<$('img', currentParent).length;i++){
		  		   aaa[i]=$('img',currentParent).eq(i).attr('src')
		  		   console.log(aaa[i])
		  	   }
	    	  console.log

	    	  console.log(currentParent)
		  		    if(dropdiv!=currentCollageSize){ 
		  			 stopFunction(currentParent,aaa)
		  		    } 
		  	   }
	      })  
	    });
 } 
	}
	
function showControlBox() {
	   $(document).ready(function() {
	          if($('.control_box').css("display") == "block") {
	            $('.control_box').css('display', 'none');
	          } else {
	        $('.control_box').css('display', 'block');
	      }
	      console.log("누름")
	      })
	      return false;
	   }

/*드래그드롭끝*/