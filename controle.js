/* var obj ={
    "firstname": "foulen" ,
    "lastname" : "ben foulen " ,
    "age": 25 
    
} // obj JSON : c est une variable de type objet 

console.log(obj.age) ; // affichage 
console.log(obj["age"]) ;
console.log(obj)  // afficher tt l obj 

// le tableau peut prendre des variables  de types differentes en js 

var users =['mouna','hadil','yasmine','amine','maram']
console.log(users[2]) // afficher yasmine
users.push('malek') // ajouter malek a la fin du tab 
users.splice(3,1) //  effacer amine 
console.log(users)
 */

 var users =['mouna','hadil','yasmine','amine','maram']

document.write("<ul>")  // document.write permet d ecrire dans html 

for(var user of users) 
{
    document.write("<li>" , user , "</li>")
}
document.write("</ul>")

//  la diff entre let et var : let  locale juste win sta3melnehe bark et var globale  

// modification 

