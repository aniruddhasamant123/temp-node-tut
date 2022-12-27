const {readFile,writeFile}=require('fs');
console.log('strat read file')
readFile('./subfolder/first.txt','utf8',function(err,result){
    if(err){
    console.log(err)
    }
    const first=result;
    readFile('./subfolder/first.txt','utf8',function(err,result){
        if(err){
            console.log(err)
        }
        const second=result;
        writeFile('./subfolder/new2.txt',`The final result is ${first} ${second}`,function(err,result){
            if(err){
                console.log(err)
            }else{
                console.log('Finished Process')
            }
        })
    })
})

console.log('starting New process')
