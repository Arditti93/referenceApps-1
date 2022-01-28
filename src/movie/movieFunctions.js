const Movie = require("./movieModel");

exports.addMovie = async (movieObj) => {
  try {
    await Movie.create(movieObj);
  } catch (error) {
    console.log(error);
  }
};

exports.listMovies = async (key, filter) => {
  try {
    if (key) {
      return await Movie.findOne({ [key]: filter });
    } else {
      return await Movie.find({});
    }
  } catch (error) {
    console.log(error);
  }
};

exports.updateMovie = async (filterObj, updateObj) => {
  try {
    await Movie.updateOne(filterObj, { $set: updateObj });
  } catch (error) {
    console.log(error);
  }
};

exports.deleteMovie = async (deleteObj) => {
  try {
    await Movie.deleteOne(deleteObj);
  } catch (error) {
    console.log(error);
  }
};
