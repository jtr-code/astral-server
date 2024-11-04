import { Site } from "../models/site.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"


const getAllSites = asyncHandler(async (_req, res) => {
  const sites = await Site.find();

  return res.status(200).json(new ApiResponse(200, sites, "Sites fetched successfully"))
});


export {
  getAllSites,

};