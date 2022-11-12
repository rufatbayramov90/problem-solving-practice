const str = "Give me $20'";
console.log(str.replace(/[^a-zA-Z ]/g, ""));


// Diger bir forma
function remove(x) {
    let lower = x.toLowerCase();
    let upper = x.toUpperCase();

    let result = "";
    for(var i=0; i<lower.length; ++i) {
        if(lower[i] != upper[i])
            result += x[i];
    }
    return result;
}
console.log(remove('Give me $20'))