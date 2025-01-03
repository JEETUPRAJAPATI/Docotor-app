import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { IconSymbol } from '@/components/ui/IconSymbol';

type NavItem = {
  id: string;
  title: string;
  icon: string;
};

type BottomNavProps = {
  items: NavItem[];
  activeItem: string;
  onItemPress: (item: NavItem) => void;
};

export function BottomNav({ items, activeItem, onItemPress }: BottomNavProps) {
  return (
    <View style={styles.container}>
      {items.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={styles.item}
          onPress={() => onItemPress(item)}
        >
          <IconSymbol
            name={item.icon as any}
            size={24}
            color={activeItem === item.id ? '#6366f1' : '#9CA3AF'}
          />
          <Text style={[
            styles.text,
            activeItem === item.id && styles.activeText
          ]}>
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#1F2937',
    borderTopWidth: 1,
    borderTopColor: '#374151',
  },
  item: {
    alignItems: 'center',
  },
  text: {
    color: '#9CA3AF',
    fontSize: 12,
    marginTop: 4,
  },
  activeText: {
    color: '#6366f1',
  },
});