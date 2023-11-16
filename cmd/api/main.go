package main

import (
	"log"
	"personal-site/internal/server"
)

func main() {

	app := server.New()

	server.RegisterFiberRoutes(app)

	log.Fatalf("Server Closed: %v", app.Listen(":8080"))
}
