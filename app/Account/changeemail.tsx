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
import { router } from 'expo-router';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import Layout from '../(main)/_layout';
import { APP_ROUTES } from '@/contants/app-routes';
import { SAFE_AREA_PADDING } from '@/utils/utils';

const changeemail = () => {
  const passwordreset = (() => {
    router.push(APP_ROUTES.RESETEMAIL);
  })
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 bg-white">
            <ArchBorder>
              <MainPageHeader
                name={t('account.password_settings.change_email.header')}
              />
            </ArchBorder>

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder={t('account.password_settings.change_email.1')}
                placeholderTextColor="#000"
              />

              <TextInput
                style={styles.input}
                placeholder={t('account.password_settings.change_email.2')}
                placeholderTextColor="#000"
              />
              <View className="flex-row justify-between">
                <Text
                  className="text-sm text-base"
                  style={{color: COLORS.light.grey3}}>
                  {t('account.password_settings.change_email.access')}
                </Text>
              </View>

              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText} className="text-sm" onPress={passwordreset}>
                  {t('account.password_settings.change_email.confirm')}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Layout />
    </ScreenWrapper>
  );
};

export default changeemail;

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
