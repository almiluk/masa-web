package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/evrone/go-clean-template/pkg/httpserver"
	"github.com/labstack/echo/v4"
	"github.com/labstack/echo/v4/middleware"

	"jwt-test/config"
	v1 "jwt-test/internal/controller/v1/http"
)

func main() {
	// Echo instance
	e := echo.New()

	cfg, err := config.NewConfig()
	if err != nil {
		e.Logger.Fatal(err)
	}

	e.Logger.SetLevel(cfg.Log.Level)

	e.Logger.Printf("%+v", cfg)

	e.Use(middleware.Logger())
	e.Use(middleware.Recover())

	httpServer := httpserver.New(e, httpserver.Port(cfg.HTTP.Port))

	v1.SetRoutes(e, cfg)

	interrupt := make(chan os.Signal, 1)
	signal.Notify(interrupt, os.Interrupt, syscall.SIGTERM)

	select {
	case s := <-interrupt:
		e.Logger.Info("app - Run - signal: " + s.String())
	case err = <-httpServer.Notify():
		e.Logger.Error(fmt.Errorf("app - Run - httpServer.Notify: %w", err))
	}

	// Shutdown
	err = httpServer.Shutdown()
	if err != nil {
		e.Logger.Error(fmt.Errorf("app - Run - httpServer.Shutdown: %w", err))
	}
}
