import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const NewsletterSection = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-background">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Get latest updates
                </h3>
                <p className="text-muted-foreground">
                  Stay informed about our latest wellness treatments, health tips, and 
                  exclusive offers delivered directly to your inbox.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Email address"
                  className="flex-1"
                />
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Join Now
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                Get the latest content in your inbox every week. We don't spam.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;