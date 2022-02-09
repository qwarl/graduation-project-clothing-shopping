import { StyleSheet, Text, View, TextInput, Image } from 'react-native';
import React, { useState } from 'react';
import { Iconly, SearchIcon } from '../../assets/svg/icon';

const SearchBar = () => {
    const [query, setQuery] = useState();
    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.searchIcContainer}>
                    <Image source={SearchIcon} style={styles.searchIc} resizeMode='center' />
                </View>
                <TextInput style={styles.txtSearch}
                    value={query}
                    placeholder={'Search items...'}
                    onChangeText={(text) => {
                        setQuery(text)
                        // updateSearch(text)
                    }}/>
                <View style={styles.IclyContainer}>
                    <Image source={Iconly} style={styles.icly} resizeMode='center' />
                </View>
            </View>
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    icly: {
        width: 47,
        height: 43,
    },
    IclyContainer: {
        margin: 6,
    },
    txtSearch: {
        flex: 1,
        fontFamily: 'Gordita',
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.7)',
    },
    searchIc: {
        width: 13,
        height: 13,
    },
    searchIcContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 13,
        height: 13,
        marginTop: 20,
        marginLeft: 21,
        marginRight: 6.7,
        marginBottom: 22,
        borderRadius: 10,
    },
    searchContainer: {
        width: 335,
        height: 55,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
    },
    container: {
        flex: 1,
    }
});
