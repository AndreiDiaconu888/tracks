import React, { useEffect, useContext} from 'react'
import { Context as AuthContext } from '../context/AuthContext';
import { View } from 'react-native';

const ResolveOffScreen = () => {
    const { checkSignedIn } = useContext(AuthContext);

    useEffect(() => {
        checkSignedIn();
    }, []);

    return <View/> 
}

export default ResolveOffScreen;
