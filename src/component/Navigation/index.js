import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';


import UserNavigation from '../user/UserNavigation';
import ProductNavigation from '../product/ProductNavigation';
import { UserContext } from '../user/UserContext';

const index = () => {
    const { isLoggedIn } = useContext(UserContext);
    console.log(isLoggedIn);
    return (
        <NavigationContainer>
            {/* {isLoggedIn ? <ProductNavigation /> : <UserNavigation />} */}
            <ProductNavigation/>
        </NavigationContainer>
    );
};

export default index;

