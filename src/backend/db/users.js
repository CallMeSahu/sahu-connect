import { formatDate } from "../utils/authUtils";
import { v4 as uuid } from "uuid";

/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Siddhartha",
    lastName: "Sahu",
    username: "sahu_siddhartha",
    password: "siddhartha",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar: require("../../assets/avatars/siddhartha.jpg"),
    bio: "Human stupidity is infinite, so is human potential",
  },
  {
    _id: uuid(),
    firstName: "Vidhu",
    lastName: "Gupta",
    username: "gupta_vidhu",
    password: "vidhu",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      require("../../assets/avatars/vidhu.jpg"),
    bio: "Fried chicken for lunch and Rajma chawal for dinner",
  },
  {
    _id: uuid(),
   firstName: "Haramal",
    lastName: "Liddar",
    username: "liddar_haramal",
    password: "haramal",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      require("../../assets/avatars/haramal.jpg"),
    bio: "Correlation does not imply causation",
  },
  {
    _id: uuid(),
    firstName: "Nirmiti",
    lastName: "Chutke",
    username: "chutke_nirmiti",
    password: "nirmiti",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      require("../../assets/avatars/nirmiti.jpg"),
    bio: "Zindagi rude hai lekin Nirmiti dude hai",
  },
  {
    _id: uuid(),
    firstName: "Indrajeet",
    lastName: "Yadav",
    username: "yadav_indrajeet",
    password: "indrajeet",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
      require("../../assets/avatars/indrajeet.jpg"),
    bio: "Mein bhi jaunga IIM",
  },
  {
    _id: uuid(),
    firstName: "Vardan",
    lastName: "Sharma",
    username: "sharma_vardan",
    password: "vardan",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatar:
     require("../../assets/avatars/vardan.jpg"),
    bio: "I believe in Shawrma supemacy",
  },
];
