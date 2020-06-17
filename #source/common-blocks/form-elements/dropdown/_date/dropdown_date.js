$(".dropdown-block_date").each(function(i){
    let dd = ".dropdown-block_date:eq("+i+") ";
    $(dd + ".dropdown_date").click(function(){
        $(dd + ".datepicker-block").toggle();
    });
    let minDate = new Date();
    minDate.setDate(minDate.getDate()+1);
    $(dd + ".datepicker-item").datepicker({
        range: true,
        moveToOtherMonthsOnSelect:false,
        disableNavWhenOutOfRange: false,
        clearButton: true,
        minDate: minDate,
        navTitles: {
            days: "MM yyyy"
        },
        prevHtml: '<p class="material-icons"> arrow_back</p>',
        nextHtml: '<p class="material-icons"> arrow_forward</p>',

    })
});