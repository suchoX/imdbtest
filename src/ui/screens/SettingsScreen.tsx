import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Edges, SafeAreaView} from 'react-native-safe-area-context';
import Colors from '../../utils/Colors';
import {SETTINGS} from '../../utils/Strings';

const SAFE_AREA_VIEW_EDGES: Edges = ['top'];
const SettingsScreen = ({navigation}) => {
  return (
    <View>
      <SafeAreaView edges={SAFE_AREA_VIEW_EDGES} style={styles.container}>
        <Text style={styles.heading}>{SETTINGS}</Text>
      </SafeAreaView>
    </View>
  );
};

export default SettingsScreen;

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
});
