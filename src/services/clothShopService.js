import { axiosClient, axiosClientFormData } from './axiosClient'
import { CLOTHSHOP_API_URL } from 'app/global'

const clothShopService = {
  getAll: async (obj) => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_HOME}`, obj)
  },
  getProductAll: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.PRODUCT.GET_ALL}`)
  },
  getCollection: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.CLOTHSHOP.GET_COLLECTION}`)
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
}

export default clothShopService
