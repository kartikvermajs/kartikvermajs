import jsonfile from "jsonfile";
import moment from "moment";

const path = "./data.json";
const date = moment().format();

const data = {
  data: date,
};

jsonfile.writeFile(path, data);
