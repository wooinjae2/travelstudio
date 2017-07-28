var aliasIp = $('#name-input'),
	introIp = $('#int-input'),
	txtAlias = $('#txt_alias'),
	txtEmail = $('#txt_email')
	//	userInfo = $('.user_setting_info')
var no = 0
no = location.href.split('?')[1].split('=')[1]
console.log(no)
//try {
//} catch (err) {}

//if(no != 0) {
//userInfo.css('display', 'none')

//$("document").ready(function(){]

$.getJSON('../profile/detail.json', {'no': no}, function(result) {
	var data = result.data
	console.log(data)
	txtAlias.text(data.alias)
	txtEmail.text(data.email)
	aliasIp.val(data.alias)
	introIp.val(data.intro)
	
});

$('#save-btn').click(function() {
  $.post('../profile/update.json', {
	  'no': no,
	  'alias': aliasIp.val(),
	  'intro': introIp.val()  
  }, function(result) {
	 location.href = 'mypage.html'
  }, 'json')
})



//})

//};
