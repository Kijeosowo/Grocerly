import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import ScreenWrapper from '@/components/ScreenWrapper';
import { COLORS } from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import { useTranslation } from 'react-i18next';
import { SAFE_AREA_PADDING } from '@/utils/utils';
import AddressIcon from "@/components/icons/AddressIcon"
import CustomButton from '@/components/CustomButton';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useRouter } from 'expo-router';
import { APP_ROUTES } from '@/contants/app-routes';

const Address = () => {
    const {t} = useTranslation();
    const router = useRouter()
    const [addressValue, setAddressValue] = useState([])

    const addAddress = () => {
      router.push(APP_ROUTES.ADD_ADDRESS)
    }
  
    return (
        <ScreenWrapper background={COLORS.light.primary}>
        <View className="flex-1 bg-white">
            <ArchBorder>
            <MainPageHeader name={t("account.Address.title")} />
            </ArchBorder>

            <View style={styles.headerDesc}>
              {
                addressValue?.length == 0 ? (
                  <View className='w-full items-center justify-center '>
                    <AddressIcon />

                    <CustomButton navigateProps={addAddress} textProps={t("button.add_Address")}>
                      <Ionicons name="location-outline" size={24} color="#ffffff" />
                    </CustomButton>
                  </View>
                )
                : 
                (
                  <View>

                  </View>
                )
              }
            
            </View>
        </View>
        </ScreenWrapper>
    )
}

export default Address

const styles = StyleSheet.create({
    headerDesc: {
        width: "100%",
        paddingHorizontal: SAFE_AREA_PADDING.paddingRight,
    },
});