// import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
// import React from 'react';
// import ScreenWrapper from '@/components/ScreenWrapper';
// import {COLORS} from '@/theme/colors';
// import ArchBorder from '@/components/ArchBorder';
// import MainPageHeader from '@/components/MainPageHeader';
// import {Link} from 'expo-router';
// import {t} from 'i18next';
// import Ionicons from '@expo/vector-icons/Ionicons';
// import {APP_ROUTES} from '@/contants/app-routes';
// import {SAFE_AREA_PADDING} from '@/utils/utils';

// const PasswordSettings = () => {
//   const settings = [
//     { 
//       link: APP_ROUTES.CHANGEPASSWORD,
//       title: t('account.password_settings.password.title'),
//       subtitle: t('account.password_settings.password.sub-title'),
//       icon: 'create-outline',
//     },
//     { 
//       link: APP_ROUTES.CHANGEEMAIL,
//       title: t('account.password_settings.email_address.title'),
//       subtitle: t('account.password_settings.email_address.sub-title'),
//       icon: 'create-outline',
//     },
//     { 
//       link: "",
//       title: t('account.password_settings.deactivate.title'),
//       subtitle: t('account.password_settings.deactivate.sub-title'),
//       paragraph: 'Deactivate',
//     },
//   ];
//   return (
//     <ScreenWrapper background={COLORS.light.primary}>
//       <View className="flex-1 bg-white">
//         <ArchBorder>
//           <MainPageHeader
//             name={t('account.password_settings.password.header')}
//           />
//         </ArchBorder>

//         <View
//           style={{padding: SAFE_AREA_PADDING.paddingLeft}}
//           className="flex gap-5">
//           {settings.map((setting, index) => {
//             return (
//               <View
//                 key={index}
//                 className="flex-row pb-5 justify-between"
//                 style={{
//                   borderBottomColor: COLORS.dark.grey2,
//                   borderBottomWidth: 0.5,
//                 }}>
//                 <Link href={setting.link}>
//                   <View className="flex gap-1">
//                     <Text
//                       className="font-semibold"
//                       style={{color: COLORS.dark.grey3}}>
//                       {setting.title}
//                     </Text>
//                     <Text style={{color: COLORS.light.grey3}}>
//                       {setting.subtitle}
//                     </Text>
//                   </View>
//                 </Link>
//                 <Ionicons
//                   name={setting.icon}
//                   size={24}
//                   color={COLORS.light.grey3}
//                 />
//                 <Link href="" className="text-[red]">
//                   {setting.paragraph}
//                 </Link>
//               </View>
//             );
//           })}
//         </View>
//       </View>
//     </ScreenWrapper>
//   );
// };

// export default PasswordSettings;

// const styles = StyleSheet.create({});






























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
import {SAFE_AREA_PADDING} from '@/utils/utils';

const settings = [
  {
    link: APP_ROUTES.CHANGEPASSWORD,
    title: t('account.password_settings.password.title'),
    subtitle: t('account.password_settings.password.sub-title'),
    icon: 'create-outline',
  },
  {
    link: APP_ROUTES.CHANGEEMAIL,
    title: t('account.password_settings.email_address.title'),
    subtitle: t('account.password_settings.email_address.sub-title'),
    icon: 'create-outline',
  },
  {
    link: '',
    title: t('account.password_settings.deactivate.title'),
    subtitle: t('account.password_settings.deactivate.sub-title'),
    paragraph: 'Deactivate',
  },
];

const PasswordSettings = () => {
  return (
    <ScreenWrapper background={COLORS.light.primary}>
      <View className="flex-1 bg-white">

        <ArchBorder>
          <MainPageHeader
            name={t('account.password_settings.password.header')}
          />
        </ArchBorder>
       
        <View
          style={{padding: SAFE_AREA_PADDING.paddingLeft}}
          className="flex gap-5">
          {settings.map((setting, index) => (
            <View
              key={index}
              className="flex-row pb-5 justify-between items-center"
              style={{
                borderBottomColor: COLORS.dark.grey2,
                borderBottomWidth: 0.5,
              }}>
              
              <Link href={setting.link || '#'}>
                <View className="flex gap-1">
                  <Text
                    className="font-semibold"
                    style={{color: COLORS.dark.grey3}}>
                    {setting.title}
                  </Text>
                  <Text style={{color: COLORS.light.grey3}}>
                    {setting.subtitle}
                  </Text>
                </View>
              </Link>

            
              {setting.paragraph ? (
                <Link href="#" className="text-[red]">
                  {setting.paragraph}
                </Link>
              ) : (
                <Ionicons
                  name={setting.icon}
                  size={24}
                  color={COLORS.light.grey3}
                />
              )}
            </View>
          ))}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default PasswordSettings;

const styles = StyleSheet.create({});
