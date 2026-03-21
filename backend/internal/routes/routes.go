package routes

import (
	"backend/internal/routes/user"
	"database/sql"

	"github.com/gin-gonic/gin"
)

func InitRouter(db *sql.DB, jwtKey []byte, host string) *gin.Engine {
	router := gin.Default()
	oapi := router.Group("/oapi/")
	{
		user.AddPublicRoutes(oapi, db, jwtKey, host)
	}

	api := router.Group("/api/")
	{
		user.AddPrivateRoutes(api, db, host)
	}

	return router
}
