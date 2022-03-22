import instance from "../plugins/Axios";

/**
 * GENERIC API REQUEST FUNCTION
 * @param {*} method i.e get
 * @param {*} body: formData-Object
 * @returns response only if status is 'OK'
 */

const Request = async (url) => {
  try {
    const response = await instance.get(url);
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default Request;
