const SERVER_API = process.env.REACT_APP_API_URL
export const SOCKET_SERVER = process.env.REACT_APP_SOCKET_SERVER
const COUDINARY_URL = process.env.REACT_APP_COUDINARY_URL

export const HTTP_STATUS = Object.freeze({
  IDLE: 'IDLE',
  PENDING: 'PENDING',
  FULFILLED: 'FULFILLED',
  REJECTED: 'REJECTED',
})

export const ROLES = Object.freeze({
  ADMIN: 'ADMIN',
  CASHIER: 'CASHIER',
  GUESS: 'GUESS',
})

export const COUDINARY = {
  url: COUDINARY_URL,
  SCALE_IMAGE_300_300: 'c_limit,w_300,h_300,q_100',
  SCALE_IMAGE_180_180: 'c_limit,w_180,h_180,q_100',
  SCALE_IMAGE_120_120: 'c_limit,w_120,h_120,q_100',
}

const PRODUCT_URL = `${SERVER_API}/product`
const AUTH_URL = `${SERVER_API}/auth`
const CART_URL = `${SERVER_API}/cart`
const ORDER_URL = `${SERVER_API}/order`
const ADDRESS_URL = `${SERVER_API}/address`
const VOUCHER_URL = `${SERVER_API}/voucher`
const DISCOUNT_URL = `${SERVER_API}/discount`
const BANNER_URL = `${SERVER_API}/banner`

export const CLOTHSHOP_API_URL = {
  CLOTHSHOP_GET_ALL: `${SERVER_API}/clothshop`,

  PRODUCT: {
    GET_ALL: `${PRODUCT_URL}/get-all`,
    GET_PAGE: `${PRODUCT_URL}/get-page`,
    GET_DETAIL: `${PRODUCT_URL}/`,
    CREATE: `${PRODUCT_URL}/create`,
    UPDATE: `${PRODUCT_URL}/update/`,
    DELETE: `${PRODUCT_URL}/delete/`,
  },
  AUTH: {
    GET_ALL: `${AUTH_URL}/get-all`,
    REGISTER: `${AUTH_URL}/register`,
    LOGIN: `${AUTH_URL}/login`,
    LOGOUT: `${AUTH_URL}/logout`,
  },
  CART: {
    GET_CART: `${CART_URL}`,
    ADD_CART_ITEM: `${CART_URL}/addCartItem/`,
    INCREASE_CART_ITEM: `${CART_URL}/increaseCartItem/`,
    DECREASE_CART_ITEM: `${CART_URL}/decreaseCartItem/`,
    DELETE_CART_ITEM: `${CART_URL}/deleteCartItem/`,
    CHECKOUT: `${CART_URL}/checkout`,
    CHECKOUT_CHANGE_ADDRESS: `${CART_URL}/checkout/myAddress/`,
    CHECKOUT_CHOSE_VOUCHER: `${CART_URL}/checkout/choseVoucher/`,
  },
  ORDER: {
    PLACE_ORDER: `${ORDER_URL}/place`,
  },
  ADDRESS: {
    GET_ALL: `${ADDRESS_URL}`,
    CREATE: `${ADDRESS_URL}/create`,
    DEFAULT: `${ADDRESS_URL}/default/`,
    UPDATE: `${ADDRESS_URL}/update/`,
    DELETE: `${ADDRESS_URL}/delete/`,
  },
  VOUCHER: {
    GET_ALL: `${VOUCHER_URL}`,
    CREATE: `${VOUCHER_URL}/create`,
  },
  DISCOUNT: {
    CREATE: `${DISCOUNT_URL}/create`,
    CHECK_DATE: `${DISCOUNT_URL}/checkDate`,
  },
  BANNER: {
    GET_ALL: `${BANNER_URL}`,
    CREATE: `${BANNER_URL}/create`,
    DELETE: `${BANNER_URL}/delete/`,
    DELETES: `${BANNER_URL}/deletes`,
  },
}
