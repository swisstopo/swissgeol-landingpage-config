export default () => {
    console.log('Projects Widget module loaded');
    document.addEventListener('click', function (event) {
        // Close any open dropdowns if click is outside
        document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(button => {
            if (!button.contains(event.target)) {
                button.setAttribute('aria-expanded', 'false');
                button.nextElementSibling.hidden = true;
            }
        });
    });

    document.querySelectorAll('.dropdown-toggle').forEach(button => {
        button.addEventListener('click', function (event) {
            event.stopPropagation(); // prevent document click handler

            console.log("Hello")
            const expanded = button.getAttribute('aria-expanded') === 'true';
            // Close all open dropdowns first
            document.querySelectorAll('.dropdown-toggle[aria-expanded="true"]').forEach(openButton => {
                openButton.setAttribute('aria-expanded', 'false');
                openButton.nextElementSibling.hidden = true;
            });

            // Toggle this dropdown
            if (!expanded) {
                button.setAttribute('aria-expanded', 'true');
                button.nextElementSibling.hidden = false;
            } else {
                button.setAttribute('aria-expanded', 'false');
                button.nextElementSibling.hidden = true;
            }
        });
    });

}
