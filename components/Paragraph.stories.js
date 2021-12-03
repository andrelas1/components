import "./Paragraph.mjs";

export default {
  title: "Components/Paragraph",
  component: "as-p",
  // More on argTypes: https://storybook.js.org/docs/web-components/api/argtypes
};

export const Primary = () =>
  `<p is="as-p" title="TITLE" subtitle="subtitle" primary="true"></p>`;
