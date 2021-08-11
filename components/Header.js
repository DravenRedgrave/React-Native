import React from 'react'
import {View,StyleSheet,Image} from 'react-native';

const Header =() => {
    return (
        <View>
            <Image
                source={require('../assets/bg.jpg')}
            />
        </View>
    )
}

export default Header
