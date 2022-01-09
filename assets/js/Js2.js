//copia Js per prove modifica su mainframe2//

//function change_css//
function change_css(style) {
	document.getElementById('css').href = style
	}

//set variables for the 3 articles and their metadata in the 3 issues//
var art1, art2, art3, metadata_issue
art1 = '1_1.html';
art2 = '1_2.html';
art3 = '1_3.html';
issue_id = 'I1';
metadata_issue = '<h6 id="main_art_title">1.1 From the Fair Theatre to the Modern Circus. Main article</h6><p id="main_art_url"><a href="http://dx.doi.org/10.1590/2237-266093237">original version</a></p><h6 id="guest_art_title">1.2 El lugar de la diferencia en Chile:circo y transformismo. El caso del Circo Timoteo. Guest article</h6><p id="guest_art_url"><a href="https://raco.cat/index.php/DocumentsAnalisi/article/view/259380/346596">original version</a></p><h6 id="rev_art_title">1.3 The Semiotics of Clowns and Clowning: Rituals of Transgression and the Theory of Laughter. Book review</h6><p id="rev_art_url"><a href="https://europeanjournalofhumour.org/ejhr/article/view/126">original version</a></p>';

//function load default article in the IssuesViewer page//
$(document).ready(function(){
	change_issue(1)
	}
	//$("#artM").load(art1);
	//$("#artL1").load(art2);
	//$("#artL2").load(art3);
	//document.getElementById("issue_title").innerHTML = document.getElementById(issue_id).innerText;
	//document.getElementById("issue_metadata").innerHTML = metadata_issue;
	//})

//function change_issue//
function change_issue(issue) {
	if (issue == 1) {
		//art1 = "1_1.html";
		//art2 = "1_2.html";
		//art3 = "1_3.html";
		metadata_issue = '<h6 id="main_art_title">1.1 From the Fair Theatre to the Modern Circus. Main article</h6><p id="main_art_url"><a href="http://dx.doi.org/10.1590/2237-266093237">original version</a></p><h6 id="guest_art_title">1.2 El lugar de la diferencia en Chile:circo y transformismo. El caso del Circo Timoteo. Guest article</h6><p id="guest_art_url"><a href="https://raco.cat/index.php/DocumentsAnalisi/article/view/259380/346596">original version</a></p><h6 id="rev_art_title">1.3 The Semiotics of Clowns and Clowning: Rituals of Transgression and the Theory of Laughter. Book review</h6><p id="rev_art_url"><a href="https://europeanjournalofhumour.org/ejhr/article/view/126">original version</a></p>';
		}
	if (issue == 2) {
		//art1 = "2_1.html";
		//art2 = "2_2.html";
		//art3 = "2_3.html";
		metadata_issue = '<h6 id="main_art_title">2.1 Freaks (1932): Dysmorphisms, Solidarity and Revenge. Main article</h6><p id="main_art_url"><a href="http://dx.doi.org/10.1590/2237-266093237">original version</a></p><h6 id="guest_art_title">2.2 Esperienze musicali nel Circo Paniko. Guest article</h6><p id="guest_art_url"><a href="https://revistas.usal.es/index.php/medicina_y_cine/article/view/68/91">original version</a></p><h6 id="rev_art_title">2.3 The Circus as a Parallel Universe. Book review</h6><p id="rev_art_url"><a href="https://we-make-money-not-art.com/the_circus_as_a_parallel_unive/">original version</a></p>';
		}
	if (issue == 3) {
		//art1 = "3_1.html";
		//art2 = "3_2.html";
		//art3 = "3_3.html";
		metadata_issue = '<h6 id="main_art_title">3.1 Building Resilience by Becoming a Circus Artist. Main article</h6><p id="main_art_url"><a href="https://doi.org/10.1093/jrs/fez091">original version</a></p><h6 id="guest_art_title">3.2	Enseigner les arts du cirque au collège : une dévolution artistique. Guest article</h6><p id="guest_art_url"><a href="https://journals.openedition.org/ejrieps/1362?lang=en">original version</a></p><h6 id="rev_art_title">3.3	The Welfare of Performing Animals. A Historical Perspective. Book review</h6><p id="rev_art_url"><a href="https://doi.org/10.3390/ani6110076">original version</a></p>';
		}
	issue_id = 'I' + issue;
	art1 = issue + '_1.html';
	art2 = issue + '_2.html';
	art3 = issue + '_3.html';
	$("#artM").load(art1);
	$("#artL1").load(art2);
	$("#artL2").load(art3);
	metadata_issue = '<h6 id="main_art_title">' + issue + '.1' + document.querySelector('div.title_art > h2').innerText + '. Main article</h6>'
	//<p id="main_art_url"><a href="http://dx.doi.org/10.1590/2237-266093237">original version</a></p><h6 id="guest_art_title">1.2 El lugar de la diferencia en Chile:circo y transformismo. El caso del Circo Timoteo. Guest article</h6><p id="guest_art_url"><a href="https://raco.cat/index.php/DocumentsAnalisi/article/view/259380/346596">original version</a></p><h6 id="rev_art_title">1.3 The Semiotics of Clowns and Clowning: Rituals of Transgression and the Theory of Laughter. Book review</h6><p id="rev_art_url"><a href="https://europeanjournalofhumour.org/ejhr/article/view/126">original version</a></p>';
	document.getElementById("issue_title").innerHTML = document.getElementById(issue_id).innerText;
	document.getElementById("issue_metadata").innerHTML = metadata_issue;
	document.querySelectorAll("#main_art_title, #main_art_url").classList.add("highlighted");
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

//set a global variable with all the entities to be recalled if needed//
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
  	if (document.documentElement.clientWidth != w ||
  		document.documentElement.clientHeight != h) {
  			document.documentElement.clientWidth = w;
  			document.documentElement.clientHeight = h;
}
}
