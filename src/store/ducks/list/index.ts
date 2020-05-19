import { createActions, createReducer } from "reduxsauce";
import moment from "moment";

import { ListState, ListTypes, ListAction } from "./types";

export const { Types, Creators } = createActions<ListTypes>({
  addItem: ["id", "title", "date"],
  removeItem: ["id"],
});

const INITIAL_STATE: ListState = {
  itens: [],
};

const addItem = (state: ListState, action: ListAction): ListState => {
  moment.locale("pt-br");
  return {
    ...state,
    itens: [
      ...state.itens,
      {
        ...action.payload,
        id: state.itens.length + Math.random(),
        date: moment().format("lll"),
      },
    ],
  };
};

const removeItem = (state: ListState, action: ListAction): ListState => {
  return {
    ...state,
    itens: state.itens.filter((item) => item.id !== action.payload.id),
  };
};

export default createReducer(INITIAL_STATE, {
  [Types.ADD_ITEM]: addItem,
  [Types.REMOVE_ITEM]: removeItem,
});
