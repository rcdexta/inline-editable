import { configure } from "@storybook/react";
import { setOptions } from "@storybook/addon-options";
import "@storybook/addon-console";
setOptions({
  /**
   * content to display in the top left corner
   * @type {String}
   */
  name: "inline-editable",
  /**
   * URL for content in top left corner to link to
   * @type {String}
   */
  url: "https://github.com/rcdexta/inline-editable",
  /**
   * show addon panel as a vertical panel on the right
   * @type {Boolean}
   */
  addonPanelInRight: true
});

// automatically import all files ending in *.stories.tsx
const req = require.context("../stories", true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
