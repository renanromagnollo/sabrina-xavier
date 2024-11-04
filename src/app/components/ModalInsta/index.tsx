'use client'

import { ModalInstagramContext } from '@/context/modal-instagram-context';
import { InstagramPostProps } from '@/types/post-instagram-types';
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
  justify-content: space-around;
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

export function ModalInsta() {
  const { modalItem, setModalItem } = useContext(ModalInstagramContext);
  const [modalOpened, setModalOpened] = useState(false);
  const [clickedImage, setClickedImage] = useState<InstagramPostProps | null>(null);

  // Função para exibir conteúdo no modal
  function showOnModal(post: InstagramPostProps) {
    setClickedImage(post);
    setModalOpened(true);
  }

  // Type Guard para verificar se modalItem é do tipo InstagramPostProps
  function isInstagramPostProps(item: any): item is InstagramPostProps {
    return (
      item && typeof item === 'object' && 'media_url' in item && 'media_type' in item
    );
  }

  // Verifica se modalItem é válido e chama a função para abrir o modal
  useEffect(() => {
    if (isInstagramPostProps(modalItem)) {
      console.log(modalItem);
      showOnModal(modalItem);
    }
  }, [modalItem]);

  // Função para fechar o modal
  function closeModal() {
    setModalOpened(false);
    setClickedImage(null);
    // setModalItem({
    //   media_type: '',
    //   timestamp: '',
    //   media_url: '',
    //   thumbnail_url: '',
    //   caption: '',
    //   permalink: '',
    //   id: '',
    // });
  }

  // Função para renderizar a mídia do post (imagem ou vídeo)
  function mediaRender(item: InstagramPostProps) {
    switch (item.media_type) {
      case 'IMAGE':
      case 'CAROUSEL_ALBUM':
        return (
          <Image
            src={item.media_url}
            alt="image-instagram"
            width={500}
            height={500}
            style={{ objectFit: 'cover', objectPosition: 'top' }}
          />
        );
      case 'VIDEO':
        return (
          <video controls autoPlay loop height={'80%'}>
            <source src={item.media_url} type="video/mp4" />
          </video>
        );
      default:
        return null;
    }
  }

  // Fecha o modal ao rolar a página
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
          <ContainerContent onClick={(e) => e.stopPropagation()}>
            {mediaRender(clickedImage)}
            <Text>{cleanText(clickedImage.caption)}</Text>
            <InstagramProfile>
              {clickedImage.caption?.match(/@[\.a-z0-9_-]{2,}/g)}
            </InstagramProfile>
          </ContainerContent>
        )}
      </ContainerModal>
    )
  );
}
