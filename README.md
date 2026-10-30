# Contact Us — Horizon College

Contact page for a fictional college, built with **vanilla HTML, CSS, and JavaScript** (no frameworks). The project started as a front-end exercise to practice semantic markup, responsive styling, and basic interactivity.

🔗 **Live demo:** https://marllonlran.github.io/college-contact-form/

## Features

- Form split into two sections: **About you** and **Your message**
- Native browser validation (required fields, email format, minimum length)
- Error messages shown only after the user interacts with a field, linked to it via `aria-describedby` for screen readers
- Role selection styled as "chips" (Prospective student, Current student, etc.)
- Real-time character counter for the message
- Automatic phone mask in the Brazilian format: `(00) 00000-0000`
- Submit button switches to a "Sending…" state to prevent duplicate submissions
- Thank-you page that greets the sender by name
- Responsive layout (mobile-friendly)
- Automatic dark mode that follows the system theme
- Respects the "reduce motion" accessibility setting

## Tech Stack

| Technology | Purpose |
| --- | --- |
| HTML5 | Semantic structure and form validation |
| CSS3 | Custom properties, Grid, Flexbox, `clamp()`, media queries, and pseudo-classes |
| JavaScript | Events, DOM manipulation, and `sessionStorage` |
| Google Fonts | Fraunces (headings) and Inter (body text) |

## Project Structure

```
.
├── index.html       # Contact form page
├── thank-you.html   # Page shown after submission
├── css/
│   └── styles.css   # All styles
└── js/
    └── main.js      # Counter, phone mask, and submission
```

## Getting Started

No installation required:

1. Download or clone the repository
   ```bash
   git clone https://github.com/marllonlran/college-contact-form.git
   ```
2. Open `index.html` in your browser

> Tip: in VS Code, the **Live Server** extension reloads the page automatically on every change.

## What I Learned

### HTML

- I started by structuring the form with **semantic** tags: `<main>`, `<form>`, `<fieldset>`, and `<legend>` to group related fields.
- I learned to associate each `<label>` with its field using `for` and `id`, which improves accessibility and lets users click the label text to focus the field.
- I grouped the role chips in their own `<fieldset>` with a `<legend>`, which is the native way to label a group of radio buttons.
- I linked each error message to its field with `aria-describedby` so screen readers announce it.
- I used the appropriate input types (`email`, `tel`, `radio`, `checkbox`) and attributes such as `required`, `minlength`, `maxlength`, and `autocomplete`, so the browser itself validates the data and assists the user.
- I understood the difference between using `<br>` for spacing and leaving spacing to CSS.

### CSS

- I organized colors and sizes into **custom properties** (`:root`), so the theme can be changed by editing just a few values.
- I added **dark mode** with `prefers-color-scheme` by redefining only those properties, and disabled transitions with `prefers-reduced-motion`.
- I used `:is()` to share a rule across multiple selectors and `clamp()` for a heading that scales with the viewport.
- I used **Grid** to place fields side by side and **Flexbox** to align labels, chips, and the checkbox.
- I made the layout **responsive** with `@media`: on mobile, fields stack in a single column and the button spans the full width.
- I styled interaction states: `:hover`, `:focus-visible`, `:checked`, and `:user-invalid`.
- I turned radio buttons into "chips" by visually hiding the input and styling the adjacent `<span>` with the `+` selector.
- **A mistake that taught me a lot:** I forgot a `;` and a `}` in one rule, and all the CSS below it stopped working. I learned to check that braces are properly closed and to pay attention to editor warnings.

### JavaScript

- I split the script into small, clearly named functions (`formatPhone`, `saveName`, `retrieveName`, `setupContactForm`, `setupThankYouPage`), so each part has a single responsibility.
- I selected elements with `getElementById` and `form.elements` and handled user actions with `addEventListener`.
- I built a **character counter** updated on the `input` event.
- I built a **phone mask** using a regular expression (`/\D/g`) to keep only digits before formatting them.
- On submit, I used `event.preventDefault()`, disabled the button, stored the name in `sessionStorage`, and redirected to the page set in the form's `action`.
- I used `try/catch` so the page keeps working even if the browser blocks storage.
- I learned to use **a single JS file for two pages** by checking whether each element exists before using it.

## Roadmap

- [ ] Actually send the data to a back end or form service (e.g., Formspree)
- [x] Add dark mode with `prefers-color-scheme`
- [x] Link error messages to their fields with `aria-describedby`
- [x] Move the chip group into its own `<fieldset>`
- [ ] Add a button to manually toggle between light and dark themes

## Author

Built by **Marllon Lorran** — [GitHub](https://github.com/marllonlran)
