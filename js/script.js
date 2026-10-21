// Form page (index.html)
const form = document.getElementById("contact-form");

if (form) {
    const message = document.getElementById("message");
    const counter = document.getElementById("counter");
    const phone = document.getElementById("phone");

    // Message character counter
    function updateCounter() {
        counter.textContent = `${message.value.length} / ${message.maxLength}`;
    }

    message.addEventListener("input", updateCounter);
    updateCounter();

    // Phone mask (Brazilian format): (00) 00000-0000
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

    // The browser only fires "submit" when every field is valid
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const firstName = form.elements.first_name.value.trim();

        // Store the name to display on the thank-you page
        try {
            sessionStorage.setItem("contact-name", firstName);
        } catch (error) {
            // If the browser blocks storage, the thank-you page falls back to the default text
        }

        window.location.href = "thank-you.html";
    });
}

// Thank-you page (thank-you.html)
const successName = document.getElementById("success-name");

if (successName) {
    let name = "";

    try {
        name = sessionStorage.getItem("contact-name") || "";
        sessionStorage.removeItem("contact-name");
    } catch (error) {
        // No storage available: keep the default text
    }

    if (name) {
        successName.textContent = `, ${name}`;
    }
}
