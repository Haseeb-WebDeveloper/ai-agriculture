import Link from 'next/link';
import { Leaf, Brain, LineChart, Microscope, Bot } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-accent/10 relative overflow-hidden">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-24">
        <div className="text-center space-y-6 relative z-10">
          <h1 className="text-6xl font-bold ">
            AI in Agriculture
          </h1>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/hero-bg.jpg"
            alt="Agriculture Background"
            fill
            className="object-cover"
          />
        </div>

        {/* Team Navigation */}
        <div className="mt-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Laraib Tabassum's Section */}
            <Link href="/laraib-tabassum" 
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:scale-105 border border-border/50">
              <div className="relative">
                <Image
                  src="/liraib-2.jpg"
                  alt="Introduction"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <div className="flex items-start gap-4">
                  <Leaf className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Laraib Tabassum</h3>
                    <p className="text-sm text-muted-foreground">Introduction & Need for AI</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Abdullah's Section */}
            <Link href="/abdullah-afzal"
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:scale-105 border border-border/50">
              <div className="relative">
                <Image
                  src="/abdullah-1.jpg"
                  alt="Key Advantages"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <div className="flex items-start gap-4">
                  <Brain className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Abdullah Afzal</h3>
                    <p className="text-sm text-muted-foreground">Key Advantages of AI</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Minahil's Section */}
            <Link href="/minahil-zainab"
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:scale-105 border border-border/50">
              <div className="relative">
                <Image
                  src="/disease diagnose-minahi-content-3.jpg"
                  alt="Technical Applications"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <div className="flex items-start gap-4">
                  <Bot className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Minahil Zainab</h3>
                    <p className="text-sm text-muted-foreground">Agriculture Robotics & Applications</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Khola's Section */}
            <Link href="/khola-qasim"
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:scale-105 border border-border/50">
              <div className="relative">
                <Image
                  src="/disease-diagnose-minahi-content-1.jpg"
                  alt="Disease Detection"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <div className="flex items-start gap-4">
                  <Microscope className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Khola Qasim</h3>
                    <p className="text-sm text-muted-foreground">Disease Detection & Management</p>
                  </div>
                </div>
              </div>
            </Link>

            {/* Wasif's Section */}
            <Link href="/wasif"
              className="group relative overflow-hidden rounded-xl bg-card/50 backdrop-blur-sm p-6 transition-all hover:shadow-lg hover:scale-105 border border-border/50">
              <div className="relative">
                <Image
                  src="/wasif-1.jpg"
                  alt="AI Tools"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover h-48 w-full"
                />
                <div className="flex items-start gap-4">
                  <LineChart className="w-8 h-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">Wasif</h3>
                    <p className="text-sm text-muted-foreground">AI Tools & Implementation</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
} 