import React from 'react';
import { ArticleForm } from '.';
import { action } from '@storybook/addon-actions';
import { withApolloClient } from '../../utils/storybook';

export default {
  title: 'Forms/ArticleForm',
  component: ArticleForm,
  decorators: [withApolloClient]
};

export const renders = () => <ArticleForm onSubmit={action('onSubmit')} />;
