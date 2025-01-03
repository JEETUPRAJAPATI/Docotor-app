import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

type CountrySearchProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function CountrySearch({ value, onChangeText }: CountrySearchProps) {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="Search countries..."
      value={value}
      onChangeText={onChangeText}
      autoFocus
    />
  );
}

const styles = StyleSheet.create({
  searchInput: {
    margin: 20,
    padding: 10,
    backgroundColor: '#f1f5f9',
    borderRadius: 10,
  },
});