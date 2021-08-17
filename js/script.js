window.onload = function(){
    console.log("hii")
}
    function addNewCard(){
        document.querySelector("#id_label_sec").classList.remove("oneCard");
        document.querySelector("#id_label_custom2").classList.remove("oneCard");
        document.querySelector("#id_added").classList.remove("oneCard");
        document.querySelector("#id_add_card").classList.add("oneCard");
        document.querySelector("#id_one_or_two").innerHTML = "2";
        
    }
    function deleteNewCard(){
        document.querySelector("#id_label_sec").classList.add("oneCard");
        document.querySelector("#id_label_custom2").classList.add("oneCard");
        document.querySelector("#id_added").classList.add("oneCard");
        document.querySelector("#id_add_card").classList.remove("oneCard");
        document.querySelector("#id_one_or_two").innerHTML = "1";
       
    }


