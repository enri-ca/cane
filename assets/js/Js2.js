//function change_css//
function change_css(style) {
	document.getElementById('css').href = style
	}

//set variables for the 3 articles in the 3 issues//
var art1, art2, art3
art1 = "1_1.html";
art2 = "1_2.html";
art3 = "1_3.html";

//function load default article in the IssuesViewer page//
$(document).ready(function(){
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
	})

//function change_issue//
function change_issue(issue) {
	if (issue == 1) {
		art1 = "1_1.html";
		art2 = "1_2.html";
		art3 = "1_3.html";
	  	}
	if (issue == 2) {
		art1 = "2_1.html";
		art2 = "2_2.html";
		art3 = "2_3.html";
		}
	if (issue == 3) {
		art1 = "3_1.html";
		art2 = "3_2.html";
		art3 = "3_3.html";
		}
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
	}

//function slide_articles() in an issue//
counter=0
function slide_articles(){
	counter=counter+1;
	if (counter==1) {
		$("#artM").load(art2);
		$("#artL1").load(art3);
		$("#artL2").load(art1);
		}
	if (counter==2) {
		$("#artM").load(art3);
		$("#artL1").load(art1);
		$("#artL2").load(art2);
		}	
	if (counter==3) {
		$("#artM").load(art1);
		$("#artL1").load(art2);
		$("#artL2").load(art3);
		counter = 0;
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
	//var arr = document.getElementsByClassName(classname);
	//myarray.sort();
	//myarray.reverse();
	//riassunti in var myarray = ((Array.from(document.getElementsByClassName(classname))).sort()).reverse(); 
	//però non funziona perchè il sort ordina l'arrai di object quindi a seconda dell'indice e non per il label: proposta:
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

var all_entities = document.getElementsByClassName("entity")

//function openPopUp//
function openPopUp(el){
	let label = el.innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.add("highlighted"));
	(clicked_entity.at(0)).classList.add("highlighted_more");
	(clicked_entity.at(0)).scrollIntoView();
	item_with_data = clicked_entity.filter(entity => entity.hasAttribute("data-active"));
	document.getElementById("PopUpHeader").innerHTML = label;
	document.getElementById("counter_occurrencies").innerText = "1";
	document.getElementById("tot_occurrencies").innerText = clicked_entity.length;
	if (item_with_data[0].hasAttribute("data-wikidata-id")) {
		wikidataID = item_with_data[0].getAttribute("data-wikidata-id");
		document.getElementById("PopUpWikidata").innerHTML = "https://www.wikidata.org/wiki/" + wikidataID;
		document.getElementById("PopUpWikidata").href = "https://www.wikidata.org/wiki/" + wikidataID;
		}
	else {
		document.getElementById("WikidataIntro").style.display="none"
		}
	document.getElementById("MOD_01").style.display="block";
	}
	//clicked_entity.classList.add("highlighted");
	//for (i = 0; i < all_entities.length; i++) {
	//	if (all_entities[i].getAttribute("data-label") == label) {
	//		all_entities[i].classList.add("highlighted");
	//		if (all_entities[i].hasAttribute("data-active")) {	
	//wikidataID = all_entities[i].getAttribute("data-wikidata-id");
	//class_name = all_entities[i].getAttribute("class");

//function slide occurrencies//
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
			slide = 0;
			}
		}
	(clicked_entity.at(slide)).classList.add("highlighted_more");
	(clicked_entity.at(slide)).scrollIntoView();
	if (slide >= 0) {
			entity_counter=slide+1
	}
	else {
			entity_counter=(clicked_entity.lenght)+slide-1
	}
	document.getElementById("counter_occurrencies").innerText = entity_counter;
	}

//function slide occurrencies//
function closePopUp(){
	document.getElementById('MOD_01').style.display='none';
	let label = document.getElementById("PopUpHeader").innerText;
	var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label));
	clicked_entity.forEach(entity => entity.classList.remove("highlighted", "highlighted_more"));
	}

//var entity_occurency = clicked_entity.at(slide);
	//var entity_occurency_prev = clicked_entity.at(slide-1);
	//goto = ((entity_list[i]).getBoundingClientRect()).top;
	//window.scrollTo(0, goto);
	//const clicked_entity = all_entities.filter(word => word.length > 6);
	//	var clicked_entity = document.getElementsByClassName("entity").(getAttribute("data-label") == (entity));
	//let label = document.getElementById("PopUpHeader").innerText;
	//var clicked_entity = ((Array.from(all_entities)).filter(entity => entity.getAttribute("data-label") == label).sort()).reverse();
	//fino a lunghezza array while slide < clicked_entity.length - else slide = 0
	//for (i = 0; i < all_entities.length; i++) {
	//	if (all_entities[i].getAttribute("data-label") == entity) {
	//		clicked_entity.push(all_entities[i]);
	//		}
	//}

	//1. highligHT
//functions prev_entity_item()
//function next_entity_item()

//function to high_href() [working off-line with $(document).ready(function(){ not online]//
$(".bib_note").click(function(){
		var target = $(this).attr("href");
		var source_id = $(this).attr("id");
		var source = document.getElementById(source_id);
		$(target).addClass('highlighted');
		$(target).click(function(){
			$(target).removeClass('highlighted');
			source.scrollIntoView();
		});
	})
//function high_href(){//
//$(window).load(function(){//
//window.onload = function(){//
//function high_href(){//
//$(document).ready(function(){//
