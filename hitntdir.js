$('.info_section').removeClass('hidden-xs');

let home_page = $('.footer_menu li:nth-child(2) ul li:first-child');
home_page.after("<li><a href='/search_results' id='link180'>Member Directory</a></li>");

$('.navbar-toggle').before('<img id="topbarimage" src="https://www.hitntdir.com/images/topbarimage.png">');
