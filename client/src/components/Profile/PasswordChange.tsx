'use client';

import { useState } from 'react';
import { MainButton } from '@/components/mainButton';
import { cn } from '@/lib/utils';

interface PasswordChangeProps {
  className?: string;
}

export function PasswordChange({ className }: PasswordChangeProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handlePasswordChange = () => {
    // Mock implementation - would typically call an API
    console.log('Changing password');
    setCurrentPassword('');
    setNewPassword('');
  };

  return (
    <div className={cn("bg-white p-6 rounded-2xl border border-black-background-10", className)}>
      <h3 className="text-xl font-semibold mb-4">Password & Security</h3>
      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full p-3 border border-black-background-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-background-20"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full p-3 border border-black-background-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-black-background-20"
        />
        <MainButton 
          variant="secondary" 
          className="w-full"
          onClick={handlePasswordChange}
          disabled={!currentPassword || !newPassword}
        >
          Change Password
        </MainButton>
      </div>
    </div>
  );
} 