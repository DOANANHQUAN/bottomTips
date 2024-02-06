// <div id="copyright">
//  <img width="30px" height="30px" src="./monster.gif" />
//  <label>Web của Quân hehe</label>
// </div>;

// #copyright {
//   display: flex;
//   position: absolute;
//   top: calc(100% - 30px);
// }
// #copyright img,
// #copyright label {
//   align-self: flex-end;
// }

var textArr = [
  "Web của Quân hehe",
  "Dòng chữ này sẽ thay đổi",
  "Skill issue💀💀",
  "Memaybeo",
  "Alt + f4",
  "Hehe boi",
  "Vấn đề kĩ năng",
  "Bingchilling",
  "早上好中国",
  "こんにちは",
  "Smurf Cat",
  "Super Secret Easter Egg!!!!",
  "Xue hua piao piao",
  "Super Idol de xiao rong",
  "Hello là tạm biệt",
  "お前はもう死んでいる",
  "Bạn nên chơi Minecraft",
  "DIAMONDS!!!!",
  "King of rocks",
  "Chàng béo quê miền tây",
];
var randomIndex = Math.floor(Math.random() * textArr.length);
var randomText = textArr[randomIndex];
document.body.innerHTML += `
    <!-- Vấn đề kĩ năng -->
    <div id="copyright">
        <img width="30px" height="30px" src="https://doananhquan.github.io/images/monster.gif" />
        <label>Tip: ${randomText}</label>
    </div>
    <style>
        #copyright {
            display: flex;
            position: absolute;
            top: calc(100% - 40px);
        }
        #copyright img,
        #copyright label {
            align-self: flex-end;
        }
        #copyright label {
            font-family: Arial, sans-serif, "Yu Mincho", "Microsoft JhengHei";
        }
    </style>
    <!-- Vấn đề về não -->
`;
