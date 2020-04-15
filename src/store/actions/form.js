export const Types = {
  START_UPDATE: "List/START_UPDATE",
  FINISH_UPDATE: "List/FINISH_UPDATE",
  START_ADD: "List/START_ADD",
  FINISH_ADD: "List/FINISH_ADD",
};

export const Creators = {
  startUpdate: (list, product) => ({
    type: Types.START_UPDATE,
    product,
    list,
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),

  startAdd: (list) => ({
    type: Types.START_ADD,
    list,
  }),

  finishAdd: () => ({
    type: Types.FINISH_ADD,
  }),
};
