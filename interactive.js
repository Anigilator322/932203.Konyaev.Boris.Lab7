let number = document.getElementById('text');

function addSquare (square) {
    for (let i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', square);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';

        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteFigure);
       
        document.querySelector(".FigureSpace").appendChild(div);
    }
}

function addTriangle (triangle) {
    for (let i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', triangle);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';

        div.addEventListener('click', changeColorTriangle);
        div.addEventListener('dblclick', deleteFigure);

        document.querySelector(".FigureSpace").appendChild(div);
    }
}

function addCircle (circle) {
    for (var i = 0; i < number.value; i++) 
    {  
        let div = document.createElement('div');
        div.setAttribute('class', circle);

        div.style.top = String(Math.random()*350+1) + 'px';
        div.style.left = String(Math.random()*1000+1) + 'px';
        div.style.width = div.style.height = String(Math.random()*200+50) + 'px';

        div.addEventListener('click', changeColor);
        div.addEventListener('dblclick', deleteFigure);

        document.querySelector(".FigureSpace").appendChild(div);
    }
}

function changeColor (event) {
    let color = event.target.style.backgroundColor;
    let newcolor;
    
    do {
        let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        newcolor = '#' + r + g + b;
    } while (newcolor === color);
    
    event.target.style.backgroundColor = newcolor;
    
    
}

function changeColorTriangle (event) {
    let color = event.target.style.backgroundColor;
    let newcolor;
    
    do {
        let r = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        let g = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        let b = Math.floor(Math.random() * 256).toString(16).padStart(2, '0');
        newcolor = '#' + r + g + b;
    } while (newcolor === color);
    
    event.target.style.borderBottomColor = newcolor;
    
}

function deleteFigure (event) {
    event.target.style.display = 'none';
}