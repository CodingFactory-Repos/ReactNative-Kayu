import {Image, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {styles} from './ProductItem.styles';

import {ProductItemProps} from './ProductItem.interfaces.ts';

const ProductItem = ({
  title,
  subtitle,
  defects,
  qualities,
  image_front_small_url,
  nutriscore_grade,
  nutriscore_score,
}: ProductItemProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image style={styles.image} source={{uri: image_front_small_url}} />
        <View style={styles.headerText}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>
        <Text style={styles.badge}>
          {nutriscore_grade} - "{nutriscore_score}/100"
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Défauts</Text>
        {defects.map((defect, index) => (
          <View key={index} style={styles.listItem}>
            <Icon name="circle" size={10} color="#EF4444" />
            <Text style={styles.listText}>{defect}</Text>
          </View>
        ))}

        <Text style={styles.sectionTitle}>Qualités</Text>
        {qualities.map((quality, index) => (
          <View key={index} style={styles.listItem}>
            <Icon name="circle" size={10} color="#10B981" />
            <Text style={styles.listText}>{quality}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProductItem;
