import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Button } from '@/components/ui/Button';
import { PhoneInput } from '@/components/auth/PhoneInput';
import { CountrySelector } from '@/components/auth/CountrySelector';
import { CountryList } from '@/components/auth/CountryList';
import { GoogleButton } from '@/components/auth/GoogleButton';
import { useCountries } from '@/services/countryService';
import { validatePhoneNumber } from '@/utils/phoneUtils';

export default function Login() {
  const router = useRouter();
  const { countries, loading, error } = useCountries();
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedCountry, setSelectedCountry] = useState(
    countries[0] || { name: 'India', dialCode: '+91', code: 'IN', flag: '' }
  );
  const [showCountryList, setShowCountryList] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const handleContinue = async () => {
    if (!validatePhoneNumber(phoneNumber)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid phone number with at least 10 digits');
      return;
    }

    setIsLoggingIn(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.replace('/dashboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to log in. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    setIsLoggingIn(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.replace('/dashboard');
    } catch (error) {
      Alert.alert('Error', 'Failed to log in with Google. Please try again.');
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}>
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.content}>
            <Image
              source={require('../assets/images/icon.png')}
              style={styles.logo}
              resizeMode="contain"
            />
            <Text style={styles.title}>DoctoPro</Text>
            
            <View style={styles.illustrationContainer}>
              <Image
                source={require('../assets/images/adaptive-icon.png')}
                style={styles.illustration}
                resizeMode="contain"
              />
            </View>

            <View style={styles.inputContainer}>
              <CountrySelector
                selectedCountry={selectedCountry.name}
                onPress={() => setShowCountryList(true)}
              />
              <PhoneInput
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                countryCode={selectedCountry.dialCode}
              />
              <Button
                title={isLoggingIn ? "Logging in..." : "Continue"}
                onPress={handleContinue}
                disabled={isLoggingIn}
              />
              <Text style={styles.orText}>Or quick continue with</Text>
              <GoogleButton onPress={handleGoogleSignIn} disabled={isLoggingIn} />
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <CountryList
        visible={showCountryList}
        onClose={() => setShowCountryList(false)}
        countries={countries}
        onSelect={setSelectedCountry}
        loading={loading}
        error={error}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6366f1',
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 80,
    height: 80,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  illustrationContainer: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    alignItems: 'center',
  },
  illustration: {
    width: '80%',
    height: '100%',
  },
  inputContainer: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
    marginTop: 'auto',
  },
  orText: {
    textAlign: 'center',
    color: '#64748b',
    marginVertical: 20,
  },
});