import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SectionHeader } from './SectionHeader';

export type Category = {
  id: number;
  title: string;
  image: string;
  color: string;
  slug: string;
};

type CategoriesProps = {
  categories: Category[];
  onCategoryPress: (category: Category) => void;
};

export function Categories({ categories, onCategoryPress }: CategoriesProps) {
  return (
    <View>
      <SectionHeader title="Shop by Category" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[styles.card, { backgroundColor: category.color }]}
            onPress={() => onCategoryPress(category)}
          >
            <Image 
              source={{ uri: category.image }} 
              style={styles.image}
              resizeMode="cover"
            />
            <Text style={styles.title}>{category.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  card: {
    width: 160,
    height: 200,
    borderRadius: 16,
    marginRight: 16,
    padding: 16,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '600',
  },
});