import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '@/components/ScreenWrapper';
import {COLORS} from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import {useTranslation} from 'react-i18next';
import {SAFE_AREA_PADDING} from '@/utils/utils';
import AddressIcon from '@/components/icons/AddressIcon';
import CustomButton from '@/components/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRouter} from 'expo-router';
import {APP_ROUTES} from '@/contants/app-routes';

const Support = () => {
  const {t} = useTranslation();
  const router = useRouter();
  const [addressValue, setAddressValue] = useState([]);

  const addAddress = () => {
    router.push(APP_ROUTES.ADD_ADDRESS);
  };

  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <View className="flex-1 bg-white">
        <ArchBorder>
          <MainPageHeader name="Support" />
        </ArchBorder>
      </View>
    </ScreenWrapper>
  );
};

export default Support;

const styles = StyleSheet.create({
  headerDesc: {
    width: '100%',
    paddingHorizontal: SAFE_AREA_PADDING.paddingRight,
  },
});
