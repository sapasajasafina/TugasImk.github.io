document.addEventListener("DOMContentLoaded", function () {
    // Semua panel akan disembunyikan secara default
    hideAllContent();

    // Tambahkan event listener untuk setiap item menu
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', function () {
            // Ambil id konten dari data-id atribut menu
            var contentId = menuItem.getAttribute('data-id');

            // Semua panel disembunyikan
            hideAllContent();

            // Tampilkan panel sesuai dengan menu yang dipilih
            var selectedPanel = document.getElementById(contentId);
            if (selectedPanel) {
                selectedPanel.style.display = 'block';
            }

            // Tambahkan kelas 'active' pada menu yang dipilih
            removeActiveClassFromMenus();
            menuItem.classList.add('active');
        });
    });
});

function hideAllContent() {
    // Semua panel disembunyikan
    var panels = document.querySelectorAll('.panel');
    panels.forEach(function (panel) {
        panel.style.display = 'none';
    });

    // Semua kelas 'active' dihapus dari menu
    removeActiveClassFromMenus();
}

function removeActiveClassFromMenus() {
    var menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(function (menuItem) {
        menuItem.classList.remove('active');
    });
}
