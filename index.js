/*
 * Version for React Native
 * © 2020 YANDEX
 * You may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * https://yandex.com/legal/appmetrica_sdk_agreement/
 */

import {NativeModules} from 'react-native';

const {AppMetrica} = NativeModules;

export default {

  activate(config: AppMetricaConfig) {
    AppMetrica.activate(config);
  },

  // Android
  async getLibraryApiLevel(): number {
    return AppMetrica.getLibraryApiLevel();
  },

  async getLibraryVersion(): string {
    return AppMetrica.getLibraryVersion();
  },

  pauseSession() {
    AppMetrica.pauseSession();
  },

  reportAppOpen(deeplink: ?string = null) {
    AppMetrica.reportAppOpen(deeplink);
  },

  reportError(error: string, reason: Object) {
    AppMetrica.reportError(error);
  },

  reportEvent(eventName: string, attributes: ?Object = null) {
    AppMetrica.reportEvent(eventName, attributes);
  },

  reportReferralUrl(referralUrl: string) {
    AppMetrica.reportReferralUrl(referralUrl);
  },

  requestAppMetricaDeviceID(listener: (deviceId?: String, reason?: AppMetricaDeviceIdReason) => void) {
    AppMetrica.requestAppMetricaDeviceID(listener);
  },

  resumeSession() {
    AppMetrica.resumeSession();
  },

  sendEventsBuffer() {
    AppMetrica.sendEventsBuffer();
  },

  setLocation(location: ?Location) {
    AppMetrica.setLocation(location);
  },

  setLocationTracking(enabled: boolean) {
    AppMetrica.setLocationTracking(enabled);
  },

  setStatisticsSending(enabled: boolean) {
    AppMetrica.setStatisticsSending(enabled);
  },

  setUserProfileID(userProfileID?: string) {
    AppMetrica.setUserProfileID(userProfileID);
  },
};
