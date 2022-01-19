//copia Js per prove modifica su mainframe2//

//function change_css//
function change_css(style) {
	document.getElementById('css').href = style
	}

//function load default article in the IssuesViewer page//
$(document).ready(function(){
	change_issue(1)
	})

//function change_issue//
function change_issue(issue) {
	issue_id = 'I' + issue;
	art1 = issue + '_1.html';
	art2 = issue + '_2.html';
	art3 = issue + '_3.html';
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
	document.getElementById("issue_title").innerHTML = document.getElementById(issue_id).innerText;
	$("#artM, #artL1, #artL2").on('load', function() {
		load_MD()
		})
	}

//function load default MDarticle in the menu//
//$(window).on('load', function() {
//	load_MD()
//	})

//function load MDarticles in the menu//
function load_MD() {
	var main_art_h2 = document.getElementsByTagName("h2")[0];
	var guest_art_h2 = document.getElementsByTagName("h2")[1];
	var rev_art_h2 = document.getElementsByTagName("h2")[2];
	document.getElementById("main_art_title").innerText = main_art_h2.innerHTML;
	document.getElementById("guest_art_title").innerText = guest_art_h2.innerHTML;
	document.getElementById("rev_art_title").innerText = rev_art_h2.innerHTML;
	(document.getElementById("main_art_url").getElementsByTagName('a')[0]).setAttribute('href', main_art_h2.getAttribute('data-src'));
	(document.getElementById("guest_art_url").getElementsByTagName('a')[0]).setAttribute('href', guest_art_h2.getAttribute('data-src'));
	(document.getElementById("rev_art_url").getElementsByTagName('a')[0]).setAttribute('href', rev_art_h2.getAttribute('data-src'));
	} 

//element.addEventListener("click", function(){ myFunction(p1, p2); });
//$("#artM", "#artL1", "#artL2").addEventListener("load", function(){
//document.querySelectorAll("#artM", "#artL1", "#artL2").addEventListener("load", function(){ load_MD() });

	//document.querySelectorAll("#main_art_title, #main_art_url").classList.add("highlighted");
//$("#artM", "#artL1", "#artL2").addEventListener("dblclick", function open_full_article())

function open_full_article() {	
	var url = art1;
	//var url = "www.google.com";
	var win = window.open(url, '_blank');
	win.focus();
}

//function slide_articles() in an issue//
counter=0
function slide_articles(){
	counter=counter+1;
	if (counter==1) {
		$("#artM").load(art2);
		$("#artL1").load(art3);
		$("#artL2").load(art1);
		document.getElementById("main_art_title").classList.remove("highlighted");
		document.getElementById("main_art_url").classList.remove("highlighted");
		document.getElementById("guest_art_title").classList.add("highlighted");
		document.getElementById("guest_art_url").classList.add("highlighted");
		}
	if (counter==2) {
		$("#artM").load(art3);
		$("#artL1").load(art1);
		$("#artL2").load(art2);
		document.getElementById("guest_art_title").classList.remove("highlighted");
		document.getElementById("guest_art_url").classList.remove("highlighted");
		document.getElementById("rev_art_title").classList.add("highlighted");
		document.getElementById("rev_art_url").classList.add("highlighted");
		}	
	if (counter==3) {
		$("#artM").load(art1);
		$("#artL1").load(art2);
		$("#artL2").load(art3);
		counter = 0;
		document.getElementById("rev_art_title").classList.remove("highlighted");
		document.getElementById("rev_art_url").classList.remove("highlighted");
		document.getElementById("main_art_title").classList.add("highlighted");
		document.getElementById("main_art_url").classList.add("highlighted");
		}
	}

//function MetaDataViewer//
function MDV(selection){
	if (selection == 1){
		classname="entity person";
		id = "PE"};
	if (selection == 2){
		classname="entity place";
		id = "PL"};
	if (selection == 3){
		classname="entity keyword";
		id = "KW"};
	if (selection == 4){
		classname="entity organization";
		id = "OR"};
var myarray = Array.from(document.getElementsByClassName(classname));
	var array_label = [];
	for (let i = 0; i < myarray.length; i++) {
		if (myarray[i].hasAttribute("data-active")){
			array_label.push(myarray[i].getAttribute("data-label"));
			}
		}
	array_label.sort();
	let text = "";
	for (let i = 0; i < array_label.length; i++) {
		//text += '<li> <a onclick="highlight(this)" about="'+ myarray[i].getAttribute("about") + '">' + myarray[i].getAttribute("data-label") + '</a></li>';
		//text += '<a class="dropdown-item w3-button" onclick="openPopUp()">' + myarray[i].getAttribute("data-label") + '</button>'
		text += '<button class="dropdown-item w3-button" onclick="openPopUp(this)">' + array_label[i] + '</button>'
		}
	document.getElementById(id).innerHTML = text;
	}

	
