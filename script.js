// Permite que o elemento seja largado na zona de destino
function allowDrop(ev) {
    ev.preventDefault();
}

// Guarda o ID do elemento que está a ser arrastado
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

// Lida com o evento de largar (drop)
function drop(ev) {
    ev.preventDefault();
    
    // Obtém o ID do elemento arrastado
    var data = ev.dataTransfer.getData("text");
    var draggedElement = document.getElementById(data);
    
    // Garante que o item é adicionado à coluna (mesmo que se largue em cima de outro item)
    if (ev.target.classList.contains('kanban-column')) {
        ev.target.appendChild(draggedElement);
    } else if (ev.target.closest('.kanban-column')) {
        ev.target.closest('.kanban-column').appendChild(draggedElement);
    }
}