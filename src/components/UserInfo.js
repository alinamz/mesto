export default class UserInfo {
    constructor(nameProfile, jobProfile, profileUser) {
        this._nameProfile = nameProfile;
        this._jobProfile = jobProfile;
        this._profileUser = profileUser;
    }

    getUserInfo() {
        const profileValues = {
            name: this._nameProfile.textContent,
            job: this._jobProfile.textContent,
            avatar: this._profileUser.src,
        };

        return profileValues;
    }

    setUserInfo(name, job, id) {
        this._nameProfile.textContent = name;
        this._jobProfile.textContent = job;
        this._id = id;
    }

    setUserAvatar({avatar}) {
        this._profileUser.src = `${avatar}`;
    }
}