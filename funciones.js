
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


//función para enviar a la api los datos recabados del form
function sendData2_0(){
 
  //se forma la url de la api
  var id = document.getElementById('number').value
	var api_url = "https://api.bnext.io/partner_test/user/"
  var dir = api_url+id
  
  //se establecen los datos a enviar a la api
  data={
    "id": parseInt(id),
	   "name":document.getElementById('name_received').value,
	   "surname":document.getElementById('surname_received').value,
	   "email":document.getElementById('email_received').value,
	   "phone":document.getElementById('phone_received').value,
	   "age":parseInt(document.getElementById('age_received').value),
     "loan_amount":parseFloat(document.getElementById('loan_amount').value),
     "loan_date":document.getElementById('loan_date').value,
     "loan_weeks":parseInt(document.getElementById('loan_weeks').value),
     //"check":document.getElementById("check").value
  }
console.log(data);
  
  //se envían los datos a la api
	$.post(dir, function( data ) {
    console.log(data)
  })
}

