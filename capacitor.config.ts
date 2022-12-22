import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ibadah',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: 'http://10.167.60.170:3000',
    cleartext: true
  },
};

export default config;
