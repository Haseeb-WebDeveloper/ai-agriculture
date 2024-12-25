import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Target, Shield, LineChart, Bot, Leaf } from "lucide-react";

export default function AbdullahAfzal() {
  return (
    <Layout title="Key Advantages of AI in Agriculture">
      <div className="space-y-16">
        {/* Hero Image */}
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/abdullah-1.jpg"
            alt="AI Advantages"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
            <div className="p-8 text-white max-w-2xl">
              <h2 className="text-3xl font-bold mb-4">Precision Farming</h2>
              <p className="text-lg">
                AI tools revolutionizing agriculture through precise analysis and smart decision-making
              </p>
            </div>
          </div>
        </div>

        {/* Key Features Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Target className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Precision Farming</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• AI tools analyze soil quality, weather, and crop conditions</li>
                    <li>• Optimal resource allocation for water and fertilizers</li>
                    <li>• Reduces waste and improves yield</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="w-8 h-8 text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Pest and Disease Detection</h3>
                  <ul className="mt-2 space-y-2 text-muted-foreground">
                    <li>• AI-powered cameras identify pest infestations early</li>
                    <li>• Quick response to protect crops</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          {/* Second Image */}
          <div className="relative rounded-2xl overflow-hidden h-[400px]">
            <Image
              src="/abdullah-2.jpg"
              alt="Smart Agriculture"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6">
            <LineChart className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Predictive Analytics</h3>
            <p className="text-muted-foreground">
              AI predicts weather patterns, market demands, and crop health to help farmers plan better
            </p>
          </Card>

          <Card className="p-6">
            <Bot className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Labor Efficiency</h3>
            <p className="text-muted-foreground">
              AI-driven robots perform tasks like planting, weeding, and harvesting
            </p>
          </Card>

          <Card className="p-6">
            <Leaf className="w-8 h-8 text-primary mb-4" />
            <h3 className="text-xl font-semibold mb-3">Sustainable Agriculture</h3>
            <p className="text-muted-foreground">
              AI ensures resources like water and fertilizers are used wisely
            </p>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
