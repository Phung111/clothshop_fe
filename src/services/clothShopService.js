import { axiosClient, axiosClientFormData } from './axiosClient'
import { CLOTHSHOP_API_URL } from 'app/global'

const clothShopService = {
  getHome: async (obj) => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_HOME}`, obj)
  },
  getProductAll: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.PRODUCT.GET_ALL}`)
  },
  getCollection: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_COLLECTION}`)
  },
  getPronvice: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_PRONVICE}`)
  },
  getGender: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_GENDER}`)
  },
  getProductById: async (productID) => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.PRODUCT.GET_DETAIL}/${productID}`)
  },
  getProductPage: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.PRODUCT.GET_PAGE}`, obj)
  },
  getDetail: async (productID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.PRODUCT.GET_DETAIL}/${productID}`)
  },
  createProduct: async (product) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.PRODUCT.CREATE}`, product)
  },
  updateProduct: async (productID, obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.PRODUCT.UPDATE}/${productID}`, obj)
  },
  deleteProduct: async (productID) => {
    return await axiosClient.delete(`${CLOTHSHOP_API_URL.PRODUCT.DELETE}/${productID}`)
  },
  getAllAccount: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.AUTH.GET_ALL}`)
  },
  signup: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.AUTH.REGISTER}`, obj)
  },
  login: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.AUTH.LOGIN}`, obj)
  },
  logout: async () => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL}/logout`)
  },
  getCart: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CART.GET_CART}`)
  },
  addCartItem: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.CART.ADD_CART_ITEM}`, obj)
  },
  increaseCartItem: async (cartItemID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.CART.INCREASE_CART_ITEM}/${cartItemID}`)
  },
  decreaseCartItem: async (cartItemID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.CART.DECREASE_CART_ITEM}/${cartItemID}`)
  },
  changeQuantityCartItem: async (cartItemID, quantity) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.CART.CHANGE_QUANTITY_CART_ITEM}/${cartItemID},${quantity}`)
  },
  deleteCartItem: async (cartItemID) => {
    return await axiosClient.delete(`${CLOTHSHOP_API_URL.CART.DELETE_CART_ITEM}/${cartItemID}`)
  },
  checkout: async (cartItemIDs) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.CART.CHECKOUT}`, cartItemIDs)
  },
  order: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ORDER.PLACE_ORDER}`, obj)
  },
  getOrder: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ORDER.GET_ORDER}`, obj)
  },
  getMore: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ORDER.GET_ORDER_BY_CUSTOMER}`, obj)
  },
  getOrderbyID: async (orderID) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ORDER.GET_ORDER}/${orderID}`)
  },
  getAllAddress: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.ADDRESS.GET_ALL}`)
  },
  createAddress: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ADDRESS.CREATE}`, obj)
  },
  defaultAddress: async (addressID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.ADDRESS.DEFAULT}/${addressID}`)
  },
  updateAddress: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.ADDRESS.UPDATE}/${obj.id}`, obj.address)
  },
  deleteAddress: async (addressID) => {
    return await axiosClient.delete(`${CLOTHSHOP_API_URL.ADDRESS.DELETE}/${addressID}`)
  },
  changeAddress: async (addressID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.ADDRESS.CHANGE}/${addressID}`)
  },
  getAllVoucher: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.VOUCHER.GET_ALL}`)
  },
  getVoucherPage: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.VOUCHER.GET_PAGE}`, obj)
  },
  getVoucherPageValid: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.VOUCHER.GET_PAGE_VALID}`, obj)
  },
  createVoucher: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.VOUCHER.CREATE}`, obj)
  },
  choseVoucher: async (voucherID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.VOUCHER.CHOSE}/${voucherID}`)
  },
  createDiscount: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.DISCOUNT.CREATE}`, obj)
  },
  checkDateDiscount: async () => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.DISCOUNT.CHECK_DATE}`)
  },
  getAllBanner: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.BANNER.GET_ALL}`)
  },
  getBannerPage: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.BANNER.GET_PAGE}`, obj)
  },
  createBanner: async (obj) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.BANNER.CREATE}`, obj)
  },
  deleteBanner: async (bannerID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.BANNER.DELETE}/${bannerID}`)
  },
  deletesBanner: async (bannerIDs) => {
    return await axiosClient.delete(`${CLOTHSHOP_API_URL.BANNER.DELETES}`, bannerIDs)
  },
}

export default clothShopService
