import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Link} from 'expo-router';
import {APP_ROUTES} from '@/contants/app-routes';

const PersonalDetails = () => {
  const details = [
    {
      label: t('personaldetails.firstname'),
      value: t('personaldetails.firstnamevalue'),
    },
    {
      label: t('personaldetails.lastname'),
      value: t('personaldetails.lastnamevalue'),
    },
    {
      label: t('personaldetails.email'),
      value: t('personaldetails.emailvalue'),
    },
    {
      label: t('personaldetails.number'),
      value: t('personaldetails.numbervalue'),
    },
    {
      label: t('personaldetails.birth'),
      value: t('personaldetails.birthvalue'),
    },
  ];

  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <ScrollView className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('personaldetails.header')} />
        </ArchBorder>

        <View className="flex items-center justify-center gap-5">
          <Image
            source={require('@/assets/profile.png')}
            style={{
              width: 100,
              height: 100,
              borderRadius: 50,
            }}
          />

          <TouchableOpacity>
            <Link href={APP_ROUTES.EDITPROFILE}>
              <Ionicons
                name="create-outline"
                size={20}
                color={COLORS.light.grey3}
              />
              <Text>{t('personaldetails.editprofile')}</Text>
            </Link>
          </TouchableOpacity>
        </View>

        <View className="px-4 mt-5 space-y-6">
          {details.map((item, index) => (
            <View key={index} className="p-4">
              <Text className="text-xs text-gray-500">{item.label}</Text>
              <Text className="text-base text-black">{item.value}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default PersonalDetails;
