import { NextResponse } from 'next/server';
import { analyzeImage } from '@/utils/ai-services';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const image = formData.get('image');

    if (!image) {
      return NextResponse.json(
        { error: 'No image file provided' },
        { status: 400 }
      );
    }

    // Convert image to buffer
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get analysis from GPT model
    const result = await analyzeImage(buffer);

    return NextResponse.json(result);

  } catch (error) {
    console.error('Error processing image:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
} 