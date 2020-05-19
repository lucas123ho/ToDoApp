export interface Item {
  id: number;
  title?: string;
  date?: string;
}

export interface ListState {
  itens: Item[];
  finalized: number[];
}

export interface ListTypes {
  ADD_ITEM: string;
  REMOVE_ITEM: string;
  TOGGLE_FINALIZED_ITEM: string;
}

export interface ListAction {
  type: string;
  payload: Item;
}
