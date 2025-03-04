'use client';

import { NotificationsList } from '@/components/notifications/NotificationsList';
import { NotificationSettings } from '@/components/notifications/NotificationSettings';
import { cn } from '@/lib/utils';
import { fontTitle1, fontHeadline, fontCaptionBold, fontCaptionNormal, fontBodyNormal } from '@/styles/typography';
import { Bell, Search, X } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/badge';
import { CustomSelect } from '@/components/select';
import SearchInput from '@/components/searchInput';
import { MainButton } from '@/components/mainButton';
import RadioButton from '@/components/radioButton';
import ToggleSwitch from '@/components/toggleSwitch';

interface NotificationFilterOption {
  value: string;
  label: string;
}

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
    isRead: true,
  },{
    id: '202-2',
  description: '#164 order for "Table A101" Placed',
    date: '6 Jan 2024',
    time: '10:59',
    isRead: true,
  },{
    id: '202',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: true,
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
  const [displayedNotifications, setDisplayedNotifications] = useState(notifications.slice(0, 15));
  const [isLoading, setIsLoading] = useState(false);
  const [sortBy, setSortBy] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [bannerSoundMode, setBannerSoundMode] = useState('bannerAndSound');
  const [settings, setSettings] = useState({
    playRepeatedly: false,
    tableNotifications: true,
    orderNotifications: true,
  });

  const unreadCount = notifications.filter(n => !n.isRead).length;
  const hasMoreNotifications = notifications.length > displayedNotifications.length;

  const handleLoadMore = () => {
    setIsLoading(true);
    // Simulate API call delay
    setTimeout(() => {
      const currentLength = displayedNotifications.length;
      const newNotifications = notifications.slice(currentLength, currentLength + 15);
      setDisplayedNotifications([...displayedNotifications, ...newNotifications]);
      setIsLoading(false);
    }, 1000);
  };

  const notificationFilterOptions: NotificationFilterOption[] = [
    { value: 'all', label: 'All' },
    { value: 'read', label: 'Read' },
    { value: 'unread', label: 'Unread' },
  ];

  const handleSearchIconClick = () => {
    setIsSearchVisible(true);
  };

  const handleCloseSearch = () => {
    setIsSearchVisible(false);
    setSearchQuery('');
  };

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <div className="w-full h-[88px] px-4 py-6">
        <div className="flex items-center gap-2">
          <h1 className={cn(fontTitle1, "text-black-100")}>Notifications</h1>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative flex gap-5 p-4 items-start">
        {/* Left Container - Notifications List */}
        <div className="flex-1 rounded-[26px] bg-white-60 p-4">
          {/* List Header */}
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h2 className={cn(fontHeadline, "text-black-100")}>Unread</h2>
              <Badge count={unreadCount} variant="black" size="small" />
            </div>
            <div className="flex items-center gap-4">
              <CustomSelect
                options={notificationFilterOptions}
                sortByText="Sort by"
                onOptionSelect={(option: NotificationFilterOption) => setSortBy(option.value)}
                defaultValue={notificationFilterOptions[0]}
                selectWidth="w-[180px]"
              />
              <SearchInput
                query={searchQuery}
                setQuery={setSearchQuery}
                onFocusChange={setIsSearchVisible}
                width="w-[240px]"
                className="transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Notifications Table */}
          <div className="w-full">
            <table className="w-full">
              <thead>
                <tr className="bg-black/5 rounded-[26px] overflow-hidden">
                  <th className={cn(
                    fontCaptionBold, 
                    "text-black-60 text-left py-2 px-4 first:rounded-l-[26px]"
                  )}>Description</th>
                  <th className={cn(
                    fontCaptionBold, 
                    "text-black-60 text-left py-2 px-4"
                  )}>Date</th>
                  <th className={cn(
                    fontCaptionBold, 
                    "text-black-60 text-left py-2 px-4 last:rounded-r-[26px]"
                  )}>Time</th>
                </tr>
              </thead>
              <tbody>
                {displayedNotifications.map((notification, index) => (
                  <tr key={`${notification.id}-${index}`}>
                    <td className={cn(
                      fontBodyNormal,
                      "py-2 px-4 border-b border-black-10",
                      notification.isRead ? "text-black-100" : "text-black-40"
                    )}>
                      {notification.description}
                    </td>
                    <td className={cn(
                      fontCaptionNormal,
                      "py-2 px-4 border-b border-black-10",
                      notification.isRead ? "text-black-60" : "text-black-40"
                    )}>
                      {notification.date}
                    </td>
                    <td className={cn(
                      fontCaptionNormal,
                      "py-2 px-4 border-b border-black-10",
                      notification.isRead ? "text-black-60" : "text-black-40"
                    )}>
                      {notification.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {hasMoreNotifications && (
              <div className="mt-4 flex">
                <MainButton 
                  variant="primary" 
                  className="px-8"
                  onClick={handleLoadMore}
                  disabled={isLoading}
                >
                  {isLoading ? "Loading more..." : "Load More"}
                </MainButton>
              </div>
            )}
          </div>
        </div>

        {/* Right Container - Settings */}
        <div className="w-[360px] rounded-[26px] bg-white-60 p-6 sticky top-[104px]">
          <h2 className={cn(fontTitle1, "text-black-100 mb-7")}>Setting</h2>
          
          <div className="flex flex-col gap-8">
            {/* Banner and Sound Settings */}
            <div className="flex flex-col gap-6">
              <label className="flex items-center justify-between cursor-pointer">
                <span className={cn(fontBodyNormal, "text-black-100")}>Banner and sound</span>
                <div className="w-6 h-6">
                  <RadioButton
                    selected={bannerSoundMode === 'bannerAndSound'}
                    onClick={() => setBannerSoundMode('bannerAndSound')}
                  />
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className={cn(fontBodyNormal, "text-black-100")}>Banner only</span>
                <div className="w-6 h-6">
                  <RadioButton
                    selected={bannerSoundMode === 'bannerOnly'}
                    onClick={() => setBannerSoundMode('bannerOnly')}
                  />
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className={cn(fontBodyNormal, "text-black-100")}>Sound only</span>
                <div className="w-6 h-6">
                  <RadioButton
                    selected={bannerSoundMode === 'soundOnly'}
                    onClick={() => setBannerSoundMode('soundOnly')}
                  />
                </div>
              </label>
              <label className="flex items-center justify-between cursor-pointer">
                <span className={cn(fontBodyNormal, "text-black-100")}>None</span>
                <div className="w-6 h-6">
                  <RadioButton
                    selected={bannerSoundMode === 'none'}
                    onClick={() => setBannerSoundMode('none')}
                  />
                </div>
              </label>
            </div>

            {/* Divider */}
            <div className="h-[1px] bg-black-10" />

            {/* Toggle Switches */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between w-full">
                <span className={cn(fontBodyNormal, "text-black-100")}>Play Repeatedly</span>
                <ToggleSwitch
                  label="Play Repeatedly"
                  checked={settings.playRepeatedly}
                  onChange={(checked: boolean) => setSettings({ ...settings, playRepeatedly: checked })}
                  labelClassName="sr-only"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span className={cn(fontBodyNormal, "text-black-100")}>Table Notifications</span>
                <ToggleSwitch
                  label="Table Notifications"
                  checked={settings.tableNotifications}
                  onChange={(checked: boolean) => setSettings({ ...settings, tableNotifications: checked })}
                  labelClassName="sr-only"
                />
              </div>
              <div className="flex items-center justify-between w-full">
                <span className={cn(fontBodyNormal, "text-black-100")}>Order Notifications</span>
                <ToggleSwitch
                  label="Order Notifications"
                  checked={settings.orderNotifications}
                  onChange={(checked: boolean) => setSettings({ ...settings, orderNotifications: checked })}
                  labelClassName="sr-only"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 