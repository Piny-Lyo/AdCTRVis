const allCor = {
    "nodes": [
        {
            "id": "display_type",
            "group": 1
        },
        {
            "id": "industry_name",
            "group": 1
        },
        {
            "id": "display_date",
            "group": 1
        },
        {
            "id": "age",
            "group": 2
        },
        {
            "id": "city",
            "group": 2
        },
        {
            "id": "city_rank",
            "group": 2
        },
        {
            "id": "device_name",
            "group": 2
        },
        {
            "id": "device_size",
            "group": 2
        },
        {
            "id": "career",
            "group": 2
        },
        {
            "id": "gender",
            "group": 2
        },
        {
            "id": "net_type",
            "group": 2
        },
        {
            "id": "province",
            "group": 2
        },
        {
            "id": "emui_version",
            "group": 2
        },
        {
            "id": "device_release_time",
            "group": 2
        },
        {
            "id": "device_price",
            "group": 2
        },
        {
            "id": "life_duration",
            "group": 2
        },
        {
            "id": "membership_grade",
            "group": 2
        },
        {
            "id": "membership_life_duration",
            "group": 2
        },
        {
            "id": "purchase_tag",
            "group": 2
        },
        {
            "id": "daily_active_time",
            "group": 2
        },
        {
            "id": "app_tag",
            "group": 3
        },
        {
            "id": "app_first_class",
            "group": 3
        },
        {
            "id": "app_second_class",
            "group": 3
        },
        {
            "id": "app_size",
            "group": 3
        },
        {
            "id": "app_release_time",
            "group": 3
        },
        {
            "id": "app_score",
            "group": 3
        }
    ],
    "links": [
        {
            "source": "industry_name",
            "target": "display_type",
            "value": -0.33
        },
        {
            "source": "display_date",
            "target": "display_type",
            "value": -0.0
        },
        {
            "source": "display_date",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "age",
            "target": "display_type",
            "value": 0.05
        },
        {
            "source": "age",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "age",
            "target": "display_date",
            "value": 0.06
        },
        {
            "source": "city",
            "target": "display_type",
            "value": 0.01
        },
        {
            "source": "city",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "city",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "city",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "city_rank",
            "target": "display_type",
            "value": -0.08
        },
        {
            "source": "city_rank",
            "target": "industry_name",
            "value": 0.03
        },
        {
            "source": "city_rank",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "city_rank",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "city_rank",
            "target": "city",
            "value": 0.02
        },
        {
            "source": "device_name",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "device_name",
            "target": "industry_name",
            "value": 0.01
        },
        {
            "source": "device_name",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_name",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "device_size",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "device_size",
            "target": "industry_name",
            "value": 0.01
        },
        {
            "source": "device_size",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "device_size",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "device_size",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "device_size",
            "target": "device_name",
            "value": -0.11
        },
        {
            "source": "career",
            "target": "display_type",
            "value": 0.08
        },
        {
            "source": "career",
            "target": "industry_name",
            "value": -0.02
        },
        {
            "source": "career",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "career",
            "target": "age",
            "value": 0.27
        },
        {
            "source": "career",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "career",
            "target": "city_rank",
            "value": -0.04
        },
        {
            "source": "career",
            "target": "device_name",
            "value": 0.03
        },
        {
            "source": "career",
            "target": "device_size",
            "value": 0.06
        },
        {
            "source": "gender",
            "target": "display_type",
            "value": 0.06
        },
        {
            "source": "gender",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "gender",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "gender",
            "target": "age",
            "value": -0.14
        },
        {
            "source": "gender",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "gender",
            "target": "city_rank",
            "value": -0.02
        },
        {
            "source": "gender",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "gender",
            "target": "career",
            "value": -0.06
        },
        {
            "source": "net_type",
            "target": "display_type",
            "value": -0.53
        },
        {
            "source": "net_type",
            "target": "industry_name",
            "value": 0.33
        },
        {
            "source": "net_type",
            "target": "display_date",
            "value": -0.03
        },
        {
            "source": "net_type",
            "target": "age",
            "value": -0.07
        },
        {
            "source": "net_type",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "net_type",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "net_type",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "device_size",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "career",
            "value": -0.07
        },
        {
            "source": "net_type",
            "target": "gender",
            "value": -0.08
        },
        {
            "source": "province",
            "target": "display_type",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "province",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "province",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "province",
            "target": "city_rank",
            "value": -0.13
        },
        {
            "source": "province",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "province",
            "target": "device_size",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "career",
            "value": -0.02
        },
        {
            "source": "province",
            "target": "gender",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "net_type",
            "value": -0.01
        },
        {
            "source": "emui_version",
            "target": "display_type",
            "value": -0.09
        },
        {
            "source": "emui_version",
            "target": "industry_name",
            "value": 0.03
        },
        {
            "source": "emui_version",
            "target": "display_date",
            "value": 0.01
        },
        {
            "source": "emui_version",
            "target": "age",
            "value": -0.03
        },
        {
            "source": "emui_version",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "emui_version",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "emui_version",
            "target": "device_name",
            "value": 0.34
        },
        {
            "source": "emui_version",
            "target": "device_size",
            "value": -0.11
        },
        {
            "source": "emui_version",
            "target": "career",
            "value": -0.06
        },
        {
            "source": "emui_version",
            "target": "gender",
            "value": -0.02
        },
        {
            "source": "emui_version",
            "target": "net_type",
            "value": 0.06
        },
        {
            "source": "emui_version",
            "target": "province",
            "value": -0.01
        },
        {
            "source": "device_release_time",
            "target": "display_type",
            "value": 0.06
        },
        {
            "source": "device_release_time",
            "target": "industry_name",
            "value": -0.01
        },
        {
            "source": "device_release_time",
            "target": "display_date",
            "value": 0.02
        },
        {
            "source": "device_release_time",
            "target": "age",
            "value": -0.02
        },
        {
            "source": "device_release_time",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_release_time",
            "target": "city_rank",
            "value": -0.03
        },
        {
            "source": "device_release_time",
            "target": "device_name",
            "value": 0.27
        },
        {
            "source": "device_release_time",
            "target": "device_size",
            "value": 0.19
        },
        {
            "source": "device_release_time",
            "target": "career",
            "value": 0.12
        },
        {
            "source": "device_release_time",
            "target": "gender",
            "value": 0.01
        },
        {
            "source": "device_release_time",
            "target": "net_type",
            "value": -0.05
        },
        {
            "source": "device_release_time",
            "target": "province",
            "value": 0.02
        },
        {
            "source": "device_release_time",
            "target": "emui_version",
            "value": -0.13
        },
        {
            "source": "device_price",
            "target": "display_type",
            "value": -0.21
        },
        {
            "source": "device_price",
            "target": "industry_name",
            "value": 0.07
        },
        {
            "source": "device_price",
            "target": "display_date",
            "value": -0.02
        },
        {
            "source": "device_price",
            "target": "age",
            "value": -0.07
        },
        {
            "source": "device_price",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_price",
            "target": "city_rank",
            "value": 0.14
        },
        {
            "source": "device_price",
            "target": "device_name",
            "value": 0.04
        },
        {
            "source": "device_price",
            "target": "device_size",
            "value": 0.06
        },
        {
            "source": "device_price",
            "target": "career",
            "value": -0.17
        },
        {
            "source": "device_price",
            "target": "gender",
            "value": -0.05
        },
        {
            "source": "device_price",
            "target": "net_type",
            "value": 0.16
        },
        {
            "source": "device_price",
            "target": "province",
            "value": 0.0
        },
        {
            "source": "device_price",
            "target": "emui_version",
            "value": 0.46
        },
        {
            "source": "device_price",
            "target": "device_release_time",
            "value": -0.21
        },
        {
            "source": "life_duration",
            "target": "display_type",
            "value": -0.1
        },
        {
            "source": "life_duration",
            "target": "industry_name",
            "value": 0.03
        },
        {
            "source": "life_duration",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "life_duration",
            "target": "age",
            "value": -0.15
        },
        {
            "source": "life_duration",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "life_duration",
            "target": "city_rank",
            "value": 0.09
        },
        {
            "source": "life_duration",
            "target": "device_name",
            "value": -0.03
        },
        {
            "source": "life_duration",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "life_duration",
            "target": "career",
            "value": -0.21
        },
        {
            "source": "life_duration",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "life_duration",
            "target": "net_type",
            "value": 0.08
        },
        {
            "source": "life_duration",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "life_duration",
            "target": "emui_version",
            "value": 0.12
        },
        {
            "source": "life_duration",
            "target": "device_release_time",
            "value": -0.17
        },
        {
            "source": "life_duration",
            "target": "device_price",
            "value": 0.25
        },
        {
            "source": "membership_grade",
            "target": "display_type",
            "value": -0.06
        },
        {
            "source": "membership_grade",
            "target": "industry_name",
            "value": 0.02
        },
        {
            "source": "membership_grade",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "membership_grade",
            "target": "age",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "membership_grade",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "membership_grade",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "membership_grade",
            "target": "career",
            "value": -0.1
        },
        {
            "source": "membership_grade",
            "target": "gender",
            "value": -0.08
        },
        {
            "source": "membership_grade",
            "target": "net_type",
            "value": 0.04
        },
        {
            "source": "membership_grade",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "membership_grade",
            "target": "emui_version",
            "value": 0.06
        },
        {
            "source": "membership_grade",
            "target": "device_release_time",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "device_price",
            "value": 0.13
        },
        {
            "source": "membership_grade",
            "target": "life_duration",
            "value": 0.42
        },
        {
            "source": "membership_life_duration",
            "target": "display_type",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "display_date",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "age",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "city_rank",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "career",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "gender",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "net_type",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "province",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "emui_version",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_release_time",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_price",
            "value": -0.01
        },
        {
            "source": "membership_life_duration",
            "target": "life_duration",
            "value": 0.04
        },
        {
            "source": "membership_life_duration",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "purchase_tag",
            "target": "display_type",
            "value": -0.06
        },
        {
            "source": "purchase_tag",
            "target": "industry_name",
            "value": 0.03
        },
        {
            "source": "purchase_tag",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "age",
            "value": -0.14
        },
        {
            "source": "purchase_tag",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "purchase_tag",
            "target": "city_rank",
            "value": 0.03
        },
        {
            "source": "purchase_tag",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "career",
            "value": -0.1
        },
        {
            "source": "purchase_tag",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "purchase_tag",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "purchase_tag",
            "target": "province",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "emui_version",
            "value": 0.06
        },
        {
            "source": "purchase_tag",
            "target": "device_release_time",
            "value": -0.05
        },
        {
            "source": "purchase_tag",
            "target": "device_price",
            "value": 0.13
        },
        {
            "source": "purchase_tag",
            "target": "life_duration",
            "value": 0.27
        },
        {
            "source": "purchase_tag",
            "target": "membership_grade",
            "value": 0.14
        },
        {
            "source": "purchase_tag",
            "target": "membership_life_duration",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "display_type",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "industry_name",
            "value": -0.0
        },
        {
            "source": "daily_active_time",
            "target": "display_date",
            "value": 0.0
        },
        {
            "source": "daily_active_time",
            "target": "age",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "daily_active_time",
            "target": "city_rank",
            "value": 0.0
        },
        {
            "source": "daily_active_time",
            "target": "device_name",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "device_size",
            "value": -0.05
        },
        {
            "source": "daily_active_time",
            "target": "career",
            "value": -0.08
        },
        {
            "source": "daily_active_time",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "net_type",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "daily_active_time",
            "target": "emui_version",
            "value": 0.05
        },
        {
            "source": "daily_active_time",
            "target": "device_release_time",
            "value": -0.11
        },
        {
            "source": "daily_active_time",
            "target": "device_price",
            "value": 0.1
        },
        {
            "source": "daily_active_time",
            "target": "life_duration",
            "value": 0.12
        },
        {
            "source": "daily_active_time",
            "target": "membership_grade",
            "value": 0.04
        },
        {
            "source": "daily_active_time",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "daily_active_time",
            "target": "purchase_tag",
            "value": 0.05
        },
        {
            "source": "app_tag",
            "target": "display_type",
            "value": 0.44
        },
        {
            "source": "app_tag",
            "target": "industry_name",
            "value": 0.12
        },
        {
            "source": "app_tag",
            "target": "display_date",
            "value": 0.01
        },
        {
            "source": "app_tag",
            "target": "age",
            "value": 0.07
        },
        {
            "source": "app_tag",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "app_tag",
            "target": "city_rank",
            "value": -0.06
        },
        {
            "source": "app_tag",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "app_tag",
            "target": "device_size",
            "value": 0.0
        },
        {
            "source": "app_tag",
            "target": "career",
            "value": 0.07
        },
        {
            "source": "app_tag",
            "target": "gender",
            "value": 0.03
        },
        {
            "source": "app_tag",
            "target": "net_type",
            "value": -0.14
        },
        {
            "source": "app_tag",
            "target": "province",
            "value": 0.01
        },
        {
            "source": "app_tag",
            "target": "emui_version",
            "value": -0.05
        },
        {
            "source": "app_tag",
            "target": "device_release_time",
            "value": 0.02
        },
        {
            "source": "app_tag",
            "target": "device_price",
            "value": -0.1
        },
        {
            "source": "app_tag",
            "target": "life_duration",
            "value": -0.07
        },
        {
            "source": "app_tag",
            "target": "membership_grade",
            "value": -0.03
        },
        {
            "source": "app_tag",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "app_tag",
            "target": "purchase_tag",
            "value": -0.05
        },
        {
            "source": "app_tag",
            "target": "daily_active_time",
            "value": -0.02
        },
        {
            "source": "app_first_class",
            "target": "display_type",
            "value": 0.61
        },
        {
            "source": "app_first_class",
            "target": "industry_name",
            "value": -0.35
        },
        {
            "source": "app_first_class",
            "target": "display_date",
            "value": 0.07
        },
        {
            "source": "app_first_class",
            "target": "age",
            "value": 0.07
        },
        {
            "source": "app_first_class",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "app_first_class",
            "target": "city_rank",
            "value": -0.07
        },
        {
            "source": "app_first_class",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "app_first_class",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "app_first_class",
            "target": "career",
            "value": 0.08
        },
        {
            "source": "app_first_class",
            "target": "gender",
            "value": 0.05
        },
        {
            "source": "app_first_class",
            "target": "net_type",
            "value": -0.36
        },
        {
            "source": "app_first_class",
            "target": "province",
            "value": 0.01
        },
        {
            "source": "app_first_class",
            "target": "emui_version",
            "value": -0.08
        },
        {
            "source": "app_first_class",
            "target": "device_release_time",
            "value": 0.06
        },
        {
            "source": "app_first_class",
            "target": "device_price",
            "value": -0.18
        },
        {
            "source": "app_first_class",
            "target": "life_duration",
            "value": -0.09
        },
        {
            "source": "app_first_class",
            "target": "membership_grade",
            "value": -0.05
        },
        {
            "source": "app_first_class",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "app_first_class",
            "target": "purchase_tag",
            "value": -0.08
        },
        {
            "source": "app_first_class",
            "target": "daily_active_time",
            "value": -0.01
        },
        {
            "source": "app_first_class",
            "target": "app_tag",
            "value": 0.35
        },
        {
            "source": "app_second_class",
            "target": "display_type",
            "value": -0.17
        },
        {
            "source": "app_second_class",
            "target": "industry_name",
            "value": -0.04
        },
        {
            "source": "app_second_class",
            "target": "display_date",
            "value": -0.01
        },
        {
            "source": "app_second_class",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "app_second_class",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "app_second_class",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "app_second_class",
            "target": "device_name",
            "value": 0.02
        },
        {
            "source": "app_second_class",
            "target": "device_size",
            "value": 0.02
        },
        {
            "source": "app_second_class",
            "target": "career",
            "value": -0.0
        },
        {
            "source": "app_second_class",
            "target": "gender",
            "value": -0.01
        },
        {
            "source": "app_second_class",
            "target": "net_type",
            "value": 0.23
        },
        {
            "source": "app_second_class",
            "target": "province",
            "value": -0.0
        },
        {
            "source": "app_second_class",
            "target": "emui_version",
            "value": 0.03
        },
        {
            "source": "app_second_class",
            "target": "device_release_time",
            "value": -0.0
        },
        {
            "source": "app_second_class",
            "target": "device_price",
            "value": 0.09
        },
        {
            "source": "app_second_class",
            "target": "life_duration",
            "value": 0.01
        },
        {
            "source": "app_second_class",
            "target": "membership_grade",
            "value": 0.01
        },
        {
            "source": "app_second_class",
            "target": "membership_life_duration",
            "value": 0.0
        },
        {
            "source": "app_second_class",
            "target": "purchase_tag",
            "value": 0.0
        },
        {
            "source": "app_second_class",
            "target": "daily_active_time",
            "value": -0.01
        },
        {
            "source": "app_second_class",
            "target": "app_tag",
            "value": 0.19
        },
        {
            "source": "app_second_class",
            "target": "app_first_class",
            "value": -0.02
        },
        {
            "source": "app_size",
            "target": "display_type",
            "value": 0.32
        },
        {
            "source": "app_size",
            "target": "industry_name",
            "value": -0.33
        },
        {
            "source": "app_size",
            "target": "display_date",
            "value": 0.06
        },
        {
            "source": "app_size",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "app_size",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "city_rank",
            "value": -0.02
        },
        {
            "source": "app_size",
            "target": "device_name",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "app_size",
            "target": "career",
            "value": 0.05
        },
        {
            "source": "app_size",
            "target": "gender",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "net_type",
            "value": -0.2
        },
        {
            "source": "app_size",
            "target": "province",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "emui_version",
            "value": -0.06
        },
        {
            "source": "app_size",
            "target": "device_release_time",
            "value": 0.04
        },
        {
            "source": "app_size",
            "target": "device_price",
            "value": -0.1
        },
        {
            "source": "app_size",
            "target": "life_duration",
            "value": -0.04
        },
        {
            "source": "app_size",
            "target": "membership_grade",
            "value": -0.02
        },
        {
            "source": "app_size",
            "target": "membership_life_duration",
            "value": 0.0
        },
        {
            "source": "app_size",
            "target": "purchase_tag",
            "value": -0.03
        },
        {
            "source": "app_size",
            "target": "daily_active_time",
            "value": -0.0
        },
        {
            "source": "app_size",
            "target": "app_tag",
            "value": 0.18
        },
        {
            "source": "app_size",
            "target": "app_first_class",
            "value": 0.71
        },
        {
            "source": "app_size",
            "target": "app_second_class",
            "value": 0.24
        },
        {
            "source": "app_release_time",
            "target": "display_type",
            "value": 0.54
        },
        {
            "source": "app_release_time",
            "target": "industry_name",
            "value": -0.32
        },
        {
            "source": "app_release_time",
            "target": "display_date",
            "value": 0.15
        },
        {
            "source": "app_release_time",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "app_release_time",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "app_release_time",
            "target": "city_rank",
            "value": -0.07
        },
        {
            "source": "app_release_time",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "app_release_time",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "app_release_time",
            "target": "career",
            "value": 0.07
        },
        {
            "source": "app_release_time",
            "target": "gender",
            "value": 0.04
        },
        {
            "source": "app_release_time",
            "target": "net_type",
            "value": -0.3
        },
        {
            "source": "app_release_time",
            "target": "province",
            "value": 0.01
        },
        {
            "source": "app_release_time",
            "target": "emui_version",
            "value": -0.07
        },
        {
            "source": "app_release_time",
            "target": "device_release_time",
            "value": 0.06
        },
        {
            "source": "app_release_time",
            "target": "device_price",
            "value": -0.15
        },
        {
            "source": "app_release_time",
            "target": "life_duration",
            "value": -0.08
        },
        {
            "source": "app_release_time",
            "target": "membership_grade",
            "value": -0.05
        },
        {
            "source": "app_release_time",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "app_release_time",
            "target": "purchase_tag",
            "value": -0.06
        },
        {
            "source": "app_release_time",
            "target": "daily_active_time",
            "value": -0.01
        },
        {
            "source": "app_release_time",
            "target": "app_tag",
            "value": 0.36
        },
        {
            "source": "app_release_time",
            "target": "app_first_class",
            "value": 0.86
        },
        {
            "source": "app_release_time",
            "target": "app_second_class",
            "value": 0.07
        },
        {
            "source": "app_release_time",
            "target": "app_size",
            "value": 0.63
        },
        {
            "source": "app_score",
            "target": "display_type",
            "value": 0.62
        },
        {
            "source": "app_score",
            "target": "industry_name",
            "value": -0.34
        },
        {
            "source": "app_score",
            "target": "display_date",
            "value": 0.07
        },
        {
            "source": "app_score",
            "target": "age",
            "value": 0.07
        },
        {
            "source": "app_score",
            "target": "city",
            "value": 0.01
        },
        {
            "source": "app_score",
            "target": "city_rank",
            "value": -0.07
        },
        {
            "source": "app_score",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "app_score",
            "target": "device_size",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "career",
            "value": 0.08
        },
        {
            "source": "app_score",
            "target": "gender",
            "value": 0.04
        },
        {
            "source": "app_score",
            "target": "net_type",
            "value": -0.36
        },
        {
            "source": "app_score",
            "target": "province",
            "value": 0.01
        },
        {
            "source": "app_score",
            "target": "emui_version",
            "value": -0.08
        },
        {
            "source": "app_score",
            "target": "device_release_time",
            "value": 0.06
        },
        {
            "source": "app_score",
            "target": "device_price",
            "value": -0.18
        },
        {
            "source": "app_score",
            "target": "life_duration",
            "value": -0.09
        },
        {
            "source": "app_score",
            "target": "membership_grade",
            "value": -0.05
        },
        {
            "source": "app_score",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "app_score",
            "target": "purchase_tag",
            "value": -0.06
        },
        {
            "source": "app_score",
            "target": "daily_active_time",
            "value": -0.01
        },
        {
            "source": "app_score",
            "target": "app_tag",
            "value": 0.34
        },
        {
            "source": "app_score",
            "target": "app_first_class",
            "value": 0.99
        },
        {
            "source": "app_score",
            "target": "app_second_class",
            "value": -0.03
        },
        {
            "source": "app_score",
            "target": "app_size",
            "value": 0.72
        },
        {
            "source": "app_score",
            "target": "app_release_time",
            "value": 0.87
        }
    ]
}

