import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { IcHome } from '../../../assets/svg/icon';

const UserProduct = () => {
  return (
    <View style={styles.container}>
     <View>
     <ImageBackground source={IcHome} style={styles.imgBackground}>
        <LinearGradient
          colors={["161.14deg, #FFFFFF 49.71%", "rgba(246, 121, 82, 0) 177.83%"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <Text style={styles.text} >Linear Gradient Example</Text>
        </LinearGradient>
      </ImageBackground>
     </View>
     <View>
     <ImageBackground source={IcHome} style={styles.imgBackground}>
        <LinearGradient
          colors={["#09203f", "#537895"]}
          start={[0.1, 0.1]}
          style={styles.linearGradient}
        >
          <Text style={styles.text} >Linear Gradient Example</Text>
        </LinearGradient>
      </ImageBackground>
     </View>
    </View>
  );
};

export default UserProduct;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imgBackground: {
    flex: 1,
    width: "100%",
    alignItems: "center",
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: '#fff',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
