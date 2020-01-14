interface IState {
  isFetching: boolean;
  isFetched: boolean;
  data: any;
}

const initialState: IState = {
  isFetching: true,
  isFetched: false,
  data: {}
};


export default (state = initialState, action: {
    type: string,
    payload: any
}) => {
    switch (action.type) {
        default:
            return state;
    }
}
