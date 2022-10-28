const Tour = require("../modells/Tour");

exports.getTourService = async (filters, queries) => {
  const tours = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fields)
    .sort(queries.sortBy);

  const total = await Tour.countDocuments();
  const page = Math.ceil(total / queries.limit);
  return { page, total, tours };
};

exports.createTourService = async (data) => {
  const result = await Tour.create(data);
  return result;
};

exports.getTourByIdSevice = async (tourId) => {
  await Tour.updateOne({ _id: tourId }, { $inc: { viwed: 1 } });
  const result = await Tour.findById(tourId);

  return result;
};

exports.updateTourByIdService = async (tourId, data) => {
  // const result = await Tour.updateOne(
  //   { _id: tourId },
  //   { $set: data },
  //   { runValidators: true }
  // );

  const tour = await Tour.findById(tourId);
  const result = await tour.set(data).save();

  return result;
};

exports.getTourTrandingService = async () => {
  const result = await Tour.find().sort("-viwed").limit(3);
  return result;
};

exports.getTourCheapestService = async () => {
  const result = await Tour.find().sort("price").limit(3);
  return result;
};
