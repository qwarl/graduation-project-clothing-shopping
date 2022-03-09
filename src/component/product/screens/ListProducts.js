import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import React, { useState } from 'react';
import { LeftBar, Notification } from '../../../assets/svg/icon';
import SearchBar from '../../Caculator/SearchBar';
import { FlatList } from 'react-native-gesture-handler';



const ListProducts = () => {
    const [value, setValue] = useState();
    const [products, setProducts] = useState([
        {
            name: 'Long Sleeve Shirts',
            prince: '$152',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
        },
        {
            name: 'Long Sleeve Shirts',
            prince: '$152',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
        {
            name: 'Long Sleeve Shirts',
            prince: '$152',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
        {
            name: 'Long Sleeve Shirts',
            prince: '$152',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
    ])
    const [categories, setCategories] = useState([
        {
            name: 'Jacket',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
        {
            name: 'Shirt',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
        {
            name: 'Pants',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
        {
            name: 'Tshirt',
            url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

        },
    ])
    function updateSearch(value) {

    }
    return (
        <View style={styles.container}>
            <View style={styles.topBarContainer}>
                <Image source={LeftBar} style={styles.leftBar} />
                <Image source={Notification} style={styles.notification} />
            </View>
            <View style={styles.txtContainer}>
                <Text style={styles.txtEx}>Explore</Text>
                <Text style={styles.txtBestOFY}>best Outfits for you</Text>
            </View>
            <View style={styles.searchBar}>
                <SearchBar
                    value={value}
                    updateSearch={updateSearch}
                    style={{ marginTop: 25 }}
                />
            </View>
            <View style={{ height: 80, alignItems: 'center', marginTop: 35, }}>
                <View style={{ width: 335, alignItems: 'center', }}>
                    <FlatList
                        horizontal={true}
                        data={categories}
                        style={{ flex: 1 }}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <View style={{
                                width: 71, height: 75, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 15, borderColor: ' rgba(0, 0, 0, 0.05)', borderWidth: 1,
                            }}>
                                <Image
                                    style={{
                                        width: 36,
                                        height: 37,
                                        resizeMode: 'cover',
                                        borderRadius: 15,
                                    }}
                                    source={{
                                        uri: item.url
                                    }}
                                />
                                <Text style={{
                                    fontFamily: 'Gorditas',
                                    fontSize: 12,
                                    color: 'rgba(0, 0, 0, 0.53)',
                                    marginTop: 9,
                                }}>{item.name}</Text>
                            </View>
                        }} >

                    </FlatList>
                </View>
            </View>
            <View style={styles.txtNewArrAllContainer}>
                <View style={styles.txtNewArrContainer}>
                    <Text style={styles.txtNewArr}>New Arrival</Text>

                </View>
                <View style={styles.txtSeeAllContainer}>
                    <Text style={styles.txtSeeAll} oonPress={() => navigation.navigate('ShopProduct')}>See All</Text>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: 'center', marginTop: 86, }}>
                <View style={{ width: 335, alignItems: 'center', }}>
                    <FlatList
                        horizontal={true}
                        data={products}
                        style={{ flex: 1 }}
                        keyExtractor={item => item.name}
                        renderItem={({ item }) => {
                            return <View style={{
                                width: 154, height: 190, alignItems: 'center', justifyContent: 'center', margin: 10, borderRadius: 15, borderColor: ' rgba(0, 0, 0, 0.05)', borderWidth: 1,
                            }}>
                                <Image
                                    style={{
                                        width: 96,
                                        height: 126,
                                        resizeMode: 'cover',
                                        borderRadius: 15,
                                    }}
                                    source={{
                                        uri: item.url
                                    }}
                                />
                                <Text style={{
                                    fontFamily: 'Gorditas',
                                    fontSize: 12,
                                    color: '#000000',
                                    fontWeight: 400,
                                    marginTop: 9,
                                }}>{item.name}</Text>
                                <Text style={{
                                    fontFamily: 'Gorditas',
                                    fontSize: 12,
                                    fontWeight: 600,
                                    color: '#000000',
                                    marginTop: 9,
                                }}>{item.prince}</Text>

                            </View>
                        }} >

                    </FlatList>
                </View>
            </View>
        </View>
    );
};

export default ListProducts;

const styles = StyleSheet.create({
    txtSeeAll: {
        fontFamily: 'Gordita',
        fontWeight: 400,
        fontSize: 14,
        color: 'rgba(0, 0, 0, 0.5)',
    },
    txtSeeAllContainer: {
        flex: 0.2,
    },
    txtNewArrAllContainer: {
        position: 'absolute',
        flexDirection: 'row',
        width: '100%',
        height: 29,
        marginTop: 400,
        // justifyContent: 'center',
        alignItems: 'center',
    },
    txtNewArr: {
        fontFamily: 'Gordita',
        fontWeight: 500,
        fontSize: 20,
        color: '#000000',
        fontWeight:500,

    },
    txtNewArrContainer: {
        flex: 0.8,
        left: 21,

    },
    searchBar: {
        marginTop: 25.5,
        marginLeft: 20,
    },

    btnSignUp: {
        fontSize: 14,
        fontFamily: 'Gordita',
        color: '#230A06',
        fontWeight: 500,
        marginLeft: 10,
    },
    txtBestOFY: {
        fontSize: 20,
        color: 'rgba(35, 10, 6, 0.5)',
        fontWeight: 400,
        fontFamily: 'Gordita',
        marginTop: 21.5,
        marginLeft: 20,



    },
    btnSignUpContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 55.1,
    },
    topBarContainer: {

        flexDirection: 'row',
        width: '100%',
    },
    notification: {
        width: 42,
        height: 38,
        textAlign: 'right',
        marginLeft: 248.96,
        marginTop: 15,


    },
    leftBar: {
        width: 27.54,
        height: 15.39,
        marginRight: 34.75,
        textAlign: 'left',
        marginTop: 26,
        marginLeft: 20,

    },
    txtEx: {
        fontFamily: 'Gordita',
        marginLeft: 19.21,
        fontSize: 32,
        color: '#000000',
        fontWeight: 500,
    },
    txtContainer: {
        width: '100%',
        marginTop: 21.5,

    },

    container: {
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#FBFBFD',
        paddingHorizontal: 16,
    }

});
