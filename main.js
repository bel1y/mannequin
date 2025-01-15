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