/*
 * @Desc: 判断编译环境和运行环境
 * @Author: John.Guan
 * @Date: 2019-08-14 15:49:59
 * @Last Modified by: John.Guan
 * @Last Modified time: 2019-08-14 15:53:37
 */

/**
 * 运行环境判断
 */
const TARO_ENV = process.env.TARO_ENV
// 运行环境-微信小程序
export const isWeApp = TARO_ENV === 'weapp'
// 运行环境-百度小程序
export const isSwan = TARO_ENV === 'swan'
// 运行环境-支付宝小程序
export const isAlipay = TARO_ENV === 'alipay'
// 运行环境-头条小程序
export const isTt = TARO_ENV === 'tt'
// 运行环境-网页
export const isH5 = TARO_ENV === 'h5'
// 运行环境-RN
export const isRn = TARO_ENV === 'rn'
