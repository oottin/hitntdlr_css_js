$('.info_section').removeClass('hidden-xs');

let home_page = $('.footer_menu li:nth-child(2) ul li:first-child');
home_page.after("<li><a href='/search_results' id='link180'>Member Directory</a></li>");

$('.navbar-toggle').before('<img id="topbarimage" src="https://www.hitntdir.com/images/topbarimage.png">');

$("ul.sidebar-nav > li:last-child").after('<li class="hasChildren"><a href="/about/contact" id="link360">Contact Us</a><div class="clearfix"></div></li>');
$(".footer_menu > li:nth-child(2) > ul li:last-child").after('<li><a href="/about/contact" id="link361">Contact Us</a></li>');
