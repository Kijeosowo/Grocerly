import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
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
import SelectImage from './SelectImage';
import Layout from '../(main)/_layout';

const contact = () => {
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 bg-white">
            <ArchBorder>
              <MainPageHeader name={t('contact.header')} />
            </ArchBorder>

            <View style={styles.container}>
              <View className="flex items-center">
                <Text
                  className="font-semibold"
                  style={{color: COLORS.light.primary}}>
                  {t('contact.header')}
                </Text>
                <Text className="mt-5" style={{color: COLORS.light.grey3}}>
                  {t('contact.address')}
                </Text>
                <Text style={{color: COLORS.light.grey3}}>
                  {t('contact.call')}
                </Text>
                <Text style={{color: COLORS.light.grey3}}>
                  {t('contact.email')}
                </Text>
                <Text className="mt-5 text-lg">{t('contact.sendmessage')}</Text>
              </View>

              <TextInput
                style={styles.input}
                placeholder={t('contact.name')}
                placeholderTextColor="#888"
              />

              <TextInput
                style={styles.input}
                placeholder={t('contact.emailtext')}
                placeholderTextColor="#888"
              />

              <TextInput
                style={styles.input}
                placeholder={t('contact.number')}
                keyboardType="phone-pad"
                placeholderTextColor="#888"
              />

              <TextInput
                style={styles.input}
                placeholder={t('contact.message')}
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

export default contact;

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
