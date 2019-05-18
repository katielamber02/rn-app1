//INITIAL

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

//WITH REDUX
// import configureStore from './src/store/configureStore'
// import {Provider} from 'react-redux'

// const store=configureStore()

// const RNRedux=()=>{
//     <Provider store={store}>
//         <App />
//     </Provider>
// }

//AppRegistry.registerComponent('rnapp1',()=>RNRedux)

//WITH NAV

import {Navigation} from 'react-native-navigation'
import Auth from './src/screens/Auth/Auth'
import SignIn from './src/screens/Auth/SignIn'
import SignUp from './src/screens/Auth/SignUp'
import App from './App';

Navigation.registerComponent("rnapp1.AuthScreen",()=>Auth)
Navigation.registerComponent("rnapp1.SignIn",()=>SignIn)
Navigation.registerComponent("rnapp1.SignUp",()=>SignUp)
Navigation.registerComponent("rnapp1.App",()=>App)


Navigation.events().registerAppLaunchedListener(()=>{
    Navigation.setRoot({
        root:{
            stack:{
                id:'AppStack',
                children:[
                    {
                        component:{
                            name:"rnapp1.AuthScreen",
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

