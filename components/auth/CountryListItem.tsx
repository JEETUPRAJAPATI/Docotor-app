import React from 'react';
import { TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Country } from '@/services/countryService';

type CountryListItemProps = {
  country: Country;
  onSelect: (country: Country) => void;
};

export function CountryListItem({ country, onSelect }: CountryListItemProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onSelect(country)}
    >
      <Image source={{ uri: country.flag }} style={styles.flag} />
      <Text style={styles.name}>{country.name}</Text>
      <Text style={styles.dialCode}>{country.dialCode}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  flag: {
    width: 30,
    height: 20,
    marginRight: 10,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
  dialCode: {
    fontSize: 16,
    color: '#64748b',
  },
});