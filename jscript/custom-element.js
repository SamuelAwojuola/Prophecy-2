class MyComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `	<script src="jscript/jquery-3.4.1.min.js"></script>`
		`<script src="https://www.biblegateway.com/public/link-to-us/tooltips/bglinks.js" type="text/javascript"></script>`

		`<link href="style/style.css" rel="stylesheet">`
		`<link href="style/hoverStyle.css" rel="stylesheet">`
		`<link href="style/navigation&buttons.css" rel="stylesheet">`;
	}
}

customElements.define('my-header', MyComponent);
