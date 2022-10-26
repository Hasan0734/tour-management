const Tour = require("../modells/Tour");

exports.getTourTrandingService = async () => {
  const tours = await Tour.find({ viwed: { $gte: 3 } })
    .sort('-viwed')
    .limit(3);
  return tours;
};
exports.getTourCheapestService = async () => {
  const tours = await Tour.find().sort().limit(3);

  return tours;
};
