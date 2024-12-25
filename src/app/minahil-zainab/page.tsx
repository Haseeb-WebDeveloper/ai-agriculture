import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Bot, Leaf, Microscope, LineChart } from "lucide-react";

export default function MinahilZainab() {
  return (
    <Layout title="Technical Applications of AI in Agriculture">
      <div className="space-y-16">
        {/* Agriculture Robotics */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/agriculture-robotics-minahi-content-1.jpg"
              alt="Agriculture Robotics"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Bot className="h-8 w-8" />
                  Agriculture Robotics
                </h2>
                <p className="mt-2 text-gray-200">
                  Advanced autonomous systems revolutionizing farming operations
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Automated Tasks</h3>
              <p className="text-muted-foreground">
                Robots perform harvesting, planting, and weeding with precision
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Smart Operations</h3>
              <p className="text-muted-foreground">
                Autonomous tractors handle seeding and crop monitoring
              </p>
            </Card>
          </div>
        </section>

        {/* Weed Detection */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/weed-detection-minahi-content-1.jpg"
              alt="Weed Detection"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Leaf className="h-8 w-8" />
                  Weed Detection
                </h2>
                <p className="mt-2 text-gray-200">
                  AI-powered systems for precise weed identification and control
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time Detection</h3>
              <p className="text-muted-foreground">
                Computer vision identifies weeds from crops instantly
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Targeted Treatment</h3>
              <p className="text-muted-foreground">
                Precise application of herbicides reduces waste and environmental impact
              </p>
            </Card>
          </div>
        </section>

        {/* Disease Diagnosis */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/disease-diagnose-minahi-content-1.jpg"
              alt="Disease Diagnosis"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Microscope className="h-8 w-8" />
                  Disease Diagnosis
                </h2>
                <p className="mt-2 text-gray-200">
                  Early detection and treatment of plant diseases
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Early Detection</h3>
              <p className="text-muted-foreground">
                AI analyzes plant images to identify diseases before visible symptoms
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Treatment Planning</h3>
              <p className="text-muted-foreground">
                Automated recommendations for disease management
              </p>
            </Card>
          </div>
        </section>

        {/* Crop Monitoring */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/crop-monitoring-minahi-content-1.jpg"
              alt="Crop Monitoring"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <LineChart className="h-8 w-8" />
                  Crop Monitoring
                </h2>
                <p className="mt-2 text-gray-200">
                  Continuous tracking of crop health and growth
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Real-time Tracking</h3>
              <p className="text-muted-foreground">
                IoT sensors monitor soil conditions and plant health
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-muted-foreground">
                AI processes sensor data to optimize growing conditions
              </p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
