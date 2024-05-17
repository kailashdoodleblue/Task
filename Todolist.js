let a
let b
let c = [] 
function task() 
{
    a = prompt("Enter the tasks todo: ");
    c.push(a)
    //c+="\n"+"*"+a.push()
    console.log("TODO  list:")
    for (let i in c){
       console.log("*"+c[i]) 
    }
    
     b = prompt("Add another Y/N:")
}
do{
    task()
}
while(b=="Y" || b=="y")
// { task()
// }
console.log("*****Task Ended*****")
