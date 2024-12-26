const inputPass = document.getElementById('password');
const inputUsername = document.getElementById('FIO');
const iconPass = document.getElementById('pass-icon');
const modal = document.querySelector('.Modal');
const closeModalButton = document.getElementById('close-modal');
const loginButton = document.getElementById('login-button');

// Смена видимости пароля
iconPass.addEventListener('click', () => {
    const type = inputPass.getAttribute('type') === 'password' ? 'text' : 'password';
    inputPass.setAttribute('type', type);
});

// Логика отправки формы
loginButton.addEventListener('click', (e) => {
    e.preventDefault();

    const username = inputUsername.value.trim();
    const password = inputPass.value.trim();
    console.log(`Отправляем данные: username=${username}, password=${password}`);

    if (username === '' || password === '') {
        console.warn('Поля логина или пароля пусты.');
        modal.style.display = 'block';
    } else {
        fetch('/vhod/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'X-CSRFToken': getCsrfToken(),
            },
            body: `username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        })
        .then(response => {
            console.log('Ответ сервера:', response.status);
            return response.json(); // Попробуйте обработать тело ответа
        })
        .then(data => {
            console.log('Ответ JSON:', data);
            if (data.success) {
                window.location.href = '/main/';
            } else {
                console.error('Ошибка авторизации:', data.error);
                modal.style.display = 'block';
            }
        })
        .catch(error => console.error('Ошибка сети:', error));
    }
});


// Закрытие модального окна
closeModalButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Получение CSRF-токена
function getCsrfToken() {
    const csrfToken = document.querySelector('[name=csrfmiddlewaretoken]');
    return csrfToken ? csrfToken.value : '';
}


// loginButton.addEventListener('click', () => {
//         const username = inputUsername.value.trim();
//         const password = inputPass.value.trim();

//         if (username === '' || password === '') {
//             modal.style.display = 'block';
//         } else {
//             window.location.href = 'main';
// /*
//         if (username === '' || password === '') {
//             modal.style.display = 'block';
//         } else {
//             window.location.href = 'main';
//         }
// */
//         }
//     });



