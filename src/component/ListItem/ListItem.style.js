import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        flexDirection: 'row',
        margin: 5,
        padding: 5,
        // borderWidth: 1,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius:50,
        // borderTopRightRadius: 5,
        // borderBottomRightRadius: 5,
        marginRight: 0,
        marginLeft: 8,
    },  
    image: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#eceff1',
        resizeMode: 'center',
    },
    text: {
        fontSize: 20,
    }, 
    text_container: {
        justifyContent: 'center',
        padding: 10,
    },
})