
//import { useState } from 'react';
import styled from 'styled-components';
import { RiMovieFill, RiMenuLine } from 'react-icons/ri';

function Header (){

    //const [ menu, setMenu ] = useState(false)


    return(
    <>
        <Top>

            <RiMovieFill className='iconMovie'/>
            <h1>Combos PPN</h1>
            <RiMenuLine className='menu'/>

        </Top>
    </>
    )
}

const Top = styled.div`

    background-color: rebeccapurple;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;

    h1{
        font-family: Oswald;
        font-size: 30px;
        color: #fff;


    }
    .iconMovie{
        color: red;
        font-size:40px;
    }
    .menu{
        color:#FFFFFF;
        font-size: 40px;

    }

`


export default Header;