import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import phones from './phone_data.json';
import Search from './component/Search';
import Card from './component/ItemCard';
const App = () => {
  const renderPhone = item => (
    <View style={styles.container}>
      <Card details={item} />
    </View>
  );
  return (
    <SafeAreaView style={styles.main_container}>
      <View>
        <Text style={styles.title}>PATİKASTORE</Text>
        <Search />
        <FlatList data={phones} renderItem={renderPhone} numColumns={2} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  title: {
    paddingLeft:20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    margin: 1,
  },
  main_container: {
    flex: 1,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
  },
});

export default App;
