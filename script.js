// variables

let exitenciasMedicamentos1 = 0;
let exitenciasMedicamentos2 = 0;
let pacientesAtendidos = 0;
let pacinetesConMedicamentos1 = 0;
let pacinetesConMedicamentos2 = 0;

// Actulizacion de existencias de medicamentos 

document.getElementById('actualizarExistencias').addEventListener('click', () => {
    exitenciasMedicamentos1 = parseInt(document.getElementById('medicamento1').value);
    exitenciasMedicamentos2 = parseInt(document.getElementById('medicamento2').value);

    if (exitenciasMedicamentos1 > 0 && exitenciasMedicamentos2 > 0) {
        document.getElementById('mostrarExistencias').innerHTML = `<h1>Medicamento 1: ${exitenciasMedicamentos1} unidades, Medicamento 2: ${exitenciasMedicamentos2} unidades</h1>`
        document.getElementById('mensaje').textContent = ``;
    } else {
        document.getElementById('mensaje').textContent = `Atencion: Valores no permitidos (Ingrese valores positivos o 0)`;
    }
});

// validacion de presion arterial, asignacion de medicamentos, realizacion de deducciones medicas 

document.getElementById('procesarPaciente').addEventListener('click', () => {
    let sistolica = parseFloat(document.getElementById('sistolica').value);
    let diastolica = parseInt(document.getElementById('diastolica').value);
    let categoria = '';
    let medicamentoEntregado = 0;
    let dosis = 0;
    let mensaje = '';

    // primero validamos los rangos de presion arterial

    if (sistolica < 69 && diastolica < 48) {
        categoria = 'hipotension';
        medicamentoEntregado = 2;
        dosis = 6;
    } else if (sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica < 66) {
        categoria = 'optima';
    } else if (sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica < 92) {
        categoria = 'comun';
    } else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124) {
        categoria = 'pre-HTDA';
        medicamentoEntregado = 1;
        dosis = 6;
    } else if (sistolica >= 177 && sistolica < 198 && diastolica >= 124 && diastolica < 142) {
        categoria = 'HTAG1';
        medicamentoEntregado = 1;
        dosis = 10;
    } else if (sistolica >= 198 && sistolica < 246 && diastolica >= 142 && diastolica < 169) {
        categoria = 'HTAG2';
        medicamentoEntregado = 1;
        dosis = 18;
    } else if (sistolica >= 246 && diastolica > 169) {
        categoria = 'HTAG3';
        medicamentoEntregado = 1;
        dosis = 35;
    } else if (sistolica >= 162 && diastolica < 86) {
        categoria = 'HTASS';
        medicamentoEntregado = 1;
        dosis = 17;
    }else{
        
    }

});



//     // Validando los rangos de presiones
//     if (sistolica < 69 && diastolica < 48) {
//         categoria = 'Hipotension';
//         medicamentoEntregado = 2;
//         dosis = 6;
//     }else if (sistolica >= 69 && sistolica < 98 && diastolica >= 48 && diastolica < 66 ){
//         categoria = 'Optima';
//     }else if (sistolica >= 98 && sistolica < 143 && diastolica >= 66 && diastolica < 92 ){
//         categoria = 'Común';
//     }else if (sistolica >= 143 && sistolica < 177 && diastolica >= 92 && diastolica < 124 ){
//         categoria = 'Pre-HTA';
//         medicamentoEntregado = 1;
//         dosis = 6;
//     }

// });

