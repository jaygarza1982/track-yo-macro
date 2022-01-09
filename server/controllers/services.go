package controllers

import "github.com/gin-gonic/gin"

func GetAuthString(ctx *gin.Context) string {
	// Obtain authorization token
	authTokenSlice := ctx.Request.Header["Authorization"]
	var authToken string
	if len(authTokenSlice) != 0 {
		authToken = authTokenSlice[0]
	}

	return authToken
}
