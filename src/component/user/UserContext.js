import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useState } from 'react';
import { login } from './UserService';

export const UserContext = createContext()

export const UserContextProvider = (props) => {


  const { children } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const storeData = async (value) => {
    try {
      await AsyncStorage.setItem('@storage_Key', value)
    } catch (e) {

    }
  }

  const onLogin = async (username, password) => {
    try {
      const res = await login(username, password);
      if (res && res.status) {
        const { token, user } = res;
        await storeData(token);
        setInfo(user);
      }
    } catch (error) {
      console.log('Login error: ', error);

    }
  }

  return (
    <UserContext.Provider
      value={{
        isLoggedIn: isLoggedIn, onLogin
      }}
    >
      {children}
    </UserContext.Provider>
  )
}




