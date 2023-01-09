import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from "./../Styles/styles"

const HomeScreen = ({ route }) => {
    const navigation = useNavigation();
    const [Email, setEmail] = useState('');


    // useEffect(() => {
    //     if (route.params?.home) {
    //     }
    // }, [route.params?.home])

    return (
        <View style={styles.main}>
            <Text style={styles.TextStyle}>Home</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Profile', { paramKey: Email })
            }
            }>
                <Text style={styles.buttonText}>Profile</Text>
            </TouchableOpacity>
            <View style={[styles.Box]}>
                <Image
                    source={require('./../asset/email.png')}
                    style={styles.IconStyle}
                />
                <TextInput
                    color={'black'}
                    placeholderTextColor={'black'}
                    value={Email}
                    onChangeText={(Email) => setEmail(Email)}
                    placeholder={'Enter Your Email'}
                    style={{
                        flex: 8
                    }} />
            </View>
            <Text style={styles.TextStyle}>Hello world {route.params?.home}</Text>
        </View>
    );
}


export default HomeScreen;