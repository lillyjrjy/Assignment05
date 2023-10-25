let idd
let namee
let ext
let email
let department
let submit

let form  = document.getElementById('form')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    idd = document.getElementById("idd")
    namee = document.getElementById("namee")
    ext = document.getElementById("ext")
    email = document.getElementById("email")
    department =document.getElementById("department")
    submit = document.getElementById("submit")

   // if(idd=="" ||)

    console.log(' ID:',idd.value, '\n', 'Name:', namee.value,'\n','Extension:', ext.value, '\n',"Email:", email.value, '\n', "Department:", department.value, '\n')
})