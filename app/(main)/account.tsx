import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {Link} from 'expo-router';
import {t} from 'i18next';
import Ionicons from '@expo/vector-icons/Ionicons';
import {APP_ROUTES} from '@/contants/app-routes';

const accountOptions = [
  {
    title: t('account.list_section.1'),
    route: APP_ROUTES.PERSONAL_DETAILS,
    icon: 'person-outline',
  },
  {
    title: t('account.list_section.2'),
    route: APP_ROUTES.ADDRESS,
    icon: 'location-outline',
  },
  {
    title: t('account.list_section.3'),
    route: APP_ROUTES.PASSWORD_SETTING,
    icon: 'settings-outline',
  },
  {
    title: t('account.list_section.4'),
    route: APP_ROUTES.TERMS,
    icon: 'document-text-outline',
  },
  {
    title: t('account.list_section.5'),
    route: APP_ROUTES.SUPPORT,
    icon: 'help-circle-outline',
  },
  {
    title: t('account.list_section.6'),
    route: APP_ROUTES.PRIVACY,
    icon: 'shield-checkmark-outline',
  },
];

const Account = () => {
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <View className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('account.title')} />
        </ArchBorder>

        <View className="p-5">
          {accountOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center">
                <Ionicons
                  name={option.icon}
                  size={24}
                  color={COLORS.dark.grey3}
                  className="mr-4"
                />
                <Link href={option.route} className="text-sm text-[#191A23]">
                  {option.title}
                </Link>
              </View>
              <Ionicons
                name="chevron-forward-outline"
                size={20}
                color={COLORS.dark.grey3}
              />
            </TouchableOpacity>
          ))}
        </View>

        <View>
          <TouchableOpacity className="flex-row p-5 items-center">
            <Ionicons
              name="log-out-outline"
              size={24}
              color="white"
              className="mr-2 bg-[#F15A22] p-3 rounded-full"
            />
            <Link href="" className="mt-3 font-semibold text-[#F15A22]">
              {t('account.list_section.7')}
            </Link>
          </TouchableOpacity>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Account;
