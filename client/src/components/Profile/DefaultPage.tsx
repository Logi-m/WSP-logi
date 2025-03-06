'use client';

import { useState } from 'react';
import { CustomSelect } from '@/components/select';
import { MainButton } from '@/components/mainButton';
import { cn } from '@/lib/utils';

interface DefaultPageProps {
  className?: string;
}

export function DefaultPage({ className }: DefaultPageProps) {
  const [defaultPage, setDefaultPage] = useState<{ value: string; label: string }>({
    value: 'kitchen',
    label: 'Kitchen Display'
  });

  const pageOptions = [
    { value: 'kitchen', label: 'Kitchen Display' },
    { value: 'dashboard', label: 'Dashboard' },
    { value: 'orders', label: 'Orders' }
  ];

  const handleSetDefault = () => {
    // Mock implementation - would typically call an API
    console.log('Setting default page to:', defaultPage);
  };

  return (
    <div className={cn("bg-white p-6 rounded-2xl border border-black-background-10", className)}>
      <h3 className="text-xl font-semibold mb-4">Default Page After Login</h3>
      <div className="space-y-4">
        <CustomSelect
          options={pageOptions}
          sortByText="Select page"
          onOptionSelect={setDefaultPage}
          defaultValue={defaultPage}
          menuPosition="left"
          selectWidth="w-full"
        />
        <MainButton 
          variant="secondary" 
          className="w-full"
          onClick={handleSetDefault}
        >
          Set as default
        </MainButton>
      </div>
    </div>
  );
} 