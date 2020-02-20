
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


function sendData2_0(){
  var url = "https://api.bnext.io/partner_test/user/"

  var id = document.getElementById('number').value
	var api_url = "https://api.bnext.io/partner_test/user/"
  var dir = api_url+id
  console.log(document.getElementById("check").value)
  console.log($("#check:checked").val())
  

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

	$.post(dir, function( data ) {
    console.log(data)
  })




}

