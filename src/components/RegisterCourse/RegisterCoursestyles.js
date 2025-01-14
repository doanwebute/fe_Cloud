import styled from "styled-components";

export const Wrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    left: 0%;
    .name{
        padding: 10px;
        padding-left: 10%;
        padding-top: 9%;
        font-size: 2vw;
    }
    
    
    

`;
export const Navigationbar = styled.div `      
    height: 100vh;
     
    list-style-type: none;
    text-align: left;    
    width: 15%;
    background-color: #333333; 

`;

export const Course = styled.div `
    max-width:70%;
    max-height: 100%;
    width: 83vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 0%;    
    left: 5%;
    margin-top: 10%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    h1{
        font-size: 1.5vmax;
    }

    
`;
export const HeaderList = styled.div `
    max-width:90%;
    max-height: 100%;
    width: 83vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 0%;    
    left: 5%;
    margin-top: 5%;
    
    h1{
        font-size: 1.5vmax;
    }

    
`;

export const ListInfo= styled.ul `
    list-style-type: none;
    font-size: 1.1vmax;

`;
export const Assiment = styled.div `
    max-width: 27%;
    max-height: 100%;
    width: 50vmax;
    height: auto;   
    background-color: white;       
    position: absolute;
    right: 2%;    
   
    margin-top: 17%;
    box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
    h1{
        font-size: 1.5vmax;
    }

    
`;
