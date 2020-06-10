function create_dropdown(){
    $(".dropdown").each(function(i){
        console.log(i);
        $(".dropdown:eq(0) .dropdown__content").toggle();
    });
}
create_dropdown();