import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ConsultationForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    weddingDate: "",
    services: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Consultation Request Sent!",
      description: "We'll contact you within 24 hours to discuss your bridal beauty needs.",
    });
    setFormData({
      name: "",
      phone: "",
      email: "",
      weddingDate: "",
      services: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="shadow-elegant border-0">
      <CardHeader>
        <CardTitle className="flex items-center text-2xl font-serif">
          <Sparkles className="w-6 h-6 text-primary mr-2" />
          Book Your Consultation
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="+91 98765 43210"
              />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email Address *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <Label htmlFor="weddingDate">Wedding Date</Label>
              <Input
                id="weddingDate"
                name="weddingDate"
                type="date"
                value={formData.weddingDate}
                onChange={handleChange}
              />
            </div>
          </div>

          <div>
            <Label htmlFor="services">Services Interested In</Label>
            <Input
              id="services"
              name="services"
              value={formData.services}
              onChange={handleChange}
              placeholder="e.g., Bridal Makeup, Hair Styling, Mehendi"
            />
          </div>

          <div>
            <Label htmlFor="message">Additional Message</Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your vision, preferences, or any special requests..."
              rows={4}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <Button type="submit" className="flex-1">
              <Sparkles className="w-4 h-4 mr-2" />
              Send Consultation Request
            </Button>
            <div className="flex gap-2">
              <Button type="button" variant="outline" size="icon">
                <Phone className="w-4 h-4" />
              </Button>
              <Button type="button" variant="outline" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default ConsultationForm;