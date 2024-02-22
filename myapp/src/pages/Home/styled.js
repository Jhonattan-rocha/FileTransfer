import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
    main: {
        width: "100%",
        height: "100%",
        display: 'flex',
        alignItems: "center",
        flexDirection: "column",
    },
    files: {
        width: "100%",
        height: "50%"
    },
    historic_files: {
        width: "100%",
        height: "50%"
    },
    text_files: {
        color: 'black',
        fontSize: 20
    },
    text_con: {
        color: 'black',
        fontSize: 20
    },
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