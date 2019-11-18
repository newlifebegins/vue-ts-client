import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { Message } from 'element-ui'
/**
 * http 请求工具类
 *
 * 请求拦截器 负责将客户端标识token值存储并放置在头部提交给服务端
 *
 * 响应拦截器 负责全局处理业务请求的网络或者业务错误
 */