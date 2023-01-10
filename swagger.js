import UserSwagger from "./modules/users/users.swagger.js";
const SwaggerJSON = JSON.parse(`{
  "openapi": "3.0.3",
  "info": {
    "title": "Practice AWS - OpenAPI 3.0",
    "description": "practice auth APIs",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "apiteam@swagger.io"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    },
    "version": "1.0.11"
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "servers": [
    {
      "url": "http://localhost:1000"
    }
  ],
  "tags": [
    {
      "name": "This is a practice application explaing microservices",
      "description": "Everything about micro service",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://localhost:1000"
      }
    }
  ],
  "paths": {
    "/users": ${JSON.stringify(UserSwagger.paths)}
  },
  "components": {
    "schemas": {
      "FetchUsersResponseModel": {
        "type": "object",
        "properties": {
          "status": {
            "type": "number"
          },
          "data": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "_id": {
                  "type": "string"
                },
                "name": {
                  "type": "string"
                },
                "phonenumber": {
                  "type": "number"
                },
                "address": {
                  "type": "string"
                },
                "photo": {
                  "type": "string"
                },
                "sex": {
                  "type": "string"
                },
                "createdAt": {
                  "type": "string"
                },
                "updatedAt": {
                  "type": "string"
                },
                "__v": {
                  "type": "number"
                }
              }
            }
          },
          "message": {
            "type": "string"
          }
        },
        "xml": {
          "name": "order"
        }
      },
      "User": {
        "properties": {
          "name": {
            "type": "string"
          },
          "birthdate": {
            "type": "string"
          },
          "address": {
            "type": "string"
          },
          "email": {
            "type": "string"
          },
          "gender": {
            "type": "string",
            "enum": [
              "Male",
              "Female",
              "Trans",
              "Gay"
            ]
          }
        }
      },
      "CreateUserRequestModel": {
        "properties": {
          "name": {
            "type": "string"
          },
          "phonenumber": {
            "type": "number"
          },
          "address": {
            "type": "string"
          },
          "photo": {
            "type": "string"
          },
          "sex": {
            "type": "string",
            "enum": [
              "male",
              "female",
              "gay",
              "trans"
            ]
          }
        }
      },
      "CreateUserResponseModel": {
        "properties": {}
      }
    },
    "securitySchemes": {
      "petstore_auth": {
        "type": "oauth2",
        "flows": {
          "implicit": {
            "authorizationUrl": "https://petstore3.swagger.io/oauth/authorize",
            "scopes": {
              "write:pets": "modify pets in your account",
              "read:pets": "read your pets"
            }
          }
        }
      },
      "api_key": {
        "type": "apiKey",
        "name": "api_key",
        "in": "header"
      }
    }
  }
}`);
export default SwaggerJSON;