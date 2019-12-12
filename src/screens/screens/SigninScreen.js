import React, { useContext } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'
import AuthForm from './../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { Context as AuthContext } from '../../context/AuthContext';
import { NavigationEvents } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import Spacer from './../../components/Spacer';

const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage, googleSignIn, facebookSignIn } = useContext(AuthContext);

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <NavigationEvents
                onWillBlur={clearErrorMessage} // to clear message after navigating away
            />
            <AuthForm
                headerText="Sign in form for Tracker"
                errorMessage={state.errorMessage}
                onSubmit={signin}
                buttonText='Signin'
            />
            <Spacer>
                <Button title="Signin using Google" onPress={googleSignIn} />
            </Spacer>
            <Spacer>
                <Button title="Signin using Facebook" onPress={facebookSignIn} />
            </Spacer>
            <NavLink
                routeName='Signup'
                linkText="Don't have an account? Sign up instead."
            />
        </SafeAreaView>
    )
};

SigninScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SigninScreen;
