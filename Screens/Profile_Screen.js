import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, Image, Button } from "react-native";
import styles from "./../Styles/styles"

const ProfileScreen = ({ route }) => {
    const navigation = useNavigation();
    const [Email, setEmail] = useState(route.params.paramKey);
    const [Value, setValue] = useState();
    console.log(route);
    return (
        <View style={styles.main}>
            <Text style={styles.TextStyle}>{route.params.paramKey}</Text>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('C', { paramKey: Email })
            }
            }>
                <Text style={styles.buttonText}>C</Text>
            </TouchableOpacity>

            <View style={[styles.Box]}>
                <Image
                    source={require('./../asset/email.png')}
                    style={styles.IconStyle}
                />
                <TextInput
                    color={'black'}
                    placeholderTextColor={'black'}
                    value={Value}
                    onChangeText={(Value) => setValue(Value)}
                    placeholder={'Is above email good'}
                    style={{
                        flex: 8
                    }} />
            </View>
            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.navigate('Home', { home: Value })
            }
            }>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    );
}


export default ProfileScreen;