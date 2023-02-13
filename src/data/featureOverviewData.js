// const featureOverviewData = [
//     { key: '0', name: 'display_type', type: 1, importance: 0 },
//     { key: '1', name: 'industry_name', type: 1, importance: 1 },
//     { key: '2', name: 'display_date', type: 1, importance: 2 },
//     { key: '3', name: 'age', type: 2, importance: 3 },
//     { key: '4', name: 'city', type: 2, importance: 4 },
//     { key: '5', name: 'city_rank', type: 2, importance: 5 },
//     { key: '6', name: 'device_name', type: 2, importance: 6 },
//     { key: '7', name: 'device_size', type: 2, importance: 7 },
//     { key: '8', name: 'career', type: 2, importance: 8 },
//     { key: '9', name: 'gender', type: 2, importance: 9 },
//     { key: '10', name: 'net_type', type: 2, importance: 10 },
//     { key: '11', name: 'residence', type: 2, importance: 11 },
//     { key: '12', name: 'emui_version', type: 2, importance: 12 },
//     { key: '13', name: 'device_release_time', type: 2, importance: 13 },
//     { key: '14', name: 'device_price', type: 2, importance: 14 },
//     { key: '15', name: 'life_duration', type: 2, importance: 15 },
//     { key: '16', name: 'membership_grade', type: 2, importance: 16 },
//     {
//         key: '17',
//         name: 'membership_life_duration',
//         type: 2,
//         importance: 17
//     },
//     { key: '18', name: 'purchase_tag', type: 2, importance: 18 },
//     { key: '19', name: 'daily_active_time', type: 2, importance: 19 },
//     { key: '20', name: 'app_tag', type: 3, importance: 20 },
//     { key: '21', name: 'app_first_class', type: 3, importance: 21 },
//     { key: '22', name: 'app_second_class', type: 3, importance: 22 },
//     { key: '23', name: 'app_size', type: 3, importance: 23 },
//     { key: '24', name: 'app_release_time', type: 3, importance: 24 },
//     { key: '25', name: 'app_score', type: 3, importance: 25 }
// ]

const feature_names = ['display_type', 'industry_name', 'display_date', 'age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'province', 'emui_version', 'device_release_time', 'device_price', 'life_duration', 'membership_grade', 'membership_life_duration', 'purchase_tag', 'daily_active_time', 'app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score'];

const ad_feature_names = ['display_type', 'industry_name', 'display_date']
const user_feature_names = ['age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'province', 'emui_version', 'device_release_time', 'device_price', 'life_duration', 'membership_grade', 'membership_life_duration', 'purchase_tag', 'daily_active_time']
const media_feature_names = ['app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score']

const num = feature_names.length; //26 (35-9)
const ad_num = ad_feature_names.length; //3
const user_num = user_feature_names.length; //17
// eslint-disable-next-line
const media_num = media_feature_names.length;//6

// console.log(ad_num, user_num, media_num)

const featureOverviewData = []
for (let i = 0; i < num; i++) {
    let group;
    if (i < ad_num) group = 1;
    else if (i < ad_num + user_num) group = 2;
    else group = 3;
    let obj = {
        key: String(i),
        name: feature_names[i],
        type: group,
        importance: i,
        // 图片url可以这些变量生成
    }
    featureOverviewData.push(obj);
}

export default featureOverviewData;