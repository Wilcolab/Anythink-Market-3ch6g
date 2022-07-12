#!/bin/bash
for z in {1..100}
do
echo z=$z
curl 'http://localhost:3000/api/items' \
  -H 'Content-Type: application/json' \
  -H 'authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjlhODUzNGRjODRiMDA1NDJmNzMyYyIsInVzZXJuYW1lIjoicm9nZXIiLCJleHAiOjE2NjE1MTg0MTksImlhdCI6MTY1NjMzNDQxOX0.WAStML6C0x_w69wkvaB3xLkEMYbvAZiZCkEahfvjLqg' \
  --data-raw '{"item":{"title":"item'$z'","description":"item'$z'","image":"https://us-product.item24.com/system/Public/Images/ci/item-logo.png","tagList":[]}}' 

curl 'http://localhost:3000/api/users' \
  -H 'Content-Type: application/json' \
  -H 'authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYjlhODUzNGRjODRiMDA1NDJmNzMyYyIsInVzZXJuYW1lIjoicm9nZXIiLCJleHAiOjE2NjE1MTg0MTksImlhdCI6MTY1NjMzNDQxOX0.WAStML6C0x_w69wkvaB3xLkEMYbvAZiZCkEahfvjLqg' \
  --data-raw '{"user":{"username":"user'$z'","email":"user'$z'@gmail.com","password":"user'$z'"}}' 

curl 'http://localhost:3000/api/items/item-jpr9ti/comments' \
  -H 'Content-Type: application/json' \
  -H 'authorization: Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyYmEwZWJhMWFlMzE1MDA1MGYwMDFjYyIsInVzZXJuYW1lIjoidXNlcjEiLCJleHAiOjE2NjE1NDUwOTcsImlhdCI6MTY1NjM2MTA5N30.UonC7aBK7M-CQMl2xQzP1-CwWcjuBPntx4UUeH6g0xk' \
  --data-raw '{"comment":{"body":"comment"}}' 

done


