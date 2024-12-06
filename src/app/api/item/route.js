import dbConnect from '@/lib/dbConnect'
import PortfolioItem from '@/models/item'
import { NextResponse } from 'next/server'

export async function POST(req) {
  try {
    await dbConnect()
    const body = await req.json()
    const itemData = body

    const portfolioItem = await PortfolioItem.create(itemData)

    return NextResponse.json(
      {
        success: true,
        data: portfolioItem,
        message: 'Portfolio item created successfully',
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('Error creating portfolio item:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to create portfolio item',
        error: error.message,
      },
      { status: 500 },
    )
  }
}

export async function GET() {
  try {
    await dbConnect()
    const portfolioItems = await PortfolioItem.find().select('-__v')

    return NextResponse.json(
      {
        success: true,
        count: portfolioItems.length,
        data: portfolioItems,
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Error fetching portfolio items:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Failed to fetch portfolio items',
        error: error.message,
      },
      { status: 500 },
    )
  }
}
