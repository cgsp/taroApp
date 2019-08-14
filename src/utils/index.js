/*
 * @Desc: 判断开发环境和宿主环境
 * @Author: John.Guan
 * @Date: 2019-08-14 15:49:59
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-14 17:28:24
 */

/**
 * 宿主环境判断
 */
const TARO_ENV = process.env.TARO_ENV
// 宿主环境-微信小程序
export const isWeApp = TARO_ENV === 'weapp'
// 宿主环境-百度小程序
export const isSwan = TARO_ENV === 'swan'
// 宿主环境-支付宝小程序
export const isAlipay = TARO_ENV === 'alipay'
// 宿主环境-头条小程序
export const isTt = TARO_ENV === 'tt'
// 宿主环境-网页
export const isH5 = TARO_ENV === 'h5'
// 宿主环境-RN
export const isRn = TARO_ENV === 'rn'

/**
 * 开发环境判断
 */
// 开发环境
export const BUILD_ENV = process.env.BUILD_ENV
// 是否为本地开发环境
export const isDev = BUILD_ENV === 'development'
// 是否为测试环境
export const isTest = BUILD_ENV === 'test'
// 是否为uat环境
export const isUat = BUILD_ENV === 'uat'
// 是否为生产环境
export const isProd = BUILD_ENV === 'production'
