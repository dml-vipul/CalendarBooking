import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { If } from "../helpers/if";
import AuthStackNavigation from "./stackNavigators/authStackNavigation";
import TabNavigation from "./tabNavigators/tabNavigation";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/Store";
import RootStackNavigation from "./stackNavigators/RootStack";

const RootNavigation = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);
  return (
    <NavigationContainer>
      <If show={!isLoggedIn} fallback={<RootStackNavigation />}>
        <AuthStackNavigation />
      </If>
    </NavigationContainer>
  );
};

export default RootNavigation;
