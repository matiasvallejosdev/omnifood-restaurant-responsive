document.querySelector('#main-nav-list').classList.remove('main-nav__list--active');

const state = {
    isOpened: false,
    invertState: function(){
        this.isOpened = !this.isOpened;
    }
}
const bars = document.getElementById('nav-bars');

bars.addEventListener('click', (e) => {
    state.invertState();
    if(state.isOpened){
        document.querySelector('#nav-bars i').classList.remove('fa-bars');
        document.querySelector('#nav-bars i').classList.add('fa-xmark');
        document.querySelector('#main-nav-list').classList.add('main-nav__list--active');
    } else {
        document.querySelector('#nav-bars i').classList.add('fa-bars');
        document.querySelector('#nav-bars i').classList.remove('fa-xmark');
        document.querySelector('#main-nav-list').classList.remove('main-nav__list--active');
    }
});