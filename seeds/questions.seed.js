module.exports = [{
	"question_id": 3,
	"product_id": 1,
	"question_body": "Does this product run big or small?",
	"question_date": "2020-12-21T07:31:47.083Z",
	"asker_name": "jbilas",
	"asker_email": "first.last@gmail.com",
	"reported": 0,
	"question_helpfulness": 8
},
{
	"question_id": 4,
	"product_id": 1,
	"question_body": "How long does it last?",
	"question_date": "2020-07-10T00:35:17.010Z",
	"asker_name": "funnygirl",
	"asker_email": "first.last@gmail.com",
	"reported": 0,
	"question_helpfulness": 6
},
{
	"question_id": 2,
	"product_id": 1,
	"question_body": "HEY THIS IS A WEIRD QUESTION!!!!?",
	"question_date": "2021-02-21T06:16:59.613Z",
	"asker_name": "jbilas",
	"asker_email": "first.last@gmail.com",
	"reported": 1,
	"question_helpfulness": 4
},
{
	"question_id": 1,
	"product_id": 1,
	"question_body": "What fabric is the top made of?",
	"question_date": "2020-07-27T21:18:34.409Z",
	"asker_name": "yankeelover",
	"asker_email": "first.last@gmail.com",
	"reported": 0,
	"question_helpfulness": 2
},
{
	"question_id": 5,
	"product_id": 1,
	"question_body": "Can I wash it?",
	"question_date": "2020-12-25T00:14:44.662Z",
	"asker_name": "cleopatra",
	"asker_email": "first.last@gmail.com",
	"reported": 0,
	"question_helpfulness": 7
},
{
	"question_id": 6,
	"product_id": 1,
	"question_body": "Is it noise cancelling?",
	"question_date": "2020-12-25T00:14:44.662Z",
	"asker_name": "coolkid",
	"asker_email": "first.last@gmail.com",
	"reported": 1,
	"question_helpfulness": 19
}]

//mongoexport --db qa --collection questions --jsonArray --pretty --query '{"product_id": 1}' --out questions.seed.js
