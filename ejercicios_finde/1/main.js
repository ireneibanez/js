

function createHeader(){
    const header = document.createElement('header');
    document.body.appendChild(header);

    const ul = document.createElement('ul');
    header.appendChild(ul);

    for (let i=0; i < 2; i++){
        const li = document.createElement('li');
        ul.appendChild(li);

        const link = document.createElement('a');
        li.appendChild(link);
    }
    
    const google = document.getElementsByTagName('a')[0];
    const facebook = document.getElementsByTagName('a')[1];
    google.setAttribute("href", "https://www.google.com");
    facebook.setAttribute("href", "https://www.facebook.com");

    const textGoogle = document.createTextNode('Google');
    const textFacebook = document.createTextNode('Facebook');
    google.appendChild(textGoogle);
    facebook.appendChild(textFacebook);

    return
}

createHeader();

function createMain(){
    const main = document.createElement('main');
    document.body.appendChild(main); 

    const table = document.createElement('table');
    main.appendChild(table);

    const thead = document.createElement('thead');
    table.appendChild(thead);

    const tr = document.createElement('tr');
    thead.appendChild(tr);

    for (let i=0; i < 2; i++) {
        const th = document.createElement('th');
        tr.appendChild(th);
    }

    const titulo = document.getElementsByTagName('th')[0];
    const fechaEstreno = document.getElementsByTagName('th')[1];
    const textTitulo = document.createTextNode('Título');
    const textFechaEstreno = document.createTextNode('Fecha de Estreno');
    titulo.appendChild(textTitulo);
    fechaEstreno.appendChild(textFechaEstreno);

    const tbody = document.createElement('tbody');
    table.appendChild(tbody);

    const trbody = document.createElement('tr');
    tbody.appendChild(trbody);

    for (let i=0; i < 2; i++) {
        const td = document.createElement('td');
        trbody.appendChild(td);
    }

    const filmTitle = document.getElementsByTagName('td')[0];
    const date = document.getElementsByTagName('td')[1];
    const textFilmTitle = document.createTextNode('Loonis');
    const textDate = document.createTextNode('01/01/19');
    filmTitle.appendChild(textFilmTitle);
    date.appendChild(textDate);

    return
}

createMain();
