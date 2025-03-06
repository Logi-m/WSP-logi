'use client';

import { useRef, useState } from 'react';
import { CustomSelect } from '@/components/select';
import SearchInput from '@/components/searchInput';
import { Activity, mockActivities } from './@mockData';
import { cn } from '@/lib/utils';

interface ActivitiesProps {
  className?: string;
}

export function Activities({ className }: ActivitiesProps) {
  const [sortBy, setSortBy] = useState<{ value: string; label: string }>({
    value: 'newest',
    label: 'Newest First'
  });
  const [searchQuery, setSearchQuery] = useState('');
  const activitiesRef = useRef<HTMLDivElement>(null);

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' }
  ];

  const filteredActivities = mockActivities
    .filter(activity => 
      activity.summary.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`);
      const dateB = new Date(`${b.date} ${b.time}`);
      return sortBy.value === 'newest' 
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

  return (
    <div className={cn("w-2/3 md:w-full", className)}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">Activities</h3>
        <div className="flex items-center gap-4">
          <CustomSelect
            options={sortOptions}
            sortByText="Sort by"
            onOptionSelect={setSortBy}
            defaultValue={sortBy}
            menuPosition="right"
            selectWidth="w-40"
          />
          <SearchInput
            query={searchQuery}
            setQuery={setSearchQuery}
            className="w-64"
          />
        </div>
      </div>

      <div 
        ref={activitiesRef}
        className="space-y-4 max-h-[600px] overflow-y-auto pr-2"
      >
        {filteredActivities.map((activity) => (
          <ActivityItem key={activity.id} activity={activity} />
        ))}
      </div>
    </div>
  );
}

function ActivityItem({ activity }: { activity: Activity }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border border-black-background-10 rounded-lg hover:bg-black-background-5 transition-colors">
      <p className="text-sm font-medium">{activity.summary}</p>
      <div className="flex items-center gap-4">
        <span className="text-sm text-black-background-60">
          {activity.date}
        </span>
        <span className="text-sm text-black-background-60">
          {activity.time}
        </span>
      </div>
    </div>
  );
} 