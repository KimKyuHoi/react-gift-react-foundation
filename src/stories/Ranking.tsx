import styled from 'styled-components';

export interface IRankingProps {
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

const GoodsItemStyles = styled.div<IRankingProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 160px;
`;

const GoodsRanking = styled.div<IRankingProps>`
  color: #fff;
  font-weight: 600;
  border-radius: 10px;
  background-color: #fd7363;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 14px;
  left: 14px;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GoodsItemImage = styled.img<IRankingProps>`
  width: 160px;
  height: 160px;
  position: relative;
  object-fit: cover;
`;

const GoodsContentWrapper = styled.div<IRankingProps>`
  padding: 12px 0px 0px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const GoodsTitle = styled.span<IRankingProps>`
  color: #ababab;
  font-size: 14px;
  margin: 0px 0px 4px;
`;

const GoodsSubTitle = styled.span<IRankingProps>`
  color: #000;
  font-size: 14px;
`;

const GoodsAmount = styled.span<IRankingProps>`
  font-weight: 700;
  font-size: 20px;
  padding: 8px 0px 0px;
`;

export const Ranking = ({
  imageSrc,
  title,
  subtitle,
  amount,
  rankingIndex,
  ...props
}: IRankingProps) => {
  return (
    <ItemWrapper>
      <GoodsItemStyles {...props}>
        <GoodsRanking>{rankingIndex}</GoodsRanking>
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
