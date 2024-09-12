import { PlayIcon } from "@/components/Icons/PlayIcon";
import { ModalInstagramContext } from "@/context/modal-instagram-context";
import { InstagramPostProps } from "@/types/post-instagram-types";
import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";

interface CardInstaPhotoProps {
  post: InstagramPostProps;
}

const CardBox = styled.div`
  position: relative;
  width: 277px;
  height: 277px;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
`;

const IconDiv = styled.div`
  position: absolute;
  display: block;

  width: 40%;
  bottom: 0;

  /* transform: translate(-50%, -50%); */
  /* text-align: center; */
  /* background-color: blue; */
  color: ${({ theme }) => theme.colors.light.default};
  opacity: 0.5;
`;
export function CardInstaPhoto({ post }: CardInstaPhotoProps) {
  const { setModalItem } = useContext(ModalInstagramContext);
  return (
    <CardBox onClick={() => setModalItem(post)}>
      <IconDiv>
        <PlayIcon size={"inherit"} />
      </IconDiv>
      <Image
        src={post?.thumbnail_url ?? `http://picsum.photos//277/277`}
        alt="instagram-image"
        width={277}
        height={277}
        // sizes="100%"
        style={{ objectFit: "cover" }}
      />
    </CardBox>
  );
}
