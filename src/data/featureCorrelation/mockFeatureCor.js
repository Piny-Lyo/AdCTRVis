const mockFeatureCor = {
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
        }
    ]
}

export default mockFeatureCor;