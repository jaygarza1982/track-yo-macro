package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Food struct {
	ID          primitive.ObjectID `bson:"_id" json:"_id"`
	Name        string             `json:"name,omitempty" bson:"name,omitempty"`
	Type        string             `json:"type,omitempty" bson:"type,omitempty"`
	Quantity    float32            `json:"quantity,omitempty" bson:"quantity,omitempty"`
	Calories    float32            `json:"calories,omitempty" bson:"calories,omitempty"`
	Protein     float32            `json:"protein,omitempty" bson:"protein,omitempty"`
	Carbs       float32            `json:"carbs,omitempty" bson:"carbs,omitempty"`
	Fat         float32            `json:"fat,omitempty" bson:"fat,omitempty"`
	Description string             `json:"description,omitempty" bson:"description,omitempty"`
}