const inclassCor = {
    "nodes": [
        {
            "id": "display_type",
            "group": 1
        },
        {
            "id": "industry_name",
            "group": 1
        },
        {
            "id": "display_date",
            "group": 1
        },
        {
            "id": "age",
            "group": 2
        },
        {
            "id": "city",
            "group": 2
        },
        {
            "id": "city_rank",
            "group": 2
        },
        {
            "id": "device_name",
            "group": 2
        },
        {
            "id": "device_size",
            "group": 2
        },
        {
            "id": "career",
            "group": 2
        },
        {
            "id": "gender",
            "group": 2
        },
        {
            "id": "net_type",
            "group": 2
        },
        {
            "id": "province",
            "group": 2
        },
        {
            "id": "emui_version",
            "group": 2
        },
        {
            "id": "device_release_time",
            "group": 2
        },
        {
            "id": "device_price",
            "group": 2
        },
        {
            "id": "life_duration",
            "group": 2
        },
        {
            "id": "membership_grade",
            "group": 2
        },
        {
            "id": "membership_life_duration",
            "group": 2
        },
        {
            "id": "purchase_tag",
            "group": 2
        },
        {
            "id": "daily_active_time",
            "group": 2
        },
        {
            "id": "app_tag",
            "group": 3
        },
        {
            "id": "app_first_class",
            "group": 3
        },
        {
            "id": "app_second_class",
            "group": 3
        },
        {
            "id": "app_size",
            "group": 3
        },
        {
            "id": "app_release_time",
            "group": 3
        },
        {
            "id": "app_score",
            "group": 3
        }
    ],
    "links": [
        //  // test ad-user
        // {
        //     "source": "age",
        //     "target": "display_type",
        //     "value": 0.2
        // },

        // 
        {
            "source": "industry_name",
            "target": "display_type",
            "value": -0.33
        },
        {
            "source": "display_date",
            "target": "display_type",
            "value": -0.0
        },
        {
            "source": "display_date",
            "target": "industry_name",
            "value": -0.03
        },
        {
            "source": "city",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "city_rank",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "city_rank",
            "target": "city",
            "value": 0.02
        },
        {
            "source": "device_name",
            "target": "age",
            "value": 0.0
        },
        {
            "source": "device_name",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_name",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "device_size",
            "target": "age",
            "value": 0.06
        },
        {
            "source": "device_size",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_size",
            "target": "city_rank",
            "value": 0.01
        },
        {
            "source": "device_size",
            "target": "device_name",
            "value": -0.11
        },
        {
            "source": "career",
            "target": "age",
            "value": 0.27
        },
        {
            "source": "career",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "career",
            "target": "city_rank",
            "value": -0.04
        },
        {
            "source": "career",
            "target": "device_name",
            "value": 0.03
        },
        {
            "source": "career",
            "target": "device_size",
            "value": 0.06
        },
        {
            "source": "gender",
            "target": "age",
            "value": -0.14
        },
        {
            "source": "gender",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "gender",
            "target": "city_rank",
            "value": -0.02
        },
        {
            "source": "gender",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "gender",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "gender",
            "target": "career",
            "value": -0.06
        },
        {
            "source": "net_type",
            "target": "age",
            "value": -0.07
        },
        {
            "source": "net_type",
            "target": "city",
            "value": -0.01
        },
        {
            "source": "net_type",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "net_type",
            "target": "device_name",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "device_size",
            "value": 0.01
        },
        {
            "source": "net_type",
            "target": "career",
            "value": -0.07
        },
        {
            "source": "net_type",
            "target": "gender",
            "value": -0.08
        },
        {
            "source": "province",
            "target": "age",
            "value": 0.02
        },
        {
            "source": "province",
            "target": "city",
            "value": -0.02
        },
        {
            "source": "province",
            "target": "city_rank",
            "value": -0.13
        },
        {
            "source": "province",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "province",
            "target": "device_size",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "career",
            "value": -0.02
        },
        {
            "source": "province",
            "target": "gender",
            "value": 0.0
        },
        {
            "source": "province",
            "target": "net_type",
            "value": -0.01
        },
        {
            "source": "emui_version",
            "target": "age",
            "value": -0.03
        },
        {
            "source": "emui_version",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "emui_version",
            "target": "city_rank",
            "value": 0.05
        },
        {
            "source": "emui_version",
            "target": "device_name",
            "value": 0.34
        },
        {
            "source": "emui_version",
            "target": "device_size",
            "value": -0.11
        },
        {
            "source": "emui_version",
            "target": "career",
            "value": -0.06
        },
        {
            "source": "emui_version",
            "target": "gender",
            "value": -0.02
        },
        {
            "source": "emui_version",
            "target": "net_type",
            "value": 0.06
        },
        {
            "source": "emui_version",
            "target": "province",
            "value": -0.01
        },
        {
            "source": "device_release_time",
            "target": "age",
            "value": -0.02
        },
        {
            "source": "device_release_time",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_release_time",
            "target": "city_rank",
            "value": -0.03
        },
        {
            "source": "device_release_time",
            "target": "device_name",
            "value": 0.27
        },
        {
            "source": "device_release_time",
            "target": "device_size",
            "value": 0.19
        },
        {
            "source": "device_release_time",
            "target": "career",
            "value": 0.12
        },
        {
            "source": "device_release_time",
            "target": "gender",
            "value": 0.01
        },
        {
            "source": "device_release_time",
            "target": "net_type",
            "value": -0.05
        },
        {
            "source": "device_release_time",
            "target": "province",
            "value": 0.02
        },
        {
            "source": "device_release_time",
            "target": "emui_version",
            "value": -0.13
        },
        {
            "source": "device_price",
            "target": "age",
            "value": -0.07
        },
        {
            "source": "device_price",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "device_price",
            "target": "city_rank",
            "value": 0.14
        },
        {
            "source": "device_price",
            "target": "device_name",
            "value": 0.04
        },
        {
            "source": "device_price",
            "target": "device_size",
            "value": 0.06
        },
        {
            "source": "device_price",
            "target": "career",
            "value": -0.17
        },
        {
            "source": "device_price",
            "target": "gender",
            "value": -0.05
        },
        {
            "source": "device_price",
            "target": "net_type",
            "value": 0.16
        },
        {
            "source": "device_price",
            "target": "province",
            "value": 0.0
        },
        {
            "source": "device_price",
            "target": "emui_version",
            "value": 0.46
        },
        {
            "source": "device_price",
            "target": "device_release_time",
            "value": -0.21
        },
        {
            "source": "life_duration",
            "target": "age",
            "value": -0.15
        },
        {
            "source": "life_duration",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "life_duration",
            "target": "city_rank",
            "value": 0.09
        },
        {
            "source": "life_duration",
            "target": "device_name",
            "value": -0.03
        },
        {
            "source": "life_duration",
            "target": "device_size",
            "value": -0.04
        },
        {
            "source": "life_duration",
            "target": "career",
            "value": -0.21
        },
        {
            "source": "life_duration",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "life_duration",
            "target": "net_type",
            "value": 0.08
        },
        {
            "source": "life_duration",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "life_duration",
            "target": "emui_version",
            "value": 0.12
        },
        {
            "source": "life_duration",
            "target": "device_release_time",
            "value": -0.17
        },
        {
            "source": "life_duration",
            "target": "device_price",
            "value": 0.25
        },
        {
            "source": "membership_grade",
            "target": "age",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "city",
            "value": -0.0
        },
        {
            "source": "membership_grade",
            "target": "city_rank",
            "value": 0.06
        },
        {
            "source": "membership_grade",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "membership_grade",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "membership_grade",
            "target": "career",
            "value": -0.1
        },
        {
            "source": "membership_grade",
            "target": "gender",
            "value": -0.08
        },
        {
            "source": "membership_grade",
            "target": "net_type",
            "value": 0.04
        },
        {
            "source": "membership_grade",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "membership_grade",
            "target": "emui_version",
            "value": 0.06
        },
        {
            "source": "membership_grade",
            "target": "device_release_time",
            "value": -0.05
        },
        {
            "source": "membership_grade",
            "target": "device_price",
            "value": 0.13
        },
        {
            "source": "membership_grade",
            "target": "life_duration",
            "value": 0.42
        },
        {
            "source": "membership_life_duration",
            "target": "age",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "city_rank",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_name",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "career",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "gender",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "net_type",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "province",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "emui_version",
            "value": -0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_release_time",
            "value": 0.0
        },
        {
            "source": "membership_life_duration",
            "target": "device_price",
            "value": -0.01
        },
        {
            "source": "membership_life_duration",
            "target": "life_duration",
            "value": 0.04
        },
        {
            "source": "membership_life_duration",
            "target": "membership_grade",
            "value": 0.12
        },
        {
            "source": "purchase_tag",
            "target": "age",
            "value": -0.14
        },
        {
            "source": "purchase_tag",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "purchase_tag",
            "target": "city_rank",
            "value": 0.03
        },
        {
            "source": "purchase_tag",
            "target": "device_name",
            "value": -0.01
        },
        {
            "source": "purchase_tag",
            "target": "device_size",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "career",
            "value": -0.1
        },
        {
            "source": "purchase_tag",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "purchase_tag",
            "target": "net_type",
            "value": 0.07
        },
        {
            "source": "purchase_tag",
            "target": "province",
            "value": -0.0
        },
        {
            "source": "purchase_tag",
            "target": "emui_version",
            "value": 0.06
        },
        {
            "source": "purchase_tag",
            "target": "device_release_time",
            "value": -0.05
        },
        {
            "source": "purchase_tag",
            "target": "device_price",
            "value": 0.13
        },
        {
            "source": "purchase_tag",
            "target": "life_duration",
            "value": 0.27
        },
        {
            "source": "purchase_tag",
            "target": "membership_grade",
            "value": 0.14
        },
        {
            "source": "purchase_tag",
            "target": "membership_life_duration",
            "value": 0.01
        },
        {
            "source": "daily_active_time",
            "target": "age",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "city",
            "value": 0.0
        },
        {
            "source": "daily_active_time",
            "target": "city_rank",
            "value": 0.0
        },
        {
            "source": "daily_active_time",
            "target": "device_name",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "device_size",
            "value": -0.05
        },
        {
            "source": "daily_active_time",
            "target": "career",
            "value": -0.08
        },
        {
            "source": "daily_active_time",
            "target": "gender",
            "value": -0.04
        },
        {
            "source": "daily_active_time",
            "target": "net_type",
            "value": -0.01
        },
        {
            "source": "daily_active_time",
            "target": "province",
            "value": -0.02
        },
        {
            "source": "daily_active_time",
            "target": "emui_version",
            "value": 0.05
        },
        {
            "source": "daily_active_time",
            "target": "device_release_time",
            "value": -0.11
        },
        {
            "source": "daily_active_time",
            "target": "device_price",
            "value": 0.1
        },
        {
            "source": "daily_active_time",
            "target": "life_duration",
            "value": 0.12
        },
        {
            "source": "daily_active_time",
            "target": "membership_grade",
            "value": 0.04
        },
        {
            "source": "daily_active_time",
            "target": "membership_life_duration",
            "value": -0.0
        },
        {
            "source": "daily_active_time",
            "target": "purchase_tag",
            "value": 0.05
        },
        {
            "source": "app_first_class",
            "target": "app_tag",
            "value": 0.35
        },
        {
            "source": "app_second_class",
            "target": "app_tag",
            "value": 0.19
        },
        {
            "source": "app_second_class",
            "target": "app_first_class",
            "value": -0.02
        },
        {
            "source": "app_size",
            "target": "app_tag",
            "value": 0.18
        },
        {
            "source": "app_size",
            "target": "app_first_class",
            "value": 0.71
        },
        {
            "source": "app_size",
            "target": "app_second_class",
            "value": 0.24
        },
        {
            "source": "app_release_time",
            "target": "app_tag",
            "value": 0.36
        },
        {
            "source": "app_release_time",
            "target": "app_first_class",
            "value": 0.86
        },
        {
            "source": "app_release_time",
            "target": "app_second_class",
            "value": 0.07
        },
        {
            "source": "app_release_time",
            "target": "app_size",
            "value": 0.63
        },
        {
            "source": "app_score",
            "target": "app_tag",
            "value": 0.34
        },
        {
            "source": "app_score",
            "target": "app_first_class",
            "value": 0.99
        },
        {
            "source": "app_score",
            "target": "app_second_class",
            "value": -0.03
        },
        {
            "source": "app_score",
            "target": "app_size",
            "value": 0.72
        },
        {
            "source": "app_score",
            "target": "app_release_time",
            "value": 0.87
        }
    ]
}
export { allCor, inclassCor };