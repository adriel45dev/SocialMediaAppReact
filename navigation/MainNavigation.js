import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home/Home";
import Profile from "../screens/Profile/Profile";
import { NavigationContainer } from "@react-navigation/native";
import { Routes } from "./Routes";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Pressable, View, Text } from "react-native";
import style from "../components/UserStory/style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTitle: "Storygram",
        headerTintColor: "#efefef",

        headerStyle: {
          backgroundColor: "#5221b5",
        },
        headerTitleAlign: "center",

        headerRight: () => null,
      }}
    >
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Routes.Home}
        screenOptions={{ header: () => null, headerShown: false }}
      >
        {/* <Stack.Screen name={Routes.Home} component={Home} />
        <Stack.Screen name={Routes.Profile} component={Profile} /> */}
        <Stack.Screen name={"Drawer"} component={MainMenuNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
