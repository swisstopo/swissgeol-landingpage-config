export default () => {
  // Your own project level JS may go here
  console.log("Hello World");
};

// This function will be the entry point.
  function AposDropdowns() {
    // Find all dropdown toggle buttons on the page.
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    console.log("WHAT", dropdownToggles)

    if (!dropdownToggles.length) {
      // No dropdowns found, do nothing.
      return;
    }


    // Add a click event listener to each dropdown button.
    dropdownToggles.forEach(toggle => {
      toggle.addEventListener('click', (event) => {
        // Find the parent .dropdown container and the menu within it.
        const dropdown = toggle.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');

        // Check if the menu is currently hidden.
        const isHidden = menu.hidden;

        // First, close all other open dropdowns on the page.
        closeAllDropdowns();

        // If the menu was hidden, show it.
        if (isHidden) {
          menu.hidden = false;
          toggle.setAttribute('aria-expanded', 'true');
        }
      });
    });

    // Function to close all dropdowns.
    function closeAllDropdowns() {
      dropdownToggles.forEach(toggle => {
        const dropdown = toggle.closest('.dropdown');
        const menu = dropdown.querySelector('.dropdown-menu');
        menu.hidden = true;
        toggle.setAttribute('aria-expanded', 'false');
      });
    }

    // Add event listener to close dropdowns when clicking outside.
    window.addEventListener('click', (event) => {
      const dropdown = event.target.closest('.dropdown');
      // If the click was outside of any dropdown container, close them all.
      if (!dropdown) {
        closeAllDropdowns();
      }
    });

    // Add event listener to close dropdowns with the Escape key.
    window.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeAllDropdowns();
      }
    });
  }

// Run the function once the page is loaded.
window.addEventListener('DOMContentLoaded', () => {
  AposDropdowns();
});

