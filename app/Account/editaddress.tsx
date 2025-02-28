import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';

import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import Layout from '../(main)/_layout';

const editaddress = () => {
  const [selectedLanguage, setSelectedLanguage] = useState();
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 bg-white">
            <ArchBorder>
              <MainPageHeader name={t('editaddress.header')} />
            </ArchBorder>
            <View className="flex items-center">
              <Image
                source={require('@/assets/address.png')}
                className="w-32 h-32"
              />
            </View>

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder="Address Line 1"
                placeholderTextColor="#000"
              />
              <Text className="text-[12px] text-gray-600">
                {t('editaddress.text')}
              </Text>

              <TextInput
                style={styles.input}
                placeholder="Select City"
                placeholderTextColor="#000"
              />

              <TextInput
                style={styles.input}
                placeholder="State/Province/Region"
                keyboardType="phone-pad"
                placeholderTextColor="#000"
              />

              <TextInput
                style={styles.input}
                placeholder="Zip/Postal Code"
                placeholderTextColor="#000"
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>{t('editaddress.submit')}</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Layout />
    </ScreenWrapper>
  );
};

export default editaddress;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#F15A22',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
