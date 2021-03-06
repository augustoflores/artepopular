* {
  transition-duration: 0s; }

body {
  padding: 0;
  margin: 0; }

#juego2 #btnDescripcion {
  border: solid #07dd00 3px;
  background-color: #333;
  border-radius: 30px;
  margin-left: -100px;
  text-align: center;
  position: absolute;
  font-size: 21px;
  cursor: pointer;
  color: #07dd00;
  height: 50px;
  width: 200px;
  top: -25px;
  left: 50%; }
#juego2 .header {
  align-items: flex-start;
  display: flex; }
  #juego2 .header .navGame {
    flex-basis: 1420px;
    position: relative;
    padding-top: 20px;
    height: 200px;
    left: 50px; }
    #juego2 .header .navGame ul {
      justify-content: center;
      list-style: none;
      display: flex;
      width: 100%;
      padding: 0;
      margin: 0; }
      #juego2 .header .navGame ul li {
        flex-basis: auto;
        margin: 0 5px; }
    #juego2 .header .navGame .btnNav {
      text-decoration: none;
      cursor: pointer;
      padding: 0 15px;
      display: block;
      color: #ff1743; }
      #juego2 .header .navGame .btnNav:hover {
        color: #07dd00; }
      #juego2 .header .navGame .btnNav.activo {
        color: #07dd00; }
  #juego2 .header .sbMenuItemsCont {
    justify-content: center;
    display: none; }
    #juego2 .header .sbMenuItemsCont.activo {
      display: flex; }
    #juego2 .header .sbMenuItemsCont .btn {
      position: relative;
      flex-basis: 180px;
      margin: 0 10px;
      height: 160px;
      width: 180px; }
      #juego2 .header .sbMenuItemsCont .btn.empty::before {
        border-color: #ffc33e; }
      #juego2 .header .sbMenuItemsCont .btn::before {
        border-radius: 80px;
        border: solid #07dd00 2px;
        position: absolute;
        display: block;
        height: 120px;
        width: 120px;
        content: "";
        z-index: 5;
        left: 0;
        top: 0; }
      #juego2 .header .sbMenuItemsCont .btn img {
        position: relative;
        display: block;
        z-index: 10;
        width: 144px; }
        #juego2 .header .sbMenuItemsCont .btn img.can-drop {
          width: 319px; }
  #juego2 .header .submenus {
    padding-top: 10px; }
#juego2 .gameSceneCont {
  border-radius: 30px;
  margin: 0 auto;
  width: 1620px;
  height: 626px; }
#juego2 .footer {
  border-top: #07dd00 2px solid;
  border-right: #07dd00 2px solid;
  border-left: #07dd00 2px solid;
  border-top-right-radius: 25px;
  border-top-left-radius: 25px;
  position: relative;
  margin: 0 auto;
  width: 1840px;
  height: 289px;
  display: flex; }
  #juego2 .footer .pedro {
    flex-basis: 150px; }
  #juego2 .footer .txtFooter {
    flex-basis: 1535px;
    font-size: 20px;
    color: #fefefe; }
  #juego2 .footer .footerRight {
    flex-basis: 300px; }
#juego2 .dragg {
  transition: 0.3s ease-in-out;
  touch-action: none;
  -webkit-transform: translate(0px, 0px);
  transform: translate(0px, 0px);
  position: absolute; }
#juego2 .drop-active {
  background-color: rgba(255, 255, 255, 0.04);
  border: 2px rgba(255, 255, 255, 0.1) dashed; }
#juego2 .in10 {
  z-index: 10; }
#juego2 .in8 {
  z-index: 8; }
#juego2 .in5 {
  z-index: 5; }
#juego2 .in3 {
  z-index: 3; }
#juego2 .rectnguloTop {
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  border-bottom: solid 2px #07dd00;
  border-right: solid 2px #07dd00;
  border-left: solid 2px #07dd00;
  position: relative;
  padding-left: 25px;
  flex-basis: 440px;
  height: 128px;
  left: 50px; }
  #juego2 .rectnguloTop h1 {
    text-transform: uppercase;
    padding-top: 20px;
    color: #ffc33e;
    font-size: 42px;
    margin: 0; }
  #juego2 .rectnguloTop h2 {
    font-size: 22px;
    color: #fefefe;
    margin: 0; }

/*# sourceMappingURL=styles.com.map */
