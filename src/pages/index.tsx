import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Posts from './posts'
import PostCreate from './postCreate'
import Profile from './profile'
import Signin from './signin'
import Signup from './signup'

export default function Router() {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Posts />} />
        <Route path="/postcreate" element={<PostCreate />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}
