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
//usando MAP, deixou de ser um objeto
//a vantagem q a ordem de inserção continuara se matendo

const pessoasMap = new Map();

for (const pessoa of pessoas) {
    const { id } = pessoa;
    pessoasMap.set(id, {...pessoas});
}

console.log(novasPessoas);
console.log(pessoasMap.get(2));

//interando com programa e retornando array
for(pessoa of pessoas){
    console.log(pessoa);
}

//interando com destructor
for(const [identificador, {id, nome}] of novasPessoas){
    console.log(identificador, id, nome);
}

//pegando como arrays completos
for (const pessoas of novasPessoas.values()){
    console.log(pessoas);
}

//eliminando chave, deletou tudo q esta na chave 2
novasPessoas.delete(2);