base = prompt("Digite os cms da base: ")
altura = prompt("Digite a altura do triângulo")

atriangulo = (base * altura) / 2

document.getElementById("resultado").textContent = atriangulo.toFixed(2) + "cm"