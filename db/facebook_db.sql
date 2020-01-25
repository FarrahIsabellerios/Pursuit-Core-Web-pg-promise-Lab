DROP DATABASE IF EXISTS facebook_db;
CREATE DATABASE facebook_db;

\c facebook_db

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS likes;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER   
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY, 
    poster_id INT REFERENCES users(id) ON DELETE SET NULL,
    body TEXT
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    liker_id INT REFERENCES users(id) ON DELETE SET NULL, 
    post_id INT REFERENCES posts(id) ON DELETE SET NULL
);