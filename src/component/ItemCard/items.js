import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './items.style';

const Items = ({details}) => {
  return (
    <View style={styles.container}>
      <View style={styles.image_container}>
        <Image style={styles.image} source={{uri: details.item.imgURL}} />
      </View>
      <Text style={styles.title}>{details.item.title}</Text>
      <Text style={styles.price}>{details.item.price}</Text>
        <Text style={styles.text}>
            {details.item.inStock !== true ? 'STOKTA YOK':null}
        </Text>
    </View>
  );
};

export default Items;
