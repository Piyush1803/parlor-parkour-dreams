import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Heart, Sparkles, Palette, Crown, MapPin, Phone, Mail, Instagram } from "lucide-react";
import Navbar from "@/components/Navbar";

// Import images
import heroImage from "@/assets/hero-bride.jpg";
import makeupCloseup from "@/assets/makeup-closeup.jpg";
import hairStyling from "@/assets/hair-styling.jpg";
import mehendiService from "@/assets/mehendi-service.jpg";

const Index = () => {
  const services = [
    {
      title: "Bridal Makeup",
      description: "Traditional & contemporary bridal makeup that enhances your natural beauty for your special day.",
      image: makeupCloseup,
      features: ["HD Makeup", "Traditional Look", "Contemporary Style", "Touch-up Kit"]
    },
    {
      title: "Hair Styling",
      description: "Elegant bridal hairstyles from traditional buns to modern updos with fresh flowers and accessories.",
      image: hairStyling,
      features: ["Bridal Updo", "Traditional Bun", "Hair Extensions", "Floral Decoration"]
    },
    {
      title: "Mehendi Design",
      description: "Intricate henna patterns and designs for hands and feet, from traditional to contemporary styles.",
      image: mehendiService,
      features: ["Bridal Mehendi", "Arabic Design", "Traditional Patterns", "Finger Mehendi"]
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      text: "Absolutely stunning work! Made me feel like a princess on my wedding day.",
      rating: 5
    },
    {
      name: "Anita Patel", 
      text: "The attention to detail was incredible. Highly recommend Rosebloom!",
      rating: 5
    },
    {
      name: "Meera Gupta",
      text: "Professional service and beautiful results. Thank you for making my day perfect!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 animate-fade-in-up">
            <Crown className="w-4 h-4 mr-2" />
            Premium Bridal Beauty Services
          </Badge>
          
          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up [animation-delay:200ms]">
            Your Dream
            <br />
            <span className="text-primary-glow">Wedding Look</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 animate-fade-in-up [animation-delay:400ms]">
            Transform your special day with our exquisite bridal makeup, hair styling, and beauty services
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up [animation-delay:600ms]">
            <Button 
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-bounce text-lg px-8 py-6"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Book Your Consultation
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 text-lg px-8 py-6"
              onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Our Work
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">
              <Heart className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Bridal Beauty <span className="text-primary">Excellence</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We specialize in creating stunning bridal looks that reflect your personality and cultural traditions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover-lift shadow-card border-0 overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                  <div className="absolute inset-0 bg-gradient-primary opacity-20 group-hover:opacity-30 transition-smooth" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-serif text-2xl font-semibold mb-3 text-foreground group-hover:text-primary transition-smooth">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">
              <Palette className="w-4 h-4 mr-2" />
              Portfolio
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Our Beautiful <span className="text-primary">Transformations</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Witness the magic of our artistry through these stunning bridal makeovers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[makeupCloseup, hairStyling, mehendiService, heroImage].map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg shadow-card hover-lift">
                <img 
                  src={image} 
                  alt={`Gallery ${index + 1}`}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-40 transition-smooth flex items-center justify-center">
                  <Heart className="text-white w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-secondary text-primary">
              <Crown className="w-4 h-4 mr-2" />
              About Us
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Crafting <span className="text-primary">Bridal Dreams</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              At Rosebloom Bridal Parlour, we believe every bride deserves to feel absolutely radiant on her special day. 
              With over 10 years of experience in bridal beauty, we specialize in traditional Indian wedding makeup while 
              incorporating contemporary techniques to create looks that are both timeless and modern.
            </p>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Our team of skilled artists understands the cultural significance and emotional importance of your wedding day. 
              We work closely with each bride to create a personalized beauty experience that reflects her unique style and traditions.
            </p>

            {/* Testimonials */}
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="text-center shadow-card hover-lift border-0">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-subtle">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary text-primary">
              <Heart className="w-4 h-4 mr-2" />
              Get In Touch
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Book Your <span className="text-primary">Consultation</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to start your bridal beauty journey? Contact us today to schedule your personalized consultation
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <MapPin className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Location</h3>
                    </div>
                    <p className="text-muted-foreground">
                      123 Bridal Avenue<br />
                      Mumbai, Maharashtra 400001<br />
                      India
                    </p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Phone className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Phone</h3>
                    </div>
                    <p className="text-muted-foreground">+91 98765 43210</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Mail className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Email</h3>
                    </div>
                    <p className="text-muted-foreground">hello@rosebloom.in</p>
                  </CardContent>
                </Card>

                <Card className="shadow-card border-0">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Instagram className="w-6 h-6 text-primary mr-3" />
                      <h3 className="text-xl font-semibold text-foreground">Follow Us</h3>
                    </div>
                    <p className="text-muted-foreground">@rosebloombridal</p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Card */}
              <div>
                <Card className="shadow-elegant border-0 bg-gradient-primary text-white">
                  <CardContent className="p-8 text-center">
                    <Crown className="w-16 h-16 mx-auto mb-6 opacity-80" />
                    <h3 className="font-serif text-3xl font-bold mb-4">Ready to Look Stunning?</h3>
                    <p className="text-white/90 mb-8 text-lg">
                      Let's create the perfect bridal look for your special day. Our consultation includes personalized 
                      beauty advice and custom package recommendations.
                    </p>
                    <div className="space-y-4">
                      <Button 
                        size="lg"
                        className="w-full bg-white text-primary hover:bg-white/90 hover:scale-105 transition-bounce text-lg"
                      >
                        <Phone className="w-5 h-5 mr-2" />
                        Call Now for Booking
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="w-full border-white/30 text-white hover:bg-white/10 text-lg"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Send Message
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="font-serif font-bold text-3xl bg-gradient-primary bg-clip-text text-transparent mb-4">
              Rosebloom
            </div>
            <p className="text-background/70 mb-6">
              Crafting beautiful bridal looks since 2014
            </p>
            <div className="flex justify-center space-x-6 text-background/70">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>© 2024 Rosebloom Bridal Parlour</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;