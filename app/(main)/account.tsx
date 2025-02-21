import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import {Link} from 'expo-router';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {APP_ROUTES} from '@/contants/app-routes';

const Account = () => {
  const links = [
    {
      href: APP_ROUTES.PERSONALDETAILS,
      label: 'Personal Details',
      icon: 'person-outline',
    },
    {
      href: APP_ROUTES.ADDRESSDETAILS,
      label: 'Address Details',
      icon: 'location-outline',
    },
    {
      href: APP_ROUTES.PASSWORDSETTINGS,
      label: 'Password and Email Settings',
      icon: 'lock-closed-outline',
    },
    {
      href: APP_ROUTES.TERMSANDCONDITION,
      label: 'Terms and Conditions',
      icon: 'document-text-outline',
    },
    {
      href: APP_ROUTES.CONTACT,
      label: 'Support',
      icon: 'help-circle-outline',
    },
    {
      href: APP_ROUTES.PRIVACY,
      label: 'Privacy Policy',
      icon: 'shield-checkmark-outline',
    },
  ];

  const logout = [
    {
      href: APP_ROUTES.PRIVACY,
      label: 'Logout',
      icon: 'log-out-outline',
    },
  ];

  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <View className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('account.header')} />
        </ArchBorder>

        <View className="space-y-4 px-4">
          {links.map((link, index) => (
            <Link key={index} href={link.href} asChild>
              <TouchableOpacity className="flex-row justify-between items-center py-4">
                <View className="flex-row items-center gap-3">
                  <Ionicons
                    name={link.icon}
                    size={20}
                    color={COLORS.light.grey3}
                  />
                  <Text className="text-sm text-black">{link.label}</Text>
                </View>
                <Ionicons
                  name="chevron-forward"
                  size={20}
                  color={COLORS.light.grey3}
                />
              </TouchableOpacity>
            </Link>
          ))}
        </View>

        <View className="px-4 mt-20">
          <Link href={logout[0].href} asChild>
            <TouchableOpacity className="flex-row items-center gap-2 space-x-3">
              <Ionicons
                name="log-out-outline"
                size={20}
                color="white"
                style={{
                  backgroundColor: '#F15A22',
                  padding: 10,
                  borderRadius: 50,
                }}
              />
              <Text className="text-sm text-[#F15A22]">
                {t('account.logout')}
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default Account;
