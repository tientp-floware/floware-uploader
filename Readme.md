# Floware File Storing

This's demo uploader and sync with object storage min.io
Testing speed, stable 

## Getting Started

- Install docker or nodejs require verion 10 above.

Change bucket name

```javascript
const BucketName = 'myupload';
```

Update config MiniO

```javascript
const minioClient = new Minio.Client({
    endPoint: 'minio.serverapi.host',
    port: 9001,
    useSSL: false,
    accessKey: 'minio',
    secretKey: 'xxx'
});
```
From your Node.js app project folder launch those commands:
```sh
$ docker build -t your-app-name .
$ docker run -p 80:8080 your-app-name
```

Go to http://localhost

## Live demo

[Simple Update](http://minio.serverapi.host/)
[MinIO](http://minio.serverapi.host:9001)


## Built With

* [MinIO](https://min.io/) - The High Performance Object Storage
* [NodeJS](https://nodejs.org/) - Nodejs
* [PM2](https://pm2.keymetrics.io/) - ADVANCED, PRODUCTION PROCESS MANAGER FOR NODE.JS
* [DropzoneJS](https://www.dropzonejs.com/) - Drag’n’drop file uploads with image previews


## Versioning

For the version just v1.0.0

## Authors

* **Tien Floware** - *Initial work* - [Tien Floware](https://github.com/tientp-floware)

See also the list of [contributors](https://github.com/tientp-floware/floware-uploader/graphs/contributors) who participated in this project.

## License

This project is licensed under the MIT License 
