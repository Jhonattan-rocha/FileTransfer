import { StyleSheet } from "react-native";

export default style = StyleSheet.create({
    item: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "center",
        height: 50,
        width: '100%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        borderRadius: 10
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        top: 10
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 8,
        position: 'absolute'
    },
    option: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
