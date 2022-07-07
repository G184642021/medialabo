// 答え
let kotae = Math.floor(Math.random() * 10) + 1;
console.log('答え: ' + kotae);      // デバッグ用

// 入力回数（予想回数）
let kaisu = 0;
let z = 0;

// 予想を4回実行する
// 将来: ボタンを押したら， hantei() を呼び出すように修正する
//hantei();
// hantei();
// hantei();
// hantei();
let b = document.querySelector('#print');
b.addEventListener('click', hantei);

// 2. イベントハンドラの定義
// function greeting() {
        // ユーザが記入した文字列
//     a.textContent =('あなたの予想は ' + kaitouyosou + ' です');
// }
// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
    let i = document.querySelector('input[name="kaitouyosou"]');
     
     let yoso = Number(i.value); 
    
    let a = document.querySelector('#result');
    kaisu = kaisu + 1;
    let x = document.querySelector('#kaisu');
    x.textContent = kaisu;
    let y = document.querySelector('#yoso');
    y.textContent = yoso;

    if (kaisu < 4) {
        if (yoso > kotae) {
            a.textContent = ('間違い、答えはもっと小さいですよ');
        } else if (yoso < kotae) {
            a.textContent = ('間違い、答えはもっと大きいですよ');
        } else {


            if (z === 0) {
                a.textContent = ('おめでとう。正解');
                z++;
             }else {
                a.textContent = ('答えは' + kotae + 'です。すでにゲームは終わっています')

            }
        }
        //        ページに表示する方法はまだ習っていないので
        //        判定結果はコンソールに出力すること

    } else {
        a.textContent = ('答えは' + kotae + 'です。すでにゲームは終わっています');
    }
}

// let answer = document.querySelector('');
// a = kaisu + '回目の予想：'+ yoso;
// p = document.createElement('p');
// presult.insertAdjacentElement('afterend',p);
// p.textContent = a;

