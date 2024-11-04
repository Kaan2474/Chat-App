/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/addfriend` | `/(tabs)/chatDisplay` | `/(tabs)/chatdisplay` | `/(tabs)/friendslist` | `/(tabs)/profile` | `/_sitemap` | `/addfriend` | `/chatDisplay` | `/chatdisplay` | `/friendslist` | `/profile` | `/signUp` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
