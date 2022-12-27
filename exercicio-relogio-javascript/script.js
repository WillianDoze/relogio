const MEIO_DIA = 12;

// PRIMEIRA FUNÇÃO
const editaRelogio = function()
{
    // ETAPA 1: Descubra como colocar o elemento do relógio na constante abaixo.
    const relogio = document.getElementById('relogio');
   
    // ETAPA 2: Altere o conteúdo do elemento para exibir '00:00:00 AM!'
    relogio.innerHTML = "00:00:00 AM!"
}

// Pega o horário atual
const mostraRelogioAtual = function()
{
    // -> @TODO: ETAPA 1: PEGUE O HORÁRIO ATUAL
    const agora = new Date();

    let horas = agora.getHours();
    console.log(horas)
    let minutos = agora.getMinutes();
    console.log(minutos)
    let segundos = agora.getSeconds();
    console.log(segundos)

    let meridiano = "AM";

    // Define formato meridiano
    if (horas >= MEIO_DIA)
    {
        meridiano = "PM";
    }

    if (horas > MEIO_DIA)
    {
        horas = horas - 12;
    }

    if (horas < 10)
    {
        horas = '0' + horas;
    }
    if (minutos < 10)
    {
        minutos = '0' + minutos;
    }
    if (segundos < 10)
    {
        segundos = '0' + segundos;
    }

    // // coloca tudo junto e monta o relógio
    const texto_relogio = horas + ':' + minutos + ':' + segundos + " " + meridiano + "!";
    // // -> @TODO: ETAPA 2: COLOQUE O RELÓGIO AQUI
    const relogio = document.getElementById('relogio');
    relogio.innerHTML = texto_relogio; //Aqui vai o texto do relogio.

};

 const mostraRelogioAoVivo = function ()
{
    // -> @TODO: IMPLEMENTAR ATUALIZAÇÃO AO VIVO DO RELÓGIO
    // ETAPA 1: Descubra como repetir uma função em intervalo de um segundo e coloque
    // a função mostraRelogioAtual() em loop
    setInterval(mostraRelogioAtual,1000)

}
