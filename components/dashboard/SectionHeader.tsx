import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

type SectionHeaderProps = {
  title: string;
  onViewAll?: () => void;
};

export function SectionHeader({ title, onViewAll }: SectionHeaderProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {onViewAll && (
        <TouchableOpacity onPress={onViewAll}>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '600',
  },
  viewAll: {
    color: '#6366f1',
    fontSize: 14,
  },
});