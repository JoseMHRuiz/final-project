const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boxSchema = new Schema({
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    boxName: String,
    affiliate: Boolean,
    area: Number,
    city: String,
    direction: String,
    position: {
        latitude: Number,
        longitude: Number
    },
    openBox: Boolean,
    dropBar: Boolean,
    juniorClass: Boolean,
    kidsClass: Boolean,
    img: {
        type: Array,
        default: ['https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3902&q=80']
    },
    schedule: {
        mondayToFriday: {
            start: String,
            end: String
        },
        saturday: {
            open: Boolean,
            start: String,
            end: String
        },
        sunday: {
            open: Boolean,
            start: String,
            end: String
        }
    },
    coach: {
        qty: Number,
        minCredential: {
            type: String,
            enum: ['L1', 'L2', 'L3', 'L4']
        },
        maxCredential: {
            type: String,
            enum: ['L1', 'L2', 'L3', 'L4']
        },
        otherCredentials: [String]
    },
    material: {
        machines: {
            airunner: {
                have: Boolean,
                qty: Number
            },
            airbike: {
                have: Boolean,
                qty: Number
            },
            skyerg: {
                have: Boolean,
                qty: Number
            },
            bikeerg: {
                have: Boolean,
                qty: Number
            },
            rowerg: {
                have: Boolean,
                qty: Number
            },
        },
        dumbell: {
            upTo: Number,
            have: Boolean
        },
        kettlebell: {
            upTo: Number,
            have: Boolean
        },
        medball: {
            upTo: Number,
            have: Boolean
        },
        dball: {
            upTo: Number,
            have: Boolean
        },
        sandbag: {
            upTo: Number,
            have: Boolean
        },
        yoke: {
            upTo: Number,
            have: Boolean
        },
        sleed: {
            upTo: Number,
            have: Boolean
        },
        ghd: {
            upTo: Number,
            have: Boolean
        },
        barbells: {
            upTo: Number,
            have: Boolean
        },
        foamroller: {
            upTo: Number,
            have: Boolean
        },
        band: {
            have: Boolean
        },

    },
    prices: {
        dropin: Number,
        fullMonth: Number,
        fourDays: Number,
        threeDays: Number,
        twoDays: Number,
    }
}, {
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

const Box = mongoose.model('box', boxSchema);
module.exports = Box;