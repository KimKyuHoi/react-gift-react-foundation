import { Meta } from '@storybook/react';

import { GoodsItem, IGoodsItemProps } from './GoodsItem';

const goodsItemMeta: Meta = {
  title: 'Example/GoodsItem',
  component: GoodsItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default goodsItemMeta;

type Story = {
  args: Partial<IGoodsItemProps>;
};

export const Default: Story = {
  args: {
    imageSrc:
      'https://t1.kakaocdn.net/friends/www/talk/kakaofriends_talk_2018.png',
    title: '카카오 프렌즈 특별 한정판',
    subtitle: '[특가] 카카오 프렌즈 특별 한정판 브라이트 쿠션',
    amount: 10000,
  },
};
