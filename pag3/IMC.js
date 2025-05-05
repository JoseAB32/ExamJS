function calcularIMC() {
    
    const peso = parseFloat(document.getElementById('peso').value);
    const alturaCm = parseFloat(document.getElementById('altura').value);
    
    // Validar los datos ingresados
    if (isNaN(peso) || isNaN(alturaCm) || peso <= 0 || alturaCm <= 0) {
        alert("Por favor ingresa valores válidos para peso y altura.");
        return;
    }
    
    
    
    const alturaM = alturaCm / 100;
    
    
    const imc = peso / (alturaM * alturaM);
    
    
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = `Tu IMC es: <strong>${imc.toFixed(2)}</strong>`;
    
    
    let clasificacion = "";
    if (imc < 18.5) {
        clasificacion = "Bajo peso";
    } else if (imc >= 18.5 && imc < 25) {
        clasificacion = "Peso normal";
    } else if (imc >= 25 && imc < 30) {
        clasificacion = "Sobrepeso";
    } else {
        clasificacion = "Obesidad";
    }
    
    resultadoElement.innerHTML += `<br>Clasificación: <strong>${clasificacion}</strong>`;
}