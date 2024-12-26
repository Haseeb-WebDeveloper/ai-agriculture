import { Layout } from "@/components/layout";
import { Card } from "@/components/ui/card";
import { AlertTriangle, Ban, DollarSign, AlertOctagon } from "lucide-react";

export default function Laraib() {
  return (
    <Layout title="Limitations of using AI in Agriculture">
      <div className="space-y-16">
        {/* Main Limitations */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Core Limitations</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Technology Access and Usability</li>
                  <li>Scalability</li>
                  <li>Initial Costs</li>
                  <li>Ethical and Environmental Concerns</li>
                  <li>Lack of Seamless Integration</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Research & Implementation */}
        <section className="space-y-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <AlertOctagon className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Research Limitations</h3>
                <p className="text-muted-foreground">
                  Research limitations (needs empirical validation across countries or states to understand the effectiveness and relevance)
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Additional Challenges */}
        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <Ban className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Technical Challenges</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>Limited Functionality</li>
                  <li>E-Waste Problems</li>
                  <li>Market Concentration</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <DollarSign className="w-8 h-8 text-primary" />
              <div>
                <h3 className="text-xl font-semibold mb-3">Socio-Economic Impact</h3>
                <p className="text-muted-foreground">Unemployment</p>
              </div>
            </div>
          </Card>
        </section>
      </div>
    </Layout>
  );
}
