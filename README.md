# Fale Conosco — Faculdade Horizonte

Uma página de contato para uma faculdade fictícia, feita com **HTML, CSS e JavaScript puros** (sem frameworks). Começou como um trabalho de front-end que usei para praticar estrutura semântica, estilização responsiva e interatividade básica.

🔗 **Demonstração online:** https://marllonlran.github.io/faculdade-horizonte/

## Funcionalidades

- Formulário dividido em duas seções: **Sobre você** e **Sua mensagem**
- Validação nativa do navegador (campos obrigatórios, formato de e-mail, tamanho mínimo)
- Mensagens de erro que só aparecem depois que o usuário interage com o campo, ligadas aos campos com `aria-describedby` para leitores de tela
- Seleção de perfil exibida como "chips" (Futuro aluno, Aluno atual, etc.)
- Contador de caracteres da mensagem em tempo real
- Máscara automática de telefone: `(00) 00000-0000`
- O botão de envio muda para o estado "Enviando…" para evitar envios duplicados
- Página de agradecimento que cumprimenta o remetente pelo nome
- Layout responsivo (funciona no celular)
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
    └── script.js    # Contador, máscara de telefone e envio
```

## Como começar

Não é necessário instalar nada:

1. Baixe ou clone o repositório
   ```bash
   git clone https://github.com/marllonlran/college-contact-form.git
   ```
2. Abra o `index.html` no navegador

> Dica: no VS Code, a extensão **Live Server** recarrega a página automaticamente a cada alteração.

## O que aprendi

### HTML

- Comecei estruturando o formulário com tags **semânticas**: `<main>`, `<form>`, `<fieldset>` e `<legend>` para agrupar campos relacionados.
- Aprendi a associar cada `<label>` ao seu campo usando `for` e `id`, o que melhora a acessibilidade e permite clicar no texto do rótulo para focar o campo.
- Agrupei os chips de perfil em um `<fieldset>` próprio com `<legend>`, a forma nativa de rotular um grupo de botões de opção (radio).
- Liguei cada mensagem de erro ao seu campo com `aria-describedby`, para que os leitores de tela a anunciem.
- Usei os tipos de input adequados (`email`, `tel`, `radio`, `checkbox`) e atributos como `required`, `minlength`, `maxlength` e `autocomplete`, para que o próprio navegador valide a entrada e ajude o usuário.
- Entendi a diferença entre usar `<br>` para criar espaçamento e deixar o espaçamento por conta do CSS.

### CSS

- Organizei cores e tamanhos em **propriedades personalizadas** (`:root`), de modo que o tema possa ser alterado mudando apenas alguns valores.
- Adicionei o **modo escuro** com `prefers-color-scheme`, redefinindo somente essas propriedades personalizadas, e desativei as transições com `prefers-reduced-motion`.
- Usei `:is()` para compartilhar uma regra entre vários seletores e `clamp()` para um título que escala com a tela.
- Usei **Grid** para posicionar campos lado a lado e **Flexbox** para alinhar rótulos, chips e a caixa de seleção.
- Tornei o layout **responsivo** com `@media`: no celular, os campos se empilham em uma única coluna e o botão ocupa a largura inteira.
- Estilizei os estados de interação: `:hover`, `:focus-visible`, `:checked` e `:user-invalid`.
- Transformei os botões de opção (radio) em "chips" escondendo visualmente o input e estilizando o `<span>` adjacente com o seletor `+`.
- **Um erro que me ensinou muito:** esqueci um `;` e um `}` em uma regra, e todo o CSS abaixo dela parou de funcionar. Aprendi a conferir se as chaves estão bem fechadas e a prestar atenção nos avisos do editor.

### JavaScript

- Dividi o script em funções pequenas e com nomes claros (`formatarTelefone`, `salvarNome`, `recuperarNome`, `configurarFormularioContato`, `configurarPaginaObrigado`), para que cada parte tenha uma única responsabilidade.
- Selecionei elementos com `getElementById` e `formulario.elements`, e respondi às ações do usuário com `addEventListener`.
- Criei um **contador de caracteres** que é atualizado no evento `input`.
- Criei uma **máscara de telefone** usando uma expressão regular (`/\D/g`) para manter apenas os dígitos antes de formatá-los.
- No envio, usei `event.preventDefault()`, desativei o botão, guardei o nome no `sessionStorage` e redirecionei para a página indicada no `action` do formulário.
- Usei `try/catch` para que a página continue funcionando mesmo que o navegador bloqueie o armazenamento.
- Aprendi a usar **um único arquivo JS para duas páginas**, verificando se cada elemento existe antes de usá-lo.

## Próximos passos

- [ ] Enviar de fato os dados para um back end ou serviço de formulários (por exemplo, Formspree)
- [x] Adicionar modo escuro com `prefers-color-scheme`
- [x] Ligar as mensagens de erro aos seus campos com `aria-describedby`
- [x] Mover o grupo de chips para um `<fieldset>` próprio
- [ ] Adicionar um botão manual para alternar entre tema claro e escuro

## Autor

Feito por **Marllon Lorran** — [GitHub](https://github.com/marllonlran)
