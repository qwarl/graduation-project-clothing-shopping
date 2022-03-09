import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

const FavoriteProduct = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [favorites, setFavorites] = useState([
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
  return (
    <View style={{ flex: 1, marginTop: 39.47, }}>
      <View style={{ width: 375, marginLeft: 21, justifyContent: 'center', alignItems: 'center' }}>

        <FlatList
          numColumns={2}
          data={favorites}
          style={{ flex: 1 }}
          keyExtractor={item => item.name}
          renderItem={({ item }) => {
            return <View style={{
              width: 154,
              height: 190,
              justifyContent: 'center',
              borderRadius: 15,
              borderColor: ' rgba(0, 0, 0, 0.05)',
              borderWidth: 1,
              backgroundColor: 'rgba(255, 255, 255, 0.65)',
              margin: 12
            }}>
              <View style={{ alignItems: 'center' }}>
                <View style={{ alignItems: 'center', justifyContent: 'center', width: 142, height: 133, backgroundColor: ' rgba(135, 199, 185, 0.1)', borderRadius: 15 }}>
                  <View>
                    <Pressable style={{ padding: 10 }} onPress={() => setIsLiked(!isLiked)}>
                      {
                        isLiked ?
                          <AntDesign name="heart" size={10} color="#FF3535" />
                          :
                          <AntDesign name="hearto" size={10} color="#FF3535" />

                      }
                    </Pressable>
                  </View>
                  <Image
                    style={{
                      width: 96,
                      height: 126,
                      resizeMode: 'cover',
                    }}
                    source={{
                      uri: item.url
                    }}
                  />
                </View>

                <Text style={{
                  fontFamily: 'Gorditas',
                  fontSize: 14,
                  color: '#000000',
                  fontWeight: 400,
                  marginTop: 7,
                }}>{item.name}</Text>
                <Text style={{
                  fontFamily: 'Gorditas',
                  fontSize: 12,
                  fontWeight: 500,
                  color: '#000000',
                  marginTop: 4,
                }}>{item.prince}</Text>



              </View>
            </View>
          }} >

        </FlatList>
      </View>
    </View>
  );
};

export default FavoriteProduct;

const styles = StyleSheet.create({});
