exports.paginaInicial = (req, res) => {
    res.send(`
        <form action='/' method='POST'>
        Nome do cliente: <input type='text' name='qualquerCoisa'><br>
        Outro campo qualquer: <input type='text' name='qualqueroutrocampo'><br>
        <button>Enviar</button>
        </form>
    `)
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST')
};