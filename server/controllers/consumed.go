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

func ListConsumed(config *config.Config) func(ctx *gin.Context) {
	consumedCollection := config.Database.Collection("consumed")

	return func(ctx *gin.Context) {
		cur, err := consumedCollection.Find(context.TODO(), bson.M{})
		if err != nil {
			panic(err)
		}

		var consumeds []models.Consumed
		for cur.Next(context.TODO()) {
			var consumed models.Consumed
			err := cur.Decode(&consumed)

			if err != nil {
				fmt.Println("Error getting consumed", err)
				panic(err)
			}

			consumeds = append(consumeds, consumed)
		}

		ctx.JSON(200, consumeds)
	}
}

func AddConsumed(config *config.Config) func(ctx *gin.Context) {
	consumedCollection := config.Database.Collection("consumed")

	return func(ctx *gin.Context) {
		var consumed models.Consumed

		if err := ctx.BindJSON(&consumed); err != nil {
			panic(err)
		}

		consumed.ID = primitive.NewObjectID()

		res, err := consumedCollection.InsertOne(context.TODO(), consumed)

		if err != nil {
			fmt.Println("Error inserting consumed", err)
			panic(err)
		}

		ctx.JSON(200, res)
	}
}
