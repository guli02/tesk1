/*Создайте программу, которая запрашивает у пользователя два целых числа **a** и **b**, 
после чего выводит на экран результаты следующих математических операций: 
    
    - сумма a и b; 
    
    - разница между a и b;
    
    - произведение a и b; 
    
    - частное от деления a на b; 
    
    - остаток от деления a на b;  
    
    - результат возведения числа a в степень b*/

let a = Number(+prompt("Ваше первое число"));
let b = Number(+prompt("Ваше второе число"));

alert('Сумма: ' + (a + b));
alert('Разница: ' + (a - b));
alert('Произведение: ' + (a * b));
alert('Частное от деления: ' + (a / b));
alert('Остаток от деления: ' + (a % b));
alert('Возведение в степень: ' + (a ** b));