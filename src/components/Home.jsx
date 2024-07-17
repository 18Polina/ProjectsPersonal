import React from "react";
import { Link } from "react-router-dom";
import Popup from 'reactjs-popup';

const Home = () => {

    return (
        <div>
            <header className={"Header"}>
                <div className={"information"}>
                    <u className={"registration"}> Регистрация</u>
                    <u className={"avtorization"}> Авторизация</u>
                    <u className={"address"}>г.Москва ул.Чертановская д.7</u>
                </div>
                <image className={"imgWindow"}/>
                <div className={"wrap"}>
                    <title className={"block"}>
                         <Link to="/contactus"> <u className={"label"}> Кто мы есть</u></Link>
                        <p className={"p"}> Мы - местный семейный ресторан с полным сектором услуг, где подают пиццу в неополитанском стиле.</p>
                    </title>
                    <title className={"blockCenter"}>
                        <Link to="/table">   <u className={"label"}> Забронировать столик</u></Link>
                        <p className={"p"}> Чтобы сделать ваш визит ещё более приятным и гарантировать вам лучшее место, рекомендуем забронировать столик заранее.</p>

                    </title>
                    <title className={"blockRight"}>
                       <Link to="/about"> <u className={"label"}> Меню</u> </Link>
                        <p className={"p"}> Готовится каждый день свежий из нашего домашнего теста пиццы. Смазанный чесночным маслом и посыпанный.</p>
                    </title>
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

export default Home;
