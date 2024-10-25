const url = 'https://https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json
    console.log(dados)
    const paragrafo = document.createElement('p')
    paragrafo.classLits.add('graficos-container__texto')
    paragrafo.innerHTML `você sabia que o mundo tem ${dados.total_pessoas_mundo} de pessoas e que aproximadamente ${dados.total_pessoas_conectadas} estao conectadas em alguma rede social e passam em média ${dados.tempo_médio} horas conectadas.`
    console.log(paragrafo)

    cosnt container = document.getElementById('graficos-container')
    container.appendChild(paragrafo)
}

vizualizarinformacoesGlobais()