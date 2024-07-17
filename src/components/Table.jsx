import React from "react";


const Table = () =>{
    return(
        <div>
            <header className="Header">
                <div className={"information"}>
                    <u className={"registration"}> Регистрация</u>
                    <u className={"avtorization"}> Авторизация</u>
                    <u className={"address"}>г.Москва ул.Чертановская д.7</u>
                </div>
                <image className={"imgWindow"}/>
                <div className="wrappers">
                    <label className="labe"> Забронировать стол</label>
                    <input type="text" className="inputFIO" maxLength="100" placeholder="Ваше ФИО:"/>
                        <input type="tel" className="inputTel" maxLength="11"  placeholder="Ваше номер телефона:" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"/>
                            <input type="date" className="inputDate"/>
                                <select className="inputSelect" >
                                    <option  className="option"> На двоих</option>
                                    <option> На троих</option>
                                    <option> На шестерых</option>
                                    <option> На восемь</option>
                                </select>
                                <textarea className="textArea" maxLength="100" placeholder="Пожелания к брони:"></textarea>
                </div>
                <div className={"booking"}>
                    <u  className={"btn"}> Забронировать </u>
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
    )
}
export default Table;