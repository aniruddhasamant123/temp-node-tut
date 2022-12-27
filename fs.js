const fs=require('fs');

const f=fs.readFileSync('./subfolder/first.txt','utf8')
console.log(f)
const s=fs.readFileSync('./subfolder/second.txt','utf8')
console.log(s)
setTimeout(function(){fs.writeFileSync('./subfolder/new.txt', `${f} ${s}`)},10000)

console.log('Done')






