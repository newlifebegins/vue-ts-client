import Vue from 'vue'
import Vuex from 'vuex'

import { IUserState } from './modules/user'
Vue.use(Vuex)

export interface IRootState {
    userinfo: IUserState
}

// 先声明空存储，然后动态注册所有模块。
export default new Vuex.Store<IRootState>({})
// export default new Vuex.Store({
//     modules: {
//         UserState
//     }
// })
