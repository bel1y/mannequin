function openingMenu(){
    document.querySelector(".navbar-text-media").style="top:0px"
}
function closeMenuText() {
        document.querySelector(".navbar-text-media").style="top:-100000px"
}
function closeMenu() {
    document.querySelector(".navbar-text-media").style="top:-1000000px"
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const telegram = document.getElementById('telegram').value.trim();
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !phone || !telegram || !message) {
        document.getElementById('errorMessage').style.display = 'block';
    } else {
        document.getElementById('errorMessage').style.display = 'none';
        alert('Сообщение отправлено!'); // Здесь можно добавить логику для отправки данных
        document.getElementById('contactForm').reset(); // Сброс формы
    }
});

const selected = document.querySelector('.select-selected');
const items = document.querySelector('.select-items');

selected.addEventListener('click', () => {
    items.style.display = items.style.display === 'block' ? 'none' : 'block';
});

document.querySelectorAll('.select-items div').forEach(item => {
    item.addEventListener('click', () => {
        const imgSrc = item.querySelector('img').src;
        const langText = item.textContent.trim();
        selected.innerHTML = `<img src="${imgSrc}" alt=""> ${langText}`;
        items.style.display = 'none';
    });
});

document.addEventListener('click', (e) => {
    if (!selected.contains(e.target) && !items.contains(e.target)) {
        items.style.display = 'none';
    }
});

function Uzbek() {
    window.location="/Uzbekcha.html"
}
function Russian() {
    window.location="/index.html"
}