import mongoose, { Schema } from 'mongoose'

mongoose.connect(process.env.MONGODB_URI)
mongoose.Promise = global.Promise

const portfolioItemSchema = new Schema(
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
)

// Create indexes for common query fields
portfolioItemSchema.index({ category: 1 })
portfolioItemSchema.index({ title: 'text' })

const PortfolioItem = mongoose.model('PortfolioItem', portfolioItemSchema)

module.exports = PortfolioItem
