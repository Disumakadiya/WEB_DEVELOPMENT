function add(a,b)
{
    return a+b;
}
function sub(a,b)
{
    return a-b;
}
function mul(a,b)
{
 return a*b;
}
function divide(a,b)
{
//  var a = parseFloat(document.getElementById("num1").value);
//     var b = parseFloat(document.getElementById("num2").value);
//     var result = a /b;
//     document.getElementById("result").value = result;
   return a/b;
}
 function myfunc()
 {
    let firstname ="disu";//if not initialized then undefined output  and same output in var,const,let
    console.log(firstname);
    var b=2;
    let a=20;
    const c=9;
    if(true)
    {
        var b=4;
          let a=30;
          const c=10;
                    
         console.log(b);
         console.log(a);
          console.log(c);
    }
    console.log(b);
    console.log(a);
    console.log(c);
 }