import React, {useEffect, useState} from 'react'
import { StyleSheet } from 'react-native'
import Map from './../../components/Map';
import { Text } from 'react-native-elements';
import SafeAreaView from 'react-native-safe-area-view';
import { requestPermissionsAsync } from 'expo-location';

const TrackCreateScreen = () => {
    const [err, setErr] = useState(null);

    const startWatching = async () => {
        try{
            await requestPermissionsAsync();
        } catch (err) {
            setErr(err);
        }
    }

    useEffect(() => {
        startWatching();
    })

    return (
        <SafeAreaView forceInset={{ top: 'always' }}>
            <Text h3>Create Track</Text>
            <Map />
            { err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
};



export default TrackCreateScreen;
