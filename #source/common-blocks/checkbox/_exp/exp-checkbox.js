$(".exp-checkbox-block").each(function(i){
    $(".exp-checkbox-block__label:eq("+i+")").click(function(){
        $(".exp-checkbox-block__list:eq("+i+")").toggle(300);
    });
});
