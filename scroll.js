window.onbeforeunload = function() {
    localStorage.setItem('scrollPosition', window.scrollY);
};
