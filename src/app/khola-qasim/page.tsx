import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Microscope, Settings, LineChart } from "lucide-react";

export default function KholaQasim() {
  return (
    <Layout title="Disease Detection & Agricultural Management">
      <div className="space-y-16">
        {/* Disease Detection Section */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/disease-diagnose-minahi-content-1.jpg"
              alt="Disease Detection"
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
                  Early detection and targeted treatment of plant diseases
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Early Detection</h3>
              <p className="text-muted-foreground">
                AI spots plant diseases using drone/camera images for timely intervention
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Localized Treatments</h3>
              <p className="text-muted-foreground">
                Early diagnosis enables targeted treatments to protect crops effectively
              </p>
            </Card>
          </div>
        </section>

        {/* Management Section */}
        <section className="space-y-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/crop-monitoring-minahi-content-1.jpg"
              alt="Agriculture Management"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
              <div className="p-8 text-white max-w-2xl">
                <h2 className="text-3xl font-bold flex items-center gap-2">
                  <Settings className="h-8 w-8" />
                  Agriculture Management
                </h2>
                <p className="mt-2 text-gray-200">
                  Optimizing agricultural operations through AI-driven systems
                </p>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Operation Optimization</h3>
              <p className="text-muted-foreground">
                AI manages planting, moisture, irrigation, and crop rotation efficiently
              </p>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3">Decision Support</h3>
              <p className="text-muted-foreground">
                AI analyzes comprehensive data to support better farming decisions
              </p>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
