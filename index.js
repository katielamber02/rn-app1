

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {Navigation} from 'react-native-navigation'
import Auth from './src/screens/Auth/Auth'
//import App from './App';
import SignIn from './src/screens/Auth/SignIn'
import SignUp from './src/screens/Auth/SignUp'

Navigation.registerComponent("AuthScreen",()=>Auth)
Navigation.registerComponent("SignIn",()=>SignIn)
Navigation.registerComponent("SignUp",()=>SignUp)


Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            stack:{
                id:'AppStack',
                children:[
                    {
                        component:{
                            name:"AuthScreen",
                            options:{
                                topBar:{
                                    title:{
                                        text:'Title'
                                    }
                                }
                            }
                        },
                    },
                ]
            }
           
        }
    })
})

