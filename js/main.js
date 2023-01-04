$(document).ready(function(){

//Slider
if(window.location.href.indexOf('index')> -1){
	$('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200,
    responsive: true,
    pager:true
  });
}
	//Posts
if(window.location.href.indexOf('index')> -1){

	var posts=[
	    {
	    	title:'Prueba de título 1',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	    {
	    	title:'Prueba de título 2',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	    {
	    	title:'Prueba de título 3',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	    {
	    	title:'Prueba de título 4',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	    {
	    	title:'Prueba de título 5',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	    {
	    	title:'Prueba de título 6',
	    	date: 'Publicado el día '+moment().date()+" de "+moment().format("MMMM")+" de "+moment().format("YYYY"),
	    	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc non placerat urna. Duis enim nisl, placerat ut lectus placerat, varius ultricies est. Etiam non nibh nec nunc mattis mollis quis ac nulla. Donec non nunc viverra magna bibendum vehicula eu bibendum mi. Aenean cursus finibus nunc hendrerit vulputate. Vestibulum in turpis egestas, eleifend est quis, gravida velit. Etiam id viverra neque.'
	    },
	];

	posts.forEach((item, index) => {
		var post=`
		    <article class="post">
		      <h2>${item.title}</h2>
		      <span class="date">${item.date}</span>
		      <p>
		      ${item.content}
		      </p>
		      <a href="#"  class="button-more">Leer más</a>
		    </article>
		   

		`;

		$("#posts").append(post);
		     

	});
}

	
//Selector de tema
var theme = $("#theme");
$("#to-green").click(function(){
	theme.attr("href", "css/green.css");


});

$("#to-red").click(function(){
	theme.attr("href", "css/red.css");


});
$("#to-blue").click(function(){
	theme.attr("href", "css/blue.css");


});

//Scroll arriba arriba de la web

$('.subir').click(function(e){
	e.preventDefault();

	$('html, body').animate({
		scrollTop: 0
	}, 500);

	return false;


});

//Login falso

$("#login form").submit(function(){
	var form_name= $("#form_name").val();

	localStorage.setItem("form_name", form_name);

});

var form_name=localStorage.getItem("form_name");

if(form_name != null && form_name != "undefined"){
	var about_parrafo = $("#about p");

	about_parrafo.html("<br><strong>Bienvenido "+form_name+"<strong> ");
	about_parrafo.append("<a href='#' id='logout'>Cerrar sesión</a> ");

	$("#login").hide();

	$("#logout").click(function(){
		localStorage.clear();
		location.reload();

	});

}

// Acordeón

 if(window.location.href.indexOf('about')> -1){

 	 $("#acordeon").accordion();


 }

 //Reloj

if(window.location.href.indexOf('index')> -1){
	var reloj= moment.format("h:mm:ss");

	$('#reloj').html(reloj);

}




});