import Route from "./Route.js";

//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/notre-selection", "Notre Selection", "/pages/notre-selection.html"),
    new Route("/signin", "SignIn", "/pages/signin.html"),
];

//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gephora";