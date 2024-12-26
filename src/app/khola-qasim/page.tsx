import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bot, Cloud, Settings } from "lucide-react";

export default function KholaQasim() {
  return (
    <Layout title="Applications of AI in Agriculture">
      <div className="space-y-16">
        {/* Main Introduction */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/khola-1.jpg"
              alt="AI Applications"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <p className="mt-2 text-gray-200">
                  AI in agriculture is involved in improving crop yields and predicting weather patterns.
                  It can help in monitoring soil health, managing irrigation systems, and improving the quality of farming practices.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Agriculture Robotics */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Bot className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Agriculture Robotics</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Automating Farming Tasks: Robots perform harvesting, planting, and weeding.</li>
                  <li>Advanced Technologies: Autonomous tractor robots handle tasks like seeding, monitoring crops, and applying treatments.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Weed Detection */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Cloud className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Weed Detection</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Integration with Machinery: Weed detection is incorporated into autonomous tractors for precise targeting and treatment.</li>
                  <li>AI-Based Differentiation: Computer vision and machine learning identify weeds from crops in real-time.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Precision Spraying */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Settings className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Precision Spraying</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Targeted Application: AI and sensors guide precise spraying of pesticides or fertilizers.</li>
                  <li>Real-Time Data Use: Systems rely on UAVs, vehicles, or stationary devices to detect specific crop deficiencies.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
