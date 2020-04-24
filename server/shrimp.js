let express = require('express')
let bodyParser = require('body-parser');
let cors = require('cors')
var request = require('request');



let app = express()
let router = express.Router()
app.use(cors());

app.use('/api', bodyParser.json(), router)
app.use('/api', bodyParser.urlencoded({

    extended: false

}), router);

let shrimps = [

    {
       id : 1,
       day : '10/3/2562',
       city : 'พังงา',
       state :  'ท้ายเหมือง',
       productshrimps :'กุ้งดำ',
       size : '50 ตัว/โล',
       price :  '150 บาท'
    },
    {
        id : 2,
        day : '11/3/2562',
        city : 'พังงา',
        state :  'ท้ายเหมือง',
        productshrimps :'กุ้งดำ',
        size : '50 ตัว/โล',
        price :  '150 บาท'
    }
];
router.route('/shrimps')
    
    .get((req, res) => res.json(shrimps))
    // insert a new bear
    .post((req, res) => {
        var shrimp = {};
        shrimp.id = shrimps.length > 0 ? shrimps[shrimps.length - 1].id + 1 : 0;
        shrimp.day = req.body.day
        shrimp.city = req.body.city
        shrimp.state = req.body.state
        shrimp.productshrimps = req.body.productshrimps
        shrimp.size =req.body.size
        shrimp.price =req.body.price
        shrimps.push(shrimp);
        res.json({ message: 'shrimp created!' })
    })

router.route('/shrimps/:shrimp_id')
    .get((req, res) => {
        let id = req.params.shrimp_id
        let index = shrimps.findIndex(shrimp => (shrimp.id === +id))
        res.json(shrimps[index])                   // get a shrimp
    })
    .put((req, res) => {                               // Update a shrimp
        let id = req.params.shrimp_id
        let index = shrimps.findIndex(shrimp => (shrimp.id === +id))
        shrimps[index].day = req.body.day;
        shrimps[index].city = req.body.city;
        shrimps[index].state = req.body.state;
        shrimps[index].city =req.body.city;
        shrimps[index].productshrimps =req.body.productshrimps;
        shrimps[index].size =req.body.size;
        shrimps[index].price= req.body.price;
        res.json({ message: 'shrimp updated!' + req.params.shrimp_id });
    })
    .delete((req, res) => {                   // Delete a shrimp
        // delete     shrimps[req.params.shrimp_id]
        let id = req.params.shrimp_id
        let index = shrimps.findIndex(shrimp => shrimp.id === +id)
        shrimps.splice(index, 1)
        res.json({ message: 'shrimp deleted: ' + req.params.bear_id });
    })







app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.listen(80, () => { console.log('server is running PORT 80') })