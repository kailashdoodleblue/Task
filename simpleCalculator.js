let a=parseInt(prompt("Enter first number ="));
let b=parseInt(prompt("Enter second number ="));
let c=prompt("Enter operaion to perform (+,-,*,/) =");
switch(c)
{
    case "+":
    let sum=a+b;
    console.log(sum);
    break;
    
    case "-":
    let sub=a-b;
    console.log(sub);
    break;
    
    case "*":
    let mul=a*b;
    console.log(mul);
    break;
    
    case "/":
    let div=a/b;
    console.log(div);
    break;
    
    defaul:
    console.log("no operation selected");
}


// async function getTodo() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();
//     console.log(data)
//   }
//   getTodo();