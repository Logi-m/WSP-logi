'use client';

import RadioButton from '@/components/radioButton';
import ToggleSwitch from '@/components/toggleSwitch';
import { cn } from '@/lib/utils';
import { fontBodyNormal, fontTitle1 } from '@/styles/typography';

interface NotificationSettingsProps {
  bannerSoundMode: string;
  onBannerSoundModeChange: (value: string) => void;
  playRepeatedly: boolean;
  onPlayRepeatedlyChange: (value: boolean) => void;
  tableNotifications: boolean;
  onTableNotificationsChange: (value: boolean) => void;
  orderNotifications: boolean;
  onOrderNotificationsChange: (value: boolean) => void;
}

export function NotificationSettings({
  bannerSoundMode,
  onBannerSoundModeChange,
  playRepeatedly,
  onPlayRepeatedlyChange,
  tableNotifications,
  onTableNotificationsChange,
  orderNotifications,
  onOrderNotificationsChange,
}: NotificationSettingsProps) {
  return (
    <div className="w-1/3 bg-white rounded-[20px] p-6 h-fit">
      <h2 className={cn(fontTitle1, "text-[24px] font-medium mb-8")}>Setting</h2>

      <div className="space-y-6 mb-8">
        <div className="flex items-center justify-between">
          <span className={cn(fontBodyNormal, "text-[#212121]")}>Banner and sound</span>
          <RadioButton
            selected={bannerSoundMode === 'bannerAndSound'}
            onClick={() => onBannerSoundModeChange('bannerAndSound')}
            size="large"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className={cn(fontBodyNormal, "text-[#212121]")}>Banner only</span>
          <RadioButton
            selected={bannerSoundMode === 'bannerOnly'}
            onClick={() => onBannerSoundModeChange('bannerOnly')}
            size="large"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className={cn(fontBodyNormal, "text-[#212121]")}>Sound only</span>
          <RadioButton
            selected={bannerSoundMode === 'soundOnly'}
            onClick={() => onBannerSoundModeChange('soundOnly')}
            size="large"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className={cn(fontBodyNormal, "text-[#212121]")}>None</span>
          <RadioButton
            selected={bannerSoundMode === 'none'}
            onClick={() => onBannerSoundModeChange('none')}
            size="large"
          />
        </div>
      </div>

      <div className="h-px bg-[#F8F8F8] my-8" />

      <div className="space-y-6">
        <ToggleSwitch
          label="Play Repeatedly"
          checked={playRepeatedly}
          onChange={onPlayRepeatedlyChange}
          labelPosition="left"
          labelClassName="text-[#212121]"
        />
        <ToggleSwitch
          label="Table Notifications"
          checked={tableNotifications}
          onChange={onTableNotificationsChange}
          labelPosition="left"
          labelClassName="text-[#212121]"
        />
        <ToggleSwitch
          label="Order Notifications"
          checked={orderNotifications}
          onChange={onOrderNotificationsChange}
          labelPosition="left"
          labelClassName="text-[#212121]"
        />
      </div>
    </div>
  );
} 