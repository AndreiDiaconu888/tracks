import React, { useEffect, useContext, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../../components/Spacer';
import { Context as AuthContext } from '../../context/AuthContext';
import AuthForm from './../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { NavigationEvents } from 'react-navigation';
import SafeAreaView from 'react-native-safe-area-view';
import { ScrollView } from 'react-native-gesture-handler';

const SignupScreen = ({ navigation }) => {
    const { state, signup, clearErrorMessage, googleSignIn, facebookSignIn } = useContext(AuthContext);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <ScrollView>
                <NavigationEvents
                    onWillBlur={clearErrorMessage} // to clear message after navigating away
                />
                {/* <AuthForm
                    headerText="Sign up form for Tracker"
                    errorMessage={state.errorMessage}
                    onSubmit={signup}
                    buttonText='Signup'
                    signup={true}
                /> */}
                <Input
                    label="Email"
                    value={email}
                    onChangeText={setEmail}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    secureTextEntry
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    label="First Name"
                    value={firstName}
                    onChangeText={setFirstName}
                    autoCorrect={false}
                />
                <Spacer />
                <Input
                    label="Last Name"
                    value={lastName}
                    onChangeText={setLastName}
                    autoCorrect={false}
                />
                <Spacer>
                    <Button title='Signup' onPress={() => signup({ email, password, firstName, lastName })} />
                </Spacer>
                <Spacer>
                    <Button title="Signup using Google" onPress={googleSignIn} />
                </Spacer>
                <Spacer>
                    <Button title="Signup using Facebook" onPress={facebookSignIn} />
                </Spacer>
                <NavLink
                    routeName='Signin'
                    linkText='Already have an account? Sign in instead.'
                />
            </ScrollView>
        </SafeAreaView>
    )
};

SignupScreen.navigationOptions = {
    header: null
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginBottom: 200
    }
});

export default SignupScreen;
