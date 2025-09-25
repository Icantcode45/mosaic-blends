import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, Phone, Clock } from 'lucide-react';

const LocationMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  // Service areas in Scottsdale/Phoenix area
  const serviceLocations = [
    {
      name: "Scottsdale",
      coordinates: [-111.9261, 33.4942] as [number, number],
      description: "Primary service area"
    },
    {
      name: "Phoenix", 
      coordinates: [-112.0740, 33.4484] as [number, number],
      description: "Downtown Phoenix area"
    },
    {
      name: "Paradise Valley",
      coordinates: [-111.9743, 33.5331] as [number, number],
      description: "Luxury residential area"
    },
    {
      name: "Tempe",
      coordinates: [-111.9401, 33.4255] as [number, number],
      description: "ASU campus area"
    }
  ];

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-111.9261, 33.4942], // Scottsdale center
        zoom: 10,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      // Add service area markers
      map.current.on('load', () => {
        serviceLocations.forEach((location) => {
          // Create custom marker
          const markerEl = document.createElement('div');
          markerEl.className = 'custom-marker';
          markerEl.style.cssText = `
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, hsl(210 45% 35%), hsl(180 25% 45%));
            border-radius: 50%;
            border: 3px solid white;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
          `;
          
          // Add IV drop icon
          markerEl.innerHTML = '💧';
          markerEl.style.fontSize = '20px';

          // Create popup
          const popup = new mapboxgl.Popup({
            offset: 25,
            className: 'custom-popup'
          }).setHTML(`
            <div style="padding: 10px;">
              <h3 style="margin: 0 0 8px 0; font-weight: bold; color: hsl(210 45% 35%);">
                ${location.name}
              </h3>
              <p style="margin: 0; color: #666; font-size: 14px;">
                ${location.description}
              </p>
              <button 
                onclick="window.open('tel:+1-602-688-9825')" 
                style="
                  margin-top: 8px; 
                  padding: 4px 8px; 
                  background: hsl(210 45% 35%); 
                  color: white; 
                  border: none; 
                  border-radius: 4px; 
                  cursor: pointer; 
                  font-size: 12px;
                "
              >
                📞 Call Now
              </button>
            </div>
          `);

          // Add marker to map
          new mapboxgl.Marker(markerEl)
            .setLngLat(location.coordinates)
            .setPopup(popup)
            .addTo(map.current!);
        });

        // Add service area circle
        map.current!.addSource('service-area', {
          'type': 'geojson',
          'data': {
            'type': 'Feature',
            'properties': {},
            'geometry': {
              'type': 'Point',
              'coordinates': [-111.9261, 33.4942]
            }
          }
        });

        map.current!.addLayer({
          'id': 'service-area-circle',
          'type': 'circle',
          'source': 'service-area',
          'paint': {
            'circle-radius': {
              'base': 1.75,
              'stops': [
                [12, 80],
                [22, 1800]
              ]
            },
            'circle-color': 'hsl(210 45% 35%)',
            'circle-opacity': 0.1,
            'circle-stroke-width': 2,
            'circle-stroke-color': 'hsl(210 45% 35%)',
            'circle-stroke-opacity': 0.3
          }
        });
      });

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
      alert('Invalid Mapbox token. Please check your token and try again.');
    }
  };

  const handleTokenSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <Card className="p-8 bg-background/50 backdrop-blur-sm border border-border/30">
        <div className="text-center mb-6">
          <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">Service Area Map</h3>
          <p className="text-muted-foreground mb-4">
            To display our interactive service area map, please enter your Mapbox token.
          </p>
          <p className="text-sm text-muted-foreground mb-6">
            Get your free token at{' '}
            <a 
              href="https://mapbox.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              mapbox.com
            </a>
          </p>
        </div>

        <form onSubmit={handleTokenSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter your Mapbox public token"
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
            className="text-center"
          />
          <Button type="submit" className="w-full">
            <Navigation className="w-4 h-4 mr-2" />
            Load Map
          </Button>
        </form>

        {/* Service Areas List as Fallback */}
        <div className="mt-8 pt-8 border-t border-border/30">
          <h4 className="font-semibold text-foreground mb-4">Our Service Areas:</h4>
          <div className="grid grid-cols-2 gap-4">
            {serviceLocations.map((location, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-muted/30">
                <div className="text-2xl mb-1">💧</div>
                <div className="font-medium text-foreground">{location.name}</div>
                <div className="text-sm text-muted-foreground">{location.description}</div>
              </div>
            ))}
          </div>
        </div>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Map Container */}
      <Card className="overflow-hidden border border-border/30">
        <div ref={mapContainer} className="h-96 w-full" />
      </Card>

      {/* Contact Info */}
      <div className="grid md:grid-cols-3 gap-4">
        <Card className="p-4 text-center bg-background/50 backdrop-blur-sm border border-border/30">
          <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="font-semibold text-foreground">Call Us</div>
          <a 
            href="tel:+1-602-688-9825" 
            className="text-primary hover:underline"
          >
            (602) 688-9825
          </a>
        </Card>

        <Card className="p-4 text-center bg-background/50 backdrop-blur-sm border border-border/30">
          <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="font-semibold text-foreground">Service Area</div>
          <div className="text-muted-foreground text-sm">
            Greater Phoenix Metro
          </div>
        </Card>

        <Card className="p-4 text-center bg-background/50 backdrop-blur-sm border border-border/30">
          <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
          <div className="font-semibold text-foreground">Availability</div>
          <div className="text-muted-foreground text-sm">
            Same-day appointments
          </div>
        </Card>
      </div>
    </div>
  );
};

export default LocationMap;