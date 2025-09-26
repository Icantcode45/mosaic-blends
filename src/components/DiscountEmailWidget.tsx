import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle2, Mail } from 'lucide-react';
import { toast } from 'sonner';

const DiscountEmailWidget = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error('Please enter your email address');
      return;
    }
    
    // Generate a discount code
    const discountCode = 'NEWPATIENT25';
    
    // Here you would typically send this to your backend to send the email
    // For now, we'll just show a success message with the code
    toast.success(`Discount code sent to ${email}! Check your inbox for code: ${discountCode}`);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Card className="bg-green-50 border-green-200">
        <CardContent className="p-6 text-center">
          <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="font-semibold text-green-800 mb-2">Discount Code Sent!</h3>
          <p className="text-green-700 text-sm">
            Check your email for your 25% off discount code. Valid for first-time patients only.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="bg-gradient-to-r from-primary to-secondary text-white">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <Mail className="w-8 h-8 mx-auto mb-2" />
          <h3 className="font-semibold text-lg">Get Your Discount Code</h3>
          <p className="text-white/90 text-sm">
            Enter your email to receive a 25% off discount code
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            className="bg-white text-black"
            required
          />
          <Button 
            type="submit" 
            variant="secondary" 
            className="w-full bg-white text-primary hover:bg-white/90 font-medium"
          >
            Send Discount Code
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default DiscountEmailWidget;