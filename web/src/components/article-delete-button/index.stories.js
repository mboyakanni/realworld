import { expect } from '@storybook/jest';
import { userEvent, waitFor, within } from '@storybook/testing-library';
import { ArticleDeleteButton } from '.';
import { buildAuthorizationResult } from '../../utils/storybook';

const meta = {
  component: ArticleDeleteButton,
  args: {
    slug: 'a-simple-title',
    canDelete: buildAuthorizationResult(),
  },
  argTypes: {
    onDelete: { action: true },
  },
};

export default meta;

export const AsGuest = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const elements = canvas.queryAllByRole('button');

    await waitFor(() => expect(elements).toHaveLength(0));
  },
};

export const AsAuthor = {
  args: {
    canDelete: buildAuthorizationResult({ value: true }),
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);

    await userEvent.click(canvas.getByRole('button'));

    await waitFor(() => expect(args.onDelete).toHaveBeenCalled());
  },
};
