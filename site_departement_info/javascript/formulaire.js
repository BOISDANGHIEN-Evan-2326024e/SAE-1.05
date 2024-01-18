if (localStorage.getItem('co') == 1)
{
    document.getElementsByClassName("message")[0].textContent = "Vous êtes connecté en tant que " + String(JSON.parse(localStorage.getItem('un'))[localStorage.getItem('user')]);
    document.getElementById("deco").style.display = "block"
}

function envoie() {
    // Accéder au formulaire par son ID
  
    // Accéder aux éléments du formulaire par leur nom ou ID
    var nom = document.getElementById("username").value
    var pass = document.getElementById("password").value
  
    for (var i in JSON.parse(localStorage.getItem('un')))
    {
        if (nom == JSON.parse(localStorage.getItem('un'))[i])
        {
            if (pass == JSON.parse(localStorage.getItem('pw'))[i])
            {
                localStorage.setItem('co', 1);
                localStorage.setItem('user', i);
                location.reload();
            }
            else
            {
                document.getElementsByClassName("message")[0].textContent = "Mot de passe invalide."
                return;
            }
        }
    }
    document.getElementsByClassName("message")[0].textContent = "Nom d'utilisateur invalide."
}

function deco() {
  
    localStorage.setItem('co', 0);
    document.getElementById("deco").style.display = "none"
    location.reload();
}

var un = JSON.stringify(['Maxime', 'Edson', 'Evan', 'Vincent'])
var pw = JSON.stringify(['azerty', 'cactusmucche', 'legoat', 'prout'])

localStorage.setItem('un', un);
localStorage.setItem('pw', pw);

console.log(JSON.parse(localStorage.getItem('un')));
