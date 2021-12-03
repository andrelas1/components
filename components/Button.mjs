export class Button extends HTMLElement {
  static tag = "as-button";

  static get observedAttributes() {
    return ["type", "size", "label"];
  }

  wrapperEl = document.createElement("button");
  styleEl = document.createElement("style");

  _shadowRoot = undefined;

  get shadowRoot() {
    return this._shadowRoot;
  }

  set shadowRoot(shadowRoot) {
    // avoid resetting the shadowRoot
    this._shadowRoot = this._shadowRoot || shadowRoot;
  }

  constructor() {
    super();

    this.shadowRoot = this.attachShadow({ mode: "open" });
    this.setUI();
    this.setStylesHTML({
      type: this.getAttribute("type"),
      size: this.getAttribute("size"),
    });
    this.render(this.styleEl, this.wrapperEl);
  }

  render(...children) {
    children.forEach((child) => {
      this.shadowRoot.appendChild(child);
    });
  }

  connectedCallback() {
    // when the element is attached to the DOM
  }
  disconnectedCallback() {
    // when the element is removed from the DOM
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    switch (attrName) {
      case "label":
        const span = this.wrapperEl.querySelector("span");
        span.innerText = newVal;
        break;
      case "type":
        this.setStylesHTML({ type: newVal });
        break;
      case "size":
      default:
        console.log("ATTR NAME:", attrName, oldVal, newVal);
    }
  }

  setUI() {
    const span = document.createElement("span");
    span.innerText = this.label;
    this.wrapperEl.appendChild(span);
  }

  getPrimaryStyles(type = "primary") {
    // default
    const stlOpts = {
      ["background-color"]: "black",
      ["color"]: "white",
      ["font-size"]: "14px",
      ["border"]: "none",
      ["box-shadow"]: "none",
    };

    switch (type) {
      case "secondary":
        stlOpts["background-color"] = "white";
        stlOpts["color"] = "black";
        stlOpts.border = "1px solid black";
        break;
      case "colorish":
        stlOpts["background-color"] = "rgba(168,218,220,0.6)";
        stlOpts.border = "none";
        stlOpts.color = "black";
        break;
      default:
        break;
    }

    return `background-color: ${stlOpts["background-color"]};
      color: ${stlOpts.color};
      font-size: ${stlOpts["font-size"]};
      border: ${stlOpts.border};
      box-shadow: ${stlOpts["box-shadow"]};`;
  }

  setStylesHTML({ type = "primary", size = "medium" }) {
    this.styleEl.innerHTML = `:host button {
      font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
      font-weight: 700;
      min-width: 120px;
      cursor: pointer;
      display: inline-block;
      line-height: 1;
      padding: 10px 16px;
      ${this.getPrimaryStyles(type)}
    }`;
  }
}
