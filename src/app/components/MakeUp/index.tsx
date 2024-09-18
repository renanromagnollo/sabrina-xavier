import styled from 'styled-components';
import { CardMakeup } from './CardMakeup';
import { useContext, useEffect, useRef } from 'react';
import { DataContext } from '@/context/data-context';
import { randomInstaPosts } from '@/utils/randomInstaPosts';
import { useObserver } from '@/hooks/useObserver';
import { TitleSection } from '@/app/components/TitleSection';
import { useInstagramQuery } from '@/hooks/useInstagramQuery';
import { useQueryInstagram } from '@/hooks/useQueryInstagram';

interface MakeUpProps {}

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
  // const { instagramPosts } = useContext(DataContext);
  const { data: instagramPosts } = useQueryInstagram();
  const { isVisibled, setElement } = useObserver();

  const textRef = useRef<HTMLDivElement>(null);
  const selectMakePosts = instagramPosts?.filter(
    (post) => post?.caption?.includes('make') && post.media_type !== 'VIDEO'
  );
  // console.log(ImagesMake.length)
  let selectedRandomPosts = randomInstaPosts(selectMakePosts, 2);

  useEffect(() => {
    setElement(textRef);
  }, [textRef]);

  return (
    <SectionArea>
      <Container>
        <TextArea ref={textRef}>
          {isVisibled && (
            <div style={{}}>
              <TitleSection title="Make Up" />
              <h3>
                "Realce sua beleza natural com maquiagens e sobrancelhas perfeitas para
                você."
              </h3>
            </div>
          )}
        </TextArea>
        <ImagesArea>
          {selectedRandomPosts?.map((post, i) => {
            let rotateDegree = i % 2 == 0 ? '5' : '3';
            return <CardMakeup key={i} post={post} rotate={rotateDegree} />;
          })}
          {/* <CardMakeup/>
                    <CardMakeup/> */}
        </ImagesArea>
      </Container>
    </SectionArea>
  );
}
