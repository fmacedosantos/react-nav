import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../src/screens/HomeScreen";
import GalleryScreen from "../src/screens/GalleryScreen";

const {Screen, Navigator} = createStackNavigator()

export function StackRoutes(){
    return(
        <Navigator>
            <Screen name='home' component={HomeScreen}/>
            <Screen name='gallery' component={GalleryScreen}/>
        </Navigator>
    )
}