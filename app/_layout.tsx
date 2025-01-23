import '../global.css';
import { useInitialAndroidBarSync, useColorScheme } from '../lib/useColorScheme';
import { NAV_THEME } from '../theme';
import MainNavigation from './main/_layout';
import { ThemeProvider as NavThemeProvider } from '@react-navigation/native';

const Layout = () => {
  useInitialAndroidBarSync();
  const { colorScheme, isDarkColorScheme } = useColorScheme();

  return (
    <>
      <NavThemeProvider value={NAV_THEME[colorScheme]}>
        {/* <AuthNavigation /> */}
        <MainNavigation />
      </NavThemeProvider>
    </>
  );
};

export default Layout;
