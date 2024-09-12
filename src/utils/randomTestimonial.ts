import { HygraphTestimonialProps } from "@/types/hygraph-types";

export function randomTestimonial(testimonials: HygraphTestimonialProps[]) {
  // const length = listPosts.length
  console.log(testimonials);
  if (testimonials) {
    let shuffledPosts = testimonials
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const sortedTestimonial = shuffledPosts.slice(0, 1)[0];
    return sortedTestimonial;
  }
}
