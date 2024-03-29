import React, { useState } from 'react';
import { Text, Input, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';
import Spacer from './Spacer';

const AuthForm = ({ headerText, errorMessage, onSubmit, buttonText }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <>
            <Spacer>
                <Text h1>{headerText}</Text>
            </Spacer>
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
            {errorMessage ?
                <Text style={styles.error}>{errorMessage}</Text>
                : null}
            <Spacer>
                <Button title={buttonText} onPress={() => onSubmit({ email, password })} />
            </Spacer>
        </>
    )
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
        marginLeft: 15
    }
});


export default AuthForm;
