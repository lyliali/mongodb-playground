/* 
    This playground file will explore the use of comparison,
    logical, and evaluative operators in MongoDB queries.
*/

use('sample_guides');

coll = db.planets;

coll.find(
    {
        'orderFromSun': { $eq: 1 }
    }
);

coll.find(
    {
        'orderFromSun': { $ne: 1 }
    }
);

coll.find(
    {
        'orderFromSun': { $gt: 3 }
    }
);

coll.find(
    {
        'orderFromSun': { $lt: 3 }
    }
);

coll.find(
    {
        'orderFromSun': { $gte: 8 }
    }
);

coll.find(
    {
        'orderFromSun': { $lte: 2 }
    }
);

coll.find(
    {
        'orderFromSun': {
            $in: [
                1, 2, 3
            ]
        }
    }
);

coll.find(
    {
        $and: [
            {
                'orderFromSun': { $gt: 4 }
            },
            {
                'hasRings': true
            }
        ]
    }
);

// Result should be Uranus, Neptune, Saturn, Jupiter, and Mercury
coll.find(
    {
        $or: [
            {
                'orderFromSun': { $eq: 1 }
            },
            {
                'hasRings': true
            }
        ]
    }
);

// Find planets whose names don't start with M, and that don't have rings
// Result should be Venus and Earth
coll.find(
    {
        $nor: [
            {
            'name': { $regex: /^M/ }
            },
            {
                'hasRings': true
            }
        ]
    }
);

coll.find(
    {
        'name': { $not: /Earth/ }
    }
);

/*
Where not allowed in this atlas tier...!
coll.find(
    {
        $where: function() {
            this.name.contains('ea')
        }
    }
);
*/

// https://www.mongodb.com/docs/manual/reference/operator/query/text/
// text index required for $text query
// come back to this!
/*
coll.find(
    {
        $text: {
            $search: "earth"
        }
    }
);
*/