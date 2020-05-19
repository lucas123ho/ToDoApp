import { createActions, createReducer } from "reduxsauce";
import moment from "moment";

import { ListState, ListTypes, ListAction } from "./types";

export const { Types, Creators } = createActions<ListTypes>({
  addItem: ["id", "title", "date"],
  removeItem: ["id"],
  toggleFinalizedItem: ["id"],
});

const INITIAL_STATE: ListState = {
  itens: [],
  finalized: [],
};

const addItem = (state: ListState, action: ListAction): ListState => {
  moment.locale("pt-br");
  return {
    ...state,
    itens: [
      {
        ...action.payload,
        id: state.itens.length + Math.random(),
        date: moment().format("LT"),
      },
      ...state.itens,
    ],
  };
};

const removeItem = (state: ListState, action: ListAction): ListState => {
  return {
    ...state,
    itens: state.itens.filter((item) => item.id !== action.payload.id),
  };
};

const toggleFinalizedItem = (
  state: ListState,
  action: ListAction
): ListState => {
  const id = action.payload.id;
  if (state?.finalized?.indexOf(id) !== -1) {
    return {
      ...state,
      finalized: state?.finalized?.filter((item) => item !== id),
    };
  } else {
    return {
      ...state,
      finalized: [...state.finalized, id],
    };
  }
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
  [Types.TOGGLE_FINALIZED_ITEM]: toggleFinalizedItem,
});
