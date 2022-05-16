import React from 'react'
import PostComponent from './postComponent'

function ProfileComponent(props: any) {
  const { id, user, bio } = props
  return (
    <div key={id}>
      <h3>Name: {user.name}</h3>
      <p>Bio: {bio}</p>
      <p>Please contact at: {user.email}</p>

      <div>
        {user.posts.map((each: any) => (
          <PostComponent
            key={each.id}
            id={each.id}
            title={each.title}
            content={each.content}
            createdAt={each.createdBy}
          />
        ))}
      </div>
    </div>
  )
}

export default ProfileComponent
