document.addEventListener('DOMContentLoaded', () => {
    console.log('Dropdown module loaded');
    const dropdownToggle = document.querySelector('.dropdown-toggle');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    if (!dropdownToggle || !dropdownMenu) return;

    dropdownToggle.addEventListener('click', () => {
        const isExpanded = dropdownToggle.getAttribute('aria-expanded') === 'true';
        dropdownToggle.setAttribute('aria-expanded', String(!isExpanded));

        if (isExpanded) {
            dropdownMenu.hidden = true;
        } else {
            dropdownMenu.hidden = false;
        }
    });

    // Optional: close dropdown when clicking outside
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown')) {
            dropdownMenu.hidden = true;
            dropdownToggle.setAttribute('aria-expanded', 'false');
        }
    });
});
