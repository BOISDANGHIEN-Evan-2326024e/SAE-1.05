if (localStorage.getItem('co') == 0)
{
    window.location.href = '../site_departement_info/html/redirect.html';
}
else
{
    document.getElementsByClassName("logo_title")[0].textContent = "Intranet Département Informatique AMU - Permissions d'accès accordées à " + String(JSON.parse(localStorage.getItem('un'))[localStorage.getItem('user')]);
}
