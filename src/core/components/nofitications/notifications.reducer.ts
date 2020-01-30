import * as Types from './notifications.constant';

export interface IState {
  toggle: boolean;
  data: string;
  type: string;
}

const initialState: IState = {
  toggle: false,
  data: '',
  type: ''
};

export default (
  state = initialState,
  action: {
    type: string;
    payload: any;
  }
) => {
  if (action.type === Types.ACTION_TOGGLE_NOTIFICATIONS) {
    return { ...state, ...action.payload };
  }
  return state;
};
