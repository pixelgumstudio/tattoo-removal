import TestimonialCard from "@/components/shared/cards/TestimonialCard";

const testimonials = [
   {
    name:"Alicia Margaret",
    title:"Graphic Designer, Atlanta, GA",
    text:"I got a tattoo in college that I thought I’d love forever… but life changes. I had no idea where to even start looking for removal services that were both safe and reputable. Then I found RemoveTattooNow. It was like a one-stop-shop for everything I needed—real reviews, verified clinics, clear pricing, and even details about the types of lasers they use and the available states in the US."
   },
   {
    dark: true,
    name:"James R.",
    title:"Fitness Coach, San Diego, CA",
    text:"I had no idea where to even start looking for removal services that were both safe and reputable. Then I found RemoveTattooNow. After years of regretting a tattoo I got on a whim, I finally decided to take action. But I was overwhelmed by the process. Then I came across RemoveTattooNow, and everything changed. I searched by location, filtered by service type, and even read reviews from others with similar experiences. It was like a one-stop-shop for everything I needed."
  }
  ];
export const Testimonials = () => {
  return (
    <section className="w-full">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
