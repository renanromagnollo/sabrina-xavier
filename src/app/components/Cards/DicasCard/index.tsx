import Image from 'next/image';
import styled from 'styled-components';
import { ButtonTagType } from '../../Buttons/ButtonTagType';
import { HygraphPostProps } from '@/types/hygraph-types';
import { RichTextHygraph } from '@/utils/richtTextHygraph';
import { ButtonUnselected } from '../../Buttons/ButtonUnselected';
import { slugCreator } from '@/utils/slugCreator';
import Link from 'next/link';

interface DicasCardProps {
  item?: HygraphPostProps;
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
  /* background-color: pink; */
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
  const tagName = item?.typeServices[0].name;
  console.log(tagName);
  return (
    <Link href={`/dicas/${slug}`}>
      <CardBox>
        <ImageArea>
          <TagArea>
            <TagType>{tagName}</TagType>
            <TagBG name={tagName ?? ''} />
          </TagArea>
          <Image
            width={290}
            height={215}
            alt="dica-image"
            src={item?.image?.url ?? 'http://picsum.photos//290/215'}
            style={{ objectFit: 'cover', width: '100%' }}
          />
        </ImageArea>
        <Content>
          {/* <ButtonTagType type='hair'/> */}
          <Title>{item?.title ?? 'Title'}</Title>
          {/* <h5><RichTextHygraph content={item?.text?.raw}/></h5> */}
        </Content>
        <ButtonArea>
          <ButtonUnselected color={tagName === 'Make' ? 'secundary' : 'primary'}>
            Leia
          </ButtonUnselected>
        </ButtonArea>
      </CardBox>
    </Link>
  );
}
