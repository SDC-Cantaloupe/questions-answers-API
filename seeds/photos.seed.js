module.exports = [{
	"photo_id": 1,
	"answer_id": 5,
	"url": "https://images.unsplash.com/photo-1530519729491-aea5b51d1ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80"
},
{
	"photo_id": 3,
	"answer_id": 5,
	"url": "https://images.unsplash.com/photo-1500603720222-eb7a1f997356?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80"
},
{
	"photo_id": 2,
	"answer_id": 5,
	"url": "https://images.unsplash.com/photo-1511127088257-53ccfcc769fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
}]

//mongoexport --db qa --collection answers_photos --jsonArray --pretty --query '{"answer_id": 5}' --out photos.seed.js
