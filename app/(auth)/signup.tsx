import React, {useCallback} from 'react';
import axiosInstance from '@/api/config';
import {
  NOTIFICATIONS_RESPONSE,
  NOTIFICATIONS_ACTION,
  RESET_PASSWORD_PAGES,
} from '@/contants';
import {API_ROUTES} from '@/contants/api-routes';
import useYupValidationResolver from '@/hooks/useYupValidationResolver';
import i18n from '@/i18n';
import {COLORS} from '@/theme/colors';
import getErrorMessage from '@/utils/error-formatter';
import {SAFE_AREA_PADDING} from '@/utils/utils';
import {useMutation} from '@tanstack/react-query';
import Checkbox from 'expo-checkbox';
import {useState} from 'react';
import {useForm, Controller} from 'react-hook-form';
import {useTranslation} from 'react-i18next';
import {
  ScrollView,
  View,
  TouchableOpacity,
  Pressable,
  Image,
  Text,
} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import useAuthToken from '@/hooks/useAuthToken';
import {useAuthStore} from '@/store/store';
import FullPageLoader from '@/components/FullPageLoader';
import TextInputComp from '@/components/Input';
import ScreenWrapper from '@/components/ScreenWrapper';
import * as yup from 'yup';

type LoginFormProps = {
  email: string;
  password: string;
};

type ResetPassagesType = {
  page: RESET_PASSWORD_PAGES;
  email?: string;
  otp?: string;
};

const Validation = yup.object().shape({
  email: yup
    .string()
    .label('Email')
    .email()
    .required(i18n.t('form.errors.email')),
  password: yup
    .string()
    .trim()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      i18n.t('form.errors.passwordLength'),
    )
    .required(i18n.t('form.errors.password')),
});
const Signup = () => {
  const {t} = useTranslation();
  const {updateToken} = useAuthToken();

  const [rememberMe, setRemember] = useState(false);

  const yupResolver = useYupValidationResolver(Validation);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<LoginFormProps>({
    resolver: yupResolver,
    defaultValues: {
      email: 'thomas@skyventures.vc',
      password: 'Test@1234',
    },
  });
  const loginResponse = useMutation({
    mutationFn: async data => {
      try {
        const response = await axiosInstance.post(API_ROUTES.TEST_LOGIN, {
          password: data?.password,
          username: data?.email,
        });
        const token = response?.data?.token;
        updateToken(token);
      } catch (error: any) {
        console.log('🚀 ~ Login ~ error:', error);
        showMessage({
          message: NOTIFICATIONS_RESPONSE.ERROR,
          description: getErrorMessage(error?.error?.statusCode),
          type: NOTIFICATIONS_ACTION.DANGER,
        });
      }
    },
  });

  const onSubmit = (data: any) => loginResponse.mutate(data);
  function onRememberMe() {
    setRemember(prevState => !prevState);
  }

  return (
    <ScreenWrapper>
      {loginResponse.isPending ? <FullPageLoader /> : null}
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          className="h-full w-full justify-center items-center"
          style={{
            paddingHorizontal: SAFE_AREA_PADDING.paddingRight,
            paddingBottom: SAFE_AREA_PADDING.paddingBottom,
          }}>
          <View className="flex items-center justify-center">
            <Image
              source={require('@/assets/svg/logo.png')}
              resizeMode="contain"
              className="w-32 flex items-center justify-center "
            />
            <Text className="text-center font-medium text-2xl leading-[40px] text-black">
              {t('auth.login.header')}
            </Text>
            <Text className="text-center text-xs font-medium leading-4 text-black">
              {t('auth.login.descriptions')}
            </Text>
          </View>
          <View className="w-full gap-y-3 mt-14">
            <Controller
              control={control}
              name="email"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputComp
                  placeholder={t('auth.login.email')}
                  value={value}
                  handleBlur={onBlur}
                  onChangeText={onChange}
                  errorMessage={errors?.email?.message}
                  id="email"
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              render={({field: {onChange, onBlur, value}}) => (
                <TextInputComp
                  placeholder={t('auth.login.password')}
                  value={value}
                  handleBlur={onBlur}
                  onChangeText={onChange}
                  secureTextEntry={true}
                  errorMessage={errors?.password?.message}
                  id="password"
                />
              )}
            />
          </View>

          {/* Terms and conditions */}
          <View className="w-full flex flex-row justify-between items-center mt-2">
            <View className="flex-row items-center">
              <Checkbox
                value={rememberMe}
                onValueChange={onRememberMe}
                className="mr-2 "
              />
              <Text className="text-gray-600 text-sm leading-6 font-normal">
                {t('auth.terms.header')}
                <Text className="text-blue-600 text-sm leading-6 font-normal">
                  {' '}
                  {t('auth.terms.descriptions')}
                </Text>
                <Text className="text-gray-600 text-sm leading-6 font-normal">
                  {' '}
                  {t('auth.terms.name')}
                </Text>
              </Text>
            </View>
          </View>

          {/* Login Button */}
          <View className="w-full mt-10">
            <Pressable
              onPress={handleSubmit(onSubmit)}
              className="h-11 py-0.5 w-full  rounded-[28px] items-center justify-center mt-4 "
              style={{backgroundColor: COLORS.light.primary}}>
              <Text className="leading-4 text-xs  text-white font-semibold">
                {t('buttons.signup')}
              </Text>
            </Pressable>
            <View className="flex-row justify-center mt-4">
              <Text className="font-normal text-black text-base leading-[25px]">
                {t('auth.signup.account')} {''}
              </Text>
              <TouchableOpacity>
                <Text
                  className="font-bold text-base leading-[25px]"
                  style={{color: COLORS.light.primary}}>
                  {t('auth.signup.sign')}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </ScreenWrapper>
  );
};

export default Signup;
