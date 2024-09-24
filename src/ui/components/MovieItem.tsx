import React from 'react';
import {MovieData} from '../../api/ResponseData';
import {Image, StyleSheet, Text, View} from 'react-native';
import AppUtils from '../../utils/AppUtils';
import Colors from '../../utils/Colors';

interface MovieItemData {
  movieData: MovieData;
}

export const MovieItemComponent: React.FC<MovieItemData> = ({movieData}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.background}
        source={{
          uri: AppUtils.getImageUrl(movieData.backdrop_path),
        }}
      />
      <View style={styles.backgroundCover} />
      <View style={styles.innerContainer}>
        <Image
          style={styles.poster}
          source={{
            uri: AppUtils.getImageUrl(movieData.poster_path),
          }}
        />
        <View style={styles.textsContainer}>
          <Text style={styles.heading} numberOfLines={2}>
            {movieData.title}
          </Text>
          <Text style={styles.details} numberOfLines={7}>
            {movieData.overview}
          </Text>
          <View style={{flex: 1}} />
          <Text style={styles.releaseDate}>
            {AppUtils.getDisplayDate(movieData.release_date)}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 200,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  innerContainer: {
    flexDirection: 'row',
    flex: 1,
  },
  textsContainer: {
    padding: 12,
    flex: 1,
    height: '100%',
  },
  heading: {
    color: Colors.WHITE,
    fontSize: 24,
    marginBottom: 8,
    fontWeight: '500',
  },
  details: {
    color: Colors.WHITE,
    fontSize: 12,
  },
  releaseDate: {
    color: Colors.WHITE,
    fontSize: 12,
    marginTop: 8,
  },
  poster: {
    width: 130,
    height: '100%',
  },
  background: {
    position: 'absolute',
    height: 200,
    width: '100%',
    left: 0,
    top: 0,
  },
  backgroundCover: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    position: 'absolute',
    height: 200,
    width: '100%',
    left: 0,
    top: 0,
  },
});
