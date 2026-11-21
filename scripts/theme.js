document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.querySelector('.theme-icon');
    const themeText = document.querySelector('.theme-text');
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.remove('dark-theme');
        themeToggle.checked = false;
        themeIcon.textContent = '☀️';
        themeText.textContent = 'Светлая тема';
    } else {
        document.body.classList.add('dark-theme');
        themeToggle.checked = true;
        themeIcon.textContent = '🌙';
        themeText.textContent = 'Темная тема';
    }
    themeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            themeIcon.textContent = '🌙';
            themeText.textContent = 'Темная тема';
        } else {
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            themeIcon.textContent = '☀️';
            themeText.textContent = 'Светлая тема';
        }
    });
});