const inputFIO = document.getElementById('FIO');
const inputRole = document.getElementById('Role');
const inputPost = document.getElementById('Post');
const inputEmail = document.getElementById('Email');
const inputPassword = document.getElementById('Password');
const registerButton = document.getElementById('register-button');
const modal = document.getElementById('myModal');
modal.style.display = 'none'; // Принудительно скрываем при загрузке
const modalMessage = document.getElementById('modal-message');
const closeModalButton = document.getElementById('close-modal');

// При показе ошибки
function showError(message) {
    modalMessage.textContent = message;
    modal.style.display = 'block';
    
    // Автоматически скрыть через 3 секунды
    setTimeout(() => {
        modal.style.display = 'none';
    }, 3000);
}

// Закрытие модального окна
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Обработка нажатия кнопки "Зарегистрировать"
registerButton.addEventListener('click', (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    const fio = inputFIO.value.trim();
    const role = inputRole.value.trim();
    const post = inputPost.value.trim();
    const email = inputEmail.value.trim();
    const password = inputPassword.value.trim();

    // Проверка на пустые поля
    if (!fio || !role || !post || !email || !password) {
        showError('Все поля обязательны для заполнения.');
        return;
    }

    // Отправка данных на сервер
    fetch('/registration/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'X-CSRFToken': getCsrfToken(),
        },
        body: `fio=${encodeURIComponent(fio)}&role=${encodeURIComponent(role)}&post=${encodeURIComponent(post)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(data => {
                    throw new Error(data.error || 'Ошибка регистрации');
                });
            }
            return response.json();
        })
        .then(data => {
            if (data.success) {
                window.location.href = '/vhod/'; // Перенаправление на страницу входа
            }
        })
        .catch(error => {
            showError(error.message || 'Ошибка соединения с сервером');
        });
});

// Получение CSRF-токена
function getCsrfToken() {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    return csrfToken ? csrfToken.value : '';
}