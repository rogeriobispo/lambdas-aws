const aws = require('aws-sdk');
const uuid = require('uuid/v4');

aws.config.update({
    region: 'us-east-1'
});

const s3 = new aws.S3();

const BUCKET = 'rogerio-nanoservices-imagens'
const upload = body => {
    const id = uuid();
    return new Promise((res, rej) => {
        s3.putObject({
            Bucket: BUCKET,
            Key: id + '.jpg',
            Body: new Buffer(body.replace(/^data:image\/\w+;base64,/, ""), 'base64'),
            ContentEncoding: 'base64',
            ContentType: 'image/jpeg'

        }, (err)=>{
            if(err)  return rej(err);
            return res({
                bucket: BUCKET,
                key: id + '.jpg'
            });



        });
    });
}

module.exports = {upload: upload}