import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Home from '../screens/Home';
import Chat from '../screens/Chat';
import ChatHeader from '../components/ChatHeader';
import ChatList from '../screens/ChatList';

const Stack = createStackNavigator();

function Navigation() {
    return (
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
            <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Stack.Screen name="Chat" component={Chat} options={{ header: () => <ChatHeader /> }}/>
        <Stack.Screen name='ChatList'  component={ChatList} options={{
            header: ()=> <ChatHeader />
        }}/>
        </Stack.Navigator>
    </NavigationContainer>

    );
}

export default Navigation;