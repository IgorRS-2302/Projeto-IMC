// Fórmula IMC: peso / altura² 
const calcular = document.getElementById('calcular')

function imc() {
    const weight = document.getElementById('weight').value
    const height = document.getElementById('height').value
    const result = document.getElementById('result')

    if (weight !== '' && height !== ''){
        
        const valueIMC = (weight / (height ** 2)).toFixed(2)
        result.textContent = valueIMC
    }else{
        result.textContent = 'Preencha todos campos'
    }
}

calcular.addEventListener('click', imc)