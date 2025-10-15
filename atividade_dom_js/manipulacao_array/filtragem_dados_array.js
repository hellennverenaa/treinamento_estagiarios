/*
Filtragem de uma Lista de Dados (Array de Objetos)

Objetivo: Praticar a manipulação de arrays, que é o coração de qualquer aplicação que exibe listas de dados (como a lista de reservas).

Descrição:
    O array de objetos chamado salas contém informações sobre diferentes salas disponíveis em um espaço. Cada objeto representa uma sala 
    e deve ter as propriedades: nome (string), capacidade (number) e disponivel (boolean).

    Ao carregar a página, use JavaScript para "desenhar" essa lista de salas na tela, mostrando o nome e a capacidade de cada uma.

    Adicione dois elementos na página:

        Um checkbox com o texto "Mostrar apenas salas disponíveis".

        Um campo de texto (input) para "Filtrar por nome".

    Faça com que, ao marcar/desmarcar o checkbox ou ao digitar no campo de texto, a lista de salas na tela seja atualizada dinamicamente para refletir os filtros.
*/

const salas = [
    { nome: "Paixão", capacidade: 10, disponivel: true },
    { nome: "Respeito", capacidade: 20, disponivel: false },
    { nome: "Hoshin", capacidade: 15, disponivel: true },
    { nome: "Auditorio Fab. 1", capacidade: 25, disponivel: true },
    { nome: "Auditorio Fab. 2", capacidade: 30, disponivel: false }
];

const salasContainer = document.getElementById("lista-salas")

function filtrarSalas(textoBusca, mostrarDisponiveis) {
  let salasFiltradas = salas;
   return salasFiltradas;
}

function filtrarSalas(textoBusca, mostrarDisponiveis) {
    let salasFiltradas = salas.filter(sala => {
        const nomeSala = sala.nome.toLowerCase();
        const textoBuscaFormatado = textoBusca.toLowerCase();
        return nomeSala.includes(textoBuscaFormatado);
    });
     return salasFiltradas;
}

