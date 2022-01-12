package controllers

import (
	"context"
	"fmt"

	"github.com/gin-gonic/gin"
	"github.com/jaygarza1982/track-yo-macro/server/config"
	"github.com/jaygarza1982/track-yo-macro/server/models"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/bson/primitive"
)

func ListFood(config *config.Config) func(ctx *gin.Context) {
	foodCollection := config.Database.Collection("food")

	return func(ctx *gin.Context) {

		authToken := GetAuthString(ctx)

		cur, err := foodCollection.Find(context.TODO(), bson.M{"owner": authToken})
		if err != nil {
			panic(err)
		}

		var foods []models.Food
		for cur.Next(context.TODO()) {
			var food models.Food
			err := cur.Decode(&food)

			if err != nil {
				fmt.Println("Error getting food", err)
				panic(err)
			}

			foods = append(foods, food)
		}

		ctx.JSON(200, foods)
	}
}

func AddFood(config *config.Config) func(ctx *gin.Context) {
	foodCollection := config.Database.Collection("food")

	return func(ctx *gin.Context) {
		var food models.Food

		if err := ctx.BindJSON(&food); err != nil {
			panic(err)
		}

		food.ID = primitive.NewObjectID()
		food.Owner = GetAuthString(ctx)

		res, err := foodCollection.InsertOne(context.TODO(), food)

		if err != nil {
			fmt.Println("Error inserting food", err)
			panic(err)
		}

		ctx.JSON(200, res)
	}
}

func DeleteFood(config *config.Config) func(ctx *gin.Context) {
	foodCollection := config.Database.Collection("food")

	return func(ctx *gin.Context) {
		var food models.Food

		if err := ctx.BindJSON(&food); err != nil {
			panic(err)
		}

		authString := GetAuthString(ctx)

		res, err := foodCollection.DeleteOne(context.TODO(), bson.M{"_id": food.ID, "owner": authString})
		if err != nil {
			panic(err)
		}

		ctx.JSON(200, res)
	}
}
