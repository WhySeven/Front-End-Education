function create_dropdown(){
    $(".dropdown__expand-button").click(function(){
        $(".dropdown__content").toggle();
        $(".dropdown__expand-button").toggleClass('border-radius');
        $(".dropdown__expand-button").toggleClass('border-radius_all');
    });
    let i = 0;
    $(".dropdown__button-block").each(function(){
        let buttonblock = ".dropdown__button-block:eq("+i+")";
        $(buttonblock + " .dropdown__button:eq(0)").click(function(){
            let txt = parseInt($(buttonblock + " h3").text());
            if(txt>0){
                $(buttonblock + " h3").text(txt-1);  
            }
        });
        $(buttonblock + " .dropdown__button:eq(1)").click(function(){
            let txt = parseInt($(buttonblock + " h3").text());
            $(buttonblock + " h3").text(txt+1);
        });
        i++;
    });
    $(".dropdown__button_enter").click(function(){
        let count = 0;
        let mod;
        $(".dropdown__button-block .dropdown__count").each(function(){
            count+=parseInt($(this).text());
        });
        if(count == 1)
            mod = " гость";
        else if(count == 0)
            mod = " гостей";
        else if(count < 5)
            mod = " гостя";
        else
            mod = " гостей";
        $(".dropdown__label:eq(0)").text(count + mod);
        $('.dropdown__button-block__bottom').addClass('space-between');
        $('.dropdown__button-block__bottom').removeClass('flex-end');
    });
    $(".dropdown__button_clear").click(function(){
        $(".dropdown__label:eq(0)").text('Сколько гостей');
        i=0;
        $(".dropdown__button-block").each(function(){
            let buttonblock = ".dropdown__button-block:eq("+i+")";
            $(buttonblock + " h3").text(0); 
            i++;
        });
        $('.dropdown__button-block__bottom').removeClass('space-between');
        $('.dropdown__button-block__bottom').addClass('flex-end');
    });
}
create_dropdown();