const cat_index = ['user_id', 'city', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'residence', 'purchase_tag'];
const num_index = ['age', 'city_rank', 'emui_version', 'device_release_time', 'device_price', 'lifecycle', 'membership_grade', 'membership_lifecycle', 'daily_active_time']

const cat = {
    "user_id": {
        "count": 50,
        "unique": 50,
        "top": "1684964",
        "freq": 1
    },
    "city": {
        "count": 50,
        "unique": 40,
        "top": "207",
        "freq": 3
    },
    "device_name": {
        "count": 50,
        "unique": 29,
        "top": "56",
        "freq": 3
    },
    "device_size": {
        "count": 50,
        "unique": 7,
        "top": "141",
        "freq": 30
    },
    "career": {
        "count": 50,
        "unique": 8,
        "top": "9",
        "freq": 23
    },
    "gender": {
        "count": 50,
        "unique": 2,
        "top": "2",
        "freq": 34
    },
    "net_type": {
        "count": 50,
        "unique": 2,
        "top": "2",
        "freq": 42
    },
    "residence": {
        "count": 50,
        "unique": 22,
        "top": "34",
        "freq": 8
    },
    "purchase_tag": {
        "count": 50,
        "unique": 5,
        "top": "2",
        "freq": 41
    }
}

const num = {
    "age": {
        "count": 50.0,
        "mean": 5.1,
        "std": 1.4033487646,
        "min": 2.0,
        "25%": 4.0,
        "50%": 5.0,
        "75%": 6.0,
        "max": 7.0
    },
    "city_rank": {
        "count": 50.0,
        "mean": 3.88,
        "std": 0.8722478584,
        "min": 3.0,
        "25%": 3.0,
        "50%": 4.0,
        "75%": 5.0,
        "max": 5.0
    },
    "emui_version": {
        "count": 50.0,
        "mean": 19.72,
        "std": 4.7468141841,
        "min": 12.0,
        "25%": 14.75,
        "50%": 20.0,
        "75%": 20.0,
        "max": 28.0
    },
    "device_release_time": {
        "count": 50.0,
        "mean": 9.46,
        "std": 4.0214222279,
        "min": 4.0,
        "25%": 6.25,
        "50%": 9.0,
        "75%": 12.0,
        "max": 17.0
    },
    "device_price": {
        "count": 50.0,
        "mean": 3.54,
        "std": 1.1286618409,
        "min": 1.0,
        "25%": 3.0,
        "50%": 4.0,
        "75%": 4.0,
        "max": 5.0
    },
    "lifecycle": {
        "count": 50.0,
        "mean": 13.28,
        "std": 8.4322994177,
        "min": -1.0,
        "25%": 9.5,
        "50%": 18.0,
        "75%": 20.0,
        "max": 20.0
    },
    "membership_grade": {
        "count": 50.0,
        "mean": -0.84,
        "std": 0.5480950312,
        "min": -1.0,
        "25%": -1.0,
        "50%": -1.0,
        "75%": -1.0,
        "max": 1.0
    },
    "membership_lifecycle": {
        "count": 50.0,
        "mean": -1.0,
        "std": 0.0,
        "min": -1.0,
        "25%": -1.0,
        "50%": -1.0,
        "75%": -1.0,
        "max": -1.0
    },
    "daily_active_time": {
        "count": 50.0,
        "mean": 11.06,
        "std": 1.7660055238,
        "min": 5.0,
        "25%": 10.0,
        "50%": 11.0,
        "75%": 12.0,
        "max": 13.0
    }
}

export { cat_index, num_index, cat, num }