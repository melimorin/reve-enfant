
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
		this.etoileun = etoileun;
		etoileun.classList.add("etoileun");
		etoileun.setAttribute("src", "/images/etoile1.svg");
		
		var etoiledeux = document.createElement("img");
		this.etoiledeux = etoiledeux;
		etoiledeux.classList.add("etoiledeux");
		etoiledeux.setAttribute("src", "/images/etoile2.svg");

		var nuage = document.createElement("img");
		this.nuage = nuage;
		nuage.classList.add("etoiledeux");
		nuage.setAttribute("src", "/images/nuage.svg");

		var texte = document.createElement("img");
		this.texte = texte;
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
		
		this.segmentun();
		/** Ajuster les dimensions ici */
		// document.body.style.setProperty("--largeur", "250");
		// document.body.style.setProperty("--hauteur", "250");
		// this.app = document.getElementById("app");
		// // this.elementAnime = document.getElementById("elementAnime");
		// // Premier segment d'animation ici :
		
		texte.addEventListener("animationend", e => {
			this.redemarrer();
		} )
		
		window.addEventListener("dblclick", e => {
			this.redemarrer();
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
			setTimeout(() => {
				this.etoileun.classList.add("filante");
			}, 1000);
			
			setTimeout(() => {
				this.nuage.classList.add("texte");
			}, 1000);
			setTimeout(() => {
				this.etoiledeux.classList.add("filantedeux");
			}, 2000);
			
			this.etoileun.addEventListener("animationend", e => {
				this.etoileun.style.left = "60px";
				this.etoileun.style.zIndex = "1";
				this.etoileun.style.top = "33px";
	
				this.etoiledeux.style.left = "75px";
				this.etoiledeux.style.zIndex = "1";
				this.etoiledeux.style.top = "44px";
	
				this.texte.style.opacity = "1";
				this.nuage.style.opacity = "1";
	
				this.texte.classList.add("texte");
	
				
			})
			
			this.etoiledeux.addEventListener("animationend", e => {
				this.texte.classList.add("bouger");
			})
		 
	 }

	 static redemarrer() {
		this.etoileun.classList.remove("filante");
		this.etoiledeux.classList.remove("filantedeux");
		this.nuage.classList.remove("texte");
		this.texte.classList.remove("texte");
		this.texte.classList.remove("bouger");

		this.etoileun.style.left = "-100px";
		this.etoileun.style.top = "33px";

		this.etoiledeux.style.left = "-135px";
		this.etoiledeux.style.top = "44px";

		this.texte.style.opacity = "0.0";
		this.texte.style.width = "75%";
		this.texte.style.left = "58px";
		this.texte.style.top = "97px";

		this.nuage.style.opacity = "0.0";
		this.nuage.style.left = "4px";
		this.nuage.style.top = "65px";

		this.segmentun();

		 return;
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
