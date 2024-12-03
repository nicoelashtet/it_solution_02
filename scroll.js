window.onscroll = function () {
    const button = document.getElementById('backToTop');
    button.style.display = window.scrollY > 200 ? 'block' : 'none';
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
