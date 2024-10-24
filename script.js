document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const emailInput = document.getElementById("loginEmail");
    const passwordInput = document.getElementById("loginPassword");

    // Animação suave ao focar e desfocar dos inputs
    const inputs = document.querySelectorAll(".input-group input");
    inputs.forEach(input => {
        input.addEventListener("focus", () => {
            input.style.borderColor = "#a18cd1"; // Mudar a cor da borda ao focar
            input.style.boxShadow = "0 0 8px rgba(161, 140, 209, 0.5)";
        });
        input.addEventListener("blur", () => {
            input.style.borderColor = "#ccc"; // Voltar à cor original ao desfocar
            input.style.boxShadow = "none";
        });
    });

    // Validação básica de e-mail e senha
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (!validateEmail(emailValue)) {
            showAlert("Por favor, insira um e-mail válido.");
            return;
        }

        if (passwordValue.length < 6) {
            showAlert("A senha deve ter pelo menos 6 caracteres.");
            return;
        }

        // Simular um login bem-sucedido
        showLoading(true);
        setTimeout(() => {
            showLoading(false);
            showAlert("Login bem-sucedido!", true);
            loginForm.reset();
        }, 2000);
    });

    // Função para exibir uma mensagem de alerta
    function showAlert(message, success = false) {
        const alertBox = document.createElement("div");
        alertBox.className = `alert ${success ? 'alert-success' : 'alert-error'}`;
        alertBox.textContent = message;

        document.body.appendChild(alertBox);
        setTimeout(() => {
            alertBox.remove();
        }, 3000);
    }

    // Função para validar o formato do e-mail
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }

    // Função para mostrar um carregamento falso durante o login
    function showLoading(show) {
        if (show) {
            const loadingOverlay = document.createElement("div");
            loadingOverlay.className = "loading-overlay";
            loadingOverlay.innerHTML = `
                <div class="spinner"></div>
                <p>Entrando...</p>
            `;
            document.body.appendChild(loadingOverlay);
        } else {
            const overlay = document.querySelector(".loading-overlay");
            if (overlay) {
                overlay.remove();
            }
        }
    }
});
