import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import bondaiApi from "../api/bondai";
import { AsyncStorage } from "react-native";
import { navigate } from "../helpers/navigationRef";
import * as Google from 'expo-google-app-auth';
import * as Facebook from 'expo-facebook';
import { androidClientId, iosClientId } from './../helpers/constants';


const authReducer = (state, action) => {
    switch(action.type) {
        case 'add_error':
            return {
                ...state,
                errorMessage: action.payload
            };
        case 'signin':
            return {
                errorMessage: '', 
                token: action.payload
            };
        case 'clear_error_message':
            return {
                ...state,
                errorMessage:''
            }
        case 'signout':
            return {
                token: null,
                errorMessage: ''
            }
        default:
            return state;
    }
};


const clearErrorMessage = dispatch => () => {
    dispatch({type:'clear_error_message'})
}

const facebookSignIn = dispatch => async () => {
    try {
        const { type, token } = await Facebook.logInWithReadPermissionsAsync('2215921291841253', {
          permissions: ['public_profile', 'email'],
        });
        if (type === 'success') {
          // Get the user's name using Facebook's Graph API
        //   const response = await fetch(`https://graph.facebook.com/me?access_token=${token}`);
          const response = await bondaiApi.post('/api/account/socialAuth', { method:'facebook', token } );
          await AsyncStorage.setItem('token', response.data.token);
          dispatch({type:'signin', payload: response.data.token});
        //   console.log('response', response);
          console.log('token', token);
          navigate('TrackList');
        } else {
            console.log('canceled');
        }
      } catch ({ message }) {
        alert(`Facebook Login Error: ${message}`);
      }
}

const googleSignIn = dispatch => async () => {
    try {
        const result = await Google.logInAsync({
            androidClientId: androidClientId,
            iosClientId: iosClientId,
            scopes: ["profile", "email"]
        });
        if (result.type === 'success') {
            const response = await bondaiApi.post('/api/account/socialAuth', { method:'google', token: result.idToken } );
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({type:'signin', payload: response.data.token});
            console.log('result', result);
            // console.log('response', response.data);
            navigate('TrackList');
        } else {
            console.log('canceled');
        }
    } catch (e) {
        console.log('error', e);
    }
}

const checkSignedIn = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({type:'signin', payload: token});
        navigate('TrackList');
    } else {
        navigate('loginFlow');
    }
}

const signup = dispatch => async ({ email, password, firstName, lastName }) => {
    try {
        const response = await bondaiApi.post('/api/account/register', { email, password, firstName, lastName });
        await AsyncStorage.setItem('token', response.data.token);
        console.log(response);
        // debugger;
        dispatch({type:'signin', payload: response.data.token});
        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: err})         
    }


};

const signin = (dispatch) => async ({ email, password }) => {
    try {
        const response = await bondaiApi.post('/api/account/login', {email, password});
        debugger;
        await AsyncStorage.setItem('token', response.data.token);
        dispatch({type: 'signin', payload: response.data.token});
        navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: "Error on signin."});  
    }
};

const signout = (dispatch) => async () => {
        await AsyncStorage.removeItem('token');
        dispatch({type:'signout'});
        navigate('loginFlow');
};

export const { Provider, Context } = createDataContext(
    authReducer, 
    { signin, signup, signout, clearErrorMessage, checkSignedIn, googleSignIn, facebookSignIn },
    { token: null, errorMessage: '' }
);