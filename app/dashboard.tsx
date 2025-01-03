import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, StyleSheet } from 'react-native';
import { Header } from '@/components/dashboard/Header';
import { SearchBar } from '@/components/dashboard/SearchBar';
import { Categories, type Category } from '@/components/dashboard/Categories';
import { Offers, type Offer } from '@/components/dashboard/Offers';
import { BottomNav } from '@/components/dashboard/BottomNav';

const categories: Category[] = [
  {
    id: 1,
    title: 'BABY & MOTHER',
    image: 'https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?w=500',
    color: '#FFA69E',
  },
  {
    id: 2,
    title: 'OTC MEDICINES',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=500',
    color: '#98D8C8',
  },
  {
    id: 3,
    title: 'DIABETES MEDICINE',
    image: 'https://images.unsplash.com/photo-1579165466741-7f35e4755660?w=500',
    color: '#88BBE4',
  },
  {
    id: 4,
    title: 'WELLNESS ITEMS',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500',
    color: '#B8E0D4',
  },
];

const offers: Offer[] = [
  {
    id: 1,
    title: 'STAY HOME\nGET DISCOUNT',
    color: '#B8E0D4',
  },
  {
    id: 2,
    title: 'QUICK\nLAB TEST',
    color: '#88BBE4',
  },
];

const navItems = [
  { id: 'medicines', title: 'Medicines', icon: 'house.fill' },
  { id: 'doctors', title: 'Doctors', icon: 'paperplane.fill' },
  { id: 'hospitals', title: 'Hospitals', icon: 'paperplane.fill' },
  { id: 'labtest', title: 'Lab Test', icon: 'paperplane.fill' },
  { id: 'more', title: 'More', icon: 'paperplane.fill' },
];

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeNavItem, setActiveNavItem] = useState('medicines');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Header cartCount={0} />
        
        <Text style={styles.welcomeText}>Hello, Test user.</Text>
        <Text style={styles.title}>Find your medicines</Text>

        <SearchBar value={searchQuery} onChangeText={setSearchQuery} />
        
        <Categories 
          categories={categories} 
          onCategoryPress={(category) => console.log('Category pressed:', category.title)} 
        />
        
        <Offers 
          offers={offers} 
          onOfferPress={(offer) => console.log('Offer pressed:', offer.title)} 
        />
      </ScrollView>

      <BottomNav
        items={navItems}
        activeItem={activeNavItem}
        onItemPress={(item) => setActiveNavItem(item.id)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  welcomeText: {
    color: '#9CA3AF',
    fontSize: 16,
    marginBottom: 8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 24,
  },
});