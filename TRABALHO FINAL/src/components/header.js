import React from 'react';
import {View,Text,StyleSheet,StatusBar, ImageBackground} from 'react-native'
import colors from '../colors.json';

const Image = {uri:"https://wallpaper-house.com/data/out/8/wallpaper2you_256836.jpg"}

const Header = () => {
    return(
        <>
        <StatusBar backgroundColor={colors.statusColor} />        
            <View style={styles.header}>
                <ImageBackground source={Image} style={styles.image}/>
                <Text style={styles.text}></Text>
            </View>        
        </>
    )
}

const styles = StyleSheet.create({
    image: {
        height:'100%',
        opacity:50

    },

   header: {
        width:'100%',
        height:'5%',
        backgroundColor:'#363636'
        
    },
    
    text: {
        fontFamily:'Roboto',
        fontSize:20,
        fontWeight:'bold',
        paddingHorizontal:10
    }

})

export default Header;