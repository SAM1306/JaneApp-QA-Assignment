import * as BaseAPIAction from './BaseAPIAction'

class LoginAPIAction extends BaseAPIAction {
    static login(endpoint, credentials) {
        return this.sendRequest('POST', endpoint, {
            'Content-Type': 'application/json',
        }, credentials)
    }
}
export default LoginAPIAction