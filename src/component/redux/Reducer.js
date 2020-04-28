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
    day: "12/3/2562",
    city: "พังงา",
    state: "คลองเคียน",
    productshrimps: "กุ้งขาว",
    size: "47 ตัว/โล",
    price: "160 บาท",
  },
  {
    day: "12/3/2562",
    city: "กระบี่",
    state: "อ่าวลึก",
    productshrimps: "กุ้งขาว",
    size: "47 ตัว/โล",
    price: "160 บาท",
  },
];
const initialState = {
  test: shrimps
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHRIMP_ACTION_ADD":
      return {
        ...state,
        test: [...state.test, action.payload],
      };
    default:
      return state;
  }
};
