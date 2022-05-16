import React from 'react'
import { gql, useQuery } from '@apollo/client'
import { useParams } from 'react-router-dom'
import ProfileComponent from '../b_components/profileComponent'
import PostComponent from '../b_components/postComponent'

const GET_PROFILE = gql`
  query($userId: ID!) {
    profile(userId: $userId) {
      bio
      id
      user {
        email
        name
        posts {
          id
          title
          content
          createdBy
        }
      }
    }
  }
`

function Profile() {
  const { id } = useParams()
  const { data, error, loading } = useQuery(GET_PROFILE, {
    variables: {
      userId: id,
    },
  })
  // console.log('============================')
  // console.log(data, error, loading)
  // console.log('============================')

  if (error) return <div>Error Page at Posts</div>
  if (loading) return <div>Loading Posts</div>
  const { profile } = data

  return (
    <ProfileComponent id={profile.id} user={profile.user} bio={profile.bio} />
  )
}

export default Profile
