import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/Button';

export default {
  title: 'Introduction',
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => <Button />;
