"use client";

import styled from "styled-components";
import { Testimonial } from "./Testimonial";
import { InstaPhotos } from "./InstaPhotos";

interface InstagramProps {}

const InstagramSection = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export function Instagram(props: InstagramProps) {
  return (
    <InstagramSection>
      <Testimonial />
      <InstaPhotos />
    </InstagramSection>
  );
}
