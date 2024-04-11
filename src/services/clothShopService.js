import { axiosClient, axiosClientFormData } from './axiosClient'
import { CLOTHSHOP_API_URL } from 'app/global'

const clothShopService = {
  getProductAll: async () => {
    return await axiosClient.get(`${CLOTHSHOP_API_URL.PRODUCT.GET_ALL}`)
  },
  getProductPage: async (obj) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.PRODUCT.GET_PAGE}`, obj)
  },
  getDetail: async (productID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.PRODUCT.GET_DETAIL}/${productID}`)
  },
  createProduct: async (product) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.PRODUCT.CREATE}`, product)
  },
  updateProduct: async (productID) => {
    return await axiosClientFormData.post(`${CLOTHSHOP_API_URL.PRODUCT.UPDATE}/${productID}`)
  },
  deleteProduct: async (productID) => {
    return await axiosClient.post(`${CLOTHSHOP_API_URL.PRODUCT.DELETE}/${productID}`)
  },
}

export default clothShopService
