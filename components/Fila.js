class Fila{

constructor(estudiante){
    this.estudiante = estudiante;
}
render = ()=> {
    let component = document.createElement('div');
    component.className = 'fi';
    let respuestica = document.createElement('div');
    respuestica.className ='res';

    let nameCont = document.createElement('div');
    nameCont.className = "nameCont";
    nameCont.innerHTML = (
        '<p>'+this.estudiante.name+'</p>'
    );

let codCont = document.createElement('div');
codCont.innerHTML = this.estudiante.cod;

let deletebtn = document.createElement('button');
deletebtn.className = 'deletebtn';
deletebtn.innerHTML = 'X';

let comentarI = document.createElement('input');
comentarI.placeholder = 'comentar';
comentarI.innerHTML = 'comentar';

let responderbtn =  document.createElement('button');
responderbtn.className = 'responderbtn';
responderbtn.innerHTML = 'responder';

responderbtn.addEventListener('click', ()=>{
  
 let respuesta = document.createElement('p');
 respuesta.className = 'respuesta';
 respuesta.innerHTML = (comentarI.value);
 
 respuestica.appendChild(respuesta);
 comentarI.value = '';
 
 });


component.appendChild(nameCont);
component.appendChild(codCont);
component.appendChild(deletebtn);
component.appendChild(comentarI);
component.appendChild(responderbtn);
component.appendChild(respuestica);




//eliminar comentario
deletebtn.addEventListener('click',()=>{

    const database = firebase.database();
   
   database.ref('estudiantes/'+this.estudiante.id).set(null);

});

return component;
}
}