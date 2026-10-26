# Fale Conosco — Faculdade Horizonte

Página de contato de uma faculdade fictícia, desenvolvida com **HTML, CSS e JavaScript puros** (sem frameworks). O projeto começou como um exercício de front-end para praticar estrutura semântica, estilização responsiva e interatividade básica.

🔗 **Demonstração:** https://marllonlran.github.io/formulario-contato-faculdade/

## Funcionalidades

- Formulário dividido em duas seções: **Sobre você** e **Sua mensagem**
- Validação nativa do navegador (campos obrigatórios, formato de e-mail, tamanho mínimo)
- Mensagens de erro exibidas somente depois que o usuário interage com o campo, vinculadas a ele por `aria-describedby` para leitores de tela
- Seleção de perfil em formato de "chips" (Futuro aluno, Aluno atual etc.)
- Contador de caracteres da mensagem em tempo real
- Máscara automática de telefone no padrão brasileiro: `(00) 00000-0000`
- Botão de envio que muda para o estado "Enviando…", evitando envios duplicados
- Página de agradecimento que cumprimenta o remetente pelo nome
- Layout responsivo (funciona em celulares)
- Modo escuro automático, que acompanha o tema do sistema
- Respeita a configuração de acessibilidade "reduzir movimento"

## Tecnologias

| Tecnologia | Finalidade |
| --- | --- |
| HTML5 | Estrutura semântica e validação do formulário |
| CSS3 | Propriedades personalizadas, Grid, Flexbox, `clamp()`, media queries e pseudoclasses |
| JavaScript | Eventos, manipulação do DOM e `sessionStorage` |
| Google Fonts | Fraunces (títulos) e Inter (texto) |

## Estrutura do projeto

```
.
├── index.html       # Página do formulário
├── obrigado.html    # Página exibida após o envio
├── css/
│   └── estilo.css   # Todos os estilos
└── js/
    └── principal.js # Contador, máscara de telefone e envio
```

## Como executar

Não é preciso instalar nada:

1. Baixe ou clone o repositório
   ```bash
   git clone https://github.com/marllonlran/formulario-contato-faculdade.git
   ```
2. Abra o arquivo `index.html` no navegador

> Dica: no VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração.

## O que aprendi

### HTML

- Comecei estruturando o formulário com tags **semânticas**: `<main>`, `<form>`, `<fieldset>` e `<legend>` para agrupar campos relacionados.
- Aprendi a associar cada `<label>` ao seu campo usando `for` e `id`, o que melhora a acessibilidade e permite clicar no texto do rótulo para focar o campo.
- Agrupei os chips de perfil em um `<fieldset>` próprio, com `<legend>`, que é a forma nativa de rotular um grupo de botões de opção.
- Vinculei cada mensagem de erro ao seu campo com `aria-describedby`, para que os leitores de tela a anunciem.
- Usei os tipos de input adequados (`email`, `tel`, `radio`, `checkbox`) e atributos como `required`, `minlength`, `maxlength` e `autocomplete`, para que o próprio navegador valide os dados e ajude o usuário.
- Entendi a diferença entre usar `<br>` para criar espaçamento e deixar o espaçamento a cargo do CSS.

### CSS

- Organizei cores e tamanhos em **propriedades personalizadas** (`:root`), para que o tema possa ser alterado editando poucos valores.
- Adicionei o **modo escuro** com `prefers-color-scheme`, redefinindo apenas essas propriedades, e desativei as transições com `prefers-reduced-motion`.
- Usei `:is()` para compartilhar uma regra entre vários seletores e `clamp()` para um título que se ajusta ao tamanho da tela.
- Usei **Grid** para posicionar campos lado a lado e **Flexbox** para alinhar rótulos, chips e a caixa de seleção.
- Deixei o layout **responsivo** com `@media`: no celular, os campos ficam em uma única coluna e o botão ocupa toda a largura.
- Estilizei os estados de interação: `:hover`, `:focus-visible`, `:checked` e `:user-invalid`.
- Transformei os botões de opção em "chips", ocultando visualmente o input e estilizando o `<span>` adjacente com o seletor `+`.
- **Um erro que me ensinou muito:** esqueci um `;` e uma `}` em uma regra, e todo o CSS abaixo dela parou de funcionar. Aprendi a conferir se as chaves estão bem fechadas e a prestar atenção aos avisos do editor.

### JavaScript

- Dividi o script em funções pequenas e com nomes claros (`formatarTelefone`, `salvarNome`, `recuperarNome`, `configurarFormularioContato`, `configurarPaginaObrigado`), para que cada parte tenha uma única responsabilidade.
- Selecionei elementos com `getElementById` e `form.elements` e respondi às ações do usuário com `addEventListener`.
- Criei um **contador de caracteres** atualizado pelo evento `input`.
- Criei uma **máscara de telefone** usando uma expressão regular (`/\D/g`) para manter apenas os dígitos antes de formatá-los.
- No envio, usei `event.preventDefault()`, desativei o botão, guardei o nome no `sessionStorage` e redirecionei para a página definida no `action` do formulário.
- Usei `try/catch` para que a página continue funcionando mesmo se o navegador bloquear o armazenamento.
- Aprendi a usar **um único arquivo JS para duas páginas**, verificando se cada elemento existe antes de usá-lo.

## Próximos passos

- [ ] Enviar os dados de fato para um back-end ou serviço de formulários (por exemplo, Formspree)
- [x] Adicionar modo escuro com `prefers-color-scheme`
- [x] Vincular as mensagens de erro aos campos com `aria-describedby`
- [x] Mover o grupo de chips para um `<fieldset>` próprio
- [ ] Adicionar um botão para alternar manualmente entre os temas claro e escuro

## Autor

Desenvolvido por **Marllon Lorran** — [GitHub](https://github.com/marllonlran)
