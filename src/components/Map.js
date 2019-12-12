import React from 'react'
import { StyleSheet } from 'react-native'
import MapView, { Polyline } from 'react-native-maps';

const Map = () => {
    let points = [];
    for(let i=0; i<20; i++){
        points.push({
            latitude: 44.442010 + i * 0.001,
            longitude: 26.111989 + i * 0.001,
        })
    }
    return (
        <MapView
            style={styles.map}
            initialRegion={{
                latitude: 44.442010,
                longitude: 26.111989,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }} 
        >
            <Polyline 
                coordinates={points}
            />
        </MapView>
    )
}

const styles = StyleSheet.create({
    map: {
        height: 300,
    }
});

export default Map;
