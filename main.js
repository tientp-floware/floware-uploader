const Express = require("express");
const Multer = require("multer");
const Minio = require("minio");
const BodyParser = require("body-parser");
const app = Express();
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const BucketName = 'myupload';

app.use(BodyParser.json({limit: "4mb"}));

const minioClient = new Minio.Client({
    endPoint: 'minio.serverapi.host',
    port: 9001,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'minio123'
});

app.post("/upload", Multer({storage: Multer.memoryStorage()}).single("file"), function(request, response) {
    minioClient.putObject(BucketName, request.file.originalname, request.file.buffer, function(error, etag) {
        if(error) {
            return console.log(error);
        }
        response.send(request.file);
    });
});

app.post("/uploads", Multer({dest: "./uploads/"}).single("file"), function(request, response) {
    minioClient.fPutObject(BucketName, request.file.originalname, request.file.path, function(error, etag) {
        if(error) {
            return console.log(error);
        }
        response.send(request.file);
    });
});

app.get("/download", function(request, response) {
    minioClient.getObject(BucketName, request.query.name, function(error, stream) {
        if(error) {
            return response.status(500).send(error);
        }
        stream.pipe(response);
    });
});

minioClient.bucketExists(BucketName, function(error) {
    if(error) {
        return console.log(error);
    }

    app.get('/', (req, res) => {
        res.sendFile(__dirname + '/index.html');
    })

    const server = app.listen(PORT,HOST, function() {
        console.log("Ready Upload to MinIO in %s on port %s...", BucketName,server.address().port);
    });
});

