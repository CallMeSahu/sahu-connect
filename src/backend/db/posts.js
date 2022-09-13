import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
     name: "Nirmiti Chutke",
    content:
      "🤭 Paid my college fees myself 🥳✅",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chutke_nirmiti",
    bookmark: [],
    createdAt: new Date("Feb 23 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
     _id: uuid(),
    name: "Haramal Liddar",
     content: "Good news is here, I am joining Capgemini tomorrow as a senior consultant.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "liddar_haramal",
    bookmark: [],
    createdAt: new Date("March 13 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    name: "Siddhartha Sahu",
    content: "Watching a reels and this mom named her daughter Linux 😂😂😂",
    likes: {
      likeCount: 3,
      dislikedBy: [],
      likedBy: [],
    },
    username: "sahu_siddhartha",
    bookmark: [],
    createdAt: new Date("May 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
     _id: uuid(),
    name: "Haramal Liddar",
    content: "I'm curious to know why you folks follow me?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "liddar_haramal",
    bookmark: [],
    createdAt: new Date("April 18 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    name: "Vidhu Gupta",
    content: "Fitrat nahi Aadat hai",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "gupta_vidhu",
    bookmark: [],
    createdAt: new Date("Jan 01 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    name: "Indrajeet Yadav",
    content:"what's one song that's stuck in your head on loop?",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "yadav_indrajeet",
    bookmark: [],
    createdAt: new Date("Dec 15 2020 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    name: "Siddhartha Sahu",
    content: "Don’t ask questions whose answers you can’t accept.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "sahu_siddhartha",
    bookmark: [],
    createdAt: new Date("May 12 2022 10:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    name: "Nirmiti Chutke",
    content: "I cracked Arconn and I am joining them next week!",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "chutke_nirmiti",
    bookmark: [],
    createdAt: new Date("July 18 2021 12:31:25"),
    updatedAt: formatDate(),
    avatar:
      "https://res.cloudinary.com/dgwzpbj4k/image/upload/v1650457790/baatchit/man_3_dfq8h3.png",
    comments: [
      {
        _id: uuid(),
        username: "liddar_haramal",
        firstName: "Haramal",
        lastName: "Liddar",
        avatar:
          require("../../assets/avatars/haramal.jpg"),
        text: "Congratulations Nirmiti",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "sahu_siddhartha",
        firstName: "Siddhartha",
        lastName: "Sahu",
        avatar:
           require("../../assets/avatars/siddhartha.jpg"),
         text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },









  {
    _id: uuid(),
    name: "Domink",
    content: `It’s TUESDAY!! Guess that’s a good enough reason to order the things on your wishlist! :P`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("Feb 28 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/
  {
    _id: uuid(),
    name: "Paul Graham",
    content: `Just relax`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paulg",
    bookmark: [],
    createdAt: new Date("October 09 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Domink",
    content: `not all superheros wear capes, some give their detailed reviews on products with pictures.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("November 14 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `Aaj kahana nai milega. Katti`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("February 16 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Agustin Lebron",
    content: `I have gotten *really* good at memorizing 6 digit numbers for a duration of 5 seconds.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AgustinLebron4",
    bookmark: [],
    createdAt: new Date("April 05 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `If you only do what you can do, you will never be more than who you are.`,
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("April 03 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: `There is no secret ingredient`,
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },

    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("March 26 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Emanuel",
    content:
      "What's your name?",
    likes: {
      likeCount: 4,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Emanuel",
    bookmark: [],
    createdAt: new Date("April 03 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Paul Graham",
    content:
      "The non-conformism of Americans was arguably an advantage relative to European countries a few decades ago. But now that every country has become more polarized and fragmented, European countries may be better off.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "paulg",
    bookmark: [],
    createdAt: new Date("August 02 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: "Your mind is like this water, my friend. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("July 13 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Veronica Humble",
    content: "Do your work.",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    username: "veronica_humble",
    bookmark: [],
    createdAt: new Date("August 05 2022 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Domink",
    content: "I sometime flip",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Domink",
    bookmark: [],
    createdAt: new Date("October 08 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Emanuel",
    content: "I am very good at selling no product.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "Emanuel",
    bookmark: [],
    createdAt: new Date("March 27 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
  /****************************************************************/

  {
    _id: uuid(),
    name: "Agustin Lebron",
    content: "Today is the best day of our life, we are selling amazon",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    username: "AgustinLebron4",
    bookmark: [],
    createdAt: new Date("March 16 2021 12:31:25"),
    updatedAt: formatDate(),
    comments: [],
  },
];
