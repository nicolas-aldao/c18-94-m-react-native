import { Text, type TextProps, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';
import { Colors } from '@/constants/Styles';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link' | 'font-white-small' | 'font-black-small'
  | 'font-black-bold-small';
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
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        type === 'font-white-small' ? styles.fontWhiteSmall : undefined, // cajas de especialidades
        type === 'font-black-small' ? styles.fontBlackSmall : undefined, // boton RoundedPrimaryButton
        type === 'font-black-bold-small' ? styles.fontBlackBoldSmall : undefined, // boton RoundedLittleGrayButton
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
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: '#0a7ea4',
  },
  fontWhiteSmall: { // letras en speciality box
    color: Colors.light.white,
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 11,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 11,
  },
  fontBlackSmall: { // letras RoundedPrimaryButton
    color: Colors.light.black,
    textAlign: 'center',
    // fontFamily: 'League Spartan',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.06,
  },
  fontBlackBoldSmall: { // letras RoundedLittleGrayButton
    color: Colors.light.black,
    textAlign: 'center',
    // fontFamily: 'League Spartan',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.06,
  }
});
