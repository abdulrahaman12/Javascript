function loadData(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200 ){
           document.getElementById("demo").innerHTML = this.responseText;
        }else if(this.readyState == 4 && this.status == 404 ){
            document.getElementById("demo").innerHTML = "File not found";
        }
    };
    xhttp.open('GET',"content/readme.txt",true);
    xhttp.send();
}