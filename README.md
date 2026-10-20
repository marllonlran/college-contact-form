# Fale Conosco — Faculdade Horizonte

Página de contato de uma faculdade fictícia, feita com **HTML, CSS e JavaScript puros** (sem frameworks). Foi uma atividade de front-end que usei para praticar estrutura semântica, estilização responsiva e interatividade básica.

🔗 **Ver online:** https://marllonlran.github.io/fale-conosco-faculdade/

## Funcionalidades

- Formulário dividido em duas seções: **Sobre você** e **Sua mensagem**
- Validação nativa do navegador (campos obrigatórios, e-mail, mínimo de caracteres)
- Mensagens de erro que só aparecem depois que o usuário mexe no campo
- Seleção de perfil em formato de "chips" (Futuro aluno, Aluno atual, etc.)
- Contador de caracteres da mensagem em tempo real
- Máscara automática de telefone: `(00) 00000-0000`
- Página de obrigado que mostra o nome de quem enviou
- Layout responsivo (funciona no celular)

## Tecnologias

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Estrutura semântica e validação de formulário |
| CSS3 | Variáveis, Grid, Flexbox, media queries e pseudo-classes |
| JavaScript | Eventos, manipulação do DOM e `sessionStorage` |
| Google Fonts | Fontes Fraunces (títulos) e Inter (texto) |

## Estrutura do projeto

```
.
├── index.html       # Página do formulário
├── obrigado.html    # Página exibida depois do envio
├── css/
│   └── style.css    # Todos os estilos
└── js/
    └── script.js    # Contador, máscara de telefone e envio
```

## Como rodar

Não precisa instalar nada:

1. Baixe ou clone o repositório
   ```bash
   git clone https://github.com/marllonlran/fale-conosco-faculdade.git
   ```
2. Abra o arquivo `index.html` no navegador

> Dica: no VS Code, a extensão **Live Server** atualiza a página sozinha a cada alteração.

## Minha evolução

### HTML

- Comecei estruturando o formulário com tags **semânticas**: `<main>`, `<form>`, `<fieldset>` e `<legend>` para agrupar os campos.
- Aprendi a ligar cada `<label>` ao seu campo com `for` e `id`, o que melhora a acessibilidade e deixa clicar no texto para focar o campo.
- Usei os tipos certos de input (`email`, `tel`, `radio`, `checkbox`) e atributos como `required`, `minlength`, `maxlength` e `autocomplete` para o próprio navegador validar e ajudar o usuário.
- Entendi a diferença entre usar `<br>` para criar espaço e deixar o espaçamento por conta do CSS.

### CSS

- Organizei as cores e medidas em **variáveis** (`:root`), assim posso mudar o tema trocando poucos valores.
- Usei **Grid** para colocar campos lado a lado e **Flexbox** para alinhar labels, chips e o checkbox.
- Fiz o layout **responsivo** com `@media`: no celular, os campos ficam em uma coluna só e o botão ocupa a largura toda.
- Estilizei estados de interação: `:hover`, `:focus-visible`, `:checked` e `:user-invalid`.
- Transformei os radios em "chips" escondendo o input e estilizando o `<span>` ao lado com o seletor `+`.
- **Um erro que me ensinou muito:** esqueci um `;` e um `}` em uma regra, e todo o CSS abaixo dela parou de funcionar. Aprendi a conferir se as chaves estão fechadas e a prestar atenção nos avisos do editor.

### JavaScript

- Selecionei elementos com `getElementById` e reagi às ações do usuário com `addEventListener`.
- Criei um **contador de caracteres** que atualiza no evento `input`.
- Fiz uma **máscara de telefone** usando expressão regular (`/\D/g`) para manter só os números e depois formatar.
- No envio, usei `event.preventDefault()`, guardei o nome no `sessionStorage` e redirecionei para a página de obrigado.
- Usei `try/catch` para a página continuar funcionando mesmo se o navegador bloquear o armazenamento.
- Aprendi a usar **um único arquivo JS para duas páginas**, verificando se cada elemento existe antes de usá-lo.

## Próximos passos

- [ ] Enviar os dados de verdade para um back-end ou serviço de formulário (ex.: Formspree)
- [ ] Adicionar modo escuro com `prefers-color-scheme`
- [ ] Ligar as mensagens de erro aos campos com `aria-describedby`
- [ ] Trocar o agrupamento dos chips por um `<fieldset>` próprio

## Autor

Feito por **Marllon Lorran** — [GitHub](https://github.com/marllonlran)
