const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function vizualizarinformacoesGlobais() { 
    const res = await fetch(url)
    const dados = await res.json()
    const total_pessoas_conectadas = (dados.total_pessoas_conectadas / 1e9)
    const pessoasNomundo =(dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio)
    const  minutos = Math.round((dados.tempo_medio - horas) * 100)
    const porcentagemConectada = ((pessoasConectadas / pessoasNoMundo) *100).toFixed(2)

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')

     paragrafo.innerHTML = `voce sabia que o mundo tem <span>${pessoasNomundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoasConectadas} bilhões</span> estão conectadas em alguma rede social e passam em media <span>${horas} horas</span> e <span>${minutos} minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagemConectada}%</span> de pessoas estão conectadas em alguma rede social.`
    
     const container = document.getElementById('graficos-container')
     container.appendChild(paragrafo)
     }
     
     vizualizarinformacoesGlobais()