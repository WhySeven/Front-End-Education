let a,b,c,d;
$('.ui-slider').slider({
    range: true,
    min: 0,
    max: 15000,
    values: [5000, 10000],
    step: 1000,
    slide: function( event, ui ) {
        a = ui.values[0]/1000;
        if(ui.values[0]!=0)
            b = a + ' 000';
        else
            b = a;

        c = ui.values[1]/1000;
        if(ui.values[1]!=0)
            d = c + ' 000';
        else
            d = c;
        $('.range-slider-block__info').text(b + '₽ - ' + d + '₽');
    }
});