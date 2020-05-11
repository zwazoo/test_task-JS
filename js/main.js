;(function(){
    "use strict";

    //total price and total amount
    let buttons = document.getElementsByClassName('product-box__btn');
    let values=[];
    let prices=[];
    let tot_amount = document.getElementById('amount');
    let tot_price = document.getElementById('price');

    for(var n=0; n<buttons.length; n++){

        let button = buttons[n];

        button.onclick = function total() {

            //Counting the total amount of dishes
            let dish = this.parentElement;
            let amount = dish.querySelector('.qty').querySelector('input').value;
            values.push(parseFloat(amount));

            let sum=0;
            for(let i = 0; i < values.length; i++){
                sum += values[i];
            }
            tot_amount.innerHTML=sum;

            //Counting the total price of dishes
            let price = parseInt(dish.firstChild.nextSibling.textContent)*amount;
            prices.push(parseFloat(price));

            let prices_sum=0;
            for(let i = 0; i < prices.length; i++){
                prices_sum += prices[i];
            }
            tot_price.innerHTML=prices_sum;

        };

    }

    //Filters
    let meal= document.getElementById('select_meal');
    let price= document.getElementById('select_price');
    let dishes = document.getElementsByClassName('product-box__item');
    let all_prices = document.getElementsByClassName('price');

    meal.onchange = choose;
    price.onchange = choose;

    function choose(){

        let filter_meal = meal.value;
        let filter_price = price.value;

        for(var l=0; l<dishes.length; l++){
             
            let meal_category = dishes[l].getAttribute('data-meal');
            let dish_price = parseInt(all_prices[l].textContent);

            if((meal_category!=filter_meal&&filter_meal!=0)||(dish_price>filter_price&&filter_price!=0)){

                dishes[l].style.display="none";
            }else{
                dishes[l].style.display="flex";
            }
           
        }
    }

    //popup

    document.getElementsByClassName('btn-check')[0].onclick = function popup() {

        let popup = document.getElementById('popup');
        popup.style.display="block"; 

        let form=document.getElementById('form');
        form.addEventListener('submit', function (event) {
            event.preventDefault()

            let data_name = document.getElementById('name');
            let data_email = document.getElementById('email');
            
            if(!data_name.value||!data_email.value||data_name.value==' '||data_email.value==' '){
                alert('Некоторые поля не заполнены или не соответствуют действительности.Пожалуйста,проверьте правильность заполнения');
            }else{
                alert('Спасибо за ваш заказ');
                popup.style.display="none";
                tot_amount.innerHTML='XXX';
                tot_price.innerHTML="XXX";
            }           
            
        })

    }

})();