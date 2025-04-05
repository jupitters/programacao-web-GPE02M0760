const lista = [];

function adicionar(item) {
    let itemValido = validarItem(item);
    
    if(itemValido) {
        lista.push(item);
    }

    return itemValido;
}

function listar() {
    return lista;
}

function remover(id) {
    if(
        !is_numerico(id) || 
        !is_id_cadastrado(id) 
    ){
        return false;
    }

    for(let indice in lista) {
        let item = lista[indice];
        if(item.id == id) {
            lista.splice(indice, 1);
            return true;
        }
    }
}

function editar(id, qtd) {
    if(
        !is_numerico(id) || 
        !is_id_cadastrado(id) ||
        !is_numerico(qtd) ||
        qtd < 0
    ){
        return false;
    }

    for(let indice in lista) {
        let item = lista[indice];
        if(item.id == id) {
            item.qtd = qtd;
            return true; 
        }
    }
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
}

function is_numerico(n){
    if(isNaN(n) || n == null){
        return false;
    }
    return true;
}

function is_id_cadastrado(id){
    let item_existente = false;
    itens.forEach(item_cadastrado => {
        if(id == item_cadastrado.id){
            item_existente = true;
        }
    });
    return item_existente;
}

function validarItem(item){
    let item_valido = true;
    if(!is_numerico(item.id) || item.id <= 0){
        item_valido = false;
    }

    if(is_id_cadastrado(item.id)){
        item_valido = false; 
    }

    if(item.nome.length == 0){
        item_valido = false; 
    }

    if(!is_numerico(item.qtd) || item.qtd < 0){
        item_valido = false;
    }
    return item_valido;
}