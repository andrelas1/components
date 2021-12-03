export function setupCustomElement(constructorFn) {
  try {
    const { tag, extend } = constructorFn;
    if (extend) {
      // bult-in custom element
      customElements.define(tag, constructorFn, {
        extends: extend,
      });
    } else {
      // autonomous custom element
      customElements.define(tag, constructorFn);
    }
  } catch (e) {
    console.warn(e);
  }
}
