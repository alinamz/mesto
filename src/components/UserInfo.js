export default class UserInfo {
    constructor(nameProfile, jobProfile) {
        this._nameProfile = nameProfile;
        this._jobProfile = jobProfile;
    }

    getUserInfo() {
       const profileValues = {
        name : this._nameProfile.textContent,
        job : this._jobProfile.textContent,
       }
       
       return profileValues;
    }

    setUserInfo(name, job) {
        this._nameProfile.textContent = name;
        this._jobProfile.textContent = job;
    }
}