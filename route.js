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
}
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