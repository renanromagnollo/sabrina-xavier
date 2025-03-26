import { Testimonial } from "@/domain";

export function randomTestimonial(testimonials: Testimonial[]) {
  // const length = listPosts.length
  if (testimonials) {
    let shuffledPosts = testimonials
      .map((value) => ({ value, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(({ value }) => value);
    const sortedTestimonial = shuffledPosts.slice(0, 1)[0];
    return sortedTestimonial;
  }
}
