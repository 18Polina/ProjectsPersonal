import React from "react";
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
           <header className={"Header"}>
               <div className={"information"}>
                   <u className={"registration"}>Регистрация</u>
                   <u className={"avtorization"}>Авторизация</u>
                   <u className={"address"}>г.Москва ул.Чертановская д.7</u>
               </div>
               <image className={"imgWindow"}/>
               <table className={"wrapp"}>
               </table>
               <div id={"divMenus"} >
                   <div className={"divMenu"}>
                   <label className={"labelMenu"}> Наше меню:</label>
                   </div>
                   <div id={"divImage"}>
                       <div id={"divColumn"}>
                           <div className={"divImagesHovers"}>
                              {/* <Link to="/contactus"> <button id={"buttonMenu"}> HJ </button> </Link>*/}
                   <image id={"imagePizzas"}/>
                           </div>
                           <div className={"divImagesHover"}>
                       <image className={"imageSalads"}/>
                           </div>
                       </div>
                       <div className={"divColumnTwo"}>
                           <div className={"divImagesHovers"}>
                               <image id={"imagePasta"}/>
                           </div>
                           <div className={"divImagesHover"}>
                               <image id={"imageDrink"}/>
                           </div>
                       </div>
                       <div className={"divColumns"}>
                           <div className={"divImagesHovers"}>
                               <image id={"imageBeard"}/>
                           </div>
                           <div className={"divImagesHover"}>
                               <image id={"imageDrinkAlk"}/>
                           </div>
                       </div>
                   </div>
               </div>
           </header>
            <footer>
                <div className={"wrapper"}>
                    <label className={"labels"}> Контакты:</label>
                    <label className={"labelContact"}> Телефон: 8-999-345-21-45</label>
                    <label className={"labelMail"}> Почта: pxutornayaaa@gmail.ru</label>
                    <a href={' https://nicepage.com/ru/k/ресторан-shablony-veb-saytov'} className={"labelHref"}> Связаться с нами</a>
                </div>
            </footer>
        </div>
    );
};

export default Menu;
