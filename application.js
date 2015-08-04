function processForm (){
    var content = document.getElementById("output")
    content.innerHTML = "";
    for(var i = 0; i<1000; i++){
        if( i % 9 == 0 || i % 17 == 0) {
        content.innerHTML += "<div>" + i + "</div>";
        }
    }

}

