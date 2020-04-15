import { createStore } from "redux";

import reducers from "./reducers";

import { loadState, saveState } from "./localStorage";

const localStorageStage = loadState();

const store = createStore(
  reducers,
  localStorageStage,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  saveState({ list: store.getState().list });
});

export default store;
