const tabs = document.querySelectorAll(".tab");
const panels = document.querySelectorAll(".panel");
const btn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const logo = document.getElementById("logo");

// Tabs menu event listener
tabs.forEach((tab) => tab.addEventListener("click", onTabClick));

// Hamburger button listener
btn.addEventListener("click", navToggle);

function onTabClick(e) {
	const target = e.target.children.length ? e.target.children[0] : e.target;

	// Deactivate all tabs
	tabs.forEach((tab) => {
		tab.children[0].classList.remove("border-b-4", "border-softRed");
	});

	// Hide all panels
	panels.forEach((panel) => panel.classList.add("hidden"));

	// Activate a new tab and panel based on the target
	target.classList.add("border-b-4", "border-softRed");
	const classString = target.dataset.target;
	document
		.getElementById("panels")
		.getElementsByClassName(classString)[0]
		.classList.remove("hidden");
}

function navToggle() {
	btn.classList.toggle("open");
	menu.classList.toggle("flex");
	menu.classList.toggle("hidden");

	if (menu.classList.contains("flex")) {
		logo.setAttribute("src", "./images/logo-bookmark-footer.svg");
	} else {
		logo.setAttribute("src", "./images/logo-bookmark.svg");
	}
}
