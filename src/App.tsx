import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Education from "./sections/Education";
import ProjectSection from "./sections/Project";

function App() {
  return (
    <>
      <Navbar />
      <section className="py-20" id="top">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl leading-tight">
            สวัสดี <span className="block">Hello</span> こんにちは
          </h1>

          <p className="mt-6 text-lg text-gray-600 md:text-xl">
            Welcome to Phongwit Srikokcharoen's Page. Feel free to explore.
          </p>
        </div>
      </section>
      <Education />
      <ProjectSection />
      <Footer />
    </>
  );
}

export default App;
