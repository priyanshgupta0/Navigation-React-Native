import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, BackHandler } from "react-native";
import styles from "./../Styles/styles"

const Screen_C = ({ route }) => {
    const navigation = useNavigation();

    useEffect(() => {
        const backAction = () => {
            navigation.popToTop()

            return true;
        };

        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );

        return () => backHandler.remove();
    }, []);

    return (
        <View style={styles.main}>

            <View style={styles.Appbar}>
                <TouchableOpacity onPress={() => {
                    navigation.popToTop()
                }}>
                    <Image
                        source={require('./../asset/arrow.png')}
                        style={styles.AppbarIconStyle}
                    />
                </TouchableOpacity>
                <Text style={[
                    styles.TextStyle,
                    {
                        alignSelf: "center",
                        fontSize: 18
                    }]}>
                    Screen C
                </Text>
            </View>
            <Text style={styles.TextStyle}>{route.params.paramKey}</Text>

            <TouchableOpacity style={styles.button} onPress={() => {
                navigation.popToTop()
            }
            }>
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
}


export default Screen_C;