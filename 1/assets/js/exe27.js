const pessoa = [{
        id: 3,
        nome: 'Jose'
    },
    {
        id: 9,
        nome: 'Maria'
    },
    {
        id: 48,
        nome: 'Leticia'
    },
];

const novaPessoa = {};
//usando destructor
for (const {id, nome} of pessoas) {
    console.log(id, nome)
}
//adicionando id dentro do novo objeto usando destructor
for (const {id, nome} of pessoas) {
    novasPessoas[id] = {id, nome};
}
//aq esta sendo atribuido o id individualmente para as pessoas
for (const pessoa of pessoas) {
    const { id } = pessoa;
    novasPessoas[id] = {...pessoa};
}