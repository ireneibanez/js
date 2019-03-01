import {RequiredValidator} from './validators/requiredValidator';
import {createMinLength} from './validators/minLengthValidator';

import { TextInput, Form} from './controllersValidator';

const nameInput = new TextInput('name', [RequiredValidator, createMinLength(5)]);
const instanceForm = new Form([nameInput]);


//fetch


// function callAPI() {
//     fetch('https://5c7657612179940014a137c5.mockapi.io/api/v1/todo', {
//         method: 'GET'
//     })
//     .then ((data) =>  { 
//         return printedCelds(data.json());
//     })
//     .catch((error) => {
//         console.log(error);
//     })   
// }


// function newPost(e){
   
//     const error = document.getElementsByClassName('error')[0];
//     error.style.display = 'none';
//     const inputText = instanceForm.getInput().name;
    
//     if (instanceForm.validateForm()) {
//        fetch('https://5c7657612179940014a137c5.mockapi.io/api/v1/todo', {
//            method: 'POST',
//            mode: 'cors',
//            body: JSON.stringify({content: inputText}),
//            headers: {
//                'Content-type': 'application/json',
//            }
//        });
       
//        data = data.json();
//        return callAPI(data);
//     } else {
//         error.style.display = 'block';
//     }
  
// }

// async await

async function callAPI() {
    const rowData = await fetch('https://5c7657612179940014a137c5.mockapi.io/api/v1/todo', {
    method: 'GET'
    });
    const data = await rowData.json();
    printCelds(data);
}


async function newPost(e){
   
    const error = document.getElementsByClassName('error')[0];
    error.style.display = 'none';
    const inputText = instanceForm.getInput().name;
    
    if (instanceForm.validateForm()) {
       const rowData = await fetch('https://5c7657612179940014a137c5.mockapi.io/api/v1/todo', {
           method: 'POST',
           mode: 'cors',
           body: JSON.stringify({content: inputText}),
           headers: {
               'Content-type': 'application/json',
           }
       });
       
       const data = await rowData.json();
       callAPI(data);
    } else {
        error.style.display = 'block';
    }
  
}


function sendAPI() {
    const btn = document.getElementById('start');
    btn.addEventListener('click', newPost);    
}

function reloadCell(data) {
    const tbody = document.querySelector('tbody');
    let row = document.createElement("tr");

    let celda = document.createElement("td");
    let textoCelda = document.createTextNode(data.id);
    celda.appendChild(textoCelda);
    row.appendChild(celda);

    let celda2 = document.createElement("td");
    let textoCelda2 = document.createTextNode(data.content);
    celda2.appendChild(textoCelda2);
    row.appendChild(celda2);

    let celda3 = document.createElement("td");
    let textoCelda3 = document.createTextNode(data.createdAt);
    celda3.appendChild(textoCelda3);
    row.appendChild(celda3);

    let celda4 = document.createElement("td");
    let buttonDelete = document.createElement('button');
    let btnDeleteText = document.createTextNode('delete');
    celda4.appendChild(buttonDelete);
    buttonDelete.appendChild(btnDeleteText);

    buttonDelete.setAttribute('id', data.id);

    row.appendChild(celda4);
    buttonDelete.addEventListener('click',deleteElement);


    tbody.appendChild(row);
}


function printCelds(data) {

    let tbody = document.querySelector('tbody');
    tbody.innerHTML = ' ';
    for (let i = 0; i < data.length; i++) {
       reloadCell(data[i]);
    }

}

//fetch

// function deleteElement(e) {
//     const nodo = e.target;
//     const id = nodo.getAttribute('id');   
//     const URL = `https://5c7657612179940014a137c5.mockapi.io/api/v1/todo/${id}`;
//     fetch(`${URL}`, {
//         method: 'DELETE'
//     });
//     data = data.json();
//     return callAPI(data)
// }

 //async await

async function deleteElement(e) {
    const nodo = e.target;
    const id = nodo.getAttribute('id');   
    const URL = `https://5c7657612179940014a137c5.mockapi.io/api/v1/todo/${id}`;
    const rowData = await fetch(`${URL}`, {
        method: 'DELETE'
    });
    const data = await rowData.json();
    callAPI(data)
}




function submit(event) {
    event.preventDefault();
    if (instanceForm.validateForm() === true) {
        console.log(instanceForm.getInput());
    } else {
        console.log('Invalid form');
        return false;
    }
    
}

document.querySelector('form').onsubmit = submit;

window.onload = function(){
    callAPI();
    sendAPI();
}