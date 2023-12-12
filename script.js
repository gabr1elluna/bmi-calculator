const firstDiv = document.querySelector('.first-step');
    const secondDiv = document.querySelector('.second-step');
    const thirdDiv = document.querySelector('.third-step');
    function go(currentStep,nextStep){
        let dNone, dBlock;
        if(currentStep == 1){
            dNone = firstDiv;
        }else if(currentStep == 2){
            dNone = secondDiv;
        }else if(currentStep == 3){
            dNone = thirdDiv;
        }
        dNone.style.display = 'none';
        if(nextStep == 1){
            dBlock = firstDiv;
        }else if(nextStep == 2){
            dBlock = secondDiv;
        }else{
            dBlock = thirdDiv;
        }
        dBlock.style.display = 'block';
    }

    function validate(){
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value){
            if(!peso.value && !altura.value){
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }else if(!peso.value){
                peso.style.border = '1px solid red';
            }else{
                altura.style.border = '1px solid red';
            }
        }else{
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5){
                console.log('Underweight | Class Obesity: 0');
                result.style.color = 'yellow';
                result.innerHTML = 'Underweight | Class Obesity: 0';
            }else if(imc >=18.5 && imc < 25){
                console.log('Normal | Class Obesity: 0');
                result.style.color = 'lime';
                result.innerHTML = 'Normal | Class Obesity: 0';
            }else if(imc >= 25 && imc < 30){
                console.log('Overweight | Class Obesity: I');
                result.style.color = 'yellow';
                result.innerHTML = 'Overweight | Class Obesity: I';
            }else if(imc >= 30 && imc < 40){
                console.log('Obesity | Class Obesity: II');
                result.style.color = 'orange';
                result.innerHTML = 'Obesity | Class Obesity: II';
            }else{
                console.log('Obesity | Class Obesity: III');
                result.style.color = 'red';
                result.innerHTML = 'Obesity | Class Obesity: III';
            }
            go(2,3);
        }
    }
    function validateFr(){
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value){
            if(!peso.value && !altura.value){
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }else if(!peso.value){
                peso.style.border = '1px solid red';
            }else{
                altura.style.border = '1px solid red';
            }
        }else{
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5){
                console.log('Insuffisance pondérale | Obésité de classe: 0');
                result.style.color = 'yellow';
                result.innerHTML = 'Insuffisance pondérale | Obésité de classe: 0';
            }else if(imc >=18.5 && imc < 25){
                console.log('Normale | Obésité de classe: 0');
                result.style.color = 'lime';
                result.innerHTML = 'Normale | Obésité de classe: 0';
            }else if(imc >= 25 && imc < 30){
                console.log('Surpoids | Obésité de classe: I');
                result.style.color = 'yellow';
                result.innerHTML = 'Surpoids | Obésité de classe: I';
            }else if(imc >= 30 && imc < 40){
                console.log('Obésité | Obésité de classe: II');
                result.style.color = 'orange';
                result.innerHTML = 'Obésité | Obésité de classe: II';
            }else{
                console.log('Obésité | Obésité de classe: III');
                result.style.color = 'red';
                result.innerHTML = 'Obésité | Obésité de classe: III';
            }
            go(2,3);
        }
    }
    function validateEs(){
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value){
            if(!peso.value && !altura.value){
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }else if(!peso.value){
                peso.style.border = '1px solid red';
            }else{
                altura.style.border = '1px solid red';
            }
        }else{
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5){
                console.log('Peso insuficiente | Obesidad de clase: 0');
                result.style.color = 'yellow';
                result.innerHTML = 'Peso insuficiente | Obesidad de clase: 0';
            }else if(imc >=18.5 && imc < 25){
                console.log('Normal | Obesidad de clase: 0');
                result.style.color = 'lime';
                result.innerHTML = 'Normal | Obesidad de clase: 0';
            }else if(imc >= 25 && imc < 30){
                console.log('Sobrepeso | Obesidad de clase: I');
                result.style.color = 'yellow';
                result.innerHTML = 'Sobrepeso | Obesidad de clase: I';
            }else if(imc >= 30 && imc < 40){
                console.log('Obesidad | Obesidad de clase: II');
                result.style.color = 'orange';
                result.innerHTML = 'Obesidad | Obesidad de clase: II';
            }else{
                console.log('Obesidad | Obesidad de clase: III');
                result.style.color = 'red';
                result.innerHTML = 'Obesidad | Obesidad de clase: III';
            }
            go(2,3);
        }
    }
    function validatePt(){
        const peso = document.getElementById('peso');
        const altura = document.getElementById('altura');
        peso.style.border = 'none';
        altura.style.border = 'none';
        if(!peso.value || !altura.value){
            if(!peso.value && !altura.value){
                peso.style.border = '1px solid red';
                altura.style.border = '1px solid red';
            }else if(!peso.value){
                peso.style.border = '1px solid red';
            }else{
                altura.style.border = '1px solid red';
            }
        }else{
            let imc = peso.value / (altura.value * altura.value);
            const result = document.getElementById('resultado');
            if(imc < 18.5){
                console.log('Abaixo do peso | Obesidade de classe: 0');
                result.style.color = 'yellow';
                result.innerHTML = 'Abaixo do peso | Obesidade de classe: 0';
            }else if(imc >=18.5 && imc < 25){
                console.log('Normal | Obesidade de clase: 0');
                result.style.color = 'lime';
                result.innerHTML = 'Normal | Obesidade de classe: 0';
            }else if(imc >= 25 && imc < 30){
                console.log('Sobrepeso | Obesidade de classe: I');
                result.style.color = 'yellow';
                result.innerHTML = 'Sobrepeso | Obesidade de classe: I';
            }else if(imc >= 30 && imc < 40){
                console.log('Obesidade | Obesidade de classe: II');
                result.style.color = 'orange';
                result.innerHTML = 'Obesidade | Obesidade de classe: II';
            }else{
                console.log('Obesidade | Obesidade de classe: III');
                result.style.color = 'red';
                result.innerHTML = 'Obesidade | Obesidade de classe: III';
            }
            go(2,3);
        }
    }
    