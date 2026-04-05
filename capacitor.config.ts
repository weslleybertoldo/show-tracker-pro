import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.weslley.watchmov',
  appName: 'WatchMov',
  webDir: 'dist',
  android: {
    webContentsDebuggingEnabled: false,
    allowMixedContent: false,
  },
  server: {
    cleartext: false,
    androidScheme: 'https',
  },
};

export default config;
