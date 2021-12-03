import "./Button.mjs";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "Components/Button",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
  component: "as-button",
  argTypes: {
    size: {
      control: { type: "inline-radio" },
      options: ["small", "medium", "large"],
    },
    type: {
      control: { type: "inline-radio" },
      options: ["primary", "secondary", "colorish"],
    },
    label: {
      name: "label",
      type: {
        name: "string",
        required: false,
      },
    },
  },
};

export const Primary = (args) =>
  `<as-button
    label="${args.label}"
    type="${args.type}"
    size="${args.size}">
    </as-button>`;

Primary.args = {
  label: "Primary",
  type: "primary",
  size: "medium",
};

export const Secondary = (args) =>
  `<as-button
    label="${args.label}"
    type="${args.type}"
    size="${args.size}">
   </as-button>
  `;

Secondary.args = {
  label: "Secondary",
  type: "secondary",
  size: "medium",
};

export const Colorish = (args) =>
  `<as-button 
    label=${args.label}
    type=${args.type}
    size=${args.size}
  >
  </as-button>`;

Colorish.args = {
  label: "Colorish",
  type: "colorish",
  size: "medium",
};
