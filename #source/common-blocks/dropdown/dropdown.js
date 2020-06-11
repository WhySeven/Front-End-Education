function create_dropdown(){
    $(".dropdown").each(function(i){
        let dd = ".dropdown:eq("+i+") ";
        $(dd + ".dropdown__expand-button").click(function(){
            $(dd + ".dropdown__content").toggle();
            $(dd + ".dropdown__expand-button").toggleClass('border-radius');
            $(dd + ".dropdown__expand-button").toggleClass('border-radius_all');
        });
        $(dd + ".dropdown__button_enter").click(function(){
            let count = 0;
            let mod;
            $(dd + ".dropdown__button-block .dropdown__count").each(function(){
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
            $(dd + ".dropdown__label:eq(0)").text(count + mod);
            $(dd + ".dropdown__button-block__bottom").addClass("space-between");
            $(dd + ".dropdown__button-block__bottom").removeClass("flex-end");
        });
        $(dd + ".dropdown__button_clear").click(function(){
            $(dd + ".dropdown__label:eq(0)").text('Сколько гостей');
            $(dd  +".dropdown__button-block").each(function(j){
                let bb = dd + ".dropdown__button-block:eq("+j+")";
                $(bb + " h3").text(0); 
            });
            $(dd + '.dropdown__button-block__bottom').removeClass('space-between');
            $(dd + '.dropdown__button-block__bottom').addClass('flex-end');
        });
        if($(dd + ".dropdown__content").hasClass("exp")){
            $(dd + ".dropdown__content").toggle();
            $(dd + ".dropdown__expand-button").toggleClass('border-radius');
            $(dd + ".dropdown__expand-button").toggleClass('border-radius_all');
        }
    });
    $(".dropdown__button-block").each(function(i){
        let bb = ".dropdown__button-block:eq("+i+")";
        $(bb + " .dropdown__button:eq(0)").click(function(){
            let txt = parseInt($(bb + " h3").text());
            if(txt>0)
                $(bb + " h3").text(txt-1);
        });
        $(bb + " .dropdown__button:eq(1)").click(function(){
            let txt = parseInt($(bb + " h3").text());
            $(bb + " h3").text(txt+1);
        });
    });
    $(".dropdown_ap").each(function(i){
        let ap = ".dropdown_ap:eq("+i+") ";
        $(ap + ".dropdown__button").click(function(){
            $(ap + ".dropdown__label:eq(0)").text($(ap + ".dropdown__count:eq(0)").text() + " cпальни, " + $(ap + ".dropdown__count:eq(1)").text() + " кровати...");
        });
    });
    
}
create_dropdown();