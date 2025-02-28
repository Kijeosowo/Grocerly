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
import Ionicons from 'react-native-vector-icons/Ionicons';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import CustomButton from '@/components/CustomButton';
import {APP_ROUTES} from '@/contants/app-routes';
import Layout from '../(main)/_layout';
import {router, useRouter} from 'expo-router';

const AddAddress = () => {
  const chooseMap = () => {
    router.push(APP_ROUTES.ADD_ADDRESS);
  };
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView className="flex-1 bg-white">
            <ArchBorder>
              <MainPageHeader name={t('account.Address.add_Address.title')} />
            </ArchBorder>

            <View style={styles.container}>
              <TextInput
                style={styles.input}
                placeholder={t('account.Address.add_Address.1')}
                placeholderTextColor="#000"
              />
              <Text className="text-[12px] text-gray-600">
                {t('account.Address.add_Address.2')}
              </Text>

              <TextInput
                style={styles.input}
                placeholder={t('account.Address.add_Address.3')}
                placeholderTextColor="#000"
              />

              <TextInput
                style={styles.input}
                placeholder={t('account.Address.add_Address.4')}
                keyboardType="phone-pad"
                placeholderTextColor="#000"
              />

              <TextInput
                style={styles.input}
                placeholder={t('account.Address.add_Address.5')}
                placeholderTextColor="#000"
              />

              <View className="flex items-center">
                <Image
                  source={require('@/assets/address.png')}
                  className="w-32 h-32"
                />
              </View>

              <CustomButton
                navigateProps={chooseMap}
                textProps={t('account.Address.add_Address.map')}>
                <Ionicons name="location-outline" size={24} color="#ffffff" />
              </CustomButton>
            </View>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      <Layout />
    </ScreenWrapper>
  );
};

export default AddAddress;

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
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#F15A22',
    padding: 15,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
