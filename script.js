// Accessible mobile nav toggle - no framework, no dependencies.
// Keeps aria-expanded in sync so screen readers announce the state change,
// not just the visual open/close.
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');

toggle.addEventListener('click', () => {
	const isOpen = menu.classList.toggle('is-open');
	toggle.setAttribute('aria-expanded', String(isOpen));
});
