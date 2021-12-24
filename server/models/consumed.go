package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Consumed struct {
	ID                primitive.ObjectID `bson:"_id" json:"_id"`
	FoodID            primitive.ObjectID `bson:"foodId" json:"foodId"`
	TimeConsumedEpoch int64              `json:"timeConsumedEpoch,omitempty" bson:"timeConsumedEpoch,omitempty"`
}
