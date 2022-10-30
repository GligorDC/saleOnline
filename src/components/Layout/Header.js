import React from "react";
import backgroundHeader from "../../assets/backgroundHeader.jpg"
import classes from './Header.module.css'
import HeaderCartButton from "./HeaderCartButton";
const Header = props =>{

    return (<>
    <header className={classes.header}>
        <h1>
            My apllication
        </h1>
        <HeaderCartButton onClick ={props.onShowCartHandler} />
    </header>
    <div className={classes['main-image']}>
        <img src={backgroundHeader} alt='just' />
    </div>
    </>);
}
export default Header;