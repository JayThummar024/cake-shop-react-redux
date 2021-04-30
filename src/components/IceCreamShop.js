import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamShop(props) {
  return (
    <div>
      <h1>Number of Icecream: {props.numberOfIcecream} </h1>
      <button onClick={props.buyIceCream}>Buy Icecream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfIcecream: state.iceCream.numberOfIceCream
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamShop);
