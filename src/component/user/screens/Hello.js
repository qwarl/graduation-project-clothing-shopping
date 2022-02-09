import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Logo } from '../../../assets/image';

const Hello = (props) => {
    const { navigation } = props;
    const onLogin = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.container}>
            <Image source={Logo}
                style={{ width: 332, height: 326, marginTop: 44, }} />
            <Text style={styles.txtLogo}>CLOTHING SHOPPING</Text>
            <View style={styles.btnDiscover}>
                <Text onPress={onLogin} style={styles.txtBtnDiscover}>Discover</Text>
            </View>
        </View>
    );
};

export default Hello;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',

    },
    txtLogo: {
        fontSize: 36,
        color: '#000000',
        fontFamily: 'Rambla',
        marginTop: 11,
    },
    txtBtnDiscover: {
        fontSize: 16,
        color: '#FFFFFF',
        fontFamily: 'Roboto',
        lineHeight: '117%',

    },
    btnDiscover: {
        width: 218,
        height: 59,
        backgroundColor: '#F67952',
        borderRadius: 133,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 237,
    },
});





// import React from 'react';

// const Hello = () => {
//     return (
//         <View style={styles.container}>
//             {/* <Image source={require('./src/imgae/logo/logo.png')}
//                 style={{ width: 332, height: 326, marginTop: 44, }} /> */}
//             <Text style={styles.txtLogo}>CLOTHING SHOPPING</Text>
//             <View style={styles.btnDiscover}>
//                 <Text onPress={_onLogin} style={styles.txtBtnDiscover}>Đăng Nhập</Text>
//             </View>
//         </View>
//     );
// };

// export default Hello;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',

//     },
//     txtLogo: {
//         fontSize: 36,
//         color: '#000000',
//         fontFamily: 'Rambla',
//         marginTop: 11,
//     },
//     txtBtnDiscover: {
//         fontSize: 16,
//         color: '#FFFFFF',
//         fontFamily: 'Roboto',
//         lineHeight: '117%',

//     },
//     btnDiscover: {
//         width: 218,
//         height: 59,
//         backgroundColor: '#F67952',
//         borderRadius: 133,
//         alignItems: 'center',
//         justifyContent: 'center',
//         marginTop: 237,
//     },
// });
