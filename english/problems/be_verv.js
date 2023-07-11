

//データセット
const superscript = '\u00B2';
const quiz = [
    {
	question:'I (  ) a student.(私は学生では無いです)',
	answers:[
            'is not',
            'are not',
            'were not ',
            'am not'
	],
	correct:'am not'
    },
    {
	question:'You (  ) very kind.(あなたはとても親切ですね)',
	answers:[
            'are',
            'am',
            'was',
            'is'
	],
	correct:'are',
    },
    {
	question:'Time on task (  ) the amount of time we spend doing somethig.("Time on task"はあなたが何かに対して行った時間の量です。)',
	answers:[
            'was',
            'are',
            'is',
            'were',

	],
	correct:'is'
    },      

];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


//HTMLのオブジェクトから取得する変数には明示的に$をつける
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//whileを使った関数による問題文と選択肢定義
const setupQuiz = () =>{
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength){
	$button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
	buttonIndex++;
    }
}
setupQuiz();


//ボタンをクリックしたら正誤判定

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
	window.alert('正解');
	score++;
    }else{
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
	setupQuiz();      
    }else{
	window.alert('終了！ あなたの正解数は' + score + '/' + quizLength + 'です！');
        window.location = "../english_home.html"
    }

};



document.getElementsByTagName('button')[0].addEventListener('click', (e) =>{
    clickHandler(e);
});

document.getElementsByTagName('button')[1].addEventListener('click', (e) =>{
    clickHandler(e);
});


document.getElementsByTagName('button')[2].addEventListener('click', (e) =>{
    clickHandler(e);
});


document.getElementsByTagName('button')[3].addEventListener('click', (e) =>{
    clickHandler(e);
});


