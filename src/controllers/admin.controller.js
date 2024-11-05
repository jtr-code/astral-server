import { Site } from "../models/site.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const createSite = asyncHandler(async (req, res, _next) => {
  const { title, description, author, image, url, isTrending } = req.body;

  const site = await Site.create({
    title,
    description,
    author,
    image,
    url,
    isTrending
  })


  return res.status(201).json(new ApiResponse(200, site, "Site created successfully"))
})


export { createSite }