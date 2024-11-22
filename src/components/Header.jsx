//  *****************************************************************
//  **********  /gif-expert-app/src/components/Header.jsx  **********
//  *****************************************************************


import reactLogo from '../assets/react.svg';


//  ------------------------------
//  ----------  HEADER  ----------
//  ------------------------------
export const Header = () => {

    return (

        <header className="header">

            <img src={reactLogo} className="logo react" alt="React logo" />
            <h1> GifExpertApp </h1>
            <img src={reactLogo} className="logo react" alt="React logo" />

        </header>
    )
}
