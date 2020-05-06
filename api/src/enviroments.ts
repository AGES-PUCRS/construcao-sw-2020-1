var env = process.env.NODE_ENV || "development";

const config = {
  "ambientes": {
    "development": {
      "api_url": "mongodb+srv://grupo1:grupo1@constrsw-grupo-1-qjwdc.mongodb.net/test?retryWrites=true&w=majority"
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