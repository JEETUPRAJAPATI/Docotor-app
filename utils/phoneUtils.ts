import { Country } from '@/services/countryService';

export const validatePhoneNumber = (number: string): boolean => {
  return number.length >= 10;
};

export const formatPhoneNumber = (number: string, country: Country): string => {
  return `${country.dialCode} ${number}`;
};