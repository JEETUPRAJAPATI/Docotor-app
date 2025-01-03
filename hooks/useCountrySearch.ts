import { useState, useMemo } from 'react';
import { Country } from '@/services/countryService';

export function useCountrySearch(countries: Country[]) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCountries = useMemo(() => 
    countries.filter(country =>
      country.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [countries, searchQuery]
  );

  return {
    searchQuery,
    setSearchQuery,
    filteredCountries,
  };
}