import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <View style={styles.container}>
      <IconSymbol name="paperplane.fill" size={20} color="#6B7280" />
      <TextInput
        style={styles.input}
        placeholder="Search medicines"
        placeholderTextColor="#6B7280"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#374151',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginBottom: 24,
  },
  input: {
    flex: 1,
    color: '#FFFFFF',
    fontSize: 16,
    marginLeft: 12,
  },
});