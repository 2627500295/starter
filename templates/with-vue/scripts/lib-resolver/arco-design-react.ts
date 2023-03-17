import type { LibResolver } from "vite-plugin-imp/dist/types";

import { upperFirst } from "lodash";

export const ArcoDesignReactResolver: LibResolver = {
  libName: "@arco-design/web-react",
  style: (name) => `@arco-design/web-react/es/${upperFirst(name)}/style/css.js`,
};
