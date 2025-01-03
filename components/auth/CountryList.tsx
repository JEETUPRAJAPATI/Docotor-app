import React from 'react';
import { Modal, View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native';
import { Country } from '@/services/countryService';
import { CountrySearch } from './CountrySearch';
import { CountryListItem } from './CountryListItem';

type CountryListProps = {
  visible: boolean;
  onClose: () => void;
  countries: Country[];
  onSelect: (country: Country) => void;
  loading?: boolean;
  error?: string | null;
};

export function CountryList({ visible, onClose, countries, onSelect, loading, error }: CountryListProps) {
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredCountries = React.useMemo(() => 
    countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [countries, searchQuery]
  );

  const handleSelect = (country: Country) => {
    onSelect(country);
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Select Country</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.closeButton}>✕</Text>
          </TouchableOpacity>
        </View>

        <CountrySearch value={searchQuery} onChangeText={setSearchQuery} />

        {loading ? (
          <View style={styles.centerContent}>
            <ActivityIndicator size="large" color="#6366f1" />
          </View>
        ) : error ? (
          <View style={styles.centerContent}>
            <Text style={styles.errorText}>{error}</Text>
          </View>
        ) : (
          <FlatList
            data={filteredCountries}
            keyExtractor={(item) => item.code}
            renderItem={({ item }) => (
              <CountryListItem country={item} onSelect={handleSelect} />
            )}
            keyboardShouldPersistTaps="handled"
          />
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 24,
    color: '#64748b',
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#ef4444',
    fontSize: 16,
    textAlign: 'center',
  },
});