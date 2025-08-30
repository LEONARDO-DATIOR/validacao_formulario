import eUmCPF from "./valida-cpf.js";

const camposFormulario = document.querySelectorAll("[required]");
console.log(camposFormulario);

camposFormulario.forEach((campo) => {
    campo.addEventListener('blur', () => verificaCampo(campo));
})


function verificaCampo(campo) {
    if (campo.name == 'cpf' && campo.value.length >= 11) {
        eUmCPF(campo)
        console.log('CPFFF')
    }
}