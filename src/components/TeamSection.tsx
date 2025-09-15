import { useState } from "react";

const TeamSection = () => {
  const [activeSlide, setActiveSlide] = useState(1);
  const slideCount = 3;

  const teamSlides = [
    // Slide 1 - Medical & Core Team
    [
      {
        role: "Medical Director",
        name: "Dr. Ryan Lee, MD",
        description: "Oversees protocols & safety",
        avatar: "🩺",
        gradient: "from-blue-400 to-purple-500"
      },
      {
        role: "Lead RN", 
        name: "Alex Johnson, RN",
        description: "Mobile IV specialist",
        avatar: "💉",
        gradient: "from-green-400 to-blue-500"
      },
      {
        role: "Nutritionist",
        name: "Sarah Chen, RDN", 
        description: "Personalized plans",
        avatar: "🥗",
        gradient: "from-pink-400 to-red-500"
      },
      {
        role: "Concierge",
        name: "Maya Patel",
        description: "Scheduling & support",
        avatar: "📅",
        gradient: "from-yellow-400 to-orange-500"
      }
    ],
    // Slide 2 - Operations & Support
    [
      {
        role: "Customer Support",
        name: "Emma Wilson",
        description: "Always here to help",
        avatar: "🎧",
        gradient: "from-teal-400 to-cyan-500"
      },
      {
        role: "Data Analytics",
        name: "David Kim",
        description: "Data‑driven insights",
        avatar: "📊",
        gradient: "from-indigo-400 to-purple-500"
      },
      {
        role: "Content Specialist",
        name: "Lisa Brown",
        description: "Telling great stories",
        avatar: "✍️",
        gradient: "from-rose-400 to-pink-500"
      },
      {
        role: "Operations Manager",
        name: "Tom Garcia",
        description: "Keeping things running",
        avatar: "⚙️",
        gradient: "from-emerald-400 to-teal-500"
      }
    ],
    // Slide 3 - Specialized Roles
    [
      {
        role: "Security & Compliance",
        name: "Ryan Martinez",
        description: "Protecting your data",
        avatar: "🔒",
        gradient: "from-gray-400 to-slate-500"
      },
      {
        role: "Research Specialist",
        name: "Anna Taylor, PhD",
        description: "Exploring new frontiers",
        avatar: "🔬",
        gradient: "from-violet-400 to-indigo-500"
      },
      {
        role: "Quality Assurance",
        name: "Chris Martinez",
        description: "Ensuring excellence",
        avatar: "✅",
        gradient: "from-amber-400 to-yellow-500"
      },
      {
        role: "Innovation Lead",
        name: "Jordan Smith",
        description: "Thinking outside the box",
        avatar: "💡",
        gradient: "from-lime-400 to-green-500"
      }
    ]
  ];

  const nextSlide = () => {
    setActiveSlide(activeSlide < slideCount ? activeSlide + 1 : 1);
  };

  const prevSlide = () => {
    setActiveSlide(activeSlide > 1 ? activeSlide - 1 : slideCount);
  };

  return (
    <section className="bg-neutral-50 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="tracking-tight text-4xl sm:text-6xl xl:text-7xl font-semibold mb-6 max-w-4xl mx-auto font-heading leading-tight">
            Our clinical & concierge team
          </h2>
          <p className="text-neutral-600 text-lg md:text-xl font-medium mb-14 md:mb-20 max-w-2xl mx-auto">
            Licensed providers, certified specialists, and wellness experts who bring personalized care to you.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="mb-12 overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${(activeSlide - 1) * 100}%)` }}
          >
            {teamSlides.map((slide, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {slide.map((member, memberIndex) => (
                    <div key={memberIndex} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                      {/* Header */}
                      <div className="bg-neutral-100 border-b border-neutral-200 px-6 py-4">
                        <h3 className="text-neutral-600 text-lg font-semibold font-heading">{member.role}</h3>
                      </div>
                      
                      {/* Content */}
                      <div className="py-8 px-6 text-center">
                        <div className={`w-24 h-24 bg-gradient-to-br ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-3xl shadow-lg`}>
                          {member.avatar}
                        </div>
                        <p className="text-neutral-800 font-semibold text-lg mb-1">{member.name}</p>
                        <p className="text-neutral-600 text-sm">{member.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel Controls */}
        <div className="flex justify-center items-center space-x-6">
          {/* Previous Button */}
          <button 
            onClick={prevSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform group"
            aria-label="Previous slide"
          >
            <svg className="w-6 h-6 text-neutral-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
            </svg>
          </button>
          
          {/* Slide Indicators */}
          <div className="flex space-x-2">
            {Array.from({ length: slideCount }, (_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index + 1)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSlide === index + 1 
                    ? 'bg-primary scale-125' 
                    : 'bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          {/* Next Button */}
          <button 
            onClick={nextSlide}
            className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 transform group"
            aria-label="Next slide"
          >
            <svg className="w-6 h-6 text-neutral-600 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </button>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-neutral-600">Licensed Professionals</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-neutral-600">Concierge Support</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-neutral-600">Hours of Training</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
