const STORAGE_KEY = "contact-name";

function formatPhone(value) {
    const digits = value.replace(/\D/g, "").slice(0, 11);
    const areaCode = digits.slice(0, 2);
    const number = digits.slice(2);

    if (digits.length > 6) {
        return `(${areaCode}) ${number.slice(0, -4)}-${number.slice(-4)}`;
    }

    if (digits.length > 2) {
        return `(${areaCode}) ${number}`;
    }

    return digits ? `(${digits}` : "";
}

function saveName(name) {
    try {
        sessionStorage.setItem(STORAGE_KEY, name);
    } catch {
        return;
    }
}

function takeName() {
    try {
        const name = sessionStorage.getItem(STORAGE_KEY) ?? "";
        sessionStorage.removeItem(STORAGE_KEY);
        return name;
    } catch {
        return "";
    }
}

function setupContactForm(form) {
    const { message, phone } = form.elements;
    const counter = document.getElementById("counter");
    const submitButton = form.querySelector('button[type="submit"]');

    const updateCounter = () => {
        counter.textContent = `${message.value.length} / ${message.maxLength}`;
    };

    message.addEventListener("input", updateCounter);
    updateCounter();

    phone.addEventListener("input", () => {
        phone.value = formatPhone(phone.value);
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        submitButton.disabled = true;
        submitButton.textContent = "Sending…";

        saveName(form.elements.first_name.value.trim());
        window.location.href = form.action;
    });
}

function setupThankYouPage(nameSlot) {
    const name = takeName();

    if (name) {
        nameSlot.textContent = `, ${name}`;
    }
}

const contactForm = document.getElementById("contact-form");
const successName = document.getElementById("success-name");

if (contactForm) {
    setupContactForm(contactForm);
}

if (successName) {
    setupThankYouPage(successName);
}
