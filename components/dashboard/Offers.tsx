import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { SectionHeader } from './SectionHeader';

export type Offer = {
  id: number;
  title: string;
  color: string;
};

type OffersProps = {
  offers: Offer[];
  onOfferPress: (offer: Offer) => void;
};

export function Offers({ offers, onOfferPress }: OffersProps) {
  return (
    <View>
      <SectionHeader title="Offers" />
      <View style={styles.container}>
        {offers.map((offer) => (
          <TouchableOpacity
            key={offer.id}
            style={[styles.card, { backgroundColor: offer.color }]}
            onPress={() => onOfferPress(offer)}
          >
            <Text style={styles.title}>{offer.title}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: '48%',
    height: 160,
    borderRadius: 16,
    padding: 16,
    justifyContent: 'flex-end',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});