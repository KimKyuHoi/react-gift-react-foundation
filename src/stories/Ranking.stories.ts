import { Meta } from '@storybook/react';

import { Ranking, IRankingProps } from './Ranking';

const rankingMeta: Meta = {
  title: 'Example/Ranking',
  component: Ranking,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default rankingMeta;

type Story = {
  args: Partial<IRankingProps>;
};

export const Default: Story = {
  args: {
    rankingIndex: 1,
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '카카오 프렌즈 특별 한정판',
    subtitle: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },
};
