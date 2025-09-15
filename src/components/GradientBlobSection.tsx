import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

const GradientBlobSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      
      const cards = sectionRef.current.querySelectorAll('.gradient-card');
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
      
      const cards = sectionRef.current.querySelectorAll('.gradient-card');
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

  const cards = [
    {
      title: "IV Hydration Therapy",
      description: "Rapid rehydration and nutrient delivery for optimal wellness. Feel refreshed and energized in minutes.",
      cta: "Learn More"
    },
    {
      title: "Vitamin Injections",
      description: "Boost your energy and immune system with our targeted vitamin injection treatments.",
      cta: "Book Now"
    },
    {
      title: "NAD+ Therapy",
      description: "Advanced cellular regeneration therapy to support anti-aging and mental clarity.",
      cta: "Discover"
    }
  ];

  return (
    <section ref={sectionRef} className="gradient-blob-section">
      <div className="background">
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
        <div className="gradient-blob"></div>
      </div>

      <main className="gradient-main">
        <h1 className="gradient-title">Premium Wellness Treatments</h1>
        <p className="gradient-subtitle">
          Experience personalized IV therapy and wellness services delivered by licensed medical professionals.
        </p>

        <div className="cards-container">
          {cards.map((card, index) => (
            <div key={index} className="gradient-card" data-rotation-factor="2">
              <div className="card-content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
                <div className="card-footer">
                  <button className="card-button">{card.cta}</button>
                  <div className="card-icon">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </section>
  );
};

export default GradientBlobSection;