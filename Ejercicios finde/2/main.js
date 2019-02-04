function setClassToTable() {
    let tr = document.getElementsByTagName('tr')
    for (let i=0; i < tr.length; i++) {
        if(i % 2 === 0) {
            tr[i].className = 'even';
        } else {
            tr[i].className = 'odd';
        }
    }
}

setClassToTable();

//classList.add ('even): añade clases sin pisar las que ya tiene asignadas