import styled from "styled-components";

export const Container = styled.div`
    padding: 60px 60px;
    background: #2F363F;
    
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin-top: -20px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
    margin-left: 60px;
`

export const Ro = styled.div`

    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: -50rem;

    @media (max-width: 1000px){
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    }
`

export const Row = styled.div`
    margin-left: 25rem;

    @media (max-width: 1000px){
        display: flex;
        flex-direction: row;
        margin-left: 7.2rem;
    }

    
`

export const a = styled.div`
    color: black;
    margin-top: 30px;
    margin-bottom: 10px;
    font-size: 18px;
    text-decoration: none;

    &:hover{
        transition: 200ms ease-in;
        cursor: pointer;
    }
`

