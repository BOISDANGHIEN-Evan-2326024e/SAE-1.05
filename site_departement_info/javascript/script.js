const membre = document.getElementById("intra");

membre.addEventListener("mouseenter", (e) => {
    membre.src = "../images/logo/logo-intranet-blanc.png";
});

membre.addEventListener("mouseleave", (e) => {
    membre.src = "../images/logo/logo-intranet.png";
});


const img1 = document.getElementsByClassName("actu")[0];
const img2 = document.getElementsByClassName("actu")[1];
const img3 = document.getElementsByClassName("actu")[2];
img1.style.display = "flex";
img2.style.display = "none";
img3.style.display = "none";
var img = 1;
function prec()
{
    if (img == 1)
    {
        img1.style.display = "none";
        img3.style.display = "flex";
        img = 3;
    }
    else if (img == 3)
    {
        img3.style.display = "none";
        img2.style.display = "flex";
        img = 2;
    }
    else if (img == 2)
    {
        img2.style.display = "none";
        img1.style.display = "flex";
        img = 1;
    }
}
function suiv()
{
    if (img == 1)
    {
        img1.style.display = "none";
        img2.style.display = "flex";
        img = 2;
    }
    else if (img == 3)
    {
        img3.style.display = "none";
        img1.style.display = "flex";
        img = 1;
    }
    else if (img == 2)
    {
        img2.style.display = "none";
        img3.style.display = "flex";
        img = 3;
    }
}