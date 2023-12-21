package main

import (
	"log"
	"net/http"

	"github.com/gin-gonic/gin"
)

func main() {
	r := gin.Default()

	r.Static("/dist", "./dist")
	r.StaticFile("/", "./client/index.html")

	r.GET("/ping", func(ctx *gin.Context) {
		ctx.JSON(http.StatusOK, gin.H{
			"message": "pong!",
		})
	})

	log.Fatal(
		r.Run(":42069"),
	)
}
