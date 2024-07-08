import styled from 'styled-components'

export const NotesList = styled.li`
   padding:10px 20px;
   border: solid 1px #aab8c8;
   border-radius:15px;
   margin-bottom:20px;
   list-style:none;
   width:100%;
   @media screen and (min-width:768px){
      margin-right:20px;
      margin-bottom:20px;
      width:31%;
   }
`
export const NotesTitle = styled.h1`
   color: #334155;
   font-weight:500;
   font-size:25px;
   font-family:"Roboto";
   
`
export const NotesDescription = styled.p`
   color: #334155;
   font-family:"Roboto";
`
