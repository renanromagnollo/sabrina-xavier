'use client'

import styled from 'styled-components';
import { CardMakeup } from './CardMakeup';
import { useEffect, useRef, useState } from 'react';
import { randomInstaPosts } from '@/utils/randomInstaPosts';
import { useObserver } from '@/hooks/useObserver';
import { TitleSection } from '@/app/components/TitleSection';
import { useInstagramQuery } from '@/hooks/useInstagramQuery';
import { InstagramPostProps } from '@/types/post-instagram-types';
import { useHygraphQuery } from '@/hooks/useHygraphQuery';
import { Portfolio } from '@/domain';

interface MakeUpProps { }

const SectionArea = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  padding: 50px 0;
  background-color: ${({ theme }) => theme.colors.primary.default};
`;

const Container = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    width: 80%;
  }
`;
const TextArea = styled.div`
  width: 50%;
  color: ${({ theme }) => theme.colors.light.default};
  text-shadow: 2px 2px 1px ${({ theme }) => theme.colors.primary.dark};

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 40px;

    * {
      animation: show 1s ease-out forwards;
    }

    @media (max-width: 480px) {
      h3 {
        text-align: center;
        font-size: 2.6rem;
      }
    }
  }

  h3 {
    color: ${({ theme }) => theme.colors.light.default};
  }

  @keyframes show {
    from {
      margin-top: -20px;
      opacity: 0;
    }
  }
`;

const ImagesArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  gap: 40px;
`;
export function MakeUp(props: MakeUpProps) {
  // const { data: instagramPosts } = useInstagramQuery();
  const { data: portfolio, isFetching } = useHygraphQuery("portfolio");
  // const { isVisibled, setElement } = useObserver();
  const [itemsSelected, setItemsSelected] = useState<Portfolio[]>([])

  // const textRef = useRef<HTMLDivElement>(null);
  // const makesPortfolio = instagramPosts?.filter(
  //   (post: InstagramPostProps) =>
  //     post?.caption?.includes('make') && post.media_type !== 'VIDEO'
  // );



  // let selectedRandomPosts = randomInstaPosts(makesPortfolio, 2);

  // useEffect(() => {
  //   setElement(textRef);
  //   console.log(portfolio)
  // }, [textRef, setElement, portfolio]); // Incluindo setElement como dependência

  useEffect(() => {
    const makesPortfolio: Portfolio[] = portfolio?.filter(
      (post: Portfolio) => post?.typeService?.some(service => service.name === 'Make')
    )
    const selectedRandomPosts = randomInstaPosts(makesPortfolio, 2);
    if (selectedRandomPosts) setItemsSelected(selectedRandomPosts)
  }, [portfolio])

  return (
    <SectionArea>
      <Container>
        <TextArea>
          {!isFetching && (
            <div style={{}}>
              <TitleSection title="Make Up" />
              <h3>
                &quot;Realce sua beleza natural com maquiagens e sobrancelhas perfeitas
                para você.&quot; {/* Escapando as aspas */}
              </h3>
            </div>
          )}
        </TextArea>
        <ImagesArea>
          {itemsSelected?.map((post, i) => {
            let rotateDegree = i % 2 == 0 ? '5' : '3';
            return <CardMakeup key={i} post={post} rotate={rotateDegree} />;
          })}
        </ImagesArea>
      </Container>
    </SectionArea>
  );
}
