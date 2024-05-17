let a=parseInt(prompt("Enter the unit : "))
function calculate(b)
{
if (a<=100)
{
    return a*10
}
else if (a<=200)
{
   return (100*10)+(a-100)*15
}
else if (a<=300)
{
    return (100*10)+(100*15)+(a-200)*20
}
else if (a>300)
{
    return (100*10)+(100*15)+(100*20)+(a-300)*25;
}
}
console.log("Total amount for the unit : "+calculate())
