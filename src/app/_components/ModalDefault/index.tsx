'use client'

import { ModalDefaultContext } from '@/context/modal-default-context';
import { Portfolio } from '@/domain';
import { cleanText, extractHygraphRichText } from '@/utils';
import Image from 'next/image';
import { useCallback, useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20000;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  max-width: 90%;
  max-height: 90%;
`;

const Text = styled.h2`
  font-size: 3.5rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.light.default};
  
  @media (max-width: 768px) {
    font-size: 2.7rem;
  }
`;

const InstagramProfile = styled.h5`
  color: ${({ theme }) => theme.colors.secundary.default};
`;

export function ModalDefault() {
  const { modalItem, setModalItem } = useContext(ModalDefaultContext);
  const [modalOpened, setModalOpened] = useState(false);
  const [clickedImage, setClickedImage] = useState<Portfolio | null>(null);
  const [textToModal, setTextToModal] = useState<string>('')

  useEffect(() => {
    if (modalItem !== null) {
      setClickedImage(modalItem)
      setModalOpened(true)

    }
  }, [modalItem]);

  useEffect(() => {
    if (!clickedImage?.text) return;
    setTextToModal(cleanText(extractHygraphRichText(clickedImage.text)));
  }, [clickedImage]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const closeModal = useCallback(() => {
    setModalOpened(false);
    setClickedImage(null);
    setModalItem(null)
  }, [setModalItem])

  const mediaRender = useCallback((item: Portfolio) => {
    return item.video?.url ? (
      <video controls autoPlay loop height="80%">
        <source src={item.video.url} type="video/mp4" />
      </video>
    ) : (
      <Image
        src={item.image}
        alt="image-modal"
        width={500}
        height={500}
        sizes='fill'
        quality={90}
        style={{ objectFit: 'cover', objectPosition: 'top' }}
      />
    );
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setModalOpened(false);
      setClickedImage(null);
      setModalItem(null);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [setModalItem]); // Mantendo apenas `setModalItem`, que vem do contexto

  return (
    modalOpened && (
      <ContainerModal onClick={closeModal}>
        {clickedImage && (
          <ContainerContent onClick={(e) => {
            e.stopPropagation()
            closeModal()
          }
          }>
            {mediaRender(clickedImage)}
            {/* <Text>{cleanText(clickedImage.text)}</Text> */}
            <Text>{textToModal}</Text>
            {/* <RichTextHygraph content={clickedImage.text} /> */}
            <InstagramProfile>
              {textToModal?.match(/@[\.a-z0-9_-]{2,}/g)}
            </InstagramProfile>
          </ContainerContent>
        )}
      </ContainerModal>
    )
  );
}
