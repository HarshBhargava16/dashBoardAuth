'use client'
import React from 'react'
import Sidebar from '../dashboard/components/Sidebar'
import Header from '../dashboard/components/Header'
import UserProfile from '../profile/UserProfile'
const page = () => {
  return (
    <div>
      <Header />
      <div className='flex'>
        <Sidebar />
         <UserProfile/>       
      </div>
    </div>
  );
}

export default page
