const Packages = require("../modells/TourPackage");

exports.getTourPackageService = async (query) => {
  const packages = await Packages.find();
  return packages;
};
exports.createTourPackageService = async (data) => {
  console.log(data);
  const result = await Packages.create(data);
  //   const packages = [];
  //   data.forEach((package) => {
  //     packages.push(Packages.create(package));
  //   });
  //   const result = await Promise.all(packages);

  return result;
};
