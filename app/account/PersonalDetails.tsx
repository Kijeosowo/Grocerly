import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import ScreenWrapper from '@/components/ScreenWrapper';
import { COLORS } from '@/theme/colors';
import ArchBorder from '@/components/ArchBorder';
import MainPageHeader from '@/components/MainPageHeader';
import { useTranslation } from 'react-i18next';
import { SAFE_AREA_PADDING } from '@/utils/utils';

const PersonalDetails = () => {
    const {t} = useTranslation();
  
    return (
        <ScreenWrapper background={COLORS.light.primary}>
        <View className="flex-1 bg-white">
            <ArchBorder>
            <MainPageHeader name={t("account.Personal_Details.title")} />
            </ArchBorder>

            <ScrollView style={styles.headerDesc} showsVerticalScrollIndicator={false}>
              <View>
                
              </View>
            
            </ScrollView>
        </View>
        </ScreenWrapper>
    )
}

export default PersonalDetails

const styles = StyleSheet.create({
    headerDesc: {
        width: "100%",
        paddingHorizontal: SAFE_AREA_PADDING.paddingRight,
    },
});