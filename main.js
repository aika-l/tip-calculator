const bill=document.querySelector('#bill');
const service=document.querySelector('#service');
const amtPeople=document.querySelector('#numPpl');
const btn = document.querySelector('#btn');
const tip=document.querySelector('#tip');

 amtPeople.style.color='red';

btn.addEventListener('click', function(){
   var number = service.value; 
   var percent = number.split('%')[0]; 
    if((bill.value===""|| bill.value==='0')|| (number==='')){
        alert('enter a valid input')
    }
    if(amtPeople.value ==1){
        const billAmount = bill.value;
        const result = (billAmount*percent)/100;
        tip.innerText= 'TIP AMOUNT $'+result;
        tip.style.padding='0 100px'
    }else if(amtPeople.value >1){
        const billAmount = bill.value;
        const result = (billAmount*percent)/100;
        tip.innerText= 'TIP AMOUNT $'+(result/amtPeople.value).toFixed(2)+' each';
        tip.style.padding='0 100px'
    }else {
        alert('Please enter valid values')
    }
     tip.value="";
})

bill.addEventListener('click', function(){
    bill.value="";
    service.value='-- Choose an Option --';
    amtPeople.value="";
    tip.innerText="";
})
