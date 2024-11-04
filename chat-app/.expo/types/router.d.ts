/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/(tabs)` | `/(tabs)/addfriend` | `/(tabs)/chatdisplay` | `/(tabs)/friendslist` | `/(tabs)/profile` | `/_sitemap` | `/addfriend` | `/chatdisplay` | `/friendslist` | `/profile` | `/signup`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
