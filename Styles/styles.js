import { StyleSheet, Dimensions } from "react-native";


const mobileW = Dimensions.get("screen").width;
const mobileh = Dimensions.get("screen").height;

const styles = StyleSheet.create({
    AppbarIconStyle: {
        width: mobileW * .05,
        height: mobileW * .05,
        margin: mobileW * .025,
    },
    Appbar: {
        backgroundColor: 'cyan',
        width: mobileW,
        height: mobileW * .1,
        flexDirection: "row",
    },
    Container: {
        backgroundColor: 'white',
        flex: 1,
    },
    TextStyle: {
        color: 'black'
    },
    main: {
        alignItems: "center",
    },
    button: {
        backgroundColor: 'orange',
        height: mobileW * .1,
        width: mobileW * .2,
        justifyContent: "center",
        alignSelf: "center",
        margin: mobileW * .05,
        borderWidth: 2,
        borderRadius: 5
    },
    buttonText: {
        color: 'black',
        fontWeight: "600",
        alignSelf: "center"
    },
    Box: {
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: mobileW * .005,
        marginLeft: mobileW * .1,
        marginRight: mobileW * .1,
        marginTop: mobileW * .05,
        borderRadius: mobileW * .05,
    },
    IconStyle: {
        width: mobileW * .08,
        height: mobileW * .08,
        margin: mobileW * .02, flex: 1
    },
})

export default styles;