const lista = [];

function adicionar(item) {
    lista.push(item);
}

function listar() {
    return lista;
}

function remover(id) {
    for(let indice in lista) {
        let item = lista[indice];
        if(item.id == id) {
            lista.splice(indice, 1);
        }
    }
}

function editar(id, qtd) {
    for(let indice in lista) {
        let item = lista[indice];
        if(item.id == id) {
            item.qtd = qtd; 
        }
    }
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
}