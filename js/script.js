const input = document.getElementById('input');
const output = document.getElementById('output');

function fun1(){
  output.innerHTML = input.value;
}
document.getElementById("2").style.display="none";
var a;
function show_hide(){
  if (a==1){
    document.getElementById("1");
    return a=0;
  }
   else {
     document.getElementById("1").style.display="none";
     document.getElementById("2").style.display="";
     return a=1;
   }
}
button.addEventListener('click',fun1);

button.addEventListener('click', function handleClick(){
  input.value='';
});
