import About from "@/components/about/About";
import Community from "@/components/community/Community";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <>
      <section>
        <Hero />
      </section>
      {/* <section className="xxs:h-[131rem] xs:h-[145rem] sm:h-[151rem]  md:h-auto">
        <About />
      </section> */}
      <section>
        <Features />
      </section>
      <section>
        <Community />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
