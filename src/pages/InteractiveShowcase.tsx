import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet';

const InteractiveShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const cards = sectionRef.current.querySelectorAll('.card');
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        const cardRect = cardElement.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2 - rect.left;
        const cardCenterY = cardRect.top + cardRect.height / 2 - rect.top;
        
        const deltaX = x - cardCenterX;
        const deltaY = y - cardCenterY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        const maxDistance = 200;
        
        if (distance < maxDistance) {
          const rotationFactor = parseFloat(cardElement.dataset.rotationFactor || '2');
          const rotateX = (deltaY / maxDistance) * rotationFactor;
          const rotateY = -(deltaX / maxDistance) * rotationFactor;
          
          cardElement.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
      });
    };

    const handleMouseLeave = () => {
      if (!sectionRef.current) return;
      
      const cards = sectionRef.current.querySelectorAll('.card');
      cards.forEach((card) => {
        const cardElement = card as HTMLElement;
        cardElement.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
      });
    };

    const section = sectionRef.current;
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      section.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (section) {
        section.removeEventListener('mousemove', handleMouseMove);
        section.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Interactive Showcase | Stay Dripped IV & Wellness Co.</title>
        <meta name="description" content="Explore our interactive showcase featuring cutting-edge wellness treatments and personalized health solutions." />
      </Helmet>

      <div className="interactive-showcase-page" ref={sectionRef}>
        <div className="background">
          <div className="gradient-blob"></div>
          <div className="gradient-blob"></div>
          <div className="gradient-blob"></div>
        </div>

        <main className="showcase-main">
          <h1>Interactive Experience</h1>
          <p className="subtitle">
            Discover our premium wellness treatments through this interactive showcase featuring cutting-edge therapies.
          </p>

          <div className="cards-container">
            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>IV Hydration Plus</h2>
                <p>
                  Experience rapid rehydration and nutrient delivery with our premium IV therapy treatments designed for optimal wellness and recovery.
                </p>
                <div className="card-footer">
                  <button className="card-button">Learn More</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>NAD+ Therapy</h2>
                <p>
                  Advanced cellular regeneration therapy to support anti-aging, mental clarity, and overall vitality through cutting-edge treatments.
                </p>
                <div className="card-footer">
                  <button className="card-button">Book Now</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>Vitamin Boost</h2>
                <p>
                  Targeted vitamin and mineral injections administered by licensed professionals to enhance energy, immunity, and wellness.
                </p>
                <div className="card-footer">
                  <button className="card-button">Explore</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>Peptide Therapy</h2>
                <p>
                  Physician-supervised peptide programs designed to support recovery, performance, and overall health optimization goals.
                </p>
                <div className="card-footer">
                  <button className="card-button">Consult</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>Mobile Service</h2>
                <p>
                  Convenient in-home treatments delivered by our licensed medical team. Experience premium wellness in your comfort zone.
                </p>
                <div className="card-footer">
                  <button className="card-button">Schedule</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>

            <div className="card" data-rotation-factor="2">
              <div className="card-content">
                <h2>Telehealth</h2>
                <p>
                  Virtual consultations with board-certified providers for personalized treatment planning and ongoing wellness support.
                </p>
                <div className="card-footer">
                  <button className="card-button">Connect</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InteractiveShowcase;