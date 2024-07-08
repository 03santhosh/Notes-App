import {NotesList, NotesTitle, NotesDescription} from './styledComponents'

const NoteItem = props => {
  const {commentDetails} = props
  const {title, description} = commentDetails
  return (
    <NotesList>
      <NotesTitle>{title}</NotesTitle>
      <NotesDescription>{description}</NotesDescription>
    </NotesList>
  )
}

export default NoteItem
