

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation'
import Auth from './src/screens/Auth/Auth'
//import App from './App';

Navigation.registerComponent("places.AuthScreen",()=>Auth)



Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            component:{
                name:"places.AuthScreen"
            }
        }
    })
})