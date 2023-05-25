
function sum(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function mul(a,b){
    return a*b
}
function div(a,b){
    let z
    z=a/b
    z=z.toFixed(2)
    return z
}

export {sum,sub,mul,div}