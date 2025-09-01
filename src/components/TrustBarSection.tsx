const TrustBarSection = () => {
  return (
    <section className="py-10 border-t border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6 text-muted-foreground">
          <span className="uppercase tracking-wider text-xs">Trusted by</span>
          <div className="h-6 w-auto font-semibold">Clients across AZ</div>
          <div className="h-6 w-auto">•</div>
          <div className="h-6 w-auto">Athletes</div>
          <div className="h-6 w-auto">Founders</div>
          <div className="h-6 w-auto">Busy Families</div>
        </div>
      </div>
    </section>
  );
};

export default TrustBarSection;