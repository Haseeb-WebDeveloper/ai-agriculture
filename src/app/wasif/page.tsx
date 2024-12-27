'use client';
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, X, AlertCircle, Leaf, Brain, Cloud, Users, Layout } from "lucide-react";
import Link from "next/link";

interface Analysis {
  diseaseName: string;
  stage: string;
  mainCauses: string;
  nutrientsDeficiency: string;
  personalizedAdvice: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<string | null>(null);

  const handleImageUpload = async (file: File) => {
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsAnalyzing(true);
      setError(null);
      setAnalysis(null);
      setActiveTab(null);
      
      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('/api/analyze', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Analysis failed');
        }

        const result = await response.json();
        setAnalysis(result);
      } catch (error) {
        console.error('Error:', error);
        setError('Failed to analyze image. Please try again.');
      } finally {
        setIsAnalyzing(false);
      }
    }
  };

  
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const renderAnalysisContent = () => {
    if (!analysis || !activeTab) return null;

    const content = {
      disease: {
        title: "Disease Information",
        content: analysis.diseaseName,
        icon: <AlertCircle className="w-5 h-5" />
      },
      stage: {
        title: "Disease Stage",
        content: analysis.stage,
        icon: <Brain className="w-5 h-5" />
      },
      causes: {
        title: "Main Causes",
        content: analysis.mainCauses,
        icon: <Cloud className="w-5 h-5" />
      },
      nutrients: {
        title: "Nutrients Deficiency",
        content: analysis.nutrientsDeficiency,
        icon: <Leaf className="w-5 h-5" />
      },
      advice: {
        title: "Personalized Advice",
        content: analysis.personalizedAdvice,
        icon: <Users className="w-5 h-5" />
      }
    }[activeTab];

    return (
      <Card className="mt-4">
        <CardHeader className="flex flex-row items-center gap-2">
          {content?.icon}
          <CardTitle className="text-xl">{content?.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">{content?.content}</p>
        </CardContent>
      </Card>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <Link href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          ← Back to Home
        </Link>

        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Plant Disease Detection</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <Card className="lg:sticky lg:top-8">
              <CardContent className="p-6">
                <div 
                  className={`
                    min-h-[300px] flex items-center justify-center rounded-lg border-2 border-dashed
                    ${dragActive ? 'border-primary' : 'border-muted'}
                    transition-colors duration-200
                  `}
                  onDragEnter={handleDrag}
                  onDragLeave={handleDrag}
                  onDragOver={handleDrag}
                  onDrop={handleDrop}
                >
                  {selectedImage ? (
                    <div className="relative w-full aspect-video">
                      <Image
                        src={selectedImage}
                        alt="Uploaded plant"
                        fill
                        className="object-contain rounded-lg"
                      />
                      <Button
                        size="icon"
                        variant="destructive"
                        className="absolute top-2 right-2"
                        onClick={() => {
                          setSelectedImage(null);
                          setAnalysis(null);
                          setActiveTab(null);
                        }}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center p-12">
                      <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Drag and drop your plant photo here or
                      </p>
                      <div className="relative">
                        <input
                          type="file"
                          id="file-upload"
                          className="hidden"
                          accept="image/*"
                          onChange={(e) => {
                            const files = e.target.files;
                            if (files && files[0]) {
                              handleImageUpload(files[0]);
                            }
                          }}
                        />
                        <Button
                          onClick={() => document.getElementById('file-upload')?.click()}
                          className="relative"
                        >
                          Choose Photo
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Analysis Section */}
            <div className="space-y-4">
              {isAnalyzing ? (
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                    <p className="text-lg font-medium">Analyzing your plant...</p>
                    <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
                  </CardContent>
                </Card>
              ) : analysis && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <Button
                      variant={activeTab === 'disease' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('disease')}
                      className="w-full"
                    >
                      Disease
                    </Button>
                    <Button
                      variant={activeTab === 'stage' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('stage')}
                      className="w-full"
                    >
                      Stage
                    </Button>
                    <Button
                      variant={activeTab === 'causes' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('causes')}
                      className="w-full"
                    >
                      Causes
                    </Button>
                    <Button
                      variant={activeTab === 'nutrients' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('nutrients')}
                      className="w-full"
                    >
                      Nutrients
                    </Button>
                    <Button
                      variant={activeTab === 'advice' ? 'default' : 'outline'}
                      onClick={() => setActiveTab('advice')}
                      className="w-full md:col-span-2"
                    >
                      Advice
                    </Button>
                  </div>
                  {renderAnalysisContent()}
                </div>
              )}

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
