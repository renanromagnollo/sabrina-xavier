import Image from 'next/image';
import styled from 'styled-components';
import { ButtonUnselected } from '../../Buttons/ButtonUnselected';
import { slugCreator } from '@/utils/slugCreator';
import Link from 'next/link';
import { Post } from '@/domain';

interface DicasCardProps {
  item?: Post;
}

const CardBox = styled.div`
  width: 290px;
  height: 330px;
  overflow: hidden;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.light.default};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  box-shadow: 2px 2px 8px 1px rgba(0, 0, 0, 0.4);
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 10px;
  gap: 10px;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

const ButtonArea = styled.div`
  height: 100%;
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const ImageArea = styled.div`
  position: relative;
  height: 215px;
`;

const TagArea = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1000;
  overflow: hidden;
  opacity: 0.9;
`;

const TagType = styled.h6`
  left: 10px;
  font-weight: bold;
  bottom: -185px;
  position: relative;
  z-index: 1000;
  color: ${({ theme }) => theme.colors.light.default};
`;

const TagBG = styled.div<{ name: string }>`
  --color-default: ${({ name, theme }) =>
    name === 'Make' ? theme.colors.secundary.dark : theme.colors.primary.dark};
  width: 60%;
  height: 30%;
  bottom: -160px;
  left: -30px;
  position: relative;
  z-index: 50;
  color: ${({ theme }) => theme.colors.light.default};
  background-color: var(--color-default);
  transform: rotate(30deg);
`;

const Title = styled.h6`
  color: ${({ theme }) => theme.colors.secundary.dark};
  text-align: center;
`;

export function DicasCard({ item }: DicasCardProps) {
  const slug = item?.slug ?? slugCreator(item?.title);
  return (
    <Link href={`/dicas/${slug}`}>
      <CardBox>
        <ImageArea>
          <Image
            width={290}
            height={215}
            alt="dica-image"
            src={item?.image ?? 'http://picsum.photos//290/215'}
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </ImageArea>
        <Content>
          <Title>{item?.title ?? 'Title'}</Title>
        </Content>
        <ButtonArea>
          <ButtonUnselected color={'primary'}>
            Leia
          </ButtonUnselected>
        </ButtonArea>
      </CardBox>
    </Link>
  );
}
