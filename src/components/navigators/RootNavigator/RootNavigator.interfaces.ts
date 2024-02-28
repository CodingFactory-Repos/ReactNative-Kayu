import {ParamListBase} from '@react-navigation/native';

export enum ROOT_NAVIGATOR_ROUTE_NAMES {
  INITIAL = 'INITIAL',
  AUTH = 'AUTH',
}

export interface RootNavigatorInterfaces extends ParamListBase {
  [ROOT_NAVIGATOR_ROUTE_NAMES.INITIAL]: undefined;
}
