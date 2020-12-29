//ボタンをオスと、ブロック内のプログラムを実行する。
$("btn1").on("click", function() {
let dat = new Date();
let year = data.getFullYear();
let month = date.getMonth() + 1;
let day = date.getDate();
let message = '今日は${year}年${month}月${day}日です。'
// jQueryを使って画面にメッセージを表示する。
$("#tBox").val(message);
}
);
