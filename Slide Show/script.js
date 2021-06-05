(function(){
    "use strict";

    let currentimage = 0;
    const myphotos = ["image1.jpg", "image2.jpg", "image3.jpg", "image4.jpg", "image5.jpg"];
    const container = document.getElementById('content');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('previous');

    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentimage++;
        if (currentimage > myphotos.length - 1) {
            currentimage = 0;
        }

        swapImage();
    });

    prevBtn.addEventListener('click', function (event) {
        event.preventDefault();

        currentimage--;
        if (currentimage < 0) {
            currentimage = myphotos.length - 1;
        }

        swapImage();

    });

    function swapImage() {
        const newslide = document.createElement('img');
        newslide.src = `slides/${myphotos[currentimage]}`;
        newslide.className = 'fadeinimg';
        container.appendChild(newslide);

        if (container.children.length > 2) {
            container.removeChild(container.children[0]);
        }

    }
})();