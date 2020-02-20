

/*var boton = document.getElementById("boton");

boton.addEventListener("click", function(){

	var id = document.getElementById('number').value
	var api_url = 'https://api.bnext.io/partner_test/user'
  var dir = api_url+ "?id=" + id
  //alert(dir)


	$.ajax({
    //url: api_url + "?id=" + id,
    url:'https://pokeapi.co/api/v2/berry/3/',

    success: function(url){
      alert(url);
    }
  });



  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://pokeapi.co/api/v2/pokemon/bulbasaur/",
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    console.log(JSON.parse(response));
});


///var param = document.getElementById("pokeInput").value;
    //var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + param;

    $.getJSON('https://pokeapi.co/api/v2/berry/3/', function(data){
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));

    });


});*/


/*$( "#boton" ).click(function() {
  alert( "Handler for .click() called." );

  var settings = {
    "async": true,
    "crossDomain": true,
    url:'https://pokeapi.co/api/v2/berry/3/',
    "method": "GET",
    "headers": {}
}

$.ajax(settings).done(function (response) {
    alert(response);
});
});*/






/*function enviar (){   'https://pokeapi.co/api/v2/berry/3/'

	$.ajax({
    url: 'https://api.bnext.io/partner_test/user?id',
    headers: {
        'Authorization':'Basic xxxxxxxxxxxxx',
        'X-CSRF-TOKEN':'xxxxxxxxxxxxxxxxxxxx',
        'Content-Type':'application/json'
    },
    method: 'POST',
    dataType: 'json',
    data: YourData,
    success: function(data){
      console.log('succes: '+data);
    }
  });


}*/

function pokeSubmit(){
console.log('hola');
	$.getJSON('https://pokeapi.co/api/v2/berry/3/', function(data){

        console.log(data);
        console.log(JSON.stringify(data, null, "  "));

    });


}


function requestData(){

	var id = document.getElementById('number').value
	var api_url = 'https://api.bnext.io/partner_test/user'
  var dir = api_url+ "?id=" + id

	$.getJSON(dir, function(data){
		    var datos = data
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));

        document.getElementById('data').style.display='block'
        document.getElementById('name_received').value=datos.data.name;
        document.getElementById('surname_received').value=datos.data.surname;
        document.getElementById('email_received').value=datos.data.email;
        document.getElementById('phone_received').value=datos.data.phone;
        document.getElementById('age_received').value=datos.data.age;
        

    });




}

function sendData(){

	var id = document.getElementById('number').value
	var api_url = 'https://api.bnext.io/partner_test/user/'
  var dir = api_url+id

        var name = document.getElementById('name_received').value
        var surname = document.getElementById('surname_received').value
        var email = document.getElementById('email_received').value
        var phone = document.getElementById('phone_received').value
  			var amount = document.getElementById('loan_amount').value
        var date = document.getElementById('loan_date').value
        var weeks = document.getElementById('loan_weeks').value
        var age = document.getElementById('age_received').value



	fetch(dir,{
        method: 'POST',
        headers: {
            'X-WEB-KEY': 'Development'
        },

        //body: JSON.stringify({"id": 1, "name":'Cris', "surname": 'Huertas', 'email':'cris@next.es','phone':"553246888875",'age':35,'loan_amount':10,'loan_weeks':2,'loan_date':2}),
        body: JSON.stringify({"id": id, "name":name, "surname": surname, 'email':email,'phone':phone,'age':age,'loan_amount':amount,'loan_weeks':weeks,'loan_date':date}),
        cache: 'no-cache'
    })
    .then(function(response) {
        return response.json();

    })
    .then(function(data) {
        console.log('data = ', data);
        console.log(data['code'])
        if(data['code']==201){
    	alert('Gracias en breve nos pondremos en contacto');
    }

    })
    .catch(function(err) {
        console.error(err);
    });
    
    
    
}

