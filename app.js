let track=false;
let currentValue="";
let previousValue="";

const num=document.querySelectorAll('.num');
const equal=document.querySelector('.equal');
const operator=document.querySelectorAll('.operator');
const del=document.querySelector('.delete');
const clear=document.querySelector('.clear');
const prev=document.querySelector('.previous-operand');
const curr=document.querySelector('.current-operand');


for(let i of num)
{
    i.addEventListener('click', ()=>{
        if(track) {
            currentValue="";
        }
        currentValue+=i.innerText;
        curr.innerText=currentValue;
    })
};

for(let i of operator)
{
    i.addEventListener('click', ()=>{
        if(currentValue===""&&i.innerHTML!=='-') return;
        if(currentValue===""&&i.innerHTML==='-'){
            currentValue="-";
            curr.innerText=currentValue;
            return;
        }
        track=false;
        currentValue+=i.innerText;
        previousValue=currentValue;
        prev.innerText=previousValue;
        prev.classList.remove("hide");
        curr.innerText="";
        currentValue="";
    })
};

equal.addEventListener('click',()=>{
    if(previousValue==="") return;
    let o=previousValue[previousValue.length-1];
    previousValue=previousValue.slice(0,previousValue.length-1);
    let x=parseFloat(previousValue);
    let y=parseFloat(currentValue);
    let r=0;
    switch(o)
    {
        case "+": 
        r=x+y;
        break;
        case "-": 
        r=x-y;
        break;
        case "*": 
        r=x*y;
        break;
        case "÷": 
        r=x/y;
        break;
    }
    currentValue=r.toString();
    curr.innerText=currentValue;
    previousValue="";
    prev.classList.add("hide");
    track=true;
})

del.addEventListener('click',()=>{
    if(currentValue===""&&previousValue==="") return;
    if(currentValue===""){
        currentValue=previousValue;
        previousValue="";
        prev.classList.add("hide");
    }
    currentValue=currentValue.slice(0,currentValue.length-1);
    curr.innerText=currentValue;
})

clear.addEventListener('click',()=>{
    currentValue="";
    previousValue="";
    track=false;
    prev.innerText="";
    curr.innerText="";
})