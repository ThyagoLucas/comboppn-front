//import { useEffect, useState } from "react";
import styled from "styled-components";
//import api from "./api/api";

import Header from "./utils/Header";


function Home (){

   
    return(
    <>
        <Header/>
        
        <Main>
            <button>Sou Cliente</button>
            <button>Quero ser Cliente</button>
        </Main>
        
       
    </>
    )
}

const Main = styled.main`

    display:flex;
    align-items:center;
    justify-content:center;
    width: 100%;
    height: 100vh;
    background-color: pink;



`



export default Home;