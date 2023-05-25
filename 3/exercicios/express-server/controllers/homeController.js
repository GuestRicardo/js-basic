
exports.paginaInicial= (req, res)=>{
    res.send(`
        <form action='/' method='POST'>
        Nome do cliente: <input type='text' name='qualquerCoisa'><br>
        Outro campo qualquer: <input type='text' name='qualqueroutrocampo'><br>
        <button>Enviar</button>
        </form>
    `)
}