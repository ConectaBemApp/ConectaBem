'use client';

import FacebookSign from './FacebookSign';
import { GoogleSign } from './GoogleSign';

export const SocialNetwork = () => {
  return (
    <div className="flex flex-col gap-6">
      <GoogleSign />

      <FacebookSign />
    </div>
  );
};
