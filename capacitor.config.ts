import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.ibadah.app',
  appName: 'ibadah',
  webDir: 'build',
  bundledWebRuntime: false,

  plugins: {
    FirebaseAuthentication: {
      skipNativeAuth: false,
      providers: ["google.com"],
    },
  },

  // server: {
  //   url: 'http://10.167.60.170:3000',
  //   cleartext: true
  // },
};

export default config;
