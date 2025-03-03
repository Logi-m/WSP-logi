'use client';

import { Badge } from '@/components/badge';
import SearchInput from '@/components/searchInput';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { cn } from '@/lib/utils';
import { fontBodyNormal, fontCaptionBold, fontHeadline } from '@/styles/typography';

const NOTIFICATIONS = [
  {
    id: '202-1',
    description: '#202 order, "mushroom burger" was "accepted"',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: false,
  },
  {
    id: '588-1',
    description: '#588 order, "Soda" was Ready',
    date: '6 Jan 2024',
    time: '11:11',
    isRead: false,
  },
  {
    id: '164-1',
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
  {
    id: '202-4',
    description: '#202 order, "mushroom burger" was "Served"',
    date: '5 Jan 2024',
    time: '17:55',
    isRead: true,
  },
  {
    id: '202-5',
    description: '#202 order was Completed',
    date: '5 Jan 2024',
    time: '17:17',
    isRead: true,
  },
  {
    id: '164-2',
    description: '#164 order for "Table A101" Placed',
    date: '5 Jan 2024',
    time: '17:01',
    isRead: true,
  },
  {
    id: '164-3',
    description: '#164 order for "Table A101" Placed',
    date: '5 Jan 2024',
    time: '16:24',
    isRead: true,
  },
  {
    id: '202-6',
    description: '#202 order was Completed',
    date: '5 Jan 2024',
    time: '16:20',
    isRead: true,
  },
  {
    id: '588-2',
    description: '#588 order, "Soda" was Ready',
    date: '5 Jan 2024',
    time: '16:10',
    isRead: true,
  },
  {
    id: '588-3',
    description: '#588 order, "Soda" was Ready',
    date: '5 Jan 2024',
    time: '16:10',
    isRead: true,
  },
  {
    id: '202-7',
    description: '#202 order, mushroom burger was accepted',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: true,
  },
  {
    id: '588-4',
    description: '#588 order, "Soda" was Ready',
    date: '5 Jan 2024',
    time: '16:10',
    isRead: true,
  },
  {
    id: '202-8',
    description: '#202 order, mushroom burger was accepted',
    date: '6 Jan 2024',
    time: '11:32',
    isRead: true,
  }
];

interface Notification {
  id: string;
  description: string;
  date: string;
  time: string;
  isRead: boolean;
}

interface NotificationsListProps {
  notifications?: Notification[];
  unreadCount: number;
  sortBy: string;
  onSortChange: (value: string) => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

export function NotificationsList({
  notifications = NOTIFICATIONS,
  unreadCount,
  sortBy,
  onSortChange,
  searchQuery,
  onSearchChange,
}: NotificationsListProps) {
  return (
    <div className="w-2/3 rounded-[20px] p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className={cn(fontHeadline, "text-black-100")}>Unread</span>
          <Badge size="small" variant="black" count={unreadCount} />
        </div>

        <div className="flex items-center bg-[#F8F8F8] rounded-[100px] h-10">
          <Select value={sortBy} onValueChange={onSortChange}>
            <SelectTrigger className="min-w-[60px] border-0 bg-transparent shadow-none h-10 px-3">
              <SelectValue placeholder="All" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              <SelectItem value="unread">Unread</SelectItem>
            </SelectContent>
          </Select>

          <div className="h-full px-3 flex items-center border-l border-[#E0E0E0]">
            <SearchInput 
              query={searchQuery}
              setQuery={onSearchChange}
              className="w-5 h-5" 
            />
          </div>
        </div>
      </div>

      <div className="flex px-4 py-2 mb-2 mt-6">
        <div className={cn(fontCaptionBold, "w-[75%] text-[#424242]")}>Description</div>
        <div className={cn(fontCaptionBold, "w-[15%] text-[#424242]")}>Date</div>
        <div className={cn(fontCaptionBold, "w-[10%] text-[#424242]")}>Time</div>
      </div>

      <div className="overflow-auto max-h-[calc(100vh-300px)]">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={cn(
              "flex py-3 px-4 border-b border-[#F8F8F8]",
              fontBodyNormal,
              notification.isRead ? "text-[#9E9E9E]" : "text-[#212121]"
            )}
          >
            <div className="w-[75%]">{notification.description}</div>
            <div className="w-[15%]">{notification.date}</div>
            <div className="w-[10%]">{notification.time}</div>
          </div>
        ))}
      </div>

      <button className="w-full mt-6 py-3 text-center bg-[#212121] rounded-full text-white font-medium text-[14px]">
        Load More
      </button>
    </div>
  );
} 