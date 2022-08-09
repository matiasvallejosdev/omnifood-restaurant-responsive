  
window.onscroll = function (e) {  
        // called when the window is scrolled.
        let header = document.getElementById('header');  
        if (window.pageYOffset == 0) {
            header.classList.remove('header--scrolled');
        } 
        else 
        {
            header.classList.add('header--scrolled');
        }
} 