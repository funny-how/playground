class User {
  constructor({ name, nickname, date_of_birth }) {
    this.name = name;
    this.nickname = nickname;
    this.date_of_birth = new Date(date_of_birth);
  }

  getUserInfo() {
    return `${this.name} - ${this.nickname}`;
  }
}

const user = new User({
  name: "Cristy",
  nickname: "Dirty Whore 1999",
  date_of_birth: "2000-07-17",
});

const user_info = user.getUserInfo();

console.log({user_info})
