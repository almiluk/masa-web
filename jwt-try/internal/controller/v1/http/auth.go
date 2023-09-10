package v1

import (
	"fmt"
	"net/http"

	"jwt-test/internal/adapter/jwt"
	"jwt-test/internal/controller/v1/requests"
	"jwt-test/internal/entity"

	"github.com/labstack/echo/v4"
)

func LoginHandler(c echo.Context) error {
	// Check if request includes user's name and password fields
	userData := &requests.UserLoginData{}
	fmt.Println(userData)
	if err := c.Bind(userData); err != nil {
		return echo.NewHTTPError(http.StatusInternalServerError, err.Error())
	}

	u := &entity.User{
		Name:     userData.Name,
		Password: userData.Password,
	}

	// TODO: check if user exists and hash of given password is the same as stored in DB for this user.

	// Generate access token and and add it to cookies via Context
	if err := jwt.AddAuthData(*u, c); err != nil {
		return echo.NewHTTPError(http.StatusUnauthorized, err.Error())
	}

	return c.Redirect(http.StatusMovedPermanently, c.Echo().Reverse("v1/vip"))
}

func JWTErrorHandler(c echo.Context, err error) error {
	return c.Redirect(http.StatusFound, c.Echo().Reverse("v1/login"))
}
