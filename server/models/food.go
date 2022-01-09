package models

import "go.mongodb.org/mongo-driver/bson/primitive"

type Food struct {
	ID          primitive.ObjectID `bson:"_id" json:"_id"`
	Name        string             `json:"name,omitempty" bson:"name,omitempty"`
	Owner       string             `json:"owner,omitempty" bson:"owner,omitempty"`
	Type        string             `json:"type,omitempty" bson:"type,omitempty"`
	Calories    float32            `json:"calories,omitempty" bson:"calories,omitempty"`
	Protein     float32            `json:"protein,omitempty" bson:"protein,omitempty"`
	Carbs       float32            `json:"carbs,omitempty" bson:"carbs,omitempty"`
	Fat         float32            `json:"fat,omitempty" bson:"fat,omitempty"`
	Description string             `json:"description,omitempty" bson:"description,omitempty"`
}
