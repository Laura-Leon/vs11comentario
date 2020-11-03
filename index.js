const database = firebase.database();
const bregister = document.getElementById('bregister');
const Nombre = document.getElementById('Nombre');
const Codigo = document.getElementById('Codigo');

const Contenedor = document.getElementById('Contenedor');

const comentario = ()=>{
if(Nombre.value === ' '|| Codigo.value === ' '){
    alert(' ponga el texto');
    return;
}
    let referencia = database.ref('estudiantes').push();
    let estudiante ={
        id:referencia.key,
name: Nombre.value,
cod: Codigo.value,

    };
    referencia.set(estudiante);

    Nombre.value=' ';
    Codigo.value = ' ';
  
}

bregister.addEventListener('click',comentario);

//lectura 


database.ref('estudiantes').on('value',function(data) {
Contenedor.innerHTML = ' ';

    data.forEach(estudiante => {
        let valor = estudiante.val();
        console.log(valor.name);
let fi = new Fila(valor);
Contenedor.appendChild(fi.render());
        
    });
});