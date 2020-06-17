$(".like").each(function(i){
    let like = ".like:eq("+i+") ";
    let count = parseInt($(like + ".like__font").text());
    
    $(like).click(function(){
        $(this).toggleClass("active");
        if ($(this).hasClass("active")){
            $(like + ".material-icons").text("favorite"); 
            count++ 
        }
        else{
            $(like + ".material-icons").text("favorite_border");   
            count--;
        }  
        $(like + ".like__font").text(count);
    });
});