function calculator() {

    const calc = document.querySelector('.calculator-block');
    const expression = calc.querySelector('.calculator-block__expression');
    const buttons = document.querySelector('.calculator-block__buttons');
    const operSqrt = calc.querySelector('.operator-sqrt');
    const operDeg = calc.querySelector('.operator-degree');
    const operDel = calc.querySelector('.operator-del');
    const operPerc = calc.querySelector('.operator-percent');
    const operRem = calc.querySelector('.operator-remove');
    const result = calc.querySelector('.btn-result');
    let res = []; 

    // Функция получения квадратного корня числа 

    function sqrt(num) {
        return Math.sqrt(num).toFixed(2);
    }

    // Функция возведения числа в квадрат 

    function deg(num) {
        return (num**2).toFixed(2);
    }

    // Функция деления единицы на число (1/х) 

    function del(num) {
        return (1 / num).toFixed(2);
    }

    // Функция получения процента от числа 

    function perc(num) {
        return (num / 100).toFixed(2);
    }

    // Функция удаления символов при переполнении  

    function rem(num) {
        return num.slice(0, -1);
    }


    buttons.addEventListener('click', function(event) {
        
        const operators = ['+', '-', '*', '/', '.', '+/-'];
        let val = event.target.value; 
        
        const lastChar = expression.innerHTML.slice(-1);
       
        if(operators.includes(val) && operators.includes(lastChar)) {
            return; }
            else if((expression.innerHTML).includes('.') && val == '.') {
                return; 
            } else {
            expression.innerHTML += val;
            res.push(event.target.value);
        }  
        
        if(event.target.classList.contains('operator-null')) {
            expression.innerHTML = '';
            location.reload();
        }  
        
    })

      
    result.addEventListener('click', function() {
        expression.innerHTML = eval(res.join('')).toFixed(2);
    })
    
    operSqrt.addEventListener('click', function() {
        expression.innerHTML = sqrt(expression.innerHTML);
    })
    
    operDeg.addEventListener('click', function() {
        expression.innerHTML = deg(expression.innerHTML);
    })
    
    operDel.addEventListener('click', function(){
        expression.innerHTML = del(expression.innerHTML);
    })

    operPerc.addEventListener('click', function(){
        expression.innerHTML = perc(expression.innerHTML);
    })

    operRem.addEventListener('click', function() {
        expression.innerHTML = rem(expression.innerHTML);
    })
     
    }

   
calculator();

