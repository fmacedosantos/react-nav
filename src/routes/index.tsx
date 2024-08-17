import { NavigationContainer } from "@react-navigation/native";
// contexto
import { StackRoutes } from "./stack.routes";
import { BottomTabRoutes } from "./bottom-tabs.routes";

// caixa de contexto
export function Routes(){
    return(
        <NavigationContainer>
            <BottomTabRoutes/>
        </NavigationContainer>
    )
}