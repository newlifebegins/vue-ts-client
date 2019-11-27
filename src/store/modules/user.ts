import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import store from '@/store'
import { getStore, setStore, removeStore } from '@/utils/storage'

export interface IUserState {
    token: string
}

@Module({ dynamic: true, store, name: 'user' })
class UserInfo extends VuexModule implements IUserState {
    public token = getStore('vue-ts-client-token') || ''

    @Mutation
    private SET_TOKEN(token: string) {
        this.token = token
    }

    @Action
    public async setUserInfo(token: any) {
        setStore('vue-ts-client-token', token)
        this.SET_TOKEN(token)
    }

}

export const UserModule = getModule(UserInfo)
