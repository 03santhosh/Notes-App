import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import {
  MainContainer,
  NotesHeading,
  Form,
  InputText,
  TextArea,
  Button,
  EmptyContainer,
  Image,
  EmptyHeading,
  EmptyParagraph,
  UnorderdList,
} from './styledComponents'

import NoteItem from '../NoteItem'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [commentsList, setCommentsList] = useState([])

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeDesciption = event => setDescription(event.target.value)

  const onSubmitForm = event => {
    event.preventDefault()
    const newComment = {
      id: uuidv4(),
      title,
      description,
    }
    setCommentsList(prevComments => [...prevComments, newComment])
    setTitle('')
    setDescription('')
  }

  const isEmpty = () => (
    <EmptyContainer>
      <Image
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHeading>No Notes Yet</EmptyHeading>
      <EmptyParagraph>Notes you add will appear here</EmptyParagraph>
    </EmptyContainer>
  )

  const notesList = () => (
    <UnorderdList>
      {commentsList.map(eachComment => (
        <NoteItem key={eachComment.id} commentDetails={eachComment} />
      ))}
    </UnorderdList>
  )
  
  return (
    <MainContainer>
      <NotesHeading>Notes</NotesHeading>
      <Form onSubmit={onSubmitForm}>
        <InputText placeholder="Title" value={title} onChange={onChangeTitle} />
        <TextArea
          rows="4"
          cols="50"
          value={description}
          placeholder="Take a Note..."
          onChange={onChangeDesciption}
        />
        <Button type="submit">Add</Button>
      </Form>
      {commentsList.length === 0 ? isEmpty() : notesList() }
    </MainContainer>
  )
}

export default Notes
