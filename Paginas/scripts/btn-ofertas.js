function showhide(){
    var container = document.getElementsByClassName('Ofertas')[0];

    if (container.style.visibility == "hidden"){
        container.style.visibility = "visible";
    }else{
        container.style.visibility = "hidden";
    }
}