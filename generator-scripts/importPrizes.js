const fs = require('fs'); //filesystem module

function importPrizes(number) 
{
    let list = [`internal_prize_id,title,description,game_image,results_image,legal_notes,days_valid`];
    for (i=600; i<600+number; i++) 
    {
        list.push(`\n${i},Test Prize ${i},Test Description ${i},https://dev-penny-awards.brame-gamification.com/174177_192_192.png,https://dev-penny-awards.brame-gamification.com/174177_192_192.png,Test notes ${i},5`)
 
    }
    return list.join(',');
}

function csvGenerator(number) {

    fs.writeFile(`Prizes-${number}.csv`, importPrizes(number), function(err) {
        if(err) {
            return console.log(err);
}
    })
}

// EDIT FUNCTION ARGUMENTS
// first argument = base ; second argument = number of codes generated
csvGenerator(200);
