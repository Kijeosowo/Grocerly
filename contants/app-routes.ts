export enum APP_ROUTES {
  HOME = 'index',
  LOGIN = '/(auth)',
  CREATE_ACCOUNT = '/(auth)/signup',
  SET_PASSWORD = '/(auth)/password',
  VERIFY_OTP = '/(auth)/verify',

  ACCOUNT_CREATED = '/(auth)/accountCreated',

  ORDER = 'order',
  ORDER_DETAILS = '/order/details',
  FINANCE = 'finance',
  CART = 'cart',
  ACCOUNT = 'account',

  NOTIFICATION = '/authorised/notification',
  SEARCH = '/authorised/search',

  PRODUCT_DETAILS = '/productDetails/[productId]',
  CHECKOUT = '/checkout/checkout',
  CHECKOUTSUMMARY = '/checkout/CheckoutSummary',
  PAYMENT = '/checkout/Payment',

  //account routes link
  PERSONAL_DETAILS = 'Account/PersonalDetails',
  ADDRESS = 'Account/Address',
  PASSWORD_SETTING = 'Account/PasswordSettings',
  TERMS = 'Account/Terms',
  SUPPORT = 'Account/Support',
  PRIVACY = 'Account/PrivacyPolicy',

  // Account Password
  CHANGEPASSWORD = 'Account/changepassword',
  CHANGEEMAIL = 'Account/changeemail',
  RESETEMAIL = 'Account/passwordreset',

  // address routes link
  ADD_ADDRESS = 'address/AddAddress',

  // Personal Details
  EDITPROFILE = 'Account/Editprofile'
}

