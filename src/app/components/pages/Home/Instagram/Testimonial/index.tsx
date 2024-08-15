/* eslint-disable react/no-unescaped-entities */
import { DataContext } from "@/context/data-context";
import { dataProps } from "@/store";
import {
  HygraphHomeProps,
  HygraphTestimonialProps,
} from "@/types/hygraph-types";
import { randomTestimonial } from "@/utils/randomTestimonial";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 50px;
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary.dark};
  border: 1px solid ${({ theme }) => theme.colors.primary.light};
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${({ theme }) => theme.colors.primary.light};
`;

const Content = styled.div`
  height: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: blue; */

  span {
    font-family: Georgia, "Times New Roman", Times, serif;
    font-size: 20rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: center;
  gap: 10px;

  h5 {
    color: ${({ theme }) => theme.colors.dark.default};
  }
`;
export function Testimonial() {
  const { hygraphHome } = useContext(DataContext);
  const [testimonial, setTestimonial] = useState<HygraphTestimonialProps>();

  useEffect(() => {
    const testimonials = hygraphHome.testimonials;
    console.log(testimonials);
    const sortedTestimonial: HygraphTestimonialProps =
      randomTestimonial(testimonials);
    setTestimonial(sortedTestimonial);
  }, [hygraphHome]);
  return (
    testimonial && (
      <Container>
        <ProfileImage>
          <Image
            src={testimonial.image.url ?? `http://picsum.photos//300/300`}
            alt="profile-image"
            width={150}
            height={150}
            sizes="100%"
            style={{ objectFit: "cover", textAlign: "center" }}
            unoptimized
          />
        </ProfileImage>
        <Content>
          <span>"</span>
          <Text>
            <a href={testimonial.linkPost} target="_blank">
              <RichTextHygraph content={testimonial.text.raw} />
            </a>

            <h5>{testimonial.author}</h5>
          </Text>
          <span>"</span>
        </Content>
      </Container>
    )
  );
}
