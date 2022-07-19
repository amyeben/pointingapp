docker network create my-bridge
docker stop $(docker ps -q)
docker rm $(docker ps -a)

cd FrontEnd
docker build -t frontend-image .

cd ../Backend
docker build -t backend-image .


docker run -d --name backend --network my-bridge -p 8000:8000 backend-image
docker run --name frontend --network my-bridge -p 3000:3000 frontend-image
