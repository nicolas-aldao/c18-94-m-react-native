import { Link, Stack } from 'expo-router';
import { CenteredView } from '@/components/containers/CenteredView';
import { ThemedText } from '@/components/atoms/ThemedText';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <CenteredView>
        <ThemedText>This screen doesn't exist.</ThemedText>
        <Link href="/">
          <ThemedText>Go to home screen!</ThemedText>
        </Link>
      </CenteredView>
    </>
  );
}
