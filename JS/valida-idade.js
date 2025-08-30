export default function eMaiorDeIdade(campo) {
    const dataNascimento = new Date(campo.value);
    validaIdade(dataNascimento);
    console.log(validaIdade(dataNascimento))
}

function validaIdade(idade) {
    const dataAtual = new Date();
    const dataMais18 = new Date(idade.getUTCFullYear() + 18, idade.getUTCMonth(), idade.getUTCDate());

    return dataAtual >= dataMais18;
}