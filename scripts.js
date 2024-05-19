document.addEventListener('DOMContentLoaded', function() {
    const submenuParent = document.querySelector('.submenu-parent');
    const submenu = document.querySelector('.submenu');
    const menuItems = document.querySelectorAll('.menu > li:not(.submenu-parent)');

    let timeoutId;

    submenuParent.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        submenu.classList.add('show');
        submenu.style.display = 'block';
    });

    submenuParent.addEventListener('mouseleave', function(event) {
        timeoutId = setTimeout(() => {
            submenu.classList.remove('show');
            submenu.style.display = 'none';
        }, 1000);
    });

    submenu.addEventListener('mouseenter', function() {
        clearTimeout(timeoutId);
        submenu.classList.add('show');
        submenu.style.display = 'block';
    });

    submenu.addEventListener('mouseleave', function() {
        submenu.classList.remove('show');
        submenu.style.display = 'none';
    });

    menuItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            submenu.classList.remove('show');
            submenu.style.display = 'none';
        });
    });
});

// 섹션을 보여주는 함수
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section-content');
    sections.forEach(section => {
        section.style.display = 'none';
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
    }
}
