const yargs = require("yargs");
const { sequelize } = require("./db/connection");
const { addMovie, listMovies } = require("./movie/movieFunctions");

const app = async (yargsObj) => {
  try {
    await sequelize.sync();
    if (yargsObj.add) {
      await addMovie({ title: yargsObj.title, actor: yargsObj.actor });
      console.log(await listMovies());
    } else if (yargsObj.list) {
      console.log(await listMovies({ [yargsObj.key]: yargsObj.value }));
    } else {
      console.log("Incorrect command");
    }
    await sequelize.close();
  } catch (error) {
    await sequelize.close();
    console.log(error);
  }
};

app(yargs.argv);
