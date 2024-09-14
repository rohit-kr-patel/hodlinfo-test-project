document.addEventListener('DOMContentLoaded', () => {
    const checkbox = document.getElementById('dark-mode-toggle');
    const body = document.body;
    const anp=document.getElementsByClassName("platform-table")
    // Check if dark mode is already enabled
    if (localStorage.getItem('dark-mode') === 'enabled') {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        anp.classList.remove('light-mode');
        anp.classList.add('dark-mode');
        checkbox.checked = true;
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        anp.classList.add('light-mode');
        anp.classList.remove('dark-mode');
    }

    // Toggle dark mode
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            anp.classList.add('dark-mode');
            anp.classList.remove('light-mode');
            localStorage.setItem('dark-mode', 'enabled');
        } else {
            body.classList.add('light-mode');
            body.classList.remove('dark-mode');
            anp.classList.add('light-mode');
            anp.classList.remove('dark-mode');
            localStorage.setItem('dark-mode', 'disabled');
        }
    });
});