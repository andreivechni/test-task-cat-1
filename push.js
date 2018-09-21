const router = require('express').Router();

const nodeAmqp = require('node-amqp');
const  Publisher = nodeAmqp.Publisher;
const  publisher = new Publisher({

    'host': 'amqp://cat:letmesing@192.168.1.156:21002',
    'exchangeName': 'pushQ',
    'socketOptions': {}

});

router.post('/', (req, res) => {

    console.log(req.body);
    publisher.send(JSON.stringify(req.body));

    res.send('pushed to RMQ');

});

module.exports = router;