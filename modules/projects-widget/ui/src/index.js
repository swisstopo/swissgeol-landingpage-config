export default () => {
  // eslint-disable-next-line no-undef
  apos.util.widgetPlayers.projects = {
    selector: "[data-projects]",
    player: function (widget) {
      const toggler = widget.querySelector("[dropdown-toggle]");
      const list = widget.querySelector("[dropdown-content]");
      if (toggler && list) {
        toggler.addEventListener("click", (event) => {
          if (!toggler.contains(event.target)) {
            return;
          }
          const isExpanded = toggler.getAttribute("aria-expanded") === "true";

          toggler.setAttribute("aria-expanded", String(!isExpanded));
          list.hidden = isExpanded;
        });

        list.addEventListener("click", () => {
          toggler.setAttribute("aria-expanded", "false");
          list.hidden = true;
        });

        document.addEventListener("click", (event) => {
          if (!toggler.contains(event.target) && !list.contains(event.target)) {
            toggler.setAttribute("aria-expanded", "false");
            list.hidden = true;
          }
        });
      }
    },
  };
};
