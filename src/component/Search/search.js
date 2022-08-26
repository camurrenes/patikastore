import React from 'react';
import {TextInput, Text, View} from 'react-native';
import styles from './search.style';

const Search = () => {
  const [text, searching] = React.useState(null);
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={searching}
        placeholder="Ara..."
      />
    </View>
  );
};

export default Search;
