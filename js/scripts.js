window.addEventListener('DOMContentLoaded', event => {

    console.log("Hello form javaScript");

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        console.log("📌 sideNav element found");
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    } else {
        console.warn("⚠️ sideNav element not found");
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );

    console.log(`🔗 พบ Nav Items: ${responsiveNavItems.length} รายการ`);

    responsiveNavItems.map(function (responsiveNavItem, index) {
        responsiveNavItem.addEventListener('click', () => {
            console.log(`👉 Nav Item ที่ ${index + 1} ถูกคลิก`);
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
