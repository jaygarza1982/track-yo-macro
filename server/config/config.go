package config

import (
	"context"
	"fmt"
	"log"
	"os"

	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

type Config struct {
	Database *mongo.Database
}

func New() *Config {
	uri := os.Getenv("MONGO_URL")
	dbName := os.Getenv("MONGO_INITDB_DATABASE")

	fmt.Printf("Attemping to connect to MongoDB on %v\n", uri)
	if uri == "" {
		log.Fatal("You must set your 'MONGO_URL' environmental variable.")
	}

	client, err := mongo.Connect(context.TODO(), options.Client().ApplyURI(uri))
	if err != nil {
		panic(err)
	}

	return &Config{Database: client.Database(dbName)}
}
