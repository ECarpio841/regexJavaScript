const RegExp = /\b[aA]\w*z\b/g; 


function testingWords(){
let word =  prompt("Ingresa una palabra que comience con A y termine en Z.")
console.log(RegExp.test(word));
}

testingWords();