import BaseAPIAction from './BaseAPIAction'
import ROUTES from '../../support/utils/routes'

class LoginAPIAction extends BaseAPIAction {
    login(username, password) {
        const payload = { username, password }
        return this.sendRequest('POST', `${ROUTES.loginURL}`, { 'Content-Type': 'application/json'}, payload)
    }
}
export default LoginAPIAction