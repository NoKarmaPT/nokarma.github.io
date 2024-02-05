document.body.style.backgroundImage = "images/optimised_background_image.jpg";



function trocarContainers(containerAtivo) {
    var container1 = document.getElementById('container1');
    var container2 = document.getElementById('container2');
    
    if (containerAtivo === 1) {
        container1.style.visibility = 'hidden';
        container2.style.visibility = 'visible';
        container2.style.top = container1.offsetTop + 'px';
        container2.style.left = container1.offsetLeft + 'px';
        document.querySelector('.navbar a.active').classList.remove('active');
        document.querySelector('.navbar a:nth-child(2)').classList.add('active');
    } else {
        container1.style.visibility = 'visible';
        container2.style.visibility = 'hidden';
        document.querySelector('.navbar a.active').classList.remove('active');
        document.querySelector('.navbar a:nth-child(1)').classList.add('active');
    }
}
