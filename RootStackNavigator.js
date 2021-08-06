import React from 'react';
import { createStackNavigator} from "@react-navigation/stack";
import mainScreen from './src/mainScreen';
import errorScreen from './src/errorScreen';


const RootStack = createStackNavigator();

const Root = () => {
    return(
     <RootStack.Navigator>
         <RootStack.Screen name="mainScreen" component={mainScreen} options={{headerShown:false}} />
         <RootStack.Screen name="errorScreen" component={errorScreen} options={{headerShown:false}} />
     </RootStack.Navigator>

    )
}


export default Root;