import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Alert,
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
import SelectImage from './SelectImage';
import Layout from '../(main)/_layout';
import {Link} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import {APP_ROUTES} from '@/contants/app-routes';

const passwordsettings = () => {
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 bg-white">
            <ArchBorder>
              <MainPageHeader name={t('passwordsettings.header')} />
            </ArchBorder>

            <View style={styles.container} className="flex-col gap-5">
              <TouchableOpacity className="flex-row justify-between pb-10 border-b border-stone-400">
                <Link href={APP_ROUTES.CHANGEPASSWORD}>
                  <View>
                    <Text>{t('passwordsettings.password')}</Text>
                    <Text style={{color: COLORS.light.grey3}} className="mt-1">
                      {t('passwordsettings.passwordtext')}
                    </Text>
                  </View>
                </Link>
                <Ionicons
                  name="create-outline"
                  size={20}
                  color={COLORS.light.grey3}
                />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row justify-between pb-10 border-b border-stone-400">
                <Link href={APP_ROUTES.CHANGEEMAIL}>
                  <View>
                    <Text>{t('passwordsettings.email')}</Text>
                    <Text style={{color: COLORS.light.grey3}} className="mt-1">
                      {t('passwordsettings.emailtext')}
                    </Text>
                  </View>
                </Link>
                <Ionicons
                  name="create-outline"
                  size={20}
                  color={COLORS.light.grey3}
                />
              </TouchableOpacity>

              <TouchableOpacity className="flex-row justify-between">
                <Link href="">
                  <View className="">
                    <Text>{t('passwordsettings.deactivate')}</Text>
                    <Text style={{color: COLORS.light.grey3}}>
                      {t('passwordsettings.emailtext')}
                    </Text>
                  </View>
                </Link>
                <Text className="text-red-500">
                  {t('passwordsettings.closeaccount')}
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

export default passwordsettings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  link: {
    display: 'flex',
    flexDirection: 'column',
  },
});
