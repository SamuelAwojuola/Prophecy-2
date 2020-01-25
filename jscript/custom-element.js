class MyComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `	<script src="jscript/jquery-3.4.1.min.js"></script>
		<script src="https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js" type="text/javascript"></script>

		<link href="style/style.css" rel="stylesheet">
		<link href="style/hoverStyle.css" rel="stylesheet">
		<link href="style/navigation&buttons.css" rel="stylesheet">`;
	}
}

customElements.define('my-header', MyComponent);






const shadowRoot = document.getElementById('example').attachShadow({
	mode: 'open'
});
shadowRoot.innerHTML = `<style>
button {
  background: tomato;
  color: white;
}
</style>
<button id="button"><slot></slot> tomato</button>`;
