const mobileNav = () => {
    const headerBtn = document.querySelector('.header-bars');
    const mobileNav = document.querySelector('.mobile-nav');

    let isMobileNavOpen = false;
    

    headerBtn.addEventListener('click', () => {
        isMobileNavOpen = !isMobileNavOpen;
        if (isMobileNavOpen) {
        mobileNav.style.display = 'flex';
        document.body.style.overflowY = 'hidden';
        }
        else {
        mobileNav.style.display = 'none';
        document.body.style.overflowY = 'auto ';

        }
    });
};
export default mobileNav; 