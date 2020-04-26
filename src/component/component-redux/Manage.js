import React from "react";
import ReduxshrimpL from "./ReduxshrimpL";
import { connect } from "react-redux";
import InputFrom from "./InputFrom";
import { ProductAdd} from "../redux/Action"
const Manage = (props) => {
    const {test, createShrimp} =props;
  console.log(props);
  const addshrimps = (data) => {
    createShrimp(data);
  }
  return (
    <div className="listProduct">
      <h1>รายการกุ้ง</h1>
      <ReduxshrimpL />
      <InputFrom addShrimps={addshrimps} />
    </div>
  );
};
export default connect((state) => state.Reduxshrimp,ProductAdd)(Manage);
