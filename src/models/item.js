import mongoose, { Schema } from 'mongoose'

// This prevents multiple model compilations
const PortfolioItem =
  mongoose.models.PortfolioItem ||
  mongoose.model(
    'PortfolioItem',
    new Schema(
      {
        category: {
          type: String,
          required: true,
          enum: ['development', 'design', 'media'],
          default: 'development',
        },
        title: {
          type: String,
          required: true,
          trim: true,
        },
        desc: {
          type: String,
          required: true,
        },
        img: {
          type: String,
          required: true,
        },
        hashtag: {
          type: String,
          default: null,
        },
        link: [
          {
            url: {
              type: String,
              required: true,
            },
            site: {
              type: String,
              required: true,
              enum: ['figma', 'website', 'github', 'youtube'],
            },
          },
        ],
        skills: [
          {
            type: String,
            required: true,
          },
        ],
      },
      {
        timestamps: true,
      },
    ),
  )

// Create indexes for common query fields
if (!PortfolioItem.collection.indexes().length) {
  PortfolioItem.collection.createIndex({ category: 1 })
  PortfolioItem.collection.createIndex({ title: 'text' })
}

export default PortfolioItem
