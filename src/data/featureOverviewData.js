const feature_importances = {
    "task_id": 1661,
    "material_id": 1478,
    "creative_type": 259,
    "advertiser_id": 638,
    "developer_id": 446,
    "display_type": 233,
    "slot_id": 901,
    "app_id": 548,
    "app_tag": 416,
    "app_first_class": 68,
    "app_second_class": 196,
    "age": 696,
    "city_rank": 21,
    "device_name": 27,
    "device_size": 106,
    "career": 78,
    "gender": 25,
    "net_type": 175,
    "residence": 122,
    "app_size": 268,
    "app_release_time": 109,
    "app_score": 103,
    "emui_version": 211,
    "device_release_time": 153,
    "device_price": 446,
    "lifecycle": 19,
    "daily_active_time": 130,
    "industry_name": 304,
    "display_date": 63
}

const feature_names = ['user_id', 'task_id', 'material_id', 'creative_type', 'advertiser_id',
    'developer_id', 'display_type', 'slot_id', 'app_id', 'app_tag',
    'app_first_class', 'app_second_class', 'age', 'city', 'city_rank',
    'device_name', 'device_size', 'career', 'gender', 'net_type',
    'residence', 'app_size', 'app_release_time', 'app_score',
    'emui_version', 'device_release_time', 'device_price', 'lifecycle',
    'membership_grade', 'membership_lifecycle', 'purchase_tag',
    'daily_active_time', 'industry_name', 'display_date']

const featureOverviewData = []
for (let i = 0; i < feature_names.length; i++) {
    let feature = feature_names[i];
    let obj = {
        key: String(i),
        name: feature,
        importance: feature_importances[feature] ? feature_importances[feature] : 0,
    }
    featureOverviewData.push(obj);
}

export default featureOverviewData;