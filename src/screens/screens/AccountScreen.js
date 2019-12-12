import React, { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Button } from 'react-native-elements'
import { Context as AuthContext } from '../../context/AuthContext';
import Spacer from '../../components/Spacer';
import SafeAreaView from 'react-native-safe-area-view';

const AccountScreen = () => {
    const { signout } = useContext(AuthContext);
    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Spacer>
                <Text style={{ fontSize: 28 }}>Account Screen</Text>
            </Spacer>
            <Spacer>
                <Button title="Sign out" onPress={signout} />
            </Spacer>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({

});

export default AccountScreen;
