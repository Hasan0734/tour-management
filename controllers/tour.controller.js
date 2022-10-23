const {
  getTourPackageService,
  createTourPackageService,
} = require("../services/tourPackage.services");
const fs = require("fs");

exports.getTourPackage = async (req, res, next) => {
  try {
    const result = await getTourPackageService(req.query);
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

exports.createTourPackage = async (req, res, next) => {
  try {
    //  const data = fs.readFileSync("./data/MOCK_DATA.json");
    //  const parsedData = JSON.parse(data);
      
    const result = await createTourPackageService(req.body);
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
