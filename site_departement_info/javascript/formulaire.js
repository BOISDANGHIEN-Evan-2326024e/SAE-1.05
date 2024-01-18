if (localStorage.getItem('co') == 1)
{
    document.getElementsByClassName("message")[0].textContent = "Vous êtes connecté en tant que " + String(JSON.parse(localStorage.getItem('un'))[localStorage.getItem('user')]);
    document.getElementById("submit").style.display = "none"
    document.getElementById("mdp").style.display = "block"
    document.getElementById("deco").style.display = "block"
    document.getElementsByClassName("message")[0].style.color = "#53af57";
    document.getElementById("cache").style.display = "none";
}

var nom = "";
var pass = "";
var pass2 = "";

function envoie()
{
    if (!changement)
    {
        nom = document.getElementById("username").value
        pass = document.getElementById("password").value
    
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
                    document.getElementsByClassName("message")[0].textContent = "Mot de passe invalide.";
                    document.getElementsByClassName("message")[0].style.color = "#af5353";
                }
                return;
            }
        }
        document.getElementsByClassName("message")[0].textContent = "Nom d'utilisateur invalide."
        document.getElementsByClassName("message")[0].style.color = "#af5353";
    }
    else
    {
        nom = document.getElementById("username").value;
        pass = document.getElementById("password").value;
        pass2 = document.getElementById("cpassword").value;
        if (nom == JSON.parse(localStorage.getItem('pw'))[localStorage.getItem('user')])
        {
            if (pass == pass2)
            {
                document.getElementsByClassName("message")[0].textContent = "Mot de passe changé avec succès."
                document.getElementsByClassName("message")[0].style.color = "#53af57";
                var nouvelleListe = JSON.parse(localStorage.getItem('pw'));
                nouvelleListe[localStorage.getItem('user')] = pass;
                localStorage.setItem('pw', JSON.stringify(nouvelleListe));
                cacherForm();
                modif();
                return;
            }
            document.getElementsByClassName("message")[0].textContent = "Les mots de passes de correspondent pas."
            document.getElementsByClassName("message")[0].style.color = "#af5353";
            return;
        }
        document.getElementsByClassName("message")[0].textContent = "Ancien mot de passe incorrect."
        document.getElementsByClassName("message")[0].style.color = "#af5353";
        return;
    }
}
var changement = false
function modif()
{
    if (!changement)
    {
        document.getElementById("deco").style.display = "none";
        document.getElementById("submit").style.display = "block";
        document.getElementById("submit").value = "Confirmer";
        document.getElementById("mdp").value = "annuler";
        nom = document.getElementById("username").value = "";
        pass = document.getElementById("password").value = "";
        pass2 = document.getElementById("cpassword").value = "";
        montrerForm();
        changement = true;
        document.getElementsByClassName("message")[0].textContent = "Vous êtes connecté en tant que " + String(JSON.parse(localStorage.getItem('un'))[localStorage.getItem('user')]);
    }
    else
    {
        document.getElementById("submit").style.display = "none";
        document.getElementById("deco").style.display = "block"
        document.getElementById("mdp").value = "Modifier mon mot de passe"
        cacherForm();
        changement = false;
    }
}

function deco()
{
    localStorage.setItem('co', 0);
    document.getElementById("deco").style.display = "none"
    location.reload();
}

function montrerForm()
{
    document.getElementById("cache").style.display = "block";
    document.getElementById("cache2").style.display = "block";
    document.getElementById("inf1").textContent = "Ancien mot de passe";
    document.getElementById("username").type = "password";
    document.getElementById("username").placeholder = "Entrez votre ancien mot de passe";
    document.getElementById("inf2").textContent = "Nouveau mot de passe";
    document.getElementById("password").placeholder = "Entrez votre nouveau mot de passe";
    document.getElementById("inf3").textContent = "Confirmez le nouveau mot de passe";
    document.getElementById("password").placeholder = "Entrez de nouveau votre nouveau mot de passe";
    document.getElementById("tite").textContent = "Modification";
}
function cacherForm()
{
    document.getElementById("cache").style.display = "none";
    document.getElementById("cache2").style.display = "none";
}
if (typeof localStorage.getItem('un') == "undefined")
{
    var un = JSON.stringify(['Maxime', 'Edson', 'Evan', 'Vincent'])
    var pw = JSON.stringify(['azerty', 'cactusmucche', 'legoat', 'prout'])

    localStorage.setItem('un', un);
    localStorage.setItem('pw', pw);
}

console.log(JSON.parse(localStorage.getItem('un')));
console.log(JSON.parse(localStorage.getItem('pw')));
