'use client';

import { NotificationsList } from '@/components/notifications/NotificationsList';
import { NotificationSettings } from '@/components/notifications/NotificationSettings';
import { cn } from '@/lib/utils';
import { fontTitle1 } from '@/styles/typography';
import { Bell } from 'lucide-react';
import { useState } from 'react';
import {Badge} from '@/components/badge';

const SAMPLE_NOTIFICATIONS = [{
    id: '202',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: false,
  },
  {
    id: '588',
    description: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    isRead: false,
  },
  {
    id: '164',
    description: '#164 order for "Table A101" Placed',
    date: '6 Jan 2024',
    time: '10:59',
    isRead: false,
  },{
    id: '202',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: false,
  },
  {
    id: '588',
    description: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    isRead: false,
  },
  {
    id: '164',
    description: '#164 order for "Table A101" Placed',
    date: '6 Jan 2024',
    time: '10:59',
    isRead: false,
  },{
    id: '202',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: false,
  },
  {
    id: '588',
    description: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    isRead: false,
  },
  {
    id: '164',
    description: '#164 order for "Table A101" Placed',
    date: '6 Jan 2024',
    time: '10:59',
    isRead: false,
  },
  {
    id: '202',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: false,
  },
  {
    id: '588',
    description: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    isRead: false,
  },
  {
    id: '164',
    description: '#164 order for "Table A101" Placed',
    date: '6 Jan 2024',
    time: '10:59',
    isRead: false,
  },
  {
    id: '202-2',
    description: '#202 order was Completed',
    date: '5 Jan 2024',
    time: '18:36',
    isRead: true,
  },
  {
    id: '202-3',
    description: '#202 order, "mushroom burger" was "Served"',
    date: '5 Jan 2024',
    time: '18:07',
    isRead: true,
  },
];

export default function NotificationsPage() {
  const [notifications] = useState(SAMPLE_NOTIFICATIONS);
  const [sortBy, setSortBy] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [bannerSoundMode, setBannerSoundMode] = useState('bannerAndSound');
  const [settings, setSettings] = useState({
    playRepeatedly: false,
    tableNotifications: true,
    orderNotifications: true,
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <div className="min-h-screen">
      <div className="p-3">
        <div className="flex items-center gap-2 py-5">
          <h1 className={cn(fontTitle1)}>Notifications</h1>
        </div>

         <div className="flex gap-2">
          <NotificationsList
            notifications={notifications}
            unreadCount={unreadCount}
            sortBy={sortBy}
            onSortChange={setSortBy}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />

          <NotificationSettings
            bannerSoundMode={bannerSoundMode}
            onBannerSoundModeChange={setBannerSoundMode}
            playRepeatedly={settings.playRepeatedly}
            onPlayRepeatedlyChange={(value) =>
              setSettings({ ...settings, playRepeatedly: value })
            }
            tableNotifications={settings.tableNotifications}
            onTableNotificationsChange={(value) =>
              setSettings({ ...settings, tableNotifications: value })
            }
            orderNotifications={settings.orderNotifications}
            onOrderNotificationsChange={(value) =>
              setSettings({ ...settings, orderNotifications: value })
            }
          />
        </div>
      </div>
    </div>
  );
} 