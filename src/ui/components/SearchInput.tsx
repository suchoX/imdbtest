import React, {useState} from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import SearchIcon from '../../assets/search';
import Colors from '../../utils/Colors';
import CloseIcon from '../../assets/close';
import {SEARCH_FOR_MOVIES} from '../../utils/Strings';

export interface SearchInputData {
  initiateSearch: (text: string) => void;
  cancelSearch: () => void;
}

const SearchInput: React.FC<SearchInputData> = ({
  initiateSearch,
  cancelSearch,
}) => {
  const [text, setText] = useState('');
  const onChangeText = (text: string) => {
    setText(text);
  };

  return (
    <View style={styles.container}>
      <SearchIcon height={22} width={22} stroke={Colors.WHITE} />
      <TextInput
        value={text}
        placeholder={SEARCH_FOR_MOVIES}
        placeholderTextColor={Colors.WHITE}
        onChangeText={onChangeText}
        style={styles.editText}
        keyboardType="default"
        returnKeyType="search"
        onSubmitEditing={event => initiateSearch(event.nativeEvent.text)}
      />
      <TouchableOpacity
        onPress={() => {
          setText('');
          cancelSearch();
        }}>
        <CloseIcon height={22} width={22} stroke={Colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: Colors.BLACK,
  },
  editText: {
    marginStart: 12,
    fontSize: 16,
    flex: 1,
    color: Colors.WHITE,
  },
});

export default SearchInput;
