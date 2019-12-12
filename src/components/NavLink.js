import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Spacer from './Spacer';
import { withNavigation } from 'react-navigation';

const NavLink = ({navigation, linkText, routeName}) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(routeName)}>
            <Spacer>
                <Text style={styles.text}>{linkText}</Text>
            </Spacer>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
});

export default withNavigation(NavLink);
