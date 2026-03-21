create table users (
    id SERIAL PRIMARY KEY,
    login VARCHAR(20) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    password TEXT NOT NULL,
    roles JSONB NOT NULL DEFAULT '[]'::jsonb,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT unique_login UNIQUE (login),
    CONSTRAINT unique_phone UNIQUE (phone)
);