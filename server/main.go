package main

import (
	"os"

	"github.com/gin-contrib/sessions"
	"github.com/gin-contrib/sessions/cookie"
	"github.com/gin-gonic/gin"
	"github.com/jaygarza1982/track-yo-macro/server/config"
	"github.com/jaygarza1982/track-yo-macro/server/controllers"
)

func main() {
	ginServer := gin.Default()

	sessionSecret := os.Getenv("SESSION_SECRET")
	store := cookie.NewStore([]byte(sessionSecret))
	ginServer.Use(sessions.Sessions("session", store))

	config := config.New()

	ginServer.GET("/api/", func(c *gin.Context) {
		status := "Status is OK"
		c.JSON(200, gin.H{"message": status})
	})

	ginServer.GET("/api/food/list", controllers.ListFood(config))
	ginServer.POST("/api/food/add", controllers.AddFood(config))
	ginServer.GET("/api/consumed/list", controllers.ListConsumed(config))
	ginServer.POST("/api/consumed/add", controllers.AddConsumed(config))

	ginServer.Run(":8080")
}
