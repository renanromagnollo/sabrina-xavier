import { ModalInstagramContext } from '@/context/modal-instagram-context';
import { InstagramPostProps } from '@/types/post-instagram-types';
import { cleanText } from '@/utils/cleanText';
import Image from 'next/image';
import { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';

// interface ModalInstaProps {
//   isOpen: boolean;
//   post: InstagramPostProps | undefined;
//   closeModal: (opened: boolean) => void;
// }

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
  console.log(clickedImage);
  function showOnModal(post: InstagramPostProps) {
    setClickedImage(post);
    setModalOpened(true);
  }

  useEffect(() => {
    if (modalItem && Object.keys(modalItem).length > 0) {
      showOnModal(modalItem);
    }
  }, [modalItem]);

  function closeModal() {
    setModalOpened(false);
    setClickedImage(null);
    setModalItem(null);
  }

  function mediaRender(item: InstagramPostProps) {
    console.log(item);
    switch (item.media_type) {
      case 'IMAGE':
      case 'CAROUSEL_ALBUM':
        return (
          <Image
            src={item.media_url}
            alt="image-instagram"
            // sizes="(max-width: 168px) 90vw, (max-width: 1200px) 50vw, 33vw"
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
  useEffect(() => {
    window.addEventListener('scroll', () => {
      closeModal();
      return;
    });
  }, []);
  return (
    modalOpened && (
      <ContainerModal onClick={() => closeModal()}>
        {clickedImage && (
          <ContainerContent>
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
