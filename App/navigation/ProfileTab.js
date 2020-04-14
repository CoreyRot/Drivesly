import { createAppContainer } from "react-navigation";
import { createMaterialTopTabNavigator } from "react-navigation-tabs";
import Profile from "../screen2/Profile";
import Header from '../screen2/header';
import ScoreBoard from '../screen2/ScoreBoard';
const TabNavigator = createMaterialTopTabNavigator(
    {
      Profile: {
        screen: Profile
      },
      LeaderBoard: {
        screen: ScoreBoard
      }
    },
    {
      tabBarComponent: Header,
      tabBarOptions: {
        activeTintColor: "black",
        inactiveTintColor: "gray",
        
          
      },
      initialRouteName: "Profile"
    }
  );
  
  const ProfileTab = createAppContainer(TabNavigator);

export default ProfileTab;
