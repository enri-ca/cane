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

//function MetaDataViewer - visualization//
function MDV(selection){
	let text = "";
	if (selection == 1){
		classname="entity person";
		id = "PE"};
	if (selection == 2){
		classname="entity place";
		id = "PL"};
	if (selection == 3){
		classname="entity keyword";
		id = "KW"};
	var arr = document.getElementsByClassName(classname);
	for (let i = 0; i < arr.length; i++) {
		//text += '<a class="dropdown-item" href="https://www.unibo.it" onclick="openpopup()">' + arr[i].getAttribute("data-label") + "</a>"
		text += '<button onclick="openPopUp()" class="w3-button">' + arr[i].getAttribute("data-label") + '</button>'
	}
	document.getElementById(id).innerHTML = text;
 }

//<button onclick="document.getElementById('id01').style.display='block'" class="w3-button">Open Modal</button>

//function openPopUp//
//1. highlight, 2. pop up con >> << - WIKIDATA - NOME ENTITY - CLASSE - CHIUSURA 
function openPopUp(){
	document.getElementById("id01").style.display="block"
}
	//text = <h2>classe - nome entity</h2> <p>wikidata</p>
	//document.getElementById('id01').style.display='block';
	//document.getElementById('id01').innerHTML = text;

//function to hide/show entities [not working]//
//function entities(){//
//	$(".entity").hide(); 
//	$(".entity").show(); 
//}

//function to high_href() [working off-line with $(document).ready(function(){ not online]//
//function high_href(){//
//$(window).load(function(){//
//window.onload = function(){//
//function high_href(){//
//$(document).ready(function(){//
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
