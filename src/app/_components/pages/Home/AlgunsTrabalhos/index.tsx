'use client';

import styled from 'styled-components';
import { useHygraphQuery } from '@/hooks/useHygraphQuery';
import { TitleSection } from '@/app/_components/TitleSection';
import { LoadingCircle } from '@/app/_components/Loadings/LoadingCircle';
import { Carrousel } from '@/app/_components/Carrousel';
import { Portfolio } from '@/domain';


const ContainerTrabalhos = styled.section`
  width: 100vw;
  position: relative;
  padding: 30px 0;
  margin: 20px 0;
  background-color: ${({ theme }) => theme.colors.dark.light};
`;

const BGContainer = styled.div`
  position: absolute;
  top: 0;
  z-index: 1;
  width: 100vw;
  height: 70%;
  background-color: ${({ theme }) => theme.colors.primary.light};
`;

const ContentJobs = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  margin-top: 10px;
  z-index: 20;
  background-color: transparent;
`;

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};
`;

export function AlgunsTrabalhos() {
  const rotate = ['-4deg', '3deg', '-6deg'];

  const { data: portfolio, isFetching } = useHygraphQuery("portfolio");

  return (
    <ContainerTrabalhos>
      <BGContainer />

      <ContentJobs>
        <TitleContainer>
          <TitleSection
            title="Alguns Trabalhos"
            subtitle="Veja o resultado de alguns trabalhos realizados"
          />
        </TitleContainer>
        {isFetching ? (
          <div
            style={{
              height: '400px',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              zIndex: 20000,
            }}
          >
            <LoadingCircle />
          </div>
        ) : (
          <Carrousel portfolio={portfolio as Portfolio[] | undefined} />
        )}
      </ContentJobs>
    </ContainerTrabalhos>
  );
}
