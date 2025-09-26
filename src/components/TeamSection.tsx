import nurse1 from "@/assets/team/nurse-1.jpeg";
import nurse2 from "@/assets/team/nurse-2.jpeg";

const TeamSection = () => {
  const teamMembers = [
    {
      role: "Registered Nurse",
      name: "Sarah M., RN",
      description: "Mobile IV therapy specialist",
      photo: nurse1,
      gradient: "from-blue-400 to-purple-500"
    },
    {
      role: "Licensed Nurse", 
      name: "Jessica K., RN",
      description: "Patient care coordinator",
      photo: nurse2,
      gradient: "from-green-400 to-blue-500"
    },
    {
      role: "Medical Director",
      name: "Dr. Ryan Lee, MD",
      description: "Oversees protocols & safety",
      photo: null,
      gradient: "from-purple-400 to-indigo-500"
    },
    {
      role: "Wellness Coordinator",
      name: "Maya Patel",
      description: "Scheduling & support",
      photo: null,
      gradient: "from-teal-400 to-cyan-500"
    }
  ];

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

        {/* Team Grid */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, memberIndex) => (
              <div key={memberIndex} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                {/* Header */}
                <div className="bg-neutral-100 border-b border-neutral-200 px-6 py-4">
                  <h3 className="text-neutral-600 text-lg font-semibold font-heading">{member.role}</h3>
                </div>
                
                {/* Content */}
                <div className="py-8 px-6 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                    {member.photo ? (
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold`}>
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div>
                  <p className="text-neutral-800 font-semibold text-lg mb-1">{member.name}</p>
                  <p className="text-neutral-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
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
