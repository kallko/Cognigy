Hi.
To start app you need computer with installed 
git
(https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
and Docker 
(https://docs.docker.com/engine/install/)

Create some test folder and move in:
`git clone https://github.com/kallko/Cognity.git`

`cd Cognity`

`docker-compose -p master up`

wait a little.

In Your browser:

http://localhost:5000/api/v1/help

Then You could Use Postman or try in terminal:

`% curl -X GET localhost:5000/api/v1/help`

`curl -X POST localhost:5000/api/v1/login`

login route will give You x-api-key, which You should add to headers like this:

`curl -X GET localhost:5000/api/v1/cars -H x-api-key:123`

Possible routes:

"GET: /api/v1/help",

"POST: /api/v1/login",

"GET: /api/v1/cars",

"GET: /api/v1/car/id",

"POST: /api/v1/car/id",

"PATCH: /api/v1/car/id",

"PUT: /api/v1/car/id",

"DELETE: /api/v1/car/id"

where id is integer

Routes help & login don't need x-api-key

