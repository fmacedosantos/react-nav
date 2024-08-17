import { NavigationContainer } from "@react-navigation/native";
// contexto
import { StackRoutes } from "./stack.routes";
import { BottomTabRoutes } from "./bottom-tabs.routes";
import { DrawerRoutes } from "./drawer.routes";

// caixa de contexto
export function Routes(){
    return(
        <NavigationContainer>
            <DrawerRoutes/>
        </NavigationContainer>
    )
}