//set a global variable with all the entities to be recalled if needed//
var all_entities = document.getElementsByClassName("entity")

//function openPopUp//
function openPopUp(el){
	(Array.from(all_entities)).forEach(entity => entity.classList.remove("highlighted", "highlighted_more"));
	//se si trovasse una soluzione per tenerle insieme sarebbe fico
	let label = el.innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.add("highlighted"));
	(clicked_entity.at(0)).classList.add("highlighted_more");
	(clicked_entity.at(0)).scrollIntoView();
	//scurisci la entity cliccata dall'elenco
	item_with_data = clicked_entity.filter(entity => entity.hasAttribute("data-active"));
	document.getElementById("PopUpHeader").innerHTML = label;
	document.getElementById("counter_occurrencies").innerText = 1;
	document.getElementById("tot_occurrencies").innerText = clicked_entity.length;
	if (item_with_data[0].hasAttribute("data-wikidata-id")) {
		wikidataID = item_with_data[0].getAttribute("data-wikidata-id");
		document.getElementById("PopUpWikidata").innerHTML = "url es. https://www.wikidata.org/wiki/" + wikidataID;
		document.getElementById("PopUpWikidata").href = "https://www.wikidata.org/wiki/" + wikidataID;
		}
	else {
		document.getElementById("WikidataIntro").style.display="none"
		}
	document.getElementById("MOD_01").style.display="block";
	}
	//cambiata la ricorsività per filtri: clicked_entity.classList.add("highlighted");
	//for (i = 0; i < all_entities.length; i++) {
	//	if (all_entities[i].getAttribute("data-label") == label) {
	//		all_entities[i].classList.add("highlighted");
	//		if (all_entities[i].hasAttribute("data-active")) {	
	//wikidataID = all_entities[i].getAttribute("data-wikidata-id");
	//class_name = all_entities[i].getAttribute("class");

//function to slides entities occurencies//
slide = 0
function slide_clicked_entity(go){
	let label = document.getElementById("PopUpHeader").innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	if (clicked_entity.length <= 1) {
		slide = 0
		}
	else {
		if (go == 1) {
			slide = slide+1;
			(clicked_entity.at(slide-1)).classList.remove("highlighted_more");
			};
		if (go == -1) {
			slide = slide-1;
			(clicked_entity.at(slide+1)).classList.remove("highlighted_more");
			};
		if (Math.abs(slide) == clicked_entity.length)  {
			slide = 0
			}
		}
	(clicked_entity.at(slide)).classList.add("highlighted_more");
	(clicked_entity.at(slide)).scrollIntoView();
	if (slide >= 0) {
			entity_counter=slide+1
			}
	else {
			entity_counter=clicked_entity.length+slide+1
		}
	document.getElementById("counter_occurrencies").innerText = entity_counter;
	}

//function closePopUp()//
function closePopUp(){
	document.getElementById('MOD_01').style.display='none';
	let label = document.getElementById("PopUpHeader").innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.remove("highlighted", "highlighted_more"));
	}

//function to high_href() [working off-line with $(document).ready(function(){ not online]//
$(document).ready(function(){
	$(".bib_note").click(function(){
		var target = $(this).attr("href");
		var source_id = $(this).attr("id");
		var source = document.getElementById(source_id);
		$(target).addClass('highlighted');
		$(target).click(function(){
			$(target).removeClass('highlighted');
			source.scrollIntoView();
			});
		});
	})

//function high_href(){//
//$(window).load(function(){//
//window.onload = function(){//
//function high_href(){//
//$(document).ready(function(){//

//function to hide/show entities [not working]//
//function entities(){//
//	$(".entity").hide(); 
//	$(".entity").show(); 
//}


// function to set on resize the client w/h to window w/h [elements w/ position absolute/fixed and responsive measurement units needed]
document.addEventListener("resize", myRes)
function myRes() {
	var w = window.outerWidth;
  	var h = window.outerHeight;
  	if (document.documentElement.clientWidth != w || document.documentElement.clientHeight != h) {
  		document.documentElement.clientWidth = w;
  		document.documentElement.clientHeight = h;
		}
	}
