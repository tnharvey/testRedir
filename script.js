window.onload = function(){
    document.querySelector("#formEmbed").addEventListener( "load", function(e) {
        alert("iframe load function")
        formInputs = document.getElementsByTagName("input");
        formTextAreas = document.getElementsByTagName("textareas");
        for (let i = 0;i < formInputs.length;i++)
            {
                formInputs[i].setAttribute("spellcheck",false);
        }
        for (let i = 0;i < formTextAreas.length;i++)
            {
                formTextAreas[i].setAttribute("spellcheck",false);
        }
    });
}
