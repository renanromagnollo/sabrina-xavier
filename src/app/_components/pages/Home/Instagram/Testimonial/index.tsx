/* eslint-disable react/no-unescaped-entities */
import { Testimonial as TTestimonial } from "@/domain";
import { useHygraphQuery } from "@/hooks/useHygraphQuery";
import { randomTestimonial } from "@/utils/randomTestimonial";
import { RichTextHygraph } from "@/utils/richtTextHygraph";
import Image from "next/image";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  /* margin: 50px; */
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
  const { data: testimonials } = useHygraphQuery("testimonials");
  const [testimonial, setTestimonial] = useState<TTestimonial>();

  useEffect(() => {
    console.log(testimonials)
    console.log(testimonial)
    if (testimonials) {
      const sortedTestimonial =
        randomTestimonial(testimonials);
      setTestimonial(sortedTestimonial);

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [testimonials]);
  return (
    testimonial && (
      <Container>
        <ProfileImage data-aos="fade-up"
          data-aos-duration="3000">
          <Image
            src={testimonial.image ?? `http://picsum.photos//300/300`}
            alt="profile-image"
            width={150}
            height={150}
            sizes="100%"
            style={{ objectFit: "cover", textAlign: "center" }}
            unoptimized
          />
        </ProfileImage>
        <Content data-aos="fade-down">
          <span>"</span>
          <Text>
            <a href={testimonial.linkPost} target="_blank">
              <RichTextHygraph content={testimonial.text} />
            </a>

            <h5>{testimonial.author}</h5>
          </Text>
          <span>"</span>
        </Content>
      </Container>
    )
  );
}
