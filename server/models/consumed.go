package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Consumed struct {
	ID                primitive.ObjectID `bson:"_id" json:"_id"`
	FoodID            primitive.ObjectID `bson:"foodId" json:"foodId"`
	Quantity          float32            `json:"quantity,omitempty" bson:"quantity,omitempty"`
	TimeConsumedEpoch int64              `json:"timeConsumedEpoch,omitempty" bson:"timeConsumedEpoch,omitempty"`
}
