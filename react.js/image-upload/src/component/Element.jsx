import React from 'react';
import styled from "styled-components";
import { NavLink as Link} from "react-router-dom";

export const Nav = styled.nav`
    background: whitesmoke;
    height: 400px;
    display: flex;
    flex-directio: column;
    padding: 10px 10px;

    @media screen and (max-width: 768px){
        height: 450px;
    }
`
export const NavLink = styled.header`
    color: #black;
    display: flex;
    font-size: 1rem;
    background: whitesmoke;
    flex-direction: row;
    align-items: center;
    margin-left: 40px;
    margin-right: -10px;
    height: 100%;
    width: 100%;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active{
        color: #15cdfc
    }
    
    @media screen and (max-width: 768px){
        display: flex;
        margin-left: 10px;
        margin-right: -10px;
        text-decoration: none;
        padding: 0 1rem;
        align-items: center;
        font-size: .7rem;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
`
export const NavHead= styled.header`
    color: #black;
    display: flex;
    font-size: 1rem;
    font-weight: 800;
    background: whitesmoke;
    flex-direction: row;
    margin-left: 5px;
    margin-right: 20px;
    height: 100%;
    width: 100%;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;

    &.active{
        color: #15cdfc
    }
    
    @media screen and (max-width: 768px){
        display: flex;
        margin-left: 10px;
        margin-right: -10px;
        text-decoration: none;
        padding: 0 1rem;
        align-items: center;
        font-size: .7rem;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
`

export const NavMenu = styled.div`
    justify-content: center;
    display: flex;
    flex-direction: center;
    align-items: center;
    vertical-align: middle;

    @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
    }
        
`

export const Img = styled.img`
    display: flex;
    flex-dircetion: column;
    margin-right: 100px;
    margin-left: -650px;
    margin-top: 130px;
    width: 500px;
    height: 250px;

    
    @media screen and (max-width: 768px){
        align-items: center;
        width: 300px;
        height: 200px;
        margin-right: -450px;
        margin-bottom: 60px;
        display: flex;
        flex-dircetion: column;
    }
`
export const NavText = styled.p`
    color: black;
`
export const Navh1 = styled.h1`
    
    color: black;
    margin-left: -30px;
    margin-top: -50px;
    font-size: 1.8rem;
    font-weight: 200px;
`
export const Text = styled.text`
    position: relative;
    overflow: auto;
    width: 10%px;
    line-height:1.8rem;
    height: 80px;
`

export const Navp = styled.p`
    color: grey;
    margin-left: -30px;
    margin-top: 10px;
    width: 40%;
    height: 100%;
    font-size: 1.2rem;

    
    @media screen and (max-width: 768px){
        color: grey;
        display: flex;
        flex-dircetion: column;
        align-items: center;
        width: 80%;
        height: 100%;
        margin-left: -60px;

    }
`
