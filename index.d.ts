/**
 * Contains the extended startup configuration for the library.
 */
export declare type AppMetricaConfig = {
  apiKey: string,
  appVersion?: string,
  crashReporting?: boolean,
  firstActivationAsUpdate?: boolean,
  location?: Location,
  locationTracking?: boolean,
  logs?: boolean,
  sessionTimeout?: number,
  statisticsSending?: boolean,
  preloadInfo?: PreloadInfo,
  // Only Android
  installedAppCollecting?: boolean,
  maxReportsInDatabaseCount?: number,
  nativeCrashReporting?: boolean,
  // Only iOS
  activationAsSessionStart?: boolean,
  sessionsAutoTracking?: boolean,
}

/**
 * Contains information for tracking pre-installed apps.
 */
export declare type PreloadInfo = {
  trackingId: string,
  additionalInfo?: Object,
}

/**
 * Contains information about the location of the device.
 */
export declare type Location = {
  latitude: number,
  longitude: number,
  altitude?: number,
  accuracy?: number,
  course?: number,
  speed?: number,
  timestamp?: number
}

/**
 * Contains possible error reasons for the requestAppMetricaDeviceID() method.
 */
export declare type AppMetricaDeviceIdReason = 'UNKNOWN' | 'NETWORK' | 'INVALID_RESPONSE';

declare const _default: {
  /**
   * Initializes the library in an application with the extended startup configuration.
   */
  activate(config: AppMetricaConfig): void;

  /**
   * Returns the current version of the AppMetrica library.
   */
  getLibraryVersion(): Promise<string>;

  /**
   * Pauses the user session.
   */
  pauseSession(): void;

  /**
   * Sends a message about the app launching from a deeplink as a string.
   */
  reportAppOpen(deeplink: ?string = null): void;

  /**
   *  Sends a custom error message.
   */
  reportError(error: string, reason: Object): void;

  /**
   * Sends an event message.
   */
  reportEvent(eventName: string, attributes: ?Object = null): void;

  /**
   * Sets referral URL for app installs. This method can be used to track some traffic sources.
   */
  reportReferralUrl(referralUrl: string): void;

  /**
   * Requests the unique AppMetrica ID (deviceID).
   */
  requestAppMetricaDeviceID(listener: (deviceId?: String, reason?: AppMetricaDeviceIdReason) => void): void;

  /**
   * Resumes the session, or creates a new one if the session timeout has expired.
   */
  resumeSession(): void;

  /**
   * Sends stored events from the buffer.
   */
  sendEventsBuffer(): void;

  /**
   * Sets custom location of the device.
   */
  setLocation(location: ?Location): void;

  /**
   * Enables/disables sending location of the device.
   */
  setLocationTracking(enabled: boolean): void;

  /**
   * Enables/disables sending statistics to the AppMetrica server.
   */
  setStatisticsSending(enabled: boolean): void;

  /**
   * Sets the ID of the user profile.
   */
  setUserProfileID(userProfileID?: string): void;

  /**
   * Returns the current version of the AppMetrica library (Android only)
   */
  getLibraryApiLevel(): Promise<number>;
};

export default _default;