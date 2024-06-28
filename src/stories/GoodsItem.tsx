import styled from 'styled-components';

export interface IGoodsItemProps {
  rankingIndex?: number;
  imageSrc?: string;
  subtitle?: string;
  title?: string;
  amount?: number;
}

const ItemWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: left;
`;

const GoodsItemStyles = styled.div<IGoodsItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
`;

const GoodsItemImage = styled.img<IGoodsItemProps>`
  width: 160px;
  height: 160px;
  object-fit: cover;
`;

const GoodsContentWrapper = styled.div<IGoodsItemProps>`
  padding: 12px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GoodsTitle = styled.span<IGoodsItemProps>`
  color: #ababab;
  font-size: 14px;
  margin: 0px 0px 4px;
`;

const GoodsSubTitle = styled.span<IGoodsItemProps>`
  color: #000;
  font-size: 14px;
`;

const GoodsAmount = styled.span<IGoodsItemProps>`
  font-weight: 700;
  font-size: 20px;
  padding: 8px 0px 0px;
`;

export const GoodsItem = ({
  imageSrc,
  title,
  subtitle,
  amount,
  ...props
}: IGoodsItemProps) => {
  return (
    <ItemWrapper>
      <GoodsItemStyles {...props}>
        <GoodsItemImage src={imageSrc} alt="" />
        <GoodsContentWrapper>
          <GoodsTitle>{title}</GoodsTitle>
          <GoodsSubTitle>{subtitle}</GoodsSubTitle>
          <GoodsAmount>{amount}원</GoodsAmount>
        </GoodsContentWrapper>
      </GoodsItemStyles>
    </ItemWrapper>
  );
};
