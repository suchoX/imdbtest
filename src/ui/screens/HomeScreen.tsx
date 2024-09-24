import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {fetchTrendingMovies} from '../../api/Fetch';
import {MovieData} from '../../api/ResponseData';
import Colors from '../../utils/Colors';
import {MovieItemComponent} from '../components/MovieItem';
import {TRENDING} from '../../utils/Strings';

const SAFE_AREA_VIEW_EDGES: Edges = ['top'];
const HomeScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [trendingMovies, setTrendingMovies] = useState<MovieData[]>([]);

  const fetchMovies = () => {
    setIsLoading(true);
    fetchTrendingMovies()
      .then(data => {
        setTrendingMovies(data.results);
      })
      .catch(error => {
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <View>
      <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.container}>
        <Text style={styles.heading}>{TRENDING}</Text>
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.GREY} />
          </View>
        ) : (
          <FlatList
            data={trendingMovies}
            renderItem={({item}) => <MovieItemComponent movieData={item} />}
            keyExtractor={item => item.id.toString()}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Colors.DARK_BLUE,
  },
  heading: {
    color: Colors.WHITE,
    fontSize: 36,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 8,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
