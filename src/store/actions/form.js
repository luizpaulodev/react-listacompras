export const Types = {
  START_UPDATE: "List/START_UPDATE",
  FINISH_UPDATE: "List/FINISH_UPDATE",
};

export const Creators = {
  startUpdate: (product) => ({
    type: Types.START_UPDATE,
    product,
  }),

  finishUpdate: () => ({
    type: Types.FINISH_UPDATE,
  }),
};
