const form=document.forms[0];//find form ref
form.addEventListener("submit",handlePizzaForm);// add event on form submit
function handlePizzaForm(e){
    let total=0;
    e.preventDefault();
    sizeOfPizaa=form.elements["pizza"].value;// find selected pizza value
    if(sizeOfPizaa==0){// if not selected
        document.getElementById("pizzaSize").style.color="red";
        window.alert("Please select a size");
        return;
    }
    document.getElementById("pizzaSize").style.color="";
    total=total+parseFloat(sizeOfPizaa);// update total
    allToppings=form.elements["topping"];// select all toppings select
    for(let i=0;i<allToppings.length;i++){
        if(allToppings[i].checked){// update total
            total=total+parseFloat(allToppings[i].value);
        }
    }
    // check for pickup or delivery
    let pickupRadio=form.elements["pickup"];
    let isChecked=0;
    for(let i=0;i<pickupRadio.length;i++){
        if(pickupRadio[i].checked){
            total=total+parseFloat(pickupRadio[i].value);
            isChecked=1;
        }
    }
    // if not checked then show error message and return
    if(isChecked==0){
        document.getElementById("deliveryCheck").style.color="red";
        window.alert("Please select pickup or delivery");
        return;
    }else{
        document.getElementById("deliveryCheck").style.color="";
    }
   // calculate tax
   total=total+(total*11.25)/100;
   document.getElementById("orderTotal").innerText="Your total is: $"+total;
}
