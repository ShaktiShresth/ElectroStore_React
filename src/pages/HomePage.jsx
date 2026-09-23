import Contact from "../components/Contact";
import Benefits from "../components/home/Benefits";
import CallToAction from "../components/home/CallToAction";
import Featured from "../components/home/Featured";
import Hero from "../components/home/Hero";
import Products from "../components/home/Products";

const HomePage = () => {
  return (
    <div>
      <main>
        <Hero />
        <Benefits />
        <Featured />
        <Products />
        <CallToAction />
        <section id="testimonials">
          <div className="container">
            <h2>What our customers say?</h2>
            <div className="reviews">
              <div className="card">
                <span>⭐⭐⭐⭐⭐</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  architecto facilis aspernatur laborum perspiciatis ea dolorum
                  vero ratione libero iusto!
                </p>
                <h4>John Doe</h4>
              </div>
              <div className="card">
                <span>⭐⭐⭐⭐⭐</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  architecto facilis aspernatur laborum perspiciatis ea dolorum
                  vero ratione libero iusto!
                </p>
                <h4>John Doe</h4>
              </div>
              <div className="card">
                <span>⭐⭐⭐⭐⭐</span>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  architecto facilis aspernatur laborum perspiciatis ea dolorum
                  vero ratione libero iusto!
                </p>
                <h4>John Doe</h4>
              </div>
            </div>
          </div>
        </section>
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
