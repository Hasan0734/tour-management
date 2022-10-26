const {
  getTourService,
  createTourService,
  getTourByIdSevice,
  updateTourByIdService,
} = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    let filters = { ...req.query };
    const excludeFields = ["sort", "page", "limit", "fields"];
    excludeFields.forEach((field) => delete filters[field]);

    let queries = {};
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }
    if (req.query.page) {
      const { page = 1, limit = 5 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }
    const result = await getTourService(filters, queries);

    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: "Cant't get the data",
      error: error.message,
    });
  }
};

exports.createTour = async (req, res, next) => {
  try {
    // const data = fs.readFileSync('./data/MOCK_DATA.json')
    // const parsed = JSON.parse(data)
    const result = await createTourService(req.body);
    res.status(200).json({
      status: "success",
      message: "Data inserted successfull",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.getTourById = async (req, res, next) => {
  try {
    const tourId = req.params.id;
    const result = await getTourByIdSevice(tourId);
    res.status(200).json({
      status: "Success",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Tour not found",
      error: error.message,
    });
  }
};

exports.updateTourById = async (req, res, next) => {
  try {
    const tourId = req.params.id;
    const result = await updateTourByIdService(tourId, req.body);
    if (!result) {
      res.status(400).json({
        status: "failed",
        message: "Couldn't update the tour",
      });
    }

    res.status(200).json({
      status: "success",
      message: "Successfully updated  the tour",
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      message: "Tour not found",
      error: error.message,
    });
  }
};
