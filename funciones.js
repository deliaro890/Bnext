
//función para consumir la api que devuelve la información del cliente

function requestData(){

	var id = document.getElementById('number').value
	var api_url = 'https://api.bnext.io/partner_test/user'
  var dir = api_url+ "?id=" + id  //formé la url de la api

  //Se obtiene la información de la api
	$.getJSON(dir, function(data){
		    var datos = data
        console.log(data);
        console.log(JSON.stringify(data, null, "  "));

        //se pusieron los valores recibidos de la api en los inputs del form
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

