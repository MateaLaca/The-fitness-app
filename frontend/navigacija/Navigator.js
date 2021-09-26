import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer} from 'react-navigation';
import Login from "../screens/Login";
import Register from "../screens/Register";
import Kategorije from "../screens/Kategorije";
import VjezbeKategorije from "../screens/VjezbeKategorije";
import Video from "../screens/Video";
import VjezbeFavoriti from "../screens/VjezbeFavoriti";
import FilteriEkran from "../screens/FilteriEkran";

const stackOpcije= {
    headerStyle: {
        backgroundColor: "#FF0000"
    },
    headerTintColor: "white"
}

const BeforeSignIn = createStackNavigator({
    Login:{screen:Login},
    Register:{screen: Register}, 
}, {
    headerMode: "none",
    initialRouteName: "Login",
    tabBarVisible:false
});

const AfterSignIn = createStackNavigator({
    SveKategorije: {screen: Kategorije,
            navigationOptions: {
            headerTitle: "Danas vježbam... "} },
    JednaKategorija: {screen:VjezbeKategorije},
    Video: {screen:Video} 
 },);

const AppNavigator= createStackNavigator( {
    
    Auth: {screen: BeforeSignIn },
    App: {screen: AfterSignIn},
},
{
   headerMode: "none",
   initialRouteName: "Auth"
 }
) 

const FavoritiNavigacija= createStackNavigator(
    {
        Favoriti:VjezbeFavoriti,
        Video: Video
    }
);

const FilteriStack = createStackNavigator(
    {Filteri: FilteriEkran},
    {
        defaultNavigationOptions: stackOpcije
    }
    
)
const AppNavigacija = createDrawerNavigator({
    TabFavoriti:
    { 
        screen: AppNavigator,
        navigationOptions: {
            drawerLabel: "Izbornik"
        }
    } ,
    Filteri: 
    {
        screen: FilteriStack,
        navigationOptions: {
            drawerLabel: "Filteri za prikaz videa"
        }
    },
    Omiljeni: 
    {
        screen: FavoritiNavigacija,
        navigationOptions: {
            drawerLabel: "Moji favoriti"
        }
    }
},
{
    contentOptions: {
        activeTintColor: "#FF0000",
        labelStyle: {
            fontSize: 20,
            fontWeight: 'normal'
        }
    }
}
)
export default createAppContainer(AppNavigacija);