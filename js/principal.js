const CHAVE_ARMAZENAMENTO = "nome-contato";

function formatarTelefone(valor) {
    const digitos = valor.replace(/\D/g, "").slice(0, 11);
    const ddd = digitos.slice(0, 2);
    const numero = digitos.slice(2);

    if (digitos.length > 6) {
        return `(${ddd}) ${numero.slice(0, -4)}-${numero.slice(-4)}`;
    }

    if (digitos.length > 2) {
        return `(${ddd}) ${numero}`;
    }

    return digitos ? `(${digitos}` : "";
}

function salvarNome(nome) {
    try {
        sessionStorage.setItem(CHAVE_ARMAZENAMENTO, nome);
    } catch {
        return;
    }
}

function recuperarNome() {
    try {
        const nome = sessionStorage.getItem(CHAVE_ARMAZENAMENTO) ?? "";
        sessionStorage.removeItem(CHAVE_ARMAZENAMENTO);
        return nome;
    } catch {
        return "";
    }
}

function configurarFormularioContato(formulario) {
    const { mensagem, telefone } = formulario.elements;
    const contador = document.getElementById("contador");
    const botaoEnviar = formulario.querySelector('button[type="submit"]');

    const atualizarContador = () => {
        contador.textContent = `${mensagem.value.length} / ${mensagem.maxLength}`;
    };

    mensagem.addEventListener("input", atualizarContador);
    atualizarContador();

    telefone.addEventListener("input", () => {
        telefone.value = formatarTelefone(telefone.value);
    });

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        botaoEnviar.disabled = true;
        botaoEnviar.textContent = "Enviando…";

        salvarNome(formulario.elements.nome.value.trim());
        window.location.href = formulario.action;
    });
}

function configurarPaginaObrigado(espacoNome) {
    const nome = recuperarNome();

    if (nome) {
        espacoNome.textContent = `, ${nome}`;
    }
}

const formularioContato = document.getElementById("formulario-contato");
const nomeSucesso = document.getElementById("sucesso-nome");

if (formularioContato) {
    configurarFormularioContato(formularioContato);
}

if (nomeSucesso) {
    configurarPaginaObrigado(nomeSucesso);
}
