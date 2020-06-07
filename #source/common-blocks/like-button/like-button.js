$('#like_1').click(function(){
    let count = parseInt($('#like__count_1').text());
    if ($(this).hasClass('active')){
        count--;
        $('#like__count_1').text(count);
        $('.like__icon_1').text('favorite_border');
    }
    else{
        count++;
        $('#like__count_1').text(count);
        $('.like__icon_1').text('favorite');
    }
});



$('#like_2').click(function(){
    let count = parseInt($('#like__count_2').text());
    if ($(this).hasClass('active')){
        count--;
        $('#like__count_2').text(count);
        $('.like__icon_2').text('favorite_border');
    }
    else{
        count++;
        $('#like__count_2').text(count);
        $('.like__icon_2').text('favorite');
    }
});



$('.like').click(function(){
    $(this).toggleClass("active");
});