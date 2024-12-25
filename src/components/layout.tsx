import Link from 'next/link';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
}

export function Layout({ children, title }: LayoutProps) {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Navigation */}
        <Link href="/" 
          className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8">
          ← Back to Home
        </Link>

        {/* Content */}
        <article className="prose prose-lg dark:prose-invert max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-8 text-foreground">{title}</h1>
          {children}
        </article>
      </div>
    </main>
  );
} 