var env = process.env.NODE_ENV || "development";

const config = {
  "ambientes": {
    "development": {
      "api_url": "mongodb://localhost/contrucao-data"
    },
    "hml": {
      "api_url": ""
    },
    "prod": {
      "api_url": ""
    }
  }
}

var Environment = config["ambientes"][env];

export default Environment;