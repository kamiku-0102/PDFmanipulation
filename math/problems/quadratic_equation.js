

//データセット
const superscript = '\u00B2';
const quiz = [
    {
	question:'2(x+3)= (x-1)' + superscript + 'を解いてください',
	answers:[
            'x=1, -3',
            'x=1, -5',
            'x=-1, 5',
            'x=-1, -3'
	],
	correct:'x=-1, 5'
    },
    {
	question:'x'+ superscript +  '-x+' + `1/4=0` + 'を解いてください',
	answers:[
            'x=1,2',
            'x=-1/2',
            'x=1/2',
            'x=1/4'
	],
	correct:'x=1/2',
    },
    {
	question:'x' + superscript + '+ax+20=0の一つの解がx=-4の時のもう一つの解は？',
	answers:[
            'x=10',
            'x=-5',
            'x=2',
            'x=20',

	],
	correct:'x=-5'
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
        window.location = "../math_home.html"
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


