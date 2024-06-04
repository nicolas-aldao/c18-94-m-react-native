import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors, Styles } from '@/constants/Styles';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'headboard' | 'header-subtitle' | 'onboarding' | 'specialty' | 'specialty-box' | 'little-button' | 'little-button-bold' | 'long-paragraph' | 'doctor-name'
  | 'main-button' | 'main-button-bold';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'headboard' ? styles.headboard : undefined,
        type === 'header-subtitle' ? styles.headerSubtitle : undefined,
        type === 'onboarding' ? styles.onboarding : undefined,
        type === 'long-paragraph' ? styles.longParagraphs : undefined,
        type === 'doctor-name' ? styles.doctorName : undefined,
        type === 'specialty' ? styles.specialty : undefined,
        type === 'specialty-box' ? styles.specialtyBox : undefined,
        type === 'little-button' ? styles.littleButton : undefined,
        type === 'little-button-bold' ? styles.littleButtonBold : undefined,
        type === 'main-button' ? styles.mainButton : undefined,
        type === 'main-button-bold' ? styles.mainButtonBold : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  headboard: {
    color: Colors.light.lightGrayText,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 22,
    fontStyle: 'normal',
    fontWeight: 600,
  },
  headerSubtitle: {
    color: Colors.light.darkGrayText,
    fontFamily: Styles.fontFamily,
    fontSize: 16,
    fontStyle: 'normal',
    fontWeight: 400,
    alignSelf: 'flex-start'
  },
  longParagraphs: {
    color: Colors.light.darkGrayText,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 15,
    letterSpacing: -0.06,
  },
  onboarding: {
    color: Colors.light.lightGrayText,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: 500,
  },
  doctorName: {
    fontFamily: Styles.fontFamily,
    fontSize: 15,
    fontWeight: 700,
  },
  specialty: {
    color: Colors.light.darkGrayText,
    fontFamily: Styles.fontFamily,
    fontSize: 13,
    fontStyle: 'normal',
    fontWeight: 300,
    lineHeight: 15,
  },
  specialtyBox: {
    color: Colors.light.white,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '600',
  },
  littleButton: {
    color: Colors.light.lightGrayText,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 20,
    letterSpacing: -0.06,
  },
  littleButtonBold: {
    color: Colors.light.lightGrayText,
    textAlign: 'center',
    fontFamily: Styles.fontFamily,
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: 20,
    letterSpacing: -0.06,
  },
  mainButton: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 20,
    letterSpacing: -0.005,
    textAlign: 'center',
  },
  mainButtonBold: {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 800,
    lineHeight: 20,
    letterSpacing: -0.005,
    textAlign: 'center',
  }
});
