import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {useTranslation} from 'react-i18next';
import {SAFE_AREA_PADDING} from '@/utils/utils';
import {Link} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';
import { APP_ROUTES } from '@/contants/app-routes';

const PersonalDetails = () => {
  const {t} = useTranslation();

  const details = [
    {
      title: t('account.Personal_Details.First_Name'),
      value: 'Jane',
    },
    {
      title: t('account.Personal_Details.Last_Name'),
      value: 'Jane',
    },
    {
      title: t('account.Personal_Details.Email_Address'),
      value: 'janedoe@gmail.com',
    },
    {
      title: t('account.Personal_Details.Phone_Number'),
      value: '+60 345 6789 000',
    },
    {
      title: t('account.Personal_Details.DOB'),
      value: 'Jane',
    },
  ];

  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <View className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('account.Personal_Details.title')} />
        </ArchBorder>

        <View className="flex items-center gap-5">
          <Image source={require('@/assets/profilepick.png')} />
          <TouchableOpacity className="flex-row gap-2">
            <Ionicons
              name="create-outline"
              size={24}
              className=""
              style={{color: COLORS.light.grey3}}
            />
            <Link href={APP_ROUTES.EDITPROFILE} className="mt-1" style={{color: COLORS.light.grey3}}>
              {t('account.Personal_Details.edit')}
            </Link>
          </TouchableOpacity>
        </View>

        <View>
          {details.map((detail, index) => {
            return (
              <View
                key={index}
                style={{padding: SAFE_AREA_PADDING.paddingLeft}}>
                <View>
                  <Text style={{color: COLORS.light.grey3}}>
                    {detail.title}
                  </Text>
                  <Text className="font-semibold">{detail.value}</Text>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PersonalDetails;

const styles = StyleSheet.create({
  headerDesc: {
    width: '100%',
    paddingHorizontal: SAFE_AREA_PADDING.paddingRight,
  },
});
