import React, {useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import {NO_MOVIES_FOUND, SEARCH, SEARCH_FAVOURITES} from '../../utils/Strings';
import Colors from '../../utils/Colors';
import SearchInput from '../components/SearchInput';
import {MovieData} from '../../api/ResponseData';
import {MovieItemComponent} from '../components/MovieItem';
import {fetchSearchResults} from '../../api/Fetch';
import AppUtils from '../../utils/AppUtils';

const SAFE_AREA_VIEW_EDGES: Edges = ['top'];
const SearchScreen = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [searchMovies, setSearchMovies] = useState<MovieData[]>([]);
  const [searchedOnce, setSearchedOnce] = useState(false);

  const searchMovie = (text: string) => {
    setSearchedOnce(true);
    setIsLoading(true);
    fetchSearchResults(text)
      .then(data => {
        setSearchMovies(data.results);
      })
      .catch(error => {
        console.error(error);
        AppUtils.showAPIErrorToast();
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const cancelSearch = () => {
    setSearchMovies([]);
    setSearchedOnce(false);
  };

  return (
    <View>
      <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.container}>
        <Text style={styles.heading}>{SEARCH}</Text>
        <SearchInput initiateSearch={searchMovie} cancelSearch={cancelSearch} />
        <View style={{height: 8}} />
        {isLoading ? (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={Colors.GREY} />
          </View>
        ) : searchMovies.length > 0 ? (
          <FlatList
            data={searchMovies}
            renderItem={({item}) => <MovieItemComponent movieData={item} />}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <View style={styles.textContainer}>
            <Text style={styles.noMoviesText}>
              {searchedOnce ? NO_MOVIES_FOUND : SEARCH_FAVOURITES}
            </Text>
          </View>
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
    marginBottom: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noMoviesText: {
    color: Colors.WHITE,
    fontSize: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchScreen;
