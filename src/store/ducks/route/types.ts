export interface RouteState {
  registred?: boolean;
}

export interface RouteTypes {
  SET_ROUTE: string;
}

export interface RouteAction {
  type: string;
  payload: RouteState;
}
