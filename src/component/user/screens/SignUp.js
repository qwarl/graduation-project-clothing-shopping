import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput, Image, CheckBox } from "react-native";
import { Logo } from "../../../assets/image";
import { Line, Email, Password, Gmail, Facebook, Name } from "../../../assets/svg/icon";


import { UserContext } from "../UserContext";
import { useNavigation } from "@react-navigation/native";
const SignUp = (props) => {
  const [isSelected, setSelection] = useState(false);
  const navigation = useNavigation();
  const { onLogin } = useContext(UserContext);
  return (

    <View style={styles.container}>
      <Image source={Logo}
        style={{ width: 204, height: 172, marginTop: 57, }} />
      <View style={styles.txtsSignUpContainer}>
        <Text style={styles.txtsSignUp}>SIGN UP</Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={Name}
          style={{
            height: 45,
            width: 48,
          }} />
        <TextInput
          style={{ flex: 1 }}
          placeholder={'Name'}
          style={styles.username}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.inputContainer}>
        <Image source={Email}
          style={{
            height: 45,
            width: 48,
          }} />
        <TextInput
          style={{ flex: 1 }}
          placeholder={'Email'}
          style={styles.username}
          underlineColorAndroid="transparent" />
      </View>
      <View style={styles.inputContainer}>
        <Image source={Password}
          style={{
            height: 45,
            width: 48,
          }} />
        <TextInput
          placeholder={'Password'}
          secureTextEntry
          style={styles.username} />
      </View>
      <View style={styles.checkboxContainer}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>I accept all the</Text>
        <Text style={styles.label2}>Terms & Conditions</Text>
      </View>
      <View style={styles.btnLogin}>
        <Text onPress={onLogin} style={styles.txtLogin}>Sign up</Text>
      </View>
      <View style={styles.txtOrContainer}>
        <Image source={Line} style={styles.lineLeft} />
        <Text style={styles.txtOr}>Or</Text>
        <Image source={Line} style={styles.lineRight} />
      </View>
      <View style={styles.fbGmContainer}>
        <Image source={Facebook} style={styles.fb} />
        <Image source={Gmail} style={styles.gm} />
      </View>
      <View style={styles.btnSignUpContainer}>
        <Text style={styles.txtSignUp}>Don’t have an account?</Text>
        <Text onPress={() => navigation.navigate('Login')} style={styles.btnSignUp}>Log In</Text>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: "row",
    textAlign: 'left',
    width: '100%',
    marginTop: 17.81,
    marginLeft: 41,
  },
  checkbox: {
    alignSelf: "center",
  },

  label: {
    fontFamily: 'Gordita',
    fontWeight: 400,
    fontSize: 12,
    margin: 8,
    color: 'rgba(0, 0, 0, 0.5)',
  },
  label2: {
    fontFamily: 'Gordita',
    fontWeight: 500,
    fontSize: 12,
    margin: 8,
    color: '#230A06',
  },
  txtsSignUp: {
    fontSize: 22,
    fontFamily: 'Gordita',
    color: '#230A06',
    fontWeight: 500,
  },
  btnSignUp: {
    fontSize: 14,
    fontFamily: 'Gordita',
    color: '#230A06',
    fontWeight: 500,
    marginLeft: 10,
  },
  txtSignUp: {
    fontSize: 14,
    fontFamily: 'Gordita',
    color: 'rgba(35, 10, 6, 0.5)',
  },
  btnSignUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 55.1,
  },
  fbGmContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 34.74,
  },
  gm: {
    width: 71.07,
    height: 70.96,
  },
  fb: {
    width: 71.07,
    height: 70.96,
    marginRight: 34.75,
  },
  txtOrContainer: {
    marginTop: 43.91,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',

  },
  txtOr: {
    fontFamily: 'Gordita',
    fontSize: 12,
    lineHeight: 20,
    marginLeft: 18.8,

  },
  lineRight: {
    width: 88.72,
    height: 1,
    marginLeft: 19,
  },
  lineLeft: {
    width: 88.72,
    height: 1,
  },


  btnLogin: {
    width: 205,
    height: 59,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F67952',
    borderRadius: 133,
    marginTop: 17,
  },
  txtLogin: {
    color: '#FFFFFF',
    fontFamily: 'Gordita',
    fontWeight: 500,
    fontSize: 16,
  },
  inputContainer: {
    width: 335,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#fff',
    height: 57,
    borderRadius: 10,
    marginTop: 10.5,
  },
  username: {
    width: 335,
    height: 57,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFFFF',
    paddingHorizontal: 8,
    fontFamily: 'Gordita',
    fontSize: 12,
    marginLeft: 9,
  },

  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    alignItems: 'center',
  }
});
