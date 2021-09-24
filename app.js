var inp=document.querySelectorAll(".number");
var button=document.querySelector(".btn");
var output=document.querySelector(".msg");
button.addEventListener("click",()=>{
  if(Number(inp[0].value)<Number(inp[2].value))
  {
    var profit=Number(inp[1].value)*(Number(inp[2].value)-Number(inp[0].value));
    var perc=(profit/(Number(inp[0].value)*Number(inp[1].value)))*100;
output.style.color="green";
output.innerText=`Yay!! Your Profit is ${profit.toFixed(
  2
)} and profit Percentage is ${perc.toFixed(2)}%`;
  }
  else if(Number(inp[0].value)>Number(inp[2].value))
  {
    var loss=Number(inp[1].value)*(Number(inp[0].value)-Number(inp[2].value));
    var perc=(loss/(Number(inp[0].value)*Number(inp[1].value)))*100;
output.style.color="red";
output.innerText=`Whoops!! Your loss is ${loss.toFixed(
  2
)} and loss Percentage is ${perc.toFixed(2)}%`;
  }
  else{
    output.innerText="NO LOSS NO PROFIT";
  }
})