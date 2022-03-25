const listaAgendamentos = () => {
    axios.get('http://localhost:3000/agendamentos')
        .then(retorno => {
            const dados = retorno.data
            let listaAgendamentos = document.querySelector('#listaAgendamentos')

            //Limpar a lista, para depois ser preenchida
            listaAgendamentos.innerHTML = ''

            for (let i = 0; i < dados.length; i++) {
                listaAgendamentos.innerHTML += `<p> ${dados[i].descricao}, ${dados[i].cliente_id}, ${dados[i].horario} </p>`
            }
        })
}

