$(function() {
	menuClickAction();
	welcomePageInit();
	//getRequestPrefix();
	homePage();
});

// 获取请求前缀
function getRequestPrefix(){
	requestPrefix = $('#requestPrefix').text();
}

// 加载欢迎界面
function welcomePageInit(){
	$('#panel').load('/page/pagecomponent/welcomePage.html');
}

// 跳回首页
function homePage(){
	$('.home').click(function(){
		$('#panel').load('/page/pagecomponent/welcomePage.html');
	})
}

// 侧边栏连接点击动作
function menuClickAction() {
	$(".menu_item").click(function() {
		var url = $(this).attr("name");
		$('#panel').load(url);
	})

}