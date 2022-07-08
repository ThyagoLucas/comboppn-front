//import { useEffect, useState } from "react";
import styled from "styled-components";
//import api from "./api/api";
import { Circles } from "react-loader-spinner";
import Header from "./utils/Header";


function Home (){

   
    return(
    <>
        <Header/>
        
        <Main>

            <div>
                <h1>Em breve você vai poder gerenciar sua assinatura!</h1>
                <Circles/>
            
            </div>
           
        </Main>
        
       
    </>
    )
}

const Main = styled.main`

    display:flex;
    
    justify-content:center;
    width: 100%;
    height: 100vh;
    background-color: pink;

    h1{
        font-size: 30px;
        color: #1A404C;
        padding:10px;
    }                                                   


    div{
        display: flex;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
    }
   



`



export default Home;