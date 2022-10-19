const fs = require('fs'); //filesystem module


// "base" argument is fixed value of first two digits.
// supports up to two digit integer as value
// 0 is added in front if using single digit

function randomizer(base) {
    let result           = '';
    let characters       = '0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < 11; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * 
        charactersLength));
                                    }
    if (base<10) 
    result = '0'+base+result
    else
    result=base+result
    return result;
                                }       

function eanGenerator(base, number) {
    let list = [];
    for (i=0; i<number; i++) {
        list.push(randomizer(base));
    }
    let noDuplicate = Array.from(new Set(list));
    while (noDuplicate.length != list.length) {
        n = list.length - noDuplicate.length
        list = [...noDuplicate]
        for (i=0; i< n; i++) {
            list.push(randomizer(base));
        }
        noDuplicate = Array.from(new Set(list));
   }
    console.log(list.length)
    return list.join(',');

}

function csvGenerator(base, number) {

    fs.writeFile(`batch${base}-${number}.csv`, eanGenerator(base,number), function(err) {
        if(err) {
            return console.log(err);
}
    })
}

// EDIT FUNCTION ARGUMENTS
// first argument = base ; second argument = number of codes generated
csvGenerator(1,10000000);
