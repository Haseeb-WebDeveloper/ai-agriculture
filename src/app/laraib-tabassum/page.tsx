import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { Sprout, Brain, AlertTriangle } from "lucide-react";
import Image from "next/image";

export default function LaraibPage() {
  return (
    <Layout title="Introduction to AI in Agriculture">
      <div className="space-y-12">
        {/* Hero Section with Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/liraib-1.jpg"
            alt="AI in Agriculture"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-2xl">
              <p className="text-lg leading-relaxed">
                Agriculture is the bedrock of economic sustainability. With the world population expected to reach over 9 billion by 2050,
                we need to increase agricultural production by 70% to meet growing demands.
              </p>
            </div>
          </div>
        </div>

        {/* Why AI Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col items-start space-y-4">
            <Brain className="w-10 h-10 text-primary" />
            <h2 className="text-2xl font-semibold">Why Need AI?</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <Sprout className="w-5 h-5 mt-1 text-primary" />
                <span>Strategic shift toward sustainable agriculture</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-5 h-5 mt-1 text-primary" />
                <span>Increased efficiency in agricultural operations</span>
              </li>
              <li className="flex items-start gap-2">
                <Sprout className="w-5 h-5 mt-1 text-primary" />
                <span>Predictive analytics for crop management</span>
              </li>
            </ul>
          </Card>

          {/* Second Image */}
          <div className="relative rounded-2xl overflow-hidden h-[300px]">
            <Image
              src="/liraib-2.jpg"
              alt="Modern Agriculture"
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Challenges Section */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 flex flex-col items-start space-y-4">
            <AlertTriangle className="w-10 h-10 text-primary" />
            <h2 className="text-2xl font-semibold">Challenges Faced</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li>Labor Intensive Nature</li>
              <li>Weed Management</li>
              <li>Plant Diseases</li>
              <li>Soil Productivity</li>
              <li>Weather Variability</li>
            </ul>
          </Card>

          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">70%</div>
              <p className="text-sm text-muted-foreground">Required Production Increase</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">9B+</div>
              <p className="text-sm text-muted-foreground">Expected Population by 2050</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">30%</div>
              <p className="text-sm text-muted-foreground">Efficiency Improvement</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <p className="text-sm text-muted-foreground">AI Monitoring</p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
