const numero = process.argv[2]
console.clear
console.log(`TABUADA DO ${numero}`)
for(let i=0;i<11;i++) {
    console.table(`${numero} x ${i} = ${numero*i}`)
}