import { StaticImageData } from 'next/image';

export interface UserProfile {
  firstName: string;
  lastName: string;
  email: string;
  profilePicture: string;
  joinDate: string;
  role: string;
}

export interface Activity {
  id: number;
  summary: string;
  date: string;
  time: string;
  type: 'order' | 'system' | 'user';
}

export const mockUserProfile: UserProfile = {
  firstName: 'Sarah',
  lastName: 'Hermant',
  email: 'Saraorderific@gmail.com',
  profilePicture: '/profile_pic.png',
  joinDate: 'Mon, 17 Jun 2023',
  role: 'Staff'
};

export const mockActivities: Activity[] = [
  {
    id: 1,
    summary: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    type: 'order'
  },
  {
    id: 2,
    summary: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    type: 'order'
  },
  {
    id: 3,
    summary: 'Changed default page to Kitchen Display',
    date: '5 Jan 2024',
    time: '15:45',
    type: 'system'
  },
  {
    id: 4,
    summary: 'Updated profile information',
    date: '5 Jan 2024',
    time: '14:20',
    type: 'user'
  },
  {
    id: 5,
    summary: '#189 order, "Chicken Wings" was completed',
    date: '5 Jan 2024',
    time: '13:55',
    type: 'order'
  },
  {
    id: 6,
    summary: 'Password changed successfully',
    date: '4 Jan 2024',
    time: '16:30',
    type: 'system'
  },
  {
    id: 7,
    summary: '#156 order, "Caesar Salad" was cancelled',
    date: '4 Jan 2024',
    time: '12:15',
    type: 'order'
  },
  {
    id: 8,
    summary: 'Logged in from new device',
    date: '4 Jan 2024',
    time: '09:00',
    type: 'system'
  },
  {
    id: 9,
    summary: '#134 order, "Pizza Margherita" was modified',
    date: '3 Jan 2024',
    time: '18:45',
    type: 'order'
  },
  {
    id: 10,
    summary: 'Profile picture updated',
    date: '3 Jan 2024',
    time: '14:10',
    type: 'user'
  }
]; 