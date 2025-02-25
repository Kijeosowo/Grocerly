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

  PRIVACY = 'Account/privacypolicy',
  TERMSANDCONDITION = 'Account/termsandcondition',
  PERSONALDETAILS = 'Account/personaldetails',
  EDITPROFILE = 'Account/Editprofile',
  ADDRESSDETAILS = 'Account/Address',
  EDITADDRESS = 'Account/editaddress',
  ADDADDRESS = 'Account/addaddress',
  PASSWORDSETTINGS = 'Account/passwordsettings',
  CHANGEPASSWORD = 'Account/changepassword',
  CHANGEEMAIL = 'Account/changeemail',
  CONTACT = 'Account/contact',

  NOTIFICATION = '/authorised/notification',
  SEARCH = '/authorised/search',

  PRODUCT_DETAILS="/productDetails/[productId]"
}
