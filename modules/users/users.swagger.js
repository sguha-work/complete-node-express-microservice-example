const UserSwagger = {
    paths: {
        "get": {
          "tags": [
            "teachers"
          ],
          "summary": "Get all user details",
          "description": "Get all user details",
          "operationId": "getUsers",
          "responses": {
            "200": {
              "description": "Fetch user successful",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/FetchUseersResponseModel"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/FetchUsersResponseModel"
                  }
                }
              }
            },
            "400": {
              "description": "Invalid ID supplied"
            },
            "404": {
              "description": "Teachers not found"
            },
            "405": {
              "description": "Validation exception"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        },
        "post": {
          "tags": [
            "teachers"
          ],
          "summary": "Create a new user entry in database",
          "description": "Create a new user entry in database",
          "operationId": "createUseer",
          "requestBody": {
            "description": "Create a new user in database",
            "content": {
              "application/json": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserRequestModel"
                }
              },
              "application/xml": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserRequestModel"
                }
              },
              "application/x-www-form-urlencoded": {
                "schema": {
                  "$ref": "#/components/schemas/CreateUserRequestModel"
                }
              }
            },
            "required": true
          },
          "responses": {
            "201": {
              "description": "Response of successful user creation",
              "content": {
                "application/json": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateUseerResponseModel"
                  }
                },
                "application/xml": {
                  "schema": {
                    "$ref": "#/components/schemas/CreateTeacherResponseModel"
                  }
                }
              }
            },
            "405": {
              "description": "Invalid input"
            }
          },
          "security": [
            {
              "petstore_auth": [
                "write:pets",
                "read:pets"
              ]
            }
          ]
        }
      },
      models:{

      }
}

  export default UserSwagger;