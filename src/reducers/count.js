export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE COUNT':
      return state + 1;
    case 'DECREASE COUNT':
      return state - 1;
    default:
      return state;
  }
};