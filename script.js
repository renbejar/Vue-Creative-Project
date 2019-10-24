
const API_URL = 'https://japerk-text-processing.p.rapidapi.com/sentiment/';


const REQUEST_HEADERS = {
  'X-RapidAPI-Host': 'japerk-text-processing.p.rapidapi.com'
  , 'X-RapidAPI-Key': '256b47bcabmshcfc5e55d75c3730p120081jsnb37692a57409'
  , 'Content-Type': 'application/x-www-form-urlencoded'
};


const onAnalyzeButtonClick = () => {

  const commentElement = document.getElementById('comment');

  const commentText = commentElement.value.trim();


  if (!commentText) {
    	    return handleEmptyComment();
  }

  return analyzeComment(commentText, displayResult);
};

const analyzeComment = (comment, callback) => {

  const data = {
    	    text: comment
    	    , language: 'english'
  };

  const formattedData = Qs.stringify(data);

  axios.post(API_URL, formattedData, { headers: REQUEST_HEADERS })
    	    .then(response => {
        	  const data = response.data;

        	  callback(data)
    	    })
    	    .catch(error => console.error(error))
};

const handleEmptyComment = () => {
  const resultBlockElement = document.getElementById('main-result-block');
  resultBlockElement.classList.add('invisible');
  return alert('Your comment is empty =(');
};

const displayResult = result => {

  const resultBlockElement = document.getElementById('main-result-block');
  resultBlockElement.classList.remove('invisible');


  const label = result.label;
  const resultElement = document.getElementById('result');
  resultElement.setAttribute('class', label);
  let resultText = '';


  switch (label) {
    	case 'pos':
        	resultText = 'Wow! Your comment is very positive!';
        	break;
    	case 'neg':
        	resultText = 'Negative comment =(';
        	break;
    	case 'neutral':
        	resultText = 'Simple comment =)';
        	break;
    	default:
        	resultText = 'Hmmm, can\'t understand your comment';
  }


  resultElement.textContent = resultText;
};
