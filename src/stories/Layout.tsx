import styled from 'styled-components';

export interface ILayoutProps {
  flexDirection?: 'row' | 'column';
  justifyContent?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around';
  alignItems?: 'center' | 'flex-start' | 'flex-end' | 'baseline' | 'stretch';

  children: React.ReactNode;

  maxWidth?: string;
}

const LayoutStyles = styled.div<ILayoutProps>`
  display: flex;
  flex-direction: ${({ flexDirection }) => flexDirection || 'row'};
  justify-content: ${({ justifyContent }) => justifyContent || 'center'};
  align-items: ${({ alignItems }) => alignItems || 'center'};
  max-width: ${({ maxWidth }) => maxWidth || 'none'};

  width: 500px;
  height: 300px;

  background-color: #f0f0f0;
`;

export const Layout = ({
  flexDirection,
  justifyContent,
  alignItems,
  children,
  maxWidth,
  ...props
}: ILayoutProps) => {
  return (
    <LayoutStyles
      flexDirection={flexDirection}
      justifyContent={justifyContent}
      alignItems={alignItems}
      maxWidth={maxWidth}
      {...props}
    >
      {children}
    </LayoutStyles>
  );
};

export default Layout;
