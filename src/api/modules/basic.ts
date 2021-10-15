/**
 * 基础 API 集合类
 * 集成Abstract
 * @date 2020-5-29
 */
import Abstract from '../abstract';
import { AuthLogin, ModifyPass, TaskList, TaskDetailList } from '../types';

class Basic extends Abstract {
  /**
   * 登录
   * @param {string} account 用户
   * @param {string} password 密码
   * @param {string} captchaCode 图形码
   * @param {string} captchaCodeToken 图形码token
   */
  authLogin(data: AuthLogin) {
    return this.postReq({ url: 'api/v1/login', data });
  }

  /**
   * 登出
   */
  authLoginOut(data = {}) {
    return this.postReq({ url: 'userDomain/admin/v1/user/logout', data });
  }

  /**
   * 修改密码
   * @param {string} password 原密码
   * @param {string} newPassword 新密码
   */
  modifyPass(data: ModifyPass) {
    return this.postReq({ url: 'userDomain/admin/v1/user/logout', data });
  }

  /**
   * 用户信息
   */
  getUserInfo() {
    return this.getReq({ url: 'userDomain/admin/v1/user/logout' });
  }

  /**
   * 获取图形验证码
   */
  getGraphicCode() {
    return this.getReq({ url: 'userDomain/admin/v1/user/logout' });
  }

  /**
   * 菜单列表
   */
  getMenuList(data = {}) {
    return this.getReq({ url: 'userDomain/admin/v1/getMenuList', data });
  }

  /**
   * 获取数据字典
   * @params {string[]} dictTypeList
   * @params {string} systemProjectCode
   */
  getDict(
    data: { systemProjectCode?: string; dictTypeList: Array<string> } = {
      systemProjectCode: 'oms',
      dictTypeList: [],
    }
  ) {
    return this.postReq({ url: 'userDomain/admin/v1/getDict', data });
  }

  /**
   * 查询所有任务Job带有分页列表
   */
  getTaskList(data: TaskList) {
    return this.postReq({ url: 'userDomain/admin/v1/getTaskList', data });
  }

  /**
   * 查询所有任务Job详情带有分页列表
   */
  getTaskDetailList(data: TaskDetailList) {
    return this.postReq({ url: 'userDomain/admin/v1/getTaskDetailList', data });
  }
}

// 单列模式返回对象
let instance;
export default (() => {
  if (instance) return instance;
  instance = new Basic();
  return instance;
})();
