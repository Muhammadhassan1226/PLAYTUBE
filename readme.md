# Some Cautions

bodyparser package is already included in express. You don't need to made its package

We use app.use(cors()) syntax when we need to edit middlewares and configurations settings.

Professionals use two props in cors object:

1. origin and it usually come from env file. Some people use "\*" means allows from everywhere, it's not a good practice.
2. Credentials: Configures the Access-Control-Allow-Credentials CORS header. Set to true to pass the header, otherwise it is omitted.

You NEED express.json() and express.urlencoded() for POST and PUT requests, because in both these requests you are sending data (in the form of some data object) to the server and you are asking the server to accept or store that data (object), which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
You DO NOT NEED express.json() and express.urlencoded() for GET Requests or DELETE Requests.

You See Majorly 3 configurations :

1. express.json
2. express.urlencoded
3. express.static
