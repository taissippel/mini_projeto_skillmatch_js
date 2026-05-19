// SKILLMATCH JS
// Simulador de compatibilidade

// DADOS DOS CANDIDATOS:
// =======================================================================================

const candidato1 = {
    nome: "Lucia Oliveira",
    idade: 44,
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Trello"],
    experienciaMeses: 2
};

const candidato2 = {
    nome: "Fernando Camargo",
    idade: 35,
    area: "Front-End",
    habilidades: ["JavaScript", "HTML", "CSS", "Lógica de Programação", "CSS"],
    experienciaMeses: 2
};

const candidato3 = {
    nome: "Tais Silva",
    idade: 37,
    area: "Front-End",
    habilidades: ["JavaScript", "React", "Lógica de Programação", "Python"],
    experienciaMeses: 2
};
// CLASSE DE VAGAS DISPONÍVEIS:
// =======================================================================================
class Vaga {
    constructor(id, empresa, cargoDisponivel, requisitos, salario, modalidade) {    
        this.id = id;
        this.empresa = empresa;
        this.cargoDisponivel = cargoDisponivel;
        this.requisitos = requisitos;
        this.salario = salario;
        this.modalidade = modalidade;
    }

exibirResumo(){

    return `
    ===========================================
    Vaga: ${this.cargoDisponivel}. 
    Empresa: ${this.empresa}. 
    Requisitos: ${this.requisitos.join(", ")}. 
    Salário: R$${this.salario}. 
    Modalidade: ${this.modalidade}.
    ===========================================
    `;
}
    class VagaFrontEnd extends Vaga{

    }
}
    const novaVaga1 = new Vaga(1, "Tech Solutions", "Desenvolvedor Front-End", ["JavaScript", "HTML", "CSS", "Lógica de Programação"], 3500, "Remoto");
    const novaVaga2 = new Vaga(2, "InovaTech", "Desenvolvedor Front-End", ["JavaScript", "React", "Lógica de Programação"], 4000, "Híbrido");
    const novaVaga3 = new Vaga(3, "CodeMasters", "Desenvolvedor Front-End", ["JavaScript", "GitHub", "Lógica de Programação"], 3800, "Presencial");
    const novaVaga4 = new Vaga(4, "WebGenius", "Desenvolvedor Front-End", ["JavaScript", "HTML", "CSS", "Lógica de Programação"], 3600, "Remoto");

    const vagas =[
        novaVaga1,
        novaVaga2,
        novaVaga3,
        novaVaga4
    ];

vagas.forEach(vaga => {
    console.log(vaga.exibirResumo());
});

//FUNÇÕES:
// =====================================================================================    
