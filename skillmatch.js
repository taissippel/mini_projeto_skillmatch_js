// SKILLMATCH JS
// Simulador de compatibilidade

// DADOS DOS CANDIDATOS:
// =======================================================================================

const candidato1 = {
    nome: "Lucia Oliveira",
    idade: 44,
    area: "Front-End",
    habilidades: ["JavaScript", "GitHub", "Lógica de Programação", "Trello"],
    experienciaMeses: 4
};

const candidato2 = {
    nome: "Fernando Camargo",
    idade: 35,
    area: "Front-End",
    habilidades: ["JavaScript", "HTML", "CSS", "Lógica de Programação", "CSS"],
    experienciaMeses: 6
};

const candidato3 = {
    nome: "Tais Silva",
    idade: 37,
    area: "Front-End",
    habilidades: ["JavaScript", "React", "Lógica de Programação", "Python"],
    experienciaMeses: 2
};
const candidatos = [
    candidato1,
    candidato2,
    candidato3,
]


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

    exibirResumo() {
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
}

class VagaFrontEndJunior extends Vaga {
    constructor(id, empresa, cargoDisponivel, requisitos, salario, modalidade, experienciaMeses) {
        super(id, empresa, cargoDisponivel, requisitos, salario, modalidade);
        this.experienciaMinima = experienciaMeses;
    }

    exibirResumo() {
        return `
        ===========================================
        Vaga: ${this.cargoDisponivel}. 
        Empresa: ${this.empresa}. 
        Requisitos: ${this.requisitos.join(", ")}. 
        Salário: R$${this.salario}. 
        Modalidade: ${this.modalidade}.
        Experiência Mínima: ${this.experienciaMinima} meses.
        ===========================================
        `;
    }

    verificarExperiencia(candidato) {
        if (candidato.experienciaMeses >= this.experienciaMinima) {
            return "Candidato ATENDE ao requisito de experiência mínima.";
        } else {
            return "Candidato NÃO atende ao requisito de experiência mínima.";
        }
    }
}

const novaVaga1 = new Vaga(1, "Tech Solutions", "Desenvolvedor Front-End", ["JavaScript", "HTML", "CSS", "Lógica de Programação"], 3500, "Remoto");
const novaVaga2 = new Vaga(2, "InovaTech", "Desenvolvedor Front-End", ["JavaScript", "React", "Lógica de Programação"], 4000, "Híbrido");
const novaVaga3 = new Vaga(3, "CodeMasters", "Desenvolvedor Front-End", ["JavaScript", "GitHub", "Lógica de Programação"], 3800, "Presencial");
const novaVaga4 = new Vaga(4, "WebGenius", "Desenvolvedor Front-End", ["JavaScript", "HTML", "CSS", "Lógica de Programação"], 3600, "Remoto");
const novaVaga5 = new VagaFrontEndJunior(5, "StartUpX", "Desenvolvedor Front-End Júnior", ["JavaScript", "HTML", "CSS", "Lógica de Programação"], 3000, "Remoto", 3);

const vagas = [
    novaVaga1,
    novaVaga2,
    novaVaga3,
    novaVaga4,
    novaVaga5
];

vagas.forEach(vaga => {
    console.log(vaga.exibirResumo());
});


//FUNÇÕES:
// =====================================================================================    
// Função para calcular a compatibilidade entre o candidato e a vaga.

// Calcular compatibilidade
    function calcularCompatibilidade(candidato, vaga){
        let habilidadesCompativeis = 0;
        vaga.requisitos.forEach(requisito => {
            if(candidato.habilidades.includes(requisito)){
                habilidadesCompativeis++
            }
        });
        let percentual = 
        (habilidadesCompativeis / vaga.requisitos.length) * 100;

        return percentual.toFixed(0);
    }

    // Classificação pela compatubilidade da vaga
    function classificacaoDaCompatibilidade(percentual){
        if(percentual >=80){
            return "Alta Compatibilidade";
        }else if (percentual >=50){
            return "Média Compatibilidade";
        }else{
            return "Baixa Compatibilidade";
        }
    }
    
    // Habilidades faltantes
    function habilidadesFaltantes(candidato, vaga){
        const faltantes = vaga.requisitos.filter(requisito =>{
            return !candidato.habilidades.includes(requisito);
        });
        return faltantes;
    }
    
    //Indicação de estudo
        function gerarIndicacao(faltantes){
            if(faltantes.length === 0){
                return`
                Você atendeu todos os requisitos para a vaga, parabéns!!!`;
            }

                return`
                Faltamam ${faltantes.length} habilidade(s):
                ${faltantes.join(" , ")}
                Recomendamos se especializar mais nessas tecnologias e voltar a participar das seleções para as nossas vagas. Boa Sorte!`;
        }

        function finalizarAnalise(nome, callback){
            console.log("Análise finalizada.");
            callback(nome);
        }

        function mensagemFinal(nome){
            console.log('${nome}, continue estudando e evolundo no mundo da tecnologia!');
        }

    // RELATÓRIO
    // =====================================================================================
    // Relatório da avaliação de compatibilidade entre candidatos e vagas.
        
    vagas.forEach(vaga => {

        console.log(`
            
            --------------------------------
            Vaga: ${vaga.cargoDisponivel}
            Empresa: ${vaga.empresa}   
            --------------------------------
            `)
            
    candidatos.forEach(candidato => {
        const percentual =
            calcularCompatibilidade(candidato, vaga);
        const classificacao = 
            classificacaoDaCompatibilidade(percentual);
        const faltantes =
            habilidadesFaltantes(candidato, vaga);
        const indicacao =
            gerarIndicacao(faltantes); 


        console.log(`
            ===============================
            Candidato: ${candidato.nome}
            Compatibilidade: ${percentual}%
            Classificação: ${classificacao}
            Habilidades faltantes: ${faltantes.join(" , ")}
            ${indicacao}
            ===============================
            `)

                if(vaga instanceof VagaFrontEndJunior){

                    console.log(
                        vaga.verificarExperiencia(candidato)
                    );
                }
        console.log(`
            ...........................................
            `);
        })
    })