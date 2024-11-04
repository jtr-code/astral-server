import mongoose from 'mongoose'

const siteSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  author: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    required: true
  },
  url: {
    type: String,
    trim: true
  },
  isTrending: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true })

const Site = mongoose.model("Site", siteSchema)

export { Site }