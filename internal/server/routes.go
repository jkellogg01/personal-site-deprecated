package server

import (
	"github.com/gofiber/fiber/v2"
)

func RegisterFiberRoutes(app *fiber.App) {
	app.Get("/ping", handleGetHealth)

	app.Get("/", handleGetIndex)
}

func handleGetIndex(c *fiber.Ctx) error {
	return c.Render("index", nil)
}

func handleGetHealth(c *fiber.Ctx) error {
	return c.SendString("pong!")
}
