const questions = [
  {
    question_id: 3,
    product_id: 1,
    question_body: 'Does this product run big or small?',
    question_date: '2020-12-21T07:31:47.083Z',
    asker_name: 'jbilas',
    asker_email: 'first.last@gmail.com',
    reported: 0,
    question_helpfulness: 8
  },
  {
    question_id: 4,
    product_id: 1,
    question_body: 'How long does it last?',
    question_date: '2020-07-10T00:35:17.010Z',
    asker_name: 'funnygirl',
    asker_email: 'first.last@gmail.com',
    reported: 0,
    question_helpfulness: 6
  },
  {
    question_id: 1,
    product_id: 1,
    question_body: 'What fabric is the top made of?',
    question_date: '2020-07-27T21:18:34.409Z',
    asker_name: 'yankeelover',
    asker_email: 'first.last@gmail.com',
    reported: 0,
    question_helpfulness: 1
  },
  {
    question_id: 5,
    product_id: 1,
    question_body: 'Can I wash it?',
    question_date: '2020-12-25T00:14:44.662Z',
    asker_name: 'cleopatra',
    asker_email: 'first.last@gmail.com',
    reported: 0,
    question_helpfulness: 7
  }
];


const answers = [
  [],
  [
    {
      answer_id: 65,
      question_id: 4,
      body: 'It runs small',
      date: '2020-11-19T11:11:47.205Z',
      answerer_name: 'dschulman',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 1
    },
    {
      answer_id: 89,
      question_id: 4,
      body: 'Showing no wear after a few months!',
      date: '2020-09-02T23:33:29.530Z',
      answerer_name: 'sillyguy',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 8
    }
  ],
  [
    {
      answer_id: 5,
      question_id: 1,
      body: "Something pretty soft but I can't be sure",
      date: '2020-09-13T09:49:20.555Z',
      answerer_name: 'metslover',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 5
    },
    {
      answer_id: 7,
      question_id: 1,
      body: 'Its the best! Seriously magic fabric',
      date: '2021-02-27T18:45:24.662Z',
      answerer_name: 'metslover',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 7
    },
    {
      answer_id: 8,
      question_id: 1,
      body: "DONT BUY IT! It's bad for the environment",
      date: '2020-09-19T21:49:22.548Z',
      answerer_name: 'metslover',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 8
    },
    {
      answer_id: 57,
      question_id: 1,
      body: 'Suede',
      date: '2021-04-11T16:51:31.495Z',
      answerer_name: 'metslover',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 7
    },
    {
      answer_id: 95,
      question_id: 1,
      body: 'Supposedly suede, but I think its synthetic',
      date: '2020-09-14T21:53:52.219Z',
      answerer_name: 'metslover',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 3
    }
  ],
  [
    {
      answer_id: 46,
      question_id: 5,
      body: "I've thrown it in the wash and it seems fine",
      date: '2020-11-22T05:27:23.272Z',
      answerer_name: 'marcanthony',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 8
    },
    {
      answer_id: 64,
      question_id: 5,
      body: 'It says not to',
      date: '2020-05-05T02:15:50.162Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 0
    },
    {
      answer_id: 96,
      question_id: 5,
      body: "I wouldn't machine wash it",
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 0
    },
    {
      answer_id: 101,
      question_id: 5,
      body: 'Only if you want to ruin it!',
      date: '2020-05-27T13:03:41.205Z',
      answerer_name: 'ceasar',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 5
    },
    {
      answer_id: 107,
      question_id: 5,
      body: 'Yes',
      date: '2021-01-13T08:47:26.863Z',
      answerer_name: 'Seller',
      answerer_email: 'first.last@gmail.com',
      reported: 0,
      helpfulness: 4
    }
  ]
];

const answerPhotos = [[],[[{"photo_id":14,"answer_id":65,"url":"https://images.unsplash.com/photo-1470116892389-0de5d9770b2c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"},{"photo_id":15,"answer_id":65,"url":"https://images.unsplash.com/photo-1536922645426-5d658ab49b81?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}],[]],[[{"photo_id":1,"answer_id":5,"url":"https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"},{"photo_id":3,"answer_id":5,"url":"https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"},{"photo_id":2,"answer_id":5,"url":"https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"}],[],[],[],[]],[[],[],[],[],[]]]

module.exports = {
  questions,
  answers,
  answerPhotos
}