'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { MainButton } from '@/components/mainButton';
import { Activities } from './Activities';
import { DefaultPage } from './DefaultPage';
import { PasswordChange } from './PasswordChange';
import { mockUserProfile } from './@mockData';
import { cn } from '@/lib/utils';

export function Profile() {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white px-4">
      <div className="max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center pt-7 mb-8">
          <h1 className="text-2xl font-semibold">Profile</h1>
          <div className="flex gap-4">
            <MainButton 
              variant="secondary"
              onClick={() => setIsEditModalOpen(true)}
            >
              Edit Profile
            </MainButton>
            <MainButton variant="primary">Share</MainButton>
          </div>
        </div>

        {/* Profile Info Grid */}
        <div className="grid grid-cols-12 gap-4 my-2">
          {/* Profile Picture & Name */}
          <div className="col-span-4 md:col-span-6 bg-black-background-5 rounded-3 p-6">
            <div className="flex items-center gap-4">
              <Avatar className="w-16 h-16">
                <AvatarImage 
                  src={mockUserProfile.profilePicture} 
                  alt={`${mockUserProfile.firstName} ${mockUserProfile.lastName}`} 
                />
                <AvatarFallback>
                  {mockUserProfile.firstName[0]}{mockUserProfile.lastName[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl font-semibold">
                  {mockUserProfile.firstName} {mockUserProfile.lastName}
                </h2>
              </div>
            </div>
          </div>

          {/* Email Section */}
          <div className="col-span-4 md:col-span-6 bg-black-background-5 rounded-3 p-6">
            <p className="text-sm text-black-background-60">Email</p>
            <p className="font-medium">{mockUserProfile.email}</p>
          </div>

          {/* Join Date Section */}
          <div className="col-span-2 md:col-span-6 bg-black-background-5 rounded-3 p-6">
            <p className="text-sm text-black-background-60">Join at</p>
            <p className="font-medium">{mockUserProfile.joinDate}</p>
          </div>

          {/* Role Section */}
          <div className="col-span-2 md:col-span-6 bg-black-background-5 rounded-3 p-6">
            <p className="text-sm text-black-background-60">Role</p>
            <p className="font-medium">{mockUserProfile.role}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="mb-4 flex flex-row space-x-4 md:flex-col md:space-x-0 md:space-y-4">
          <Activities className="flex-grow" />
          <div className="w-1/3 md:w-full space-y-4">
            <DefaultPage />
            <PasswordChange />
          </div>
        </div>
      </div>

      {/* Edit Profile Modal would be imported and used here */}
      {isEditModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg">
            <h2>Edit Profile</h2>
            <button onClick={() => setIsEditModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
} 