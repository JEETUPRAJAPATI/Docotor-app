import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { SearchBar } from '@/components/dashboard/SearchBar';

const subcategories = {
  'baby-mother': [
    { id: 1, name: 'First Aid' },
    { id: 2, name: 'Baby Care' },
    { id: 3, name: 'Womens Care' },
    { id: 4, name: 'Newborn Care' },
    { id: 5, name: 'Other' },
    { id: 6, name: 'Health Care' },
  ],
  'otc-medicines': [
    { id: 1, name: 'Pain Relief' },
    { id: 2, name: 'Cold & Flu' },
    { id: 3, name: 'Digestive Health' },
    { id: 4, name: 'First Aid' },
    { id: 5, name: 'Allergy' },
  ],
  'diabetes-medicine': [
    { id: 1, name: 'Insulin' },
    { id: 2, name: 'Blood Sugar Monitors' },
    { id: 3, name: 'Test Strips' },
    { id: 4, name: 'Lancets' },
  ],
  'wellness-items': [
    { id: 1, name: 'Vitamins' },
    { id: 2, name: 'Supplements' },
    { id: 3, name: 'Protein Powder' },
    { id: 4, name: 'Health Drinks' },
  ],
};

export default function CategoryDetails() {
  const router = useRouter();
  const { id, title } = useLocalSearchParams();
  const [searchQuery, setSearchQuery] = React.useState('');

  const categoryId = Array.isArray(id) ? id[0] : id;
  const categoryTitle = Array.isArray(title) ? title[0] : title;
  
  const items = subcategories[categoryId as keyof typeof subcategories] || [];
  
  const filteredItems = items.filter(item => 
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <IconSymbol name="house.fill" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <Text style={styles.title}>{categoryTitle}</Text>
        <View style={styles.placeholder} />
      </View>

      <SearchBar 
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.itemContainer}
            onPress={() => console.log(`Selected ${item.name}`)}
          >
            <Text style={styles.itemName}>{item.name}</Text>
            <IconSymbol name="paperplane.fill" size={20} color="#6B7280" />
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    paddingTop: 60,
  },
  backButton: {
    padding: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  placeholder: {
    width: 40,
  },
  listContent: {
    padding: 16,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    backgroundColor: '#1F2937',
    borderRadius: 12,
    marginBottom: 12,
  },
  itemName: {
    color: '#FFFFFF',
    fontSize: 16,
  },
});