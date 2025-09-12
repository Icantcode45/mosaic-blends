import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import ServiceBookingButton from "@/components/ServiceBookingButton";

interface NADOption {
  dosage: string;
  price: number;
  basePrice: number;
}

interface NADIVBagCardProps {
  service: {
    id: string;
    name: string;
    category: string;
    price: string;
    badge?: string;
    description: string;
    features: string[];
    image_url?: string;
  };
  serviceStyle: {
    bgGradient: string;
    titleColor: string;
    badgeColor: string;
    title: string;
    subtitle: string;
    bagImage: string;
  };
  categoryId: string;
}

const NADIVBagCard = ({ service, serviceStyle, categoryId }: NADIVBagCardProps) => {
  const [selectedNADOption, setSelectedNADOption] = useState<NADOption | null>(null);
  const [showNADDropdown, setShowNADDropdown] = useState(false);

  // Define NAD+ dosage options with pricing
  const getNADOptions = (serviceId: string): NADOption[] => {
    const basePrice = parseInt(service.price.replace('$', ''));
    
    switch (serviceId) {
      case 'diamond-nad':
        return [
          { dosage: '50mg', price: basePrice, basePrice },
          { dosage: '100mg', price: basePrice + 75, basePrice },
          { dosage: '150mg', price: basePrice + 125, basePrice }
        ];
      case 'elite-nad':
        return [
          { dosage: '100mg', price: basePrice, basePrice },
          { dosage: '150mg', price: basePrice + 50, basePrice },
          { dosage: '200mg', price: basePrice + 100, basePrice },
          { dosage: '250mg', price: basePrice + 150, basePrice }
        ];
      default:
        return [{ dosage: '50mg', price: basePrice, basePrice }];
    }
  };

  const nadOptions = getNADOptions(service.id);
  const defaultOption = nadOptions[0];
  const currentOption = selectedNADOption || defaultOption;
  const showDropdown = nadOptions.length > 1;

  return (
    <Card className={`group relative overflow-hidden bg-gradient-to-br ${serviceStyle.bgGradient} p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl`}>
      {service.badge && (
        <Badge 
          className={`absolute right-4 top-4 ${serviceStyle.badgeColor} text-white`}
        >
          {service.badge}
        </Badge>
      )}
      
      <div className="mb-6 text-center">
        <img 
          src={serviceStyle.bagImage} 
          alt={service.name}
          className="mx-auto mb-4 h-32 w-auto object-contain"
        />
        <div className={`mb-2 text-2xl font-bold uppercase tracking-wide ${serviceStyle.titleColor}`}>
          {serviceStyle.title}
        </div>
        {serviceStyle.subtitle && (
          <div className={`text-lg font-semibold ${serviceStyle.titleColor} opacity-80`}>
            {serviceStyle.subtitle}
          </div>
        )}
      </div>

      <div className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          {service.description}
        </p>

        {/* NAD+ Dosage Selector */}
        {showDropdown && (
          <div className="space-y-2">
            <label className="text-sm font-semibold text-foreground">NAD+ Dosage:</label>
            <div className="relative">
              <button
                onClick={() => setShowNADDropdown(!showNADDropdown)}
                className="flex items-center justify-between w-full px-4 py-3 bg-background border-2 border-border rounded-lg hover:border-primary transition-colors text-left"
              >
                <span className="font-medium">
                  {currentOption.dosage} - ${currentOption.price}
                </span>
                <ChevronDown className={`w-4 h-4 transition-transform ${showNADDropdown ? 'rotate-180' : ''}`} />
              </button>
              
              {showNADDropdown && (
                <div className="absolute top-full left-0 right-0 mt-1 bg-background border-2 border-border rounded-lg shadow-lg z-50">
                  <ul className="py-2">
                    {nadOptions.map((option, index) => (
                      <li key={index}>
                        <button
                          onClick={() => {
                            setSelectedNADOption(option);
                            setShowNADDropdown(false);
                          }}
                          className={`w-full px-4 py-3 text-left hover:bg-primary/10 hover:text-primary transition-colors ${
                            currentOption.dosage === option.dosage ? 'bg-primary/10 text-primary font-semibold' : ''
                          }`}
                        >
                          <div className="flex justify-between items-center">
                            <span>{option.dosage}</span>
                            <span className="font-semibold">${option.price}</span>
                          </div>
                          {option.price > option.basePrice && (
                            <div className="text-xs text-muted-foreground">
                              +${option.price - option.basePrice} from base price
                            </div>
                          )}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="text-center">
          <div className="mb-4 text-3xl font-bold text-foreground">
            ${currentOption.price}
          </div>
        </div>

        <div className="space-y-2">
          {service.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>

        <div className="pt-4">
          <ServiceBookingButton 
            serviceId={service.id}
            serviceName={service.name}
            serviceCategory={service.category}
          />
        </div>
      </div>
    </Card>
  );
};

export default NADIVBagCard;