import React from 'react'
import PostComponent from '../b_components/postComponent'

import { gql, useQuery } from '@apollo/client'

const GET_POSTS = gql`
  query {
    posts {
      id
      title
      content
      author {
        name
      }
      createdBy
    }
  }
`

function Posts() {
  const { data, error, loading } = useQuery(GET_POSTS)

  // console.log('=======================')
  // console.log({ data, error, loading })
  // console.log('=======================')

  if (error) return <div>Error Page at Posts</div>
  if (loading) return <div>Loading Posts</div>
  const { posts } = data
  return (
    <>
      <h2>Page Posts</h2>
      {posts.map((each: any) => (
        <PostComponent
          key={each.id}
          id={each.id}
          title={each.title}
          content={each.content}
          author={each.author.name}
          createdAt={each.createdBy}
        />
      ))}
    </>
  )
}

export default Posts
