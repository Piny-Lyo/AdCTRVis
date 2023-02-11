const feature_names = ['display_type', 'industry_name', 'display_date', 'age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'province', 'emui_version', 'device_release_time', 'device_price', 'life_duration', 'membership_grade', 'membership_life_duration', 'purchase_tag', 'daily_active_time', 'app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score'];

const ad_feature_names = ['display_type', 'industry_name', 'display_date']
const user_feature_names = ['age', 'city', 'city_rank', 'device_name', 'device_size', 'career', 'gender', 'net_type', 'province', 'emui_version', 'device_release_time', 'device_price', 'life_duration', 'membership_grade', 'membership_life_duration', 'purchase_tag', 'daily_active_time']
const media_feature_names = ['app_tag', 'app_first_class', 'app_second_class', 'app_size', 'app_release_time', 'app_score']

const num = feature_names.length; //26 (35-9)
const ad_num = ad_feature_names.length; //3
const user_num = user_feature_names.length; //17
const media_num = media_feature_names.length;//6

// console.log(ad_num, user_num, media_num)

const output = []
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
    output.push(obj);
}
console.log(output);