// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let a = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
hantei();
// hantei();
// hantei();
// hantei();

// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let yoso = 4;       // 第5回課題:テキストボックスの数値をここに代入
    // 課題3-1：ここの判定処理を作成する．
    kaisu = kaisu + 1;
   console.log(kaisu + '回目の予想　：4');
    if (kaisu < 4) {
    if (yoso > kotae) {
        console.log('間違い、答えはもっと小さいですよ');
    } else if (yoso < kotae) {
        console.log('間違い、答えはもっと大きいですよ');
    } else {
        
        
        if ( a === 0) {
            console.log('おめでとう。正解');
           a++;
        } else {
            console.log('答えは4です。すでにゲームは終わっています')

        }
    }
    //        ページに表示する方法はまだ習っていないので
    //        判定結果はコンソールに出力すること
    
} else{
    console.log('答えは4です。すでにゲームは終わっています');
}
}

let answer = document.querySelector('p#answer');
a = kaisu + '回目の予想：'+ yoso;
p = document.createElement('p');
presult.insertAdjacentElement('afterend',p);
p.textContent = a;

