
/*jslint esnext:true, browser:true*/
/**
 * @module App
 */
export default class App {
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
		document.body.style.setProperty("--largeur", "250");
		document.body.style.setProperty("--hauteur", "250");
		this.app = document.getElementById("app");

		var etoiles = document.createElement("img");
		etoiles.classList.add("etoiles");
		etoiles.setAttribute("src", "/images/etoiles.svg");
		
		var etoileun = document.createElement("img");
		etoileun.classList.add("etoileun");
		etoileun.setAttribute("src", "/images/etoile1.svg");
		
		var etoiledeux = document.createElement("img");
		etoiledeux.classList.add("etoiledeux");
		etoiledeux.setAttribute("src", "/images/etoile2.svg");

		var nuage = document.createElement("img");
		nuage.classList.add("etoiledeux");
		nuage.setAttribute("src", "/images/nuage.svg");

		var texte = document.createElement("img");
		texte.setAttribute("src", "/images/texte.svg");
		texte.style.left = "15px";
		texte.style.top = "85px";

		
		this.app.appendChild(etoileun);
		etoileun.style.left = "-100px";
		etoileun.style.top = "33px";

		this.app.appendChild(etoiledeux);
		etoiledeux.style.left = "-135px";
		etoiledeux.style.top = "44px";

		this.app.appendChild(texte);
		texte.style.opacity = "0.0";
		texte.style.width = "75%";
		texte.style.left = "58px";
		texte.style.top = "97px";
		
		this.app.appendChild(nuage);
		nuage.style.opacity = "0.0";
		nuage.style.left = "4px";
		nuage.style.top = "65px";
		
		
		/** Ajuster les dimensions ici */
		// document.body.style.setProperty("--largeur", "250");
		// document.body.style.setProperty("--hauteur", "250");
		// this.app = document.getElementById("app");
		// // this.elementAnime = document.getElementById("elementAnime");
		// // Premier segment d'animation ici :

		setTimeout(() => {
			etoileun.classList.add("filante");
		}, 1000);
		
		setTimeout(() => {
			nuage.classList.add("texte");
		}, 1000);
		setTimeout(() => {
			etoiledeux.classList.add("filantedeux");
		}, 2000);
		
		etoileun.addEventListener("animationend", e => {
			etoileun.style.left = "60px";
			etoileun.style.zIndex = "1";
			etoileun.style.top = "33px";

			etoiledeux.style.left = "75px";
			etoiledeux.style.zIndex = "1";
			etoiledeux.style.top = "44px";

			texte.style.opacity = "1";
			nuage.style.opacity = "1";

			texte.classList.add("texte");

			
		})
		
		etoiledeux.addEventListener("animationend", e => {
			texte.classList.add("bouger");
		})
		
		// this.rougit();
		// // Boucle de controle
		// this.app.addEventListener("animationend", e => {
		// 	e.stopImmediatePropagation();
		// 	console.log("fin d'une animation.");
		// 	// À la fin d'un segment, on démarre l'autre segment. 
		// 	// Voir l'exemple pour la procédure
		// });
	}
	/**
	 * On redémarre l'animation
	 */

	 static segmentun() {
		 
	 }

	 static redemarrer() {
		 etoileun.removeAttribut("class");
		 etoiledeux.removeAttribut("class");
		 nuage.removeAttribut("class");
		 texte.removeAttribut("class");
	 }
	// Créer la fonction statique redemarrer
	// Enlever toute classe pouvant avoir été ajoutée par un segment d'animation. On peut faire ...removeAttribut("class").
	// Enlever au besoin toute propriété CSS ajoutée par programmation.
	// Enlever ou rétablir au besoin tout attribut modifié par programmation.
	// Démarrer le premier segment d'animation

	/**
	 * Premier segment d'animation
	
	 * ...
	 */
	
	
	// static rougit() {
	// 	this.app.classList.add("rougit");
	// 	this.app.style.setProperty("animation-name", "none");
	// 	window.setTimeout(() => {
	// 		this.app.style.removeProperty("animation-name");
	// 	}, 50);
	// }

	/**
	 * Méthode qui permet d'attendre le chargement de la page avant d'éxécuter le script principal
	 * @returns {Promise} La promesse qui sera résolue après chargement
	 */
	static load() {
		return new Promise(resolve => {
			window.addEventListener("load", () => {
				resolve();
			});
		});
	}
}
