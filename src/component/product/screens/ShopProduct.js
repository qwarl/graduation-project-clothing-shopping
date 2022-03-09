import { StyleSheet, Text, View, useWindowDimensions, Image } from 'react-native';
import React, { useState } from 'react';
import { TabView, SceneMap } from 'react-native-tab-view';
import { FlatList } from 'react-native-gesture-handler';


const FirstRoute = () => {
  const [shops, setShop] = useState([
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
    },
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

    },
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

    },
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'

    },
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
    },{
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
    },{
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
    },
    {
      name: 'Long Sleeve Shirts',
      prince: '$152',
      date: '22-04-2022',
      url: 'https://vn-live-05.slatic.net/p/23851897a905be7d568ea700bacfdeb9.jpg_720x720q80.jpg_.webp'
    },
  ])
  return (

    <View style={{ flex: 1, backgroundColor: '#FBFBFD' }} >
      <View style={{ flex: 1, marginTop: 39.47, }}>
        <View style={{ width: 375, marginLeft: 21 }}>
          <FlatList
            data={shops}
            style={{ flex: 1 }}
            keyExtractor={item => item.name}
            renderItem={({ item }) => {
              return <View style={{
                width: 335,
                height: 92,
                justifyContent: 'center',
                borderRadius: 15,
                borderColor: ' rgba(0, 0, 0, 0.05)',
                borderWidth: 1,
                backgroundColor: 'rgba(255, 255, 255, 0.65)',
                margin: 12
              }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <View style={{ alignItems: 'center', width: 87, height: 73, backgroundColor: ' rgba(135, 199, 185, 0.1)', borderRadius: 15, marginLeft: 14 }}>
                    <Image
                      style={{
                        width: 51,
                        height: 67,
                        resizeMode: 'cover',
                      }}
                      source={{
                        uri: item.url
                      }}
                    />
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 19 }}>
                    <View>
                      <Text style={{
                        fontFamily: 'Gorditas',
                        fontSize: 14,
                        color: 'rgba(0, 0, 0, 0.5)',
                        fontWeight: 400,
                      }}>{item.name}</Text>
                      <Text style={{
                        fontFamily: 'Gorditas',
                        fontSize: 16,
                        fontWeight: 600,
                        color: '#000000',
                        marginTop: 9,
                      }}>{item.prince}</Text>
                    </View>
                    <View>
                      <Text style={{
                        fontFamily: 'Gorditas',
                        fontSize: 12,
                        color: 'rgba(0, 0, 0, 0.5)',
                        marginLeft: 42,
                      }}>{item.date}</Text>
                    </View>
                  </View>

                </View>
              </View>
            }} >

          </FlatList>
        </View>
      </View>
    </View>
  )
};

const SecondRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#673ab7' }} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});


const ShopProduct = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Completed' },
    { key: 'second', title: 'Cancelled' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: layout.width }}
    />
  );
};

export default ShopProduct;

const styles = StyleSheet.create({});
