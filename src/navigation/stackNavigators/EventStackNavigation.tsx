import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import EventScreen from "../../screens/Event/EventScreen";
import CurrentEvent from "../../screens/Event/CurrentEvent";

const EventStack = createStackNavigator();
const EventStackNavigation = () => {
  return (
    <EventStack.Navigator screenOptions={{ headerShown: false }}>
      <EventStack.Screen name="EventScreen" component={EventScreen} />
      <EventStack.Screen name="CurrentEvent" component={CurrentEvent} />
    </EventStack.Navigator>
  );
};

export default EventStackNavigation;
