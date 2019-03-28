import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";

import Home from "./Home";
import Product from "./Product";

export default createAppContainer(
  createStackNavigator(
    {
      Home,
      Product
    },
    {
      initialRouteName: "Home"
    }
  )
);
