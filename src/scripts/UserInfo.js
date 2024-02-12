
export default class UserInfo {
  constructor( nameSelector, jobSelector ) {
    this._nameElement = nameSelector;
    this._jobElement = jobSelector;
  }
  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      about: this._jobElement.textContent,
    };
  }
  setUserInfo({ name, about }) {
    this._nameElement.textContent = name;
    this._jobElement.textContent = about;
  }
}
