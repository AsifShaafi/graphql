
class Friend {
  constructor(id, { firstName, lastName, gender, language, email, contacts }) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.language = language;
    this.gender = gender;
    this.email = email;
    this.contacts = contacts
  }
}

const friendData = {};

const resolvers = {
  getFriend: ({ id }) => {
    return friendData[id];
  },
  createFriend: ({ input }) => {
    const id = require("crypto").randomBytes(10).toString('hex');
    friendData[id] = new Friend(id, input);
    return friendData[id];
  },
};

export default resolvers;
