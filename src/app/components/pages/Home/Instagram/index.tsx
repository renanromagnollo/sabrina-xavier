"use client";

import styled from "styled-components";
import { Testimonial } from "./Testimonial";
import { InstaPhotos } from "./InstaPhotos";


const InstagramSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
export function Instagram() {
  return (
    <InstagramSection>
      <Testimonial />
      {/* <InstaPhotos /> */}
    </InstagramSection>
  );
}
