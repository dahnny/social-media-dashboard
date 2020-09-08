var checkBox = document.querySelector(".toggle-checkbox");
checkBox.addEventListener("change", function (){
    if(checkBox.checked){
        document.body.className = "body-dark";
        document.querySelector(".background").className = "background-dark"
       $(".top-row-container").addClass("top-row-container-dark");
       $(".instagram-border").addClass("instagram-border-dark");
       $(".bottom-row-box").addClass("bottom-row-box-dark");

    }else{
        document.body.className = ""
        document.querySelector(".background-dark").className = "background"
        $(".top-row-container").removeClass("top-row-container-dark");
       $(".instagram-border").removeClass("instagram-border-dark");
       $(".bottom-row-box").removeClass("bottom-row-box-dark");
    }
})