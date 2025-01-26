document.addEventListener("DOMContentLoaded", () => {
    // Submenu Toggle
    const submenuToggles = document.querySelectorAll(".submenu-toggle");
    submenuToggles.forEach(toggle => {
        toggle.addEventListener("click", () => {
            const submenuItems = toggle.nextElementSibling;
            submenuItems.style.display = submenuItems.style.display === "flex" ? "none" : "flex";
        });
    });

    // Note: Placeholder chart initialization has been removed since all graphs were removed from the layout.
});
