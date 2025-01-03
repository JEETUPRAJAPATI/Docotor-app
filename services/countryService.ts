import { useState, useEffect } from 'react';

export interface Country {
  name: string;
  code: string;
  dialCode: string;
  flag: string;
}

export function useCountries() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      
      const formattedCountries: Country[] = data.map((country: any) => ({
        name: country.name.common,
        code: country.cca2,
        dialCode: country.idd?.root + (country.idd?.suffixes?.[0] || ''),
        flag: country.flags.png
      })).sort((a: Country, b: Country) => a.name.localeCompare(b.name));

      setCountries(formattedCountries);
      setLoading(false);
    } catch (err) {
      setError('Failed to fetch countries');
      setLoading(false);
    }
  };

  return { countries, loading, error };
}