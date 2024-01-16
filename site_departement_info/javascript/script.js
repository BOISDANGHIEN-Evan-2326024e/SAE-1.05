const membre = document.getElementById("intra");

membre.addEventListener("mouseenter", (e) => {
    membre.src = "../images/logo/logo-intranet-blanc.png";
});

membre.addEventListener("mouseleave", (e) => {
    membre.src = "../images/logo/logo-intranet.png";
});
