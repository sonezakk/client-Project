const shrimps = [
  {
    day: "10/3/2562",
    city: "พังงา",
    state: "ท้ายเหมือง",
    productshrimps: "กุ้งดำ",
    size: "50 ตัว/โล",
    price: "150 บาท",
  },
  {
    day: "11/3/2562",
    city: "พังงา",
    state: "ท้ายเหมือง",
    productshrimps: "กุ้งดำ",
    size: "50 ตัว/โล",
    price: "150 บาท",
  },
];
const initialState = {
  test: shrimps,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SHRIMP_ACTION_ADD':
      return {
        ...state,
        test: [...state.test, action.payload],
      };
    default:
      return state;
  }
};
