import genHome from './genHome';
import genContact from './genContact';
import genMenu from './genMenu';

const content = (function() {
	const root = document.querySelector("#content");
	const tab = (function() {
		const div = document.createElement("div");
		div.id = "display";
		div.appendChild(genHome());
		return div;
	})();
	const nav = (function() {
		const update = function(e) {
			while (tab.firstChild) {
				tab.removeChild(tab.firstChild);
			}

			const siblings = e.target.parentNode.children;
			for (let i = 0; i < siblings.length; ++i) {
				siblings[i].classList.remove("current");
			}

			e.target.classList.add("current");

			switch (e.target.dataset.name) {
				case "contact":
					tab.appendChild(genContact());
					break;
				case "menu":
					tab.appendChild(genMenu());
					break;
				default:
					tab.appendChild(genHome());
			}
		}

		const div = document.createElement("div");
		div.id = "nav";
		div.classList.add("flex");

		const brand = document.createElement("div");
		brand.id = "brand";
		brand.textContent = "Yum Yum";
		brand.addEventListener("click", update);

		const tabs = document.createElement("ul");

		const home = document.createElement("li");
		home.dataset.name = "home";
		home.textContent = "Home";
		home.classList.add("current");
		home.addEventListener("click", update);

		const contact = document.createElement("li");
		contact.dataset.name = "contact";
		contact.textContent = "Contact";
		contact.addEventListener("click", update);

		const menu = document.createElement("li");
		menu.dataset.name = "menu";
		menu.textContent = "Menu";
		menu.addEventListener("click", update);

		tabs.appendChild(home);
		tabs.appendChild(menu);
		tabs.appendChild(contact);

		div.appendChild(brand);
		div.appendChild(tabs);

		return div;
	})();
	
	const show = function() {
		root.appendChild(nav);
		root.appendChild(tab);
	}

	return {show};
})();

content.show();
