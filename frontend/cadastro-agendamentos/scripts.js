//Carrega clientes ao abrir a tela
listaAgendamentos()

const btnNovo1 = document.querySelector('#btnNovo1')

btnNovo.onclick = () => {
    //1. Capturar itens do formulário na tela
    const descricao = document.querySelector('#descricao').value
    const cliente_id = document.querySelector('#cliente_id').value
    const horario = document.querySelector('#horario').value

    //2. Enviar requisição post para api com os dados capturado, para adicionar novo cliente
    axios.post('http://localhost:3000/agendamentos', { descricao,cliente_id,horario })
        .then(retorno => {
            //3. Depois de inserir o novo cliente, a lista é atualizada
            listaAgendamentos()  
        })
}