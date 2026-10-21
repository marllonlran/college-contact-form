# Contact Us — Horizonte College

A contact page for a fictional college, built with **plain HTML, CSS, and JavaScript** (no frameworks). It began as a front-end assignment that I used to practice semantic structure, responsive styling, and basic interactivity.

🔗 **Live demo:** https://marllonlran.github.io/fale-conosco-faculdade/

## Features

- Form split into two sections: **About you** and **Your message**
- Native browser validation (required fields, email format, minimum length)
- Error messages that appear only after the user interacts with a field
- Role selection displayed as "chips" (Prospective student, Current student, etc.)
- Real-time character counter for the message
- Automatic phone number mask: `(00) 00000-0000`
- Thank-you page that greets the sender by name
- Responsive layout (works on mobile)

## Technologies

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic structure and form validation |
| CSS3 | Custom properties, Grid, Flexbox, media queries, and pseudo-classes |
| JavaScript | Events, DOM manipulation, and `sessionStorage` |
| Google Fonts | Fraunces (headings) and Inter (body text) |

## Project structure

```
.
├── index.html       # Form page
├── thank-you.html   # Page shown after submission
├── css/
│   └── style.css    # All styles
└── js/
    └── script.js    # Counter, phone mask, and submission
```

## Getting started

No installation required:

1. Download or clone the repository
   ```bash
   git clone https://github.com/marllonlran/fale-conosco-faculdade.git
   ```
2. Open `index.html` in your browser

> Tip: in VS Code, the **Live Server** extension automatically reloads the page on every change.

## What I learned

### HTML

- I started by structuring the form with **semantic** tags: `<main>`, `<form>`, `<fieldset>`, and `<legend>` to group related fields.
- I learned to associate each `<label>` with its field using `for` and `id`, which improves accessibility and lets users click the label text to focus the field.
- I used the appropriate input types (`email`, `tel`, `radio`, `checkbox`) and attributes such as `required`, `minlength`, `maxlength`, and `autocomplete` so the browser itself can validate input and assist the user.
- I understood the difference between using `<br>` to create spacing and leaving spacing to CSS.

### CSS

- I organized colors and sizes into **custom properties** (`:root`), so the theme can be changed by updating just a few values.
- I used **Grid** to place fields side by side and **Flexbox** to align labels, chips, and the checkbox.
- I made the layout **responsive** with `@media`: on mobile, fields stack into a single column and the button spans the full width.
- I styled interaction states: `:hover`, `:focus-visible`, `:checked`, and `:user-invalid`.
- I turned the radio buttons into "chips" by visually hiding the input and styling the adjacent `<span>` with the `+` selector.
- **A mistake that taught me a lot:** I forgot a `;` and a `}` in one rule, and all the CSS below it stopped working. I learned to check that braces are properly closed and to pay attention to editor warnings.

### JavaScript

- I selected elements with `getElementById` and responded to user actions with `addEventListener`.
- I built a **character counter** that updates on the `input` event.
- I created a **phone mask** using a regular expression (`/\D/g`) to keep only digits before formatting them.
- On submission, I used `event.preventDefault()`, stored the name in `sessionStorage`, and redirected to the thank-you page.
- I used `try/catch` so the page keeps working even if the browser blocks storage.
- I learned to use **a single JS file for two pages** by checking whether each element exists before using it.

## Next steps

- [ ] Actually send the data to a back end or form service (e.g., Formspree)
- [ ] Add dark mode with `prefers-color-scheme`
- [ ] Link error messages to their fields with `aria-describedby`
- [ ] Move the chip group into its own `<fieldset>`

## Author

Built by **Marllon Lorran** — [GitHub](https://github.com/marllonlran)
