$(".exp-checkbox-block").each(function(i){
    $(".exp-checkbox-block__label:eq("+i+")").click(function(){
        $(".exp-checkbox-block__list:eq("+i+")").toggle(300);
        if($(".exp-checkbox-block__label:eq("+i+") .material-icons:eq(0)").text()=="expand_more")
            $(".exp-checkbox-block__label:eq("+i+") .material-icons:eq(0)").text("expand_less");
        else
            $(".exp-checkbox-block__label:eq("+i+") .material-icons:eq(0)").text("expand_more");
        
    });
});
