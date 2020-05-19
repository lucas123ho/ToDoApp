import { RouteState, RouteAction } from '@store/ducks/route/types'
import { Types as RouteTypes } from '@store/ducks/route';
import { ListState, ListAction, Item } from '@store/ducks/list/types'
import { Types as ListTypes } from '@store/ducks/list';

export function routeAction(payload: RouteState): RouteAction {
  return {
    type: RouteTypes.SET_ROUTE,
    payload
  }
}

export function addItemAction(payload: Item): ListAction {
  return {
    type: ListTypes.ADD_ITEM,
    payload
  }
}

export function toggleCheckItemAction(payload: Item): ListAction {
  return {
    type: ListTypes.TOGGLE_FINALIZED_ITEM,
    payload
  }
}

export function removeItemAction(payload: Item): ListAction {
  return {
    type: ListTypes.REMOVE_ITEM,
    payload
  }
}