import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {t} from 'i18next';
import {Link} from 'expo-router';

const termsandcondition = () => {
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <ScrollView className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name={t('termsandcondition.header')} />
        </ArchBorder>
        <View>
          <Text className="text-center font-bold text-lg">
            {t('termsandcondition.subheader')}
          </Text>
          <Text className="ml-5 mr-5 mt-5 text-[1.1rem] leading-[2rem]">
            {t('termsandcondition.paragraph')}
          </Text>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default termsandcondition;
