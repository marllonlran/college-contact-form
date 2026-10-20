// Página do formulário (index.html)
const form = document.getElementById("contact-form");

if (form) {
    const message = document.getElementById("message");
    const counter = document.getElementById("counter");
    const phone = document.getElementById("phone");

    // Contador de caracteres da mensagem
    function updateCounter() {
        counter.textContent = `${message.value.length} / ${message.maxLength}`;
    }

    message.addEventListener("input", updateCounter);
    updateCounter();

    // Máscara de telefone: (00) 00000-0000
    phone.addEventListener("input", () => {
        const digits = phone.value.replace(/\D/g, "").slice(0, 11);

        if (digits.length > 6) {
            phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2, digits.length - 4)}-${digits.slice(-4)}`;
        } else if (digits.length > 2) {
            phone.value = `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
        } else if (digits.length > 0) {
            phone.value = `(${digits}`;
        } else {
            phone.value = "";
        }
    });

    // O navegador só dispara o "submit" se todos os campos forem válidos
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = form.elements.first_name.value.trim();

        // Guarda o nome para mostrar na página de obrigado
        try {
            sessionStorage.setItem("contact-name", firstName);
        } catch (error) {
            // Se o navegador bloquear o armazenamento, a página de obrigado usa um texto padrão
        }

        window.location.href = "obrigado.html";
    });
}

// Página de obrigado (obrigado.html)
const successName = document.getElementById("success-name");

if (successName) {
    let name = "";

    try {
        name = sessionStorage.getItem("contact-name") || "";
        sessionStorage.removeItem("contact-name");
    } catch (error) {
        // Sem armazenamento disponível: mantém o texto padrão
    }

    if (name) {
        successName.textContent = `, ${name}`;
    }
}
