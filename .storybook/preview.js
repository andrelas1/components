import { Button } from "../components/Button.mjs";
import { Paragraph } from "../components/Paragraph.mjs";
import { setupCustomElement } from "../setupCustomElements";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

setupCustomElement(Button);
setupCustomElement(Paragraph);
