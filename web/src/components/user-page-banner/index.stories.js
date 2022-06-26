import { UserPageBanner } from '.';
import { buildAuthorizationResult } from '../../utils/storybook';

const meta = {
  component: UserPageBanner,
  args: {
    username: 'lifeiscontent',
  },
  argTypes: {
    onFollow: { action: true },
    onUnfollow: { action: true },
  },
};

export default meta;

export const AsGuest = {};

export const CanFollow = {};

CanFollow.args = {
  canFollow: buildAuthorizationResult({ value: true }),
};

export const CanUnfollow = {};

CanUnfollow.args = {
  canUnfollow: buildAuthorizationResult({ value: true }),
  followersCount: 1,
  viewerIsFollowing: true,
};

export const CanUpdate = {};

CanUpdate.args = {
  canUpdate: buildAuthorizationResult({ value: true }),
};
