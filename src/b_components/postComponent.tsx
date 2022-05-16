import React from 'react'

function PostComponent(props: any) {
  const { id, title, content, author, createdAt } = props
  const date = new Date(Number(createdAt))
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Author: {author}</p>
      <p>Created at: {`${date}`.split(' ', 4).join(' ')}</p>
    </div>
  )
}

export default PostComponent
