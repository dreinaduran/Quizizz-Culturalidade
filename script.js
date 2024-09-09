const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Certo dia, um policial estava fazendo a sua patrulha quando presenciou uma pichação nos muros da cidade. O que você acha que o policial pensou sobre isso?",
        alternativas: [
            {
                texto: "Achou Legal",
                afirmacao: "Talvez você veja a pichação de forma positiva, mas a realidade é que a maioria dos policiais considera isso como vandalismo. "
            },
            {
                texto: "Achou Incrível",
                afirmacao: "É interessante que você veja algum valor na pichação, mas geralmente ela é vista de forma negativa pelas autoridades."
            },
            {
                texto: "Ruim",
                afirmacao: "Você pensa que a pichação é ruim. Isso é mais próximo da realidade, já que pichação é frequentemente considerada uma forma de vandalismo que afeta negativamente a cidade."
            }
        ]
    },
    {
        enunciado: "Martin estava saindo de sua escola quando resolveu andar um pouco pela praça perto da sua escola e se deparou com uma batalha de rimas. O que você acha que Martin pensou sobre este evento?",
        alternativas: [
            {
                texto: "Interessante",
                afirmacao: "Você pode achar legal ver algo novo e diferente como uma batalhas de rimas, o que pode ter despertado a sua curiosidade."
            },
            {
                texto: "Empolgante",
                afirmacao: "Você gosta de eventos cheios de energia e criatividade, e sentiria animado em uma batalha de rimas."
            },
            {
                texto: "Desagradável",
                afirmacao: "Você não curte eventos barulhentos ou não apreciaria esse tipo de competição como as batalhas de rima."
            },
            {
                texto: "Inadequado",
                afirmacao: "Você acha que o ambiente da praça não era o lugar certo para esse tipo de evento, como uma batalha de rima."
            }
        ]
    },
    {
        enunciado: "Lucas e seu amigo Kauan estavam andando pelo shopping quando se depararam com um simulador de corrida de rua. Após o teste, como você classificaria a experiência dos dois?",
        alternativas: [
            {
                texto: "Legal",
                afirmacao: "Você  gosta de experimentar novas atividades, pode se divertir em várias atividades."
            },
            {
                texto: "Incrível",
                afirmacao: "Você se impressiona com simuladores e tecnologia, pode achar simuladores uma experiência realmente marcante e emocionante."
            },
            {
                texto: "Ruim",
                afirmacao: "Você não curte simuladores ou acha que a experiência não foi tão divertida."
            },
            {
            texto: "Horrível",
            afirmacao: "Você não gosta de simuladores ou acha a atividade desconfortável"
        }
        ]
    },
    {
        enunciado: "Pedro e sua amiga Ana estavam em um evento de culinária e experimentaram diversos pratos novos. Qual você acha que foi a opinião deles sobre a comida servida?",
        alternativas: [
            {
                texto: "Deliciosa",
                afirmacao: "Você é fã de culinária e gosta de experimentar novos sabores."
            },
            {
                texto: "Interessante",
                afirmacao: "Você aprecia pratos novos e diferentes, fica intrigados com as novas combinações de sabores. "
            },
            {
                texto: "Desagradável",
                afirmacao: "Você tem preferências específicas quando se trata de comida e pode achar certos pratos desconfortáveis"
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Suas perspectivas Culturais...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();