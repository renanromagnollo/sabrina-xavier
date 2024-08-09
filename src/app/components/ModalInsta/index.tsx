import { InstagramPostProps } from "@/types/post-instagram-types";
import Image from "next/image";
import { useEffect } from "react";
import styled from "styled-components";

interface ModalInstaProps {
  isOpen: boolean;
  post: InstagramPostProps | undefined;
  closeModal: (opened: boolean) => void;
}

const ContainerModal = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  position: absolute;
  /* display: block; */
  z-index: 0;
  top: 0;
  width: 100vw;
  /* height: 2000px; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export function ModalInsta({ isOpen, post, closeModal }: ModalInstaProps) {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      closeModal(false);
      return;
    });
  }, []);
  return (
    isOpen && (
      <ContainerModal onClick={() => closeModal(false)}>
        {post && (
          <div>
            <Image
              src={post.media_url}
              alt="Instagram Image"
              // sizes="(max-width: 168px) 90vw, (max-width: 1200px) 50vw, 33vw"
              width={500}
              height={500}
              style={{ objectFit: "cover", objectPosition: "top" }}
            />
          </div>
        )}
      </ContainerModal>
    )
  );
}
