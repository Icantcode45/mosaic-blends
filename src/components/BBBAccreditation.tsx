import bbbAccreditationImg from "@/assets/bbb-accreditation-small.jpeg";

const BBBAccreditation = () => {
  return (
    <section aria-labelledby="bbb-accreditation" className="py-16 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 lg:px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 id="bbb-accreditation" className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-8 animate-fade-in">
            Stay Dripped IV & Wellness Co. is BBB Accredited.
          </h2>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
            {/* Original BBB Badge */}
            <div className="animate-fade-in hover-scale">
              <img
                src="/lovable-uploads/ed8aafa4-26e1-49c7-b39e-ba28edd0824c.png"
                alt="BBB Accredited Business badge"
                className="h-32 w-auto rounded-md shadow-lg border border-gray-100"
                loading="lazy"
              />
            </div>
            
            {/* New BBB Accreditation Image */}
            <div className="animate-fade-in hover-scale max-w-md">
              <img
                src={bbbAccreditationImg}
                alt="Stay Dripped IV & Wellness Co. BBB Accreditation"
                className="w-full h-auto rounded-xl shadow-xl border border-gray-100"
                loading="lazy"
              />
            </div>
          </div>
          
          <p className="mt-8 text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            This business has committed to upholding the{' '}
            <a
              href="https://www.bbb.org/standards-for-trust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-primary/80 transition-colors duration-300 story-link"
            >
              BBB Standards for Trust
            </a>
            {' '}and maintaining the highest level of integrity in all business practices.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BBBAccreditation;
