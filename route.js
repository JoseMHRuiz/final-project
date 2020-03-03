{
    $and: [{
        dropBar: {
            $eq: true
        }
    }, {
        openBox: {
            $eq: false
        }
    }, {
        juniorClass: {
            $eq: false
        }
    }, {
        affiliate: {
            $eq: true
        }
    }]
} {
    $and: [{
        dropBar: {
            $eq: true
        }
    }, {
        openBox: {
            $eq: true
        }
    }, {
        juniorClass: {
            $eq: true
        }
    }, {
        kidsClass: {
            $eq: true
        }
    }]
} {
    $and: [{
        dropBar: {
            $eq: true
        }
    }, {
        openBox: {
            $eq: false
        }
    }, {
        juniorClass: {
            $eq: false
        }
    }, {
        affiliate: {
            $eq: true
        }
    }, {
        "schedule.saturday.open": {
            $eq: true
        }
    }, {
        "schedule.sunday.open": {
            $eq: true
        }
    }]
}

{
    'dropBar': true 'openBox': true 'juniorClass': true 'kidsClass': true 'affiliate': true 'saturdayOpen': true 'sundayOpen': true
}