

//データセット

const quiz = [
    {
	question:'日本で一番高い山は？',
	answers:[
            '六甲山',
	    '阿蘇山',
	    '北岳',
	    '富士山'
	],
	correct:'富士山'
    },
    {
	question:'日本で一番大きい都道府県は？',
	answers:[
            '青森県',
            '北海道',
	    '秋田県',
	    '長崎県'
	],
	correct:'北海道'
    },
    {
	question:'アメリカの首都は？',
	answers:[
            'デトロイト',
	    'ニューヨーク',
	    'ワシントンD.C.',
	    'カリフォルニア'
	],
	correct:'ワシントンD.C.'
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
