class etudiant {
    constructor(name,prenom,age) {
        this.nom = name
        this.pre = prenom
        this.age = age
    }
}
var etudiants = new Array

function add() {
    let name = document.getElementById('nom')
    let prenom = document.getElementById('prenom')
    let age = document.getElementById('age')
    try{
        if(name.value == "" || prenom.value == "" || age.value =="")throw "an info or infos is or are missing"
        let li = new etudiant(name.value,prenom.value,age.value)
        etudiants.push(li)
    }catch(err){
        alert(err)
    }
}

function lsta(){
    try{
        if (etudiants.length == 0) throw 'there is no students yet'
        let lt = "<table border=1 ><tr><td>nom</td><td>prenom</td><td>age</td></tr>"
        etudiants.forEach(element => {
            lt += "<tr><td>"+ element.nom +"</td><td>"+ element.pre +"</td><td>"+ element.age +"</td></tr>"
        });
        lt += "</table>"
        document.getElementById('ta').innerHTML = lt
    }catch(err){
        alert(err)
    }
}