const { getTourCheapestService, getTourTrandingService } = require("../services/otherTour.services");

exports.getTrandingTour = async (req, res, next) => {
  try {
      const result = await getTourTrandingService();
      res.status(200).json({
          status: "success",
          data: result
      });
  } catch (error) {
      res.status(400).json({
          status: "fail",
          message: error.message
    })
  }
};

exports.getCheapestTour = async (req, res, next) => {
    try {
        const result = await getTourCheapestService();
         res.status(200).json({
           status: "success",
           data: result,
         });
    } catch (error) {
        res.status(400).json({
            status: 'fail',
            message: error.message
        })
    }
};
