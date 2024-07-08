import styled from 'styled-components'

export const MainContainer = styled.div`
    display:Flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    min-height:100vh;
    padding: 0px 20px;
    @media screen and (min-width:768px){
      padding: 50px 80px;
    }
`
export const NotesHeading = styled.h1`
   color:#4c63b6;
   font-family:"Bree Serif"; 
   margin-bottom:40px;
   @media screen and (min-width:768px){
      font-size:45px;
      font-weight:500;
    }
`
export const Form = styled.form`
   padding:20px;
   background-color: #ffffff;
   box-shadow: 1px 1px 25px 1px #aab8c8;
   border-radius:10px; 
   display:Flex;
   flex-direction:column;
   @media screen and (min-width:768px){
      width:95%;
      padding:40px;
    }
`
export const InputText = styled.input`
   color: #475569;
   font-weight:600;
   font-family:"Roboto";
   font-size:20px;
   width:100%;
   border:none;
   outline:none;
   margin-bottom:20px;
   @media screen and (min-width:768px){
      margin-bottom:40px;
    }
`
export const TextArea = styled.textarea`
   color: #475569;
   font-weight:400;
   font-family:"Roboto";
   font-size:17px;
   width:100%;
   border:none;
   outline:none;
`
export const Button = styled.button`
   color: #ffffff;
   background-color: #4c63b6;
   font-weight:500;
   font-family:"Roboto";
   padding:13px 28px;
   border-radius:5px;
   border:none;
   outline:none;
   cursor:pointer;
   margin-top:10px;
   align-self:flex-end;
   @media screen and (min-width:768px){
      margin-top:20px;
   }
`
export const EmptyContainer = styled.div`
   display:Flex;
   flex-direction:column;
   align-items:center;
   margin-top:50px;
   @media screen and (min-width:768px){
      margin-top:80px;
   }
`
export const Image = styled.img`
   width:30vw;
   align-self:center;
   margin-bottom:20px;
   @media screen and (min-width:768px){
      width:10vw;
   }
`

export const EmptyHeading = styled.h1`
   color: #334155;
   font-weight:500;
   font-size:20px;
   font-family:"Roboto";
   margin-bottom:2px;
   line-height:0.5;
   @media screen and (min-width:768px){
     font-size:25px;
   }
`
export const EmptyParagraph = styled.p`
   color: #334155;
   font-family:"Roboto";
   @media screen and (min-width:768px){
      font-size:20px
   }
`
export const UnorderdList = styled.ul`
   dispaly:flex;
   flex-direction:column;
   padding-left:0px;
   margin-top:30px;
   @media screen and (min-width:768px){
      display:flex;
      flex-direction:row;
      flex-wrap:wrap;
      width:95%;
      padding-left:15px;
   }
`
