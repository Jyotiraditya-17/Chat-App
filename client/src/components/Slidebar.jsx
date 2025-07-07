import React, { useEffect } from 'react'
import { useChatStore } from '../store/useChatStore'
import { useAuthStore } from '../store/useAuthStore'
import SidebarSkeleton from './skeletons/SidebarSkeleton';
import { Users } from 'lucide-react';
import { useState } from 'react';

function Slidebar() {

    const { getUsers , users , selectedUser , setSelectedUser , isUsersLoading } = useChatStore();

    const {authUser ,onlineUsers} = useAuthStore();

    const [showOnlineOnly , setShowOnloneOnly] = useState(false)


    useEffect( () => {
        getUsers()
    } , [getUsers] )

    const filteredUsers = showOnlineOnly ? users.filter(user => onlineUsers.includes(user._id)) : users ;

    if(isUsersLoading) return <SidebarSkeleton />

  return (
    <aside className='h-full w-20 lg:w-72 border-r border-base-300 flex flex-col transition-all duration-200'>
        <div className='border-b border-base-300 w-full p-5'>

            <div className='flex items-center gap-2'>
                <Users className='size-6'/>
                <span className='font-medium hidden lg:block'>Contacts</span>
            </div>

            {/* TODO : Online Filter Toggle */}

            <div className='mt-3 hidden lg:flex items-center gap-2'>
                <label className='cursor-pointer flex items-center gap-2'>
                    <input
                        type='checkbox' 
                        className='checkbox checkbox-sm'
                        checked={showOnlineOnly}
                        onChange={ (e) => setShowOnloneOnly(e.target.checked)}
                    />
                    <span className='text-sm'> Show online Only </span>
                </label>
                <span className='text-xs text-zinc-500'> ({onlineUsers.filter(id => id != authUser._id).length} online ) </span>
            </div>

        </div>

        <div className='overflow-y-auto w-full py-3'>
            {
                filteredUsers.map( (user) => (
                    <button
                        key={user._id}
                        className={`w-full p-3 flex items-center gap-3 hover:bg-base-200 transition-all duration-200 ${selectedUser?._id === user._id ? 'bg-base-200' : ''}`}
                        onClick={ () => setSelectedUser(user) }
                    >
                        <div className='relative mx-auto lg:mx-0'>
                            <img src={user.profilePic || '/avatar.png'} alt={user.name} className='size-12 object-cover rounded-full' />
                            {
                                onlineUsers.includes(user._id) && (
                                    <span className='absolute bottom-0 right-0 size-3 bg-green-500 rounded-full ring-2 ring-zinc-900' />
                                )
                            }
                        </div>

                        {/* User Info - only visible on larger screens */}
                        <div className='hidden lg:block text-left min-w-0'>
                            <div className='font-medium truncate'> {user.fullName} </div>
                            <div className='text-sm text-zinc-400'>
                                {onlineUsers.includes(user._id) ? 'online' : 'offline'}
                            </div>
                        </div>

                    </button>
                ))
            }


            {
                filteredUsers.length === 0 && (
                    <div className='text-center text-zinc-500 py-4'>
                        No users found
                    </div>
                )
            }
            
        </div>
    </aside>
  )
}

export default Slidebar
