//copia Js per prove modifica su mainframe2//

//function change_css//
function change_css(style) {
	document.getElementById('css').href = style
	//setAttribute('href', style);
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
	//var arr = document.getElementsByClassName(classname);
	//var myarray = ((Array.from(document.getElementsByClassName(classname))).sort()).reverse();
	//myarray.sort();
	//myarray.reverse();
	//var myarray = (Array.from(document.getElementsByClassName(classname))).sort();
	var myarray = Array.from(document.getElementsByClassName(classname));
	var array_label = [];
	for (let i = 0; i < myarray.length; i++) {
		//text += '<a class="dropdown-item" href="https://www.unibo.it" onclick="openpopup()">' + arr[i].getAttribute("data-label") + "</a>"
		//text += '<button onclick="document.getElementById('id01').style.display='block'" class="w3-button">' + arr[i].getAttribute("data-label") + '</button>'
		if (myarray[i].hasAttribute("data-active")){
			array_label.push(myarray[i].getAttribute("data-label"));
			}
		}
	array_label.sort();
	let text = "";
	for (let i = 0; i < array_label.length; i++) {
		//text += '<li> <a onclick="highlight(this)" about="'+ myarray[i].getAttribute("about") + '">' + myarray[i].getAttribute("data-label") + '</a></li>';
		//	}
		//text += '<button class="dropdown-item?" onclick="openPopUp()" class="w3-button">' + myarray[i].getAttribute("data-label") + '</button>'
		//text += '<a class="dropdown-item w3-button" onclick="openPopUp()">' + myarray[i].getAttribute("data-label") + '</button>'
		text += '<a class="dropdown-item w3-button" onclick="openPopUp()">' + array_label[i] + '</button>'
		}
	document.getElementById(id).innerHTML = text;
 }


//var arr = document.getElementsByClassName("entity keyword");
//var myarray = Array.from(arr);
//function myFunction() {
//	var arr = document.getElementsByClassName("entity keyword");
//	var myarray = Array.from(arr);
//	myarray.sort();
//	myarray.reverse();
//	let text = "";
//	for (let i = 0; i < myarray.length; i++) {
//	 if (myarray[i].hasAttribute("data-active")){
//	  text += '<li> <a onclick="highlight(this)" about="'+ myarray[i].getAttribute("about") + '">' + myarray[i].getAttribute("data-label") + '</a></li>';
//	  }
//}
//document.getElementById("p2").innerHTML = text;
 //}

var array_entities = Array.from(document.getElementsByClassName("entity"));
//function openPopUp//
function openPopUp(entity_item_list){
	var label = entity_item_list.innerHTML;
	//$(.entity).addClass('highlighted');
	for (let i = 0; i < array_entities.length; i++) {
		if (array_etities[i].getAttribute("about") === label) {			
		if (array_etities[i].hasAttribute("data-active"))
	//		array_label.push(myarray[i].getAttribute("data-label"));
//			}
//		}
//	var array_label = [];
//	array_label.sort();
//	$(.entity).attr("data-label");
//	array delle cose che hanno quel label
//	prendere wikidata e altri dati da data-active:	
	document.getElementById("PopUpHeader").innerHTML = "class - entity Es. Place - Panama Canal";
	document.getElementById("PopUpWikidata").innerHTML = "url es. https://www.wikidata.org/wiki/ + Q7350";
	document.getElementById("PopUpWikidata").href = "https://www.wikidata.org/wiki/ + Q7350";
//	$(this).attr("data-label");
	document.getElementById("id01").style.display="block"
}

function highlight(el){
	let ul = el.getAttribute("about");
	let arre = document.getElementsByClassName("entity keyword");
	var i;
  	for (i = 0; i < arre.length; i++) {
    	if (arre[i].getAttribute("about") === ul) {
        	document.body.style.backgroundColor = 'white'
        	arre[i].style.backgroundColor = "#cc9999";
            } else {arre[i].style.backgroundColor = "white";}
    }
}

/* qui andrebbe aggiunto un if/contatore per il click + variabile classi + indici*/
function scrollprev() {
var el = document.getElementById("01");
var rect = el.getBoundingClientRect();
w = rect.top;
  window.scrollTo(0, w);
  
}


//1. highlight, 2. pop up con >> << - WIKIDATA - NOME ENTITY - CLASSE - CHIUSURA 
	//text = <h2>classe - nome entity</h2> <p>wikidata</p>
	//document.getElementById('id01').style.display='block';
	//document.getElementById('id01').innerHTML = text;

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

//function to hide/show entities [not working]//
//function entities(){//
//	$(".entity").hide(); 
//	$(".entity").show(); 
//}
