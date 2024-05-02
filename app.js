
const form=document.getElementById('login-form');
const user_name=document.getElementById("username");
const pass_word=document.getElementById("password");

form.addEventListener('submit', (e)=>{
    e.preventDefault()
    

    const username=document.getElementById("username").value;
    const password=document.getElementById("password").value;

    // verifier si l'un des champs est vide.
    if(!username || !password){
        Swal.fire({
            title:'Error',
            text:'Veuillez remplir tous les champs',
            icon:'error',
            confirmButtonText:'Erreur'
        });
        Reset()
        return;
    }

    // Si les champs sont vides.
    Swal.fire({
        title:'Success',
        text:'Veuillez remplir tous les champs',
        icon:'success',
        confirmButtonText:'Ok',
    });
    Reset()
    
})


// Reset Function
const Reset=()=>{
    user_name.value="";
    pass_word.value="";
}


