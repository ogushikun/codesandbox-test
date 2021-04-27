/**
 * const,let sample
 */
// var var1 = "変数名";
// console.log(var1);

// // var変数は上書き可能
// var1 = "変数名その２";
// console.log(var1);

// var var1 = "変数を再宣言";
// console.log(var1);

// let val2 = "let変数";
// console.log(var2);

// // letは上書きが可能
// val2 = "let変数を上書き";
// console.log(var2);

// // letは再宣言不可
// let val2 = "let変数再宣言";

// const val3 = "const変数を宣言";
// console.log(val3);

// // constは上書き不可
// // val3 = "constの上書き";
// console.log(val3);

// const val3 = "constの再宣言";
// console.log(val3);

// constで定義したオブジェクトはプロパティの変更が可能
// const val4 = {
//   name: "あざらしぃ;",
//   age: 30
// };
// val4.name = "azarasulu";
// val4.address = "aomori";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ['dog', 'cat'];
// val5[0] = 'bird';
// val5.push('monkey');
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "あざらしぃ";
// const age = 30;
// 私の名前はあざらしぃです。年齢は30です

// // 従来の方法
// const message = "私の名前は" + name + "です。年齢は" + age + "です";
// console.log(message);

// // テンプレート文字列を利用
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

/**
 * アロー関数
 */

// 従来
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

// アロー関数
// const func2 = (str) => str; //1行処理のみなら、中括弧が不要なこともある
// console.log(func2("func2です"));

// const func3 = (num1, num2) => num1 + num2;

// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "あざらしぃ",
//   age: 30
// };

// // const message1 = `私の名前は${myProfile.name}です。年齢は${myProfile.age}です`;
// // console.log(message1);

// const { name, age } = myProfile;
// const message2 = `私の名前は${name}です。年齢は${age}です`;
// console.log(message2);

// const myProfile = ["あざらしぃ", 30];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}です`;
// console.log(message3);

// const myProfile2 = ["ふじまき", 31];
// const [name, age] = myProfile2;
// const message4 = `名前は${name}です。年齢は${age}です`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name) => console.log(`こんにちは、${name}さん`);
// sayHello("アザラシぃ");


/**
 * スプレッド構文 ...
 */
// 配列の展開
// const arr1 = [1, 2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0],arr1[1]);
// sumFunc(...arr1);

// まとめる
const arr2 = [1,2,3,4,5]
