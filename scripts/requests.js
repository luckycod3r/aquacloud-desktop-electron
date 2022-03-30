function request_login(){
    let form_data = new FormData();                  
    form_data.append('action', 'login');
    form_data.append('login', document.querySelector('#login').value);
    form_data.append('passw', document.querySelector('#password').value);
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST", "https://aquaclouds.ru/app/ajax.php", true);
    xhttp.onload = function(event) {
        if (xhttp.status == 200) {
           let result = resultBuilder(xhttp.responseText);
            if(result == "success"){
                alert("Успех");
    
             }
             else {
                alert("Логин или пароль неверны");
            }
        }
    }
    xhttp.send(form_data)
}
function resultBuilder(res){
    return res.replace(/\s+/g,' ').replace(" ",'');
}