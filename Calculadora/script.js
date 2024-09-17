function realizarOperaciones() {  
    const num1 = parseFloat(document.getElementById("num1").value);  
    const num2 = parseFloat(document.getElementById("num2").value);  

    for (let i = 1; i <= 5; i++) {  
        switch (i) {  
            case 1:  
                alert(`Suma = ${i}: ${num1} + ${num2} = ${num1 + num2}`);  
                break;  
            case 2:  
                alert(`Resta = ${i}: ${num1} - ${num2} = ${num1 - num2}`);  
                break;  
            case 3:  
                alert(`Multiplicacion = ${i}: ${num1} * ${num2} = ${num1 * num2}`);  
                break;  
            case 4:  
                if (num2 !== 0) {  
                    alert(`Division = ${i}: ${num1} / ${num2} = ${num1 / num2}`);  
                } else {  
                    alert(`Division = ${i}: División por cero no es posible.`);  
                }  
                break;  
            case 5:  
                alert(`Residuo =  ${i}: ${num1} % ${num2} = ${num1 % num2}`);  
                break;  
        }  
    }
}