export class Paragraph extends HTMLParagraphElement {
  static extend = "p";
  static tag = "as-p";

  static get observedAttributes() {
    return ["primary", "subtitle", "title"];
  }

  constructor() {
    super();

    const ui = this.getUI();
    this.appendChild(ui);
  }

  _primary = "";
  _title = "";
  _subtitle = "";

  get primary() {
    return this._primary;
  }

  set primary(val) {
    this._primary = val;
  }

  get title() {
    return this._title;
  }

  set title(val) {
    this._title = val;
  }

  get subtitle() {
    return this._subtitle;
  }

  set subtitle(val) {
    this._subtitle = val;
  }

  connectedCallback() {
    console.log("CONNECTED CALLBACK");
    // when the element is attached to the DOM
  }
  disconnectedCallback() {
    console.log("DISCONNECTED CALLBACK");
    // when the element is removed from the DOM
  }
  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "title":
        this.title = newVal;
        break;
      case "primary":
        this.primary = newVal;
        break;
      case "subtitle":
        this.subtitle = newVal;
        break;
      default:
        console.log("ATTR NAME:", attrName, oldVal, newVal);
    }
    // when any observed attribute is changed
  }

  getUI() {
    const p = document.createElement("p");
    p.innerText = this.title;

    const span = document.createElement("span");
    span.innerText = this.subtitle;

    const wrapper = document.createElement("div");

    wrapper.setAttribute("primary", this.primary === "true");

    wrapper.appendChild(p);
    wrapper.appendChild(span);
    return wrapper;
  }
}
