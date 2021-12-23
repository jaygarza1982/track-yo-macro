package main

import (
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
)

func main() {
	ginServer := gin.Default()

	sessionSecret := os.Getenv("SESSION_SECRET")
	store := cookie.NewStore([]byte(sessionSecret))
	ginServer.Use(sessions.Sessions("session", store))

	ginServer.GET("/api/", func(c *gin.Context) {
		status := "Status is OK"
		c.JSON(200, gin.H{"message": status})
	})

	ginServer.Run(":8080")
}
