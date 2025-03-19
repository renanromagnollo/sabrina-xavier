'use client'

import { ModalDefaultContext } from '@/context/modal-default-context';
import { Portfolio } from '@/domain';
import { extractHygraphRichText } from '@/utils';
import { cleanText } from '@/utils/cleanText';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
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
`;

const InstagramProfile = styled.h5`
  color: ${({ theme }) => theme.colors.secundary.default};
`;

export function ModalDefault() {
  const { modalItem, setModalItem } = useContext(ModalDefaultContext);
  const [modalOpened, setModalOpened] = useState(false);
  const [clickedImage, setClickedImage] = useState<Portfolio | null>(null);

  function showOnModal(post: Portfolio) {
    const richtextExtracted = extractHygraphRichText(post.text)
    setClickedImage({
      ...post,
      text: richtextExtracted
    });
    setModalOpened(true);
  }

  // function isPortfolio(item: any): item is Portfolio {
  //   return item && typeof item === 'object' && 'typeService' in item && 'video' in item;
  // }

  useEffect(() => {
    if (modalItem !== null) {
      showOnModal(modalItem)
      console.log(modalItem)
    }
  }, [modalItem]);

  function closeModal() {
    setModalOpened(false);
    setClickedImage(null);
    setModalItem(null)
  }

  function mediaRender(item: Portfolio) {
    if (!item.video || item.video.length === 0) {
      return (
        <Image
          src={item.image}
          alt="image-modal"
          width={500}
          height={500}
          style={{ objectFit: 'cover', objectPosition: 'top' }}
        />
      );
    } else {
      return (
        <video controls autoPlay loop height={'80%'}>
          <source src={item.video.url} type="video/mp4" />
        </video>
      );
    }
  }

  useEffect(() => {
    const handleScroll = () => closeModal();
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
            <Text>{clickedImage.text}</Text>
            <InstagramProfile>
              {clickedImage.caption?.match(/@[\.a-z0-9_-]{2,}/g)}
            </InstagramProfile>
          </ContainerContent>
        )}
      </ContainerModal>
    )
  );
}
