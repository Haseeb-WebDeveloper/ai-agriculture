import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Microscope, Settings, LineChart } from "lucide-react";

export default function ManahilZainab() {
  return (
    <Layout title="Disease Diagnosis and Management">
      <div className="space-y-16">
        {/* Disease Diagnosis Section */}
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
                  Disease Diagnosis (Detection)
                </h2>
                <ul className="mt-4 space-y-2 text-gray-200">
                  <li>Early Detection: AI spots plant diseases using drone/camera images.</li>
                  <li>Localized Treatments: Early diagnosis enables targeted treatments to protect crops.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Agriculture Management */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Settings className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Agriculture Management and Production</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Optimizing Operations: AI manages planting, moisture, irrigation, and crop rotation.</li>
                  <li>Decision Support Systems: AI analyzes data for better decisions.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Crop Monitoring */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <LineChart className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Crop Monitoring/Management</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Tracking Field Conditions: AI and IoT monitor plant health and field conditions.</li>
                  <li>Data-Driven Adjustments: AI adjusts irrigation and planting based on data.</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
