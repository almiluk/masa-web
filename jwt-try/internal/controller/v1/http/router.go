package v1

import (
	"errors"
	"jwt-test/config"
	"jwt-test/internal/adapter/jwt"
	"net/http"

	jwt_go "github.com/golang-jwt/jwt/v5"
	echojwt "github.com/labstack/echo-jwt/v4"
	"github.com/labstack/echo/v4"
)

func SetRoutes(e *echo.Echo, cfg *config.Config) {
	apiGroup := e.Group("/v1")
	apiGroup.GET("/hello", func(c echo.Context) error { return nil })
	apiGroup.GET("/login", func(c echo.Context) error {
		// TODO: Refactor with Echo.Static()
		return c.File("internal/controller/v1/http/templates/login.html")
	}).Name = "v1/login"
	apiGroup.POST("/login", LoginHandler)

	jwt.Init(cfg.JWT.AccessSecret, cfg.JWT.RefreshSecret)

	apiGroup.Use(echojwt.WithConfig(echojwt.Config{
		SigningKey:   []byte(cfg.JWT.AccessSecret),
		ErrorHandler: JWTErrorHandler,
		TokenLookup:  "cookie:access-token",
	}))
	//apiGroup.Use(middleware.JWT)

	apiGroup.GET("/vip", func(c echo.Context) error {
		token, ok := c.Get("user").(*jwt_go.Token) // by default token is stored under `user` key
		if !ok {
			return errors.New("JWT token missing or invalid")
		}
		claims, ok := token.Claims.(jwt_go.MapClaims) // by default claims is of type `jwt.MapClaims`
		if !ok {
			return errors.New("failed to cast claims as jwt.MapClaims")
		}
		return c.JSON(http.StatusOK, claims)
	}).Name = "v1/vip"
}
