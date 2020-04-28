import React from "react";
import { connect } from "react-redux";
import InputFrom from "./InputFrom";
import { ProductAdd} from "../redux/Action"
;
import './Manage.css'
const Manage = (props) => {
    const {createShrimp} =props;
  console.log(props);
  const addshrimps = (data) => {
    createShrimp(data);
  }
  return (
    <div className="listProduct">
      <h1 className="headerM">เพิ่มข้อมูลราคากุ้ง</h1>
     
      <InputFrom addShrimps={addshrimps} />
    </div>
  );
};
export default connect((state) => state.Reduxshrimp,ProductAdd)(Manage);
