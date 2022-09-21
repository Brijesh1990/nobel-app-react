function Add() {
    let a = parseInt(prompt('Enter a value'));
    let b = parseInt(prompt('Enter b value'));
    let c = a+b;
    alert('The additions of proggrames is :' + c)
}

function Subs() {
    
    let a = parseInt(prompt('Enter a value'));
    let b = parseInt(prompt('Enter b value'));
    let c = a - b;
    alert('The substraction  of proggrames is :' + c)
}

export { Add,Subs }