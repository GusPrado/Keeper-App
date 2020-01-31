import React from 'react'
import Header from './Header'
import Note from './Note'
import Footer from './Footer'
import notes from '../notes'

export default function App() {
  return (
    <>
      <Header />
      {notes.map(note => (
        <Note 
        key={note.id}
        title={note.title}
        content={note.content}
      />
      ))}   
      <Footer />
    </>
  )
}