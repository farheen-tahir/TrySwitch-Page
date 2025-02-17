// import About from "@/components/about/About";
// import AppInfo from "@/components/appInfo/AppInfo";
import Community from "@/components/community/Community";
import Contact from "@/components/contact/Contact";
import Features from "@/components/features/Features";
import Hero from "@/components/hero/Hero";
import Solutions from "@/components/solutions/Solutions";

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
        <Solutions />
      </section>
      {/* <section>
        <AppInfo
          userType={1}
          animationPath="/assets/webm/seller-animation.webm"
        />
      </section> */}
      {/* <section>
        <AppInfo
          userType={2}
          animationPath="/assets/webm/investor-animation.webm"
        />
      </section> */}
      <section>
        <Community />
      </section>
      <section>
        <Contact />
      </section>
    </>
  );
}
