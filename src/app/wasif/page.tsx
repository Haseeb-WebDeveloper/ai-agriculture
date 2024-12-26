'use client';
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Upload, X, AlertCircle, Leaf, Brain, Cloud, Users, Layout } from "lucide-react";
import Link from "next/link";

interface Analysis {
  analysis: string;
}

export default function Home() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [analysis, setAnalysis] = useState<Analysis | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState<boolean>(false);

  const handleImageUpload = async (file: File) => {
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
      setIsAnalyzing(true);
      setError(null);
      setAnalysis(null);
      
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

  return (
    <div className="min-h-screen bg-background container mx-auto px-4 py-12">

        {/* Features Grid */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Real-time Analysis</h3>
            <p className="text-muted-foreground">
              Get instant results and recommendations using advanced AI algorithms
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Multiple Crop Support</h3>
            <p className="text-muted-foreground">
              Works with various crop types and common agricultural plants
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Treatment Suggestions</h3>
            <p className="text-muted-foreground">
              Receive detailed treatment recommendations and preventive measures
            </p>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3">Easy to Use</h3>
            <p className="text-muted-foreground">
              Simple drag-and-drop interface for quick disease detection
            </p>
          </Card>
        </div> */}
     <Link href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          ← Back to Home
        </Link>
        {/* Plant Analysis Tool Section */}
        <section className="py-16 mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">Plant Disease Detection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <div 
                    className={`
                      border-2 border-dashed rounded-lg p-6
                      ${dragActive ? 'border-primary' : 'border-muted'}
                      transition-colors duration-200
                    `}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {selectedImage ? (
                      <div className="relative aspect-square w-full max-w-lg mx-auto">
                        <Image
                          src={selectedImage}
                          alt="Uploaded plant"
                          fill
                          className="object-contain rounded-lg"
                        />
                        <Button
                          size="icon"
                          variant="destructive"
                          className="absolute -top-2 -right-2"
                          onClick={() => {
                            setSelectedImage(null);
                            setAnalysis(null);
                          }}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    ) : (
                      <div className="text-center">
                        <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                        <p className="text-muted-foreground mb-4">
                          Drag and drop your plant photo here or
                        </p>
                        <label>
                          <Button asChild>
                            <span>Choose Photo</span>
                          </Button>
                          <input
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={(e) => {
                              const files = e.target.files;
                              if (files && files[0]) {
                                handleImageUpload(files[0]);
                              }
                            }}
                          />
                        </label>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>

            <div className="lg:sticky lg:top-8 space-y-6">
              {isAnalyzing ? (
                <Card>
                  <CardContent className="pt-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 mb-4">
                      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                    </div>
                    <p className="text-lg font-medium">Analyzing your plant...</p>
                    <p className="text-sm text-muted-foreground mt-2">This may take a few moments</p>
                  </CardContent>
                </Card>
              ) : analysis && (
                <Card>
                  <CardHeader>
                    <CardTitle>Analysis Results</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="prose dark:prose-invert max-h-[60vh] overflow-y-auto custom-scrollbar">
                      <div className="whitespace-pre-wrap">
                        {analysis.analysis}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </section>

    </div>
  );
}
