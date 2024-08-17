import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

const Tab = createBottomTabNavigator()

export function BottomTabRoutes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name='home' component={HomeScreen}/>
            <Tab.Screen name='gallery' component={GalleryScreen}/>
        </Tab.Navigator>
    )
}