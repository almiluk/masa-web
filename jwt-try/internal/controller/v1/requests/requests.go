package requests

type UserLoginData struct {
	Name     string `json:"name" form:"name"`
	Password string `json:"password" form:"password"`
}
