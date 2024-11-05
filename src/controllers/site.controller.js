import { Site } from "../models/site.model.js"
import { asyncHandler } from "../utils/asyncHandler.js"
// import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const getAllSites = asyncHandler(async (req, res) => {
  const { query, trending } = req.query;

  const sites = await Site.aggregate([
    {
      $match: query?.length > 0 ? { title: { $regex: query.trim(), $options: "i" } } : {},
    },
    {
      $match: trending ? {
        isTrending: JSON.parse(trending),
      } : {},
    },
    {
      $sort: { updatedAt: -1 },
    },
  ]);

  return res.status(200).json(new ApiResponse(200, sites, "Sites fetched successfully"));
});



export {
  getAllSites,

};