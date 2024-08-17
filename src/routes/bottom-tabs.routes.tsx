import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";
import {MaterialCommunityIcons} from '@expo/vector-icons'

const {Navigator, Screen} = createBottomTabNavigator()

export function BottomTabRoutes(){
    return(
        <Navigator>
            <Screen name='home' component={HomeScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='home' color={color}
                    size={size}/>
                ),
            }}/>
            <Screen name='gallery' component={GalleryScreen}
            options={{
                tabBarIcon: ({color, size}) => (
                    <MaterialCommunityIcons name='view-gallery' color='blue'
                    size={43}/>
                ),
            }}/>
        </Navigator>
    )
}