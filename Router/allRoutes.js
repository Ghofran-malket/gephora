import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/notre-selection", "Notre Selection", "/pages/notre-selection.html"),
    new Route("/signin", "Connexion", "/pages/auth/signin.html"),
    new Route("/signup", "Inscription", "/pages/auth/signup.html","/js/auth/signup.js"),
    new Route("/account", "Mon compte", "/pages/auth/account.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gephora";