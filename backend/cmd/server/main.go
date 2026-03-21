package main

import (
	"backend/internal/config"
	"backend/internal/db"
	"backend/internal/middleware"
	"backend/internal/routes"
	"log"
	"os"

	"github.com/gin-gonic/gin"
)

func main() {
	config, err := config.LoadConfig()

	if err != nil {
		log.Fatalf("Configuration loading error: %v", err)
		os.Exit(1)
	}

	r := gin.Default()

	r.Use(middleware.CORS())

	var jwtKey = []byte(config.Auth.JwtKey)
	db := db.GetConnection(config)
	defer db.Close()
	routes.InitRouter(db, jwtKey, config.Server.Host)

	log.Println("Backend started on :8080")
	r.Run(":8080")
}
