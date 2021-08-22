import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import ViewNotes from "../screens/ViewNotes";
import AddNotes from "../screens/AddNotes";

const StackNavigator = createStackNavigator(
  {
    ViewNotes: {
      screen: ViewNotes,
      navigationOptions: {
        headerTitle: "Note App",
      },
    },
    AddNotes: {
      screen: AddNotes,
      navigationOptions: {
        headerTitle: "Add or Edit a Note",
      },
    },
  },
  {
    initialRouteName: "ViewNotes",
    // headerMode : 'none',
    mode: "modal",
  }
);

export default createAppContainer(StackNavigator);
