import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchTrendingMovies} from '../../api/Fetch';

const HomeScreen = ({navigation}) => {
  useEffect(() => {
    fetchTrendingMovies()
      .then(data => {
        console.log(JSON.stringify(data, null, 2));
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  return (
    <SafeAreaView>
      <View>
        <Text>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
