export enum ACCOUNT_NAVIGATOR_ROUTES {
  LOGIN = 'LOGIN',
  REGISTER = 'REGISTER',
  PROFILE = 'PROFILE',
}

export type AccountNavigatorParamList = {
  [ACCOUNT_NAVIGATOR_ROUTES.LOGIN]: undefined;
  [ACCOUNT_NAVIGATOR_ROUTES.REGISTER]: undefined;
  [ACCOUNT_NAVIGATOR_ROUTES.PROFILE]: undefined;
};
