import { Stack } from "expo-router";
import Provider from "@/constants/Provider";
import GlobalCalProvider from "@/constants/GlobalCalProvider";

export const unstable_settings = {
  initialRouteName: 'home',
};

export default function RootLayout() {
  return (
    <GlobalCalProvider>
      <Provider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
      </Provider>
    </GlobalCalProvider>
  );
}
