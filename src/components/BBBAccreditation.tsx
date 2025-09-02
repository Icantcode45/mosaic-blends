const BBBAccreditation = () => {
  return (
    <section aria-labelledby="bbb-accreditation" className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="bbb-accreditation" className="text-xl sm:text-2xl font-semibold text-foreground">
            Stay Dripped IV & Wellness Co. is BBB Accredited.
          </h2>
          <div className="mt-6 flex justify-center">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F337c720945064b44af05129952e6433b%2Fe5eb19e7d19b49f9a483cf13884a13cc?format=webp&width=800"
              alt="BBB Accredited Business badge"
              className="h-24 w-auto rounded-md shadow-elev-1 border border-gray-100"
              loading="lazy"
            />
          </div>
          <p className="mt-6 text-base text-foreground">
            This business has committed to upholding the{' '}
            <a
              href="https://www.bbb.org/standards-for-trust"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline hover:text-foreground"
            >
              BBB Standards for Trust
            </a>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BBBAccreditation;
