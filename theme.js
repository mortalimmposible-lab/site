(function() {
    const STORAGE_KEY = 'oge-theme';
    const THEME_CLASS = 'light-theme';

    function setTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add(THEME_CLASS);
            localStorage.setItem(STORAGE_KEY, 'light');
        } else {
            document.body.classList.remove(THEME_CLASS);
            localStorage.setItem(STORAGE_KEY, 'dark');
        }
        updateButtonIcon();
    }

    function updateButtonIcon() {
        const btn = document.getElementById('theme-toggle');
        if (!btn) return;
        const isLight = document.body.classList.contains(THEME_CLASS);
        btn.innerHTML = isLight ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    }

    function initTheme() {
        const savedTheme = localStorage.getItem(STORAGE_KEY);
        if (savedTheme === 'light') {
            document.body.classList.add(THEME_CLASS);
        } else if (savedTheme === 'dark') {
            document.body.classList.remove(THEME_CLASS);
        } else {
            const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
            if (prefersLight) {
                document.body.classList.add(THEME_CLASS);
                localStorage.setItem(STORAGE_KEY, 'light');
            } else {
                document.body.classList.remove(THEME_CLASS);
                localStorage.setItem(STORAGE_KEY, 'dark');
            }
        }
        updateButtonIcon();
    }

    function setupToggle() {
        const btn = document.getElementById('theme-toggle');
        if (btn) {
            btn.addEventListener('click', () => {
                const isLight = document.body.classList.contains(THEME_CLASS);
                setTheme(isLight ? 'dark' : 'light');
            });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        initTheme();
        setupToggle();
    });
})();