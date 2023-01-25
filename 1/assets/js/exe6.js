const data = new Date();
let diaDaSemana = data.getDay();
let mes = data.getMonth();
let ano = zeroAesquerda(data.getFullYear());
let horas = zeroAesquerda(data.getHours());
let minutos = zeroAesquerda(data.getMinutes());
let data1 = zeroAesquerda(data.getDate());

//adicionando 0 na frente de numros com um dezena
function zeroAesquerda(num) {
    return num >= 10 ? num : `0{num}`;
}

//dia em texto
function datadeHojeTexto(diaDaSemana) {
    /** switch case */
    let diadasemanaTexto;

    switch (diaDaSemana) {
        case 0:
            diadasemanaTexto = "Domingo";
            return diadasemanaTexto;
        case 1:
            diadasemanaTexto = "Segunda-Feira";
            return diadasemanaTexto;
        case 2:
            diadasemanaTexto = "Terça-Feira";
            return diadasemanaTexto;
        case 3:
            diadasemanaTexto = "Quarta-Feira";
            return diadasemanaTexto;
        case 4:
            diadasemanaTexto = "Quinta-Feira";
            return diadasemanaTexto;
        case 5:
            diadasemanaTexto = "Sexta-Feira";
            return diadasemanaTexto;
        case 6:
            diadasemanaTexto = "Sabado";
            return diadasemanaTexto;
        default:
            diadasemanaTexto = " ";
            return diadasemanaTexto;
    }
    /**fim switch case */
}

//mes em texto
function mesTexto(mes) {
    /** switch case */
    let mesTexto;

    switch (mes) {
        case 0:
            mesTexto = "janeiro";
            return mesTexto;
        case 1:
            mesTexto = "fevereiro";
            return diadasemanaTexto;
        case 2:
            mesTexto = "Março";
            return mesTexto;
        case 3:
            mesTexto = "Abril";
            return mesTexto;
        case 4:
            mesTexto = "Maio";
            return mesTexto;
        case 5:
            mesTexto = "Junho";
            return mesTexto;
        case 6:
            mesTexto = "Julho";
            return mesTexto;
        case 7:
            mesTexto = "Agosto";
            return mesTexto;
        case 8:
            mesTexto = "Setembro";
            return mesTexto;
        case 9:
            mesTexto = "Outubro";
            return mesTexto;
        case 10:
            mesTexto = "Novembro";
            return mesTexto;
        case 11:
            mesTexto = "Dezembro";
            return mesTexto;
        default:
            mesTexto = " ERRO ";
            return mesTexto;
    }
    /**fim switch case */
}
//complimentando
function complimentar(cump) {
    if (horas >= 6 && horas <= 11) {
        return cump = 'Bom Dia';
    } else if (horas >= 12 && horas <= 17) {
        return cump = 'Boa Tarde';
    } else if (horas >= 18 && horas <= 23) {
        return cump = 'Boa Noite';
    } else {
        return cump = 'Boa Madrugada';
    }
}

const diadasemanaTexto1 = datadeHojeTexto(diaDaSemana);
const mesTexto1 = mesTexto(mes);
const cump = complimentar(horas);


const resultado = document.querySelector("#resultado");
const cump1 = document.querySelector('#cump');
cump1.innerHTML = `${cump}`;
resultado.innerHTML = `Hoje é ${diadasemanaTexto1}, dia ${data1} de ${mesTexto1} de ${ano} e são ${horas}:${minutos}.`;
