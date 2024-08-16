import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import GalleryScreen from "../screens/GalleryScreen";

const {Screen, Navigator} = createStackNavigator()

export function StackRoutes(){
    return(
        <Navigator>
            <Screen name='home' component={HomeScreen}
            options={{
                title: 'Main Menu',
                headerTintColor: 'red'
            }}/>
            <Screen name='gallery' component={GalleryScreen}
            options={{
                headerShown: false
            }}/>
        </Navigator>
    )
}