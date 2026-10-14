import { textoAMorse, morseATexto } from './morse.js';

document.addEventListener("DOMContentLoaded", () => {
    const selectTipoConversion = document.getElementById("tipoConversion");
    const labelEntrada = document.getElementById("labelEntrada");
    const inputTexto = document.getElementById("entradaTexto");
    const btnCalcular = document.getElementById("btnCalcular");
    const btnLimpiar = document.getElementById("btnLimpiar");
    const contenedorResultado = document.getElementById("resultado");

    if (selectTipoConversion) {
        selectTipoConversion.addEventListener("change", () => {
            limpiarContenido();
            if (selectTipoConversion.value === "textoToMorse") {
                labelEntrada.textContent = "Texto a convertir:";
                inputTexto.placeholder = "Escribe tu texto aquí...";
            } else {
                labelEntrada.textContent = "Código Morse a convertir:";
                inputTexto.placeholder = "Ej: .-   -...   -.-.";
            }
        });
    }

    const limpiarContenido = () => {
        inputTexto.value = "";
        contenedorResultado.innerHTML = "";
        inputTexto.focus();
    };

    const convertir = () => {
        let textoIngresado = inputTexto.value.trim();
        let tipo = selectTipoConversion ? selectTipoConversion.value : "textoToMorse";

        if (!textoIngresado) {
            contenedorResultado.innerHTML = `
                <div class="row justify-content-center">
                    <div class="col-12">
                        <div class="alert alert-danger text-center fw-bold py-3" role="alert">
                            Por favor, ingresa un valor para realizar la conversión.
                        </div>
                    </div>
                </div>
            `;
            return;
        }

        let resultadoFinal = tipo === "textoToMorse" 
            ? textoAMorse(textoIngresado) 
            : morseATexto(textoIngresado);

        contenedorResultado.innerHTML = `
            <div class="row justify-content-center">
                <div class="col-12 text-center">
                    <div class="card border-success shadow-sm">
                        <div class="card-header bg-success text-white fw-bold">
                            RESULTADO DE LA CONVERSIÓN
                        </div>
                        <div class="card-body">
                            <p class="mb-1 text-muted">Traducción obtenida:</p>
                            <h3 class="bg-light p-3 rounded text-success fw-bold text-break" style="font-family: monospace;">
                                ${resultadoFinal}
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        `;
    };

    if (btnCalcular) {
        btnCalcular.addEventListener("click", convertir);
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener("click", limpiarContenido);
    }
});