let rate = [];
let average = 0;
let max = 1;
let votes = 1;
$('#rate__buton_1 .rate-button__star').each(function(){
    if($('#rate_' + max).text() == 'star'){
        average++;
    }
    rate[max-1] = '#rate_' + (max);
    max++;
});
let summ = average;
for(let i=0; i<rate.length; i++){
    $(rate[i]).mouseenter(function(){
        for(let j = 0; j < rate.length; j++){
            if(j <= i)
                $(rate[j]).text('star');
            else
                $(rate[j]).text('star_border');
        }
    })
    .mouseleave(function(){
        for(let j = 0; j < rate.length; j++){
            if(j<average.toFixed())
                $(rate[j]).text('star');
            else
                $(rate[j]).text('star_border');
        }
    });
    $(rate[i]).click(function(){
        votes++;
        summ += i+1;
        average = summ/votes;
    });
}