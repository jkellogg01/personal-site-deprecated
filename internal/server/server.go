package server

import (
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/template/html/v2"
)

func New() *fiber.App {
	engine := html.New("./src/views", ".html")

	server := fiber.New(fiber.Config{
		Views: engine,
	})

	return server
}
