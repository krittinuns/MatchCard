import { createGlobalState } from "react-hooks-global-state";

export const { useGlobalState } = createGlobalState({
  click: 0
});
