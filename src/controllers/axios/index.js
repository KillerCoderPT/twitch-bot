const axios = require("axios");

const url = process.env.AXIOS_CALL;

module.exports.getStatus = async () => {
  return await axios.get(`${url}/twitch-status`).then((data) => data);
};

module.exports.getStatusById = async (id) => {
  return await axios.get(`${url}/twitch-status/${id}`).then((data) => data);
};

module.exports.getGithubProjects = async (id = undefined) => {
  if (id === undefined) {
    return await axios.get(`${url}/github`).then((data) => data);
  } else {
    return await axios.get(`${url}/github/${id}`).then((data) => data);
  }
};