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

.post((req, res) => {

    let shrimps = {}
    shrimps.id = shrimps[shrimps.length - 1].id + 1
    shrimps.day = req.body.day
    shrimps.city = req.body.city
    shrimps.state = req.body.state
    shrimps.productshrimps=req.body.productshrimps
    shrimps.size = req.body.size
    shrimps.price =req.body.price
    shrimps.push(shrimps);
    res.json({ message: 'shrimps created!' })
    
})

router.route('/shrimps/:shrimps_id')

.get((req, res) => {

    let id = req.params.shrimps_id
    let index = shrimps.findIndex(shrimps => (shrimps.id === +id))
    res.json(shrimps[index])
})

.put((req, res) => {

    //update shrimps

    let id = req.params.shrimps_id
    let index = shrimps.findIndex(shrimps => (shrimps.id === +id))
    shrimps[index].day = req.body.day
    shrimps[index].city = req.body.city
    shrimps[index].state = req.body.state
    shrimps[index].productshrimps=req.body.productshrimps
    shrimps[index].size = req.body.size
    shrimps[index].price =req.body.price
 
    res.json({ message: 'shrimps Update !' + req.params.shrimps_id});

})

.delete((req, res) => {

     let id = req.params.shrimps_id
    let index = shrimps.findIndex( shrimps =>(shrimps.id === +id))
    shrimps.splice(index, 1)
    res.json({ message: 'shrimps Delete : ' + req.params.shrimps_id });
})




app.use("*", (req, res) => res.status(404).send('404 Not found'));

app.listen(80, () => { console.log('server is running PORT 80') })