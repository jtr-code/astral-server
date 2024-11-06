import { Site } from "../models/site.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js"
import { ApiError } from "../utils/ApiError.js";


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


const updateSite = asyncHandler(async (req, res) => {
  const { siteId } = req.params;
  const { title, description, author, image, url, isTrending } = req.body;

  const site = await Site.findByIdAndUpdate(siteId, {
    $set: {
      title, description, author, image, url, isTrending
    },
  }, {
    new: true
  })

  if (!site) {
    throw new ApiError(404, "Site does not exist");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, site, "Site updated successfully"));
});


const deleteSite = asyncHandler(async (req, res) => {
  const { siteId } = req.params

  const site = await Site.findByIdAndDelete(siteId);

  if (!site) {
    throw new ApiError(404, "Site does not exist");
  }

  return res.status(200).json(new ApiResponse(200, { deletedSite: site }, "Site deleted successfully"))
})

export { createSite, updateSite, deleteSite }