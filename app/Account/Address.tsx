import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Link} from 'expo-router';
import {APP_ROUTES} from '@/contants/app-routes';
import {SAFE_AREA_PADDING} from '@/utils/utils';

type Props = {};

const Address = (props: Props) => {
  const details = [
    {
      label: t('address.address'),
      value: t('address.addressvalue'),
    },
    {
      label: t('address.city'),
      value: t('address.cityvalue'),
    },
    {
      label: t('address.state_province'),
      value: t('address.state_provincevalue'),
    },
    {
      label: t('address.postal'),
      value: t('address.postalcode'),
    },
  ];
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <ScrollView className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('address.header')} />
        </ArchBorder>
        <View className="flex items-center">
          <Image
            source={require('@/assets/address.png')}
            className="w-32 h-32"
          />
          <View className="flex-row gap-10 mt-5">
            <TouchableOpacity>
              <Link href={APP_ROUTES.EDITADDRESS}>
                <Ionicons
                  name="create-outline"
                  size={20}
                  color={COLORS.light.grey3}
                />
                <Text>{t('address.editaddress')}</Text>
              </Link>
            </TouchableOpacity>
            <TouchableOpacity>
              <Link href={APP_ROUTES.ADDADDRESS}>
                <Ionicons
                  name="add-outline"
                  size={20}
                  color={COLORS.light.grey3}
                />
                <Text>{t('address.newaddress')}</Text>
              </Link>
            </TouchableOpacity>
          </View>
        </View>

        {/*  */}
        <View
          style={{
            padding: SAFE_AREA_PADDING.paddingLeft,
          }}>
          {details.map((detail, index) => {
            return (
              <View key={index} className="p-3">
                <Text className="text-xs text-gray-500">{detail.label}</Text>
                <Text className="text-base text-black">{detail.value}</Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Address;

const styles = StyleSheet.create({});
