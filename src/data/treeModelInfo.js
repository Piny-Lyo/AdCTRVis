const linesData_depth = [
    { x: 0, y: 1 },
    { x: 1, y: 3 },
    { x: 2, y: 2 },
    { x: 3, y: 4 },
    { x: 4, y: 3 },
    { x: 5, y: 5 },
    { x: 6, y: 4 },
    { x: 7, y: 6 },
    { x: 8, y: 5 },
    { x: 9, y: 2 }
]

const linesData_leaves = [
    { x: 0, y: 4 },
    { x: 1, y: 6 },
    { x: 2, y: 2 },
    { x: 3, y: 5 },
    { x: 4, y: 6 },
    { x: 5, y: 8 },
    { x: 6, y: 4 },
    { x: 7, y: 10 },
    { x: 8, y: 9 },
    { x: 9, y: 3 }
]
const linesData = [linesData_depth, linesData_leaves]

const streamData = [
    { index: 0, ad: 10, user: 30, media: 10 },
    { index: 1, ad: 15, user: 10, media: 30 },
    { index: 2, ad: 10, user: 15, media: 20 },
    { index: 3, ad: 25, user: 20, media: 15 },
    { index: 4, ad: 30, user: 25, media: 20 },
    { index: 5, ad: 5, user: 35, media: 17 }
];

const treesData = [
    {
        "tree_index": 0,
        "num_leaves": 47,
        "num_cat": 0,
        "shrinkage": 1,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 10,
            "split_gain": 42.844200134277344,
            "threshold": 1.0000000180025095e-35,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": -1.30427,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 21,
                "split_feature": 11778,
                "split_gain": 4.197299957275391,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -1.31108,
                "internal_weight": 64.469,
                "internal_count": 384,
                "left_child": {
                    "split_index": 28,
                    "split_feature": 12518,
                    "split_gain": 2.3313000202178955,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -1.31171,
                    "internal_weight": 60.7754,
                    "internal_count": 362,
                    "left_child": {
                        "split_index": 29,
                        "split_feature": 11784,
                        "split_gain": 3.0213499069213867,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.3109899999999999,
                        "internal_weight": 53.3884,
                        "internal_count": 318,
                        "left_child": {
                            "split_index": 30,
                            "split_feature": 4,
                            "split_gain": 5.286290168762207,
                            "threshold": 2994.0000000000005,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.30985,
                            "internal_weight": 43.483,
                            "internal_count": 259,
                            "left_child": {
                                "split_index": 31,
                                "split_feature": 12,
                                "split_gain": 5.957359790802002,
                                "threshold": -1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.30444,
                                "internal_weight": 12.7595,
                                "internal_count": 76,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": -1.314497458932119,
                                    "leaf_weight": 4.029310941696168,
                                    "leaf_count": 24
                                },
                                "right_child": {
                                    "split_index": 32,
                                    "split_feature": 7832,
                                    "split_gain": 5.2592902183532715,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.2998,
                                    "internal_weight": 8.73017,
                                    "internal_count": 52,
                                    "left_child": {
                                        "leaf_index": 32,
                                        "leaf_value": -1.3067096978815393,
                                        "leaf_weight": 4.868750721216198,
                                        "leaf_count": 29
                                    },
                                    "right_child": {
                                        "leaf_index": 33,
                                        "leaf_value": -1.291082083733219,
                                        "leaf_weight": 3.86142298579216,
                                        "leaf_count": 23
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 33,
                                "split_feature": 7,
                                "split_gain": 2.6572799682617188,
                                "threshold": 5.500000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.3121,
                                "internal_weight": 30.7235,
                                "internal_count": 183,
                                "left_child": {
                                    "split_index": 34,
                                    "split_feature": 7,
                                    "split_gain": 5.162169933319092,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.30953,
                                    "internal_weight": 17.4603,
                                    "internal_count": 104,
                                    "left_child": {
                                        "split_index": 37,
                                        "split_feature": 4,
                                        "split_gain": 1.426300048828125,
                                        "threshold": 40780.50000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.31251,
                                        "internal_weight": 13.431,
                                        "internal_count": 80,
                                        "left_child": {
                                            "split_index": 41,
                                            "split_feature": 2,
                                            "split_gain": 0.5515140295028687,
                                            "threshold": 1.5000000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -1.31477,
                                            "internal_weight": 9.06595,
                                            "internal_count": 54,
                                            "left_child": {
                                                "leaf_index": 31,
                                                "leaf_value": -1.3120156449709452,
                                                "leaf_weight": 4.029310941696172,
                                                "leaf_count": 24
                                            },
                                            "right_child": {
                                                "leaf_index": 42,
                                                "leaf_value": -1.3169792728932928,
                                                "leaf_weight": 5.036638677120209,
                                                "leaf_count": 30
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 38,
                                            "leaf_value": -1.3078156521135744,
                                            "leaf_weight": 4.36508685350418,
                                            "leaf_count": 26
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 35,
                                        "leaf_value": -1.2996065751650767,
                                        "leaf_weight": 4.029310941696166,
                                        "leaf_count": 24
                                    }
                                },
                                "right_child": {
                                    "split_index": 42,
                                    "split_feature": 3883,
                                    "split_gain": 0.5493199825286865,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.31547,
                                    "internal_weight": 13.2631,
                                    "internal_count": 79,
                                    "left_child": {
                                        "leaf_index": 34,
                                        "leaf_value": -1.3127247346741377,
                                        "leaf_weight": 4.700862765312192,
                                        "leaf_count": 28
                                    },
                                    "right_child": {
                                        "leaf_index": 43,
                                        "leaf_value": -1.3169792728932928,
                                        "leaf_weight": 8.562285751104355,
                                        "leaf_count": 51
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 43,
                            "split_feature": 4,
                            "split_gain": 0.19686299562454224,
                            "threshold": 21094.500000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.31597,
                            "internal_weight": 9.90539,
                            "internal_count": 59,
                            "left_child": {
                                "leaf_index": 30,
                                "leaf_value": -1.3169792728932928,
                                "leaf_weight": 6.54763028025627,
                                "leaf_count": 39
                            },
                            "right_child": {
                                "leaf_index": 44,
                                "leaf_value": -1.3140010961398843,
                                "leaf_weight": 3.357759118080139,
                                "leaf_count": 20
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 45,
                        "split_feature": 2,
                        "split_gain": 1.7763600157738027e-15,
                        "threshold": 5.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.31698,
                        "internal_weight": 7.38707,
                        "internal_count": 44,
                        "left_child": {
                            "leaf_index": 29,
                            "leaf_value": -1.3169792728932928,
                            "leaf_weight": 3.5256470739841452,
                            "leaf_count": 21
                        },
                        "right_child": {
                            "leaf_index": 46,
                            "leaf_value": -1.3169792728932928,
                            "leaf_weight": 3.86142298579216,
                            "leaf_count": 23
                        }
                    }
                },
                "right_child": {
                    "leaf_index": 22,
                    "leaf_value": -1.3007346724201556,
                    "leaf_weight": 3.693535029888152,
                    "leaf_count": 22
                }
            },
            "right_child": {
                "split_index": 1,
                "split_feature": 4,
                "split_gain": 26.32550048828125,
                "threshold": 257.50000000000006,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -1.30134,
                "internal_weight": 150.26,
                "internal_count": 895,
                "left_child": {
                    "split_index": 4,
                    "split_feature": 12,
                    "split_gain": 12.223600387573242,
                    "threshold": 10.500000000000002,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -1.29487,
                    "internal_weight": 44.3224,
                    "internal_count": 264,
                    "left_child": {
                        "split_index": 5,
                        "split_feature": 9,
                        "split_gain": 14.187000274658203,
                        "threshold": 1.5000000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.29141,
                        "internal_weight": 30.8914,
                        "internal_count": 184,
                        "left_child": {
                            "split_index": 9,
                            "split_feature": 10,
                            "split_gain": 6.428979873657227,
                            "threshold": 2.5000000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.29422,
                            "internal_weight": 26.3584,
                            "internal_count": 157,
                            "left_child": {
                                "split_index": 15,
                                "split_feature": 12,
                                "split_gain": 5.577829837799072,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.29099,
                                "internal_weight": 18.4677,
                                "internal_count": 110,
                                "left_child": {
                                    "leaf_index": 1,
                                    "leaf_value": -1.282942967140053,
                                    "leaf_weight": 5.876078456640253,
                                    "leaf_count": 35
                                },
                                "right_child": {
                                    "split_index": 16,
                                    "split_feature": 12,
                                    "split_gain": 5.333940029144287,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.29474,
                                    "internal_weight": 12.5916,
                                    "internal_count": 75,
                                    "left_child": {
                                        "split_index": 20,
                                        "split_feature": 2,
                                        "split_gain": 4.5360798835754395,
                                        "threshold": 2.5000000000000004,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.30036,
                                        "internal_weight": 7.21918,
                                        "internal_count": 43,
                                        "left_child": {
                                            "leaf_index": 16,
                                            "leaf_value": -1.292612372183587,
                                            "leaf_weight": 3.6935350298881513,
                                            "leaf_count": 22
                                        },
                                        "right_child": {
                                            "leaf_index": 21,
                                            "leaf_value": -1.3084701964549827,
                                            "leaf_weight": 3.525647073984146,
                                            "leaf_count": 21
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 17,
                                        "leaf_value": -1.287197505359208,
                                        "leaf_weight": 5.372414588928223,
                                        "leaf_count": 32
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 22,
                                "split_feature": 0,
                                "split_gain": 4.184189796447754,
                                "threshold": 2.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.3017699999999999,
                                "internal_weight": 7.89073,
                                "internal_count": 47,
                                "left_child": {
                                    "leaf_index": 10,
                                    "leaf_value": -1.3092101161452707,
                                    "leaf_weight": 3.861422985792159,
                                    "leaf_count": 23
                                },
                                "right_child": {
                                    "leaf_index": 23,
                                    "leaf_value": -1.2946429472427292,
                                    "leaf_weight": 4.029310941696167,
                                    "leaf_count": 24
                                }
                            }
                        },
                        "right_child": {
                            "leaf_index": 6,
                            "leaf_value": -1.2750641926601365,
                            "leaf_weight": 4.532974809408187,
                            "leaf_count": 27
                        }
                    },
                    "right_child": {
                        "split_index": 11,
                        "split_feature": 7,
                        "split_gain": 6.227849960327148,
                        "threshold": 21.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.30283,
                        "internal_weight": 13.431,
                        "internal_count": 80,
                        "left_child": {
                            "leaf_index": 5,
                            "leaf_value": -1.3103611023301627,
                            "leaf_weight": 6.043966412544249,
                            "leaf_count": 36
                        },
                        "right_child": {
                            "split_index": 26,
                            "split_feature": 7,
                            "split_gain": 2.599139928817749,
                            "threshold": 33.50000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.29667,
                            "internal_weight": 7.38707,
                            "internal_count": 44,
                            "left_child": {
                                "leaf_index": 12,
                                "leaf_value": -1.2901756821126165,
                                "leaf_weight": 3.357759118080139,
                                "leaf_count": 20
                            },
                            "right_child": {
                                "leaf_index": 27,
                                "leaf_value": -1.3020883891262502,
                                "leaf_weight": 4.029310941696167,
                                "leaf_count": 24
                            }
                        }
                    }
                },
                "right_child": {
                    "split_index": 2,
                    "split_feature": 7,
                    "split_gain": 18.231700897216797,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -1.30405,
                    "internal_weight": 105.937,
                    "internal_count": 631,
                    "left_child": {
                        "split_index": 6,
                        "split_feature": 10,
                        "split_gain": 9.172140121459961,
                        "threshold": 1.5000000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.2923,
                        "internal_weight": 11.7522,
                        "internal_count": 70,
                        "left_child": {
                            "leaf_index": 2,
                            "leaf_value": -1.300179301463809,
                            "leaf_weight": 6.54763028025627,
                            "leaf_count": 39
                        },
                        "right_child": {
                            "leaf_index": 7,
                            "leaf_value": -1.2823939944666136,
                            "leaf_weight": 5.204526633024216,
                            "leaf_count": 31
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 10,
                        "split_gain": 15.70930004119873,
                        "threshold": 6.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -1.30551,
                        "internal_weight": 94.1851,
                        "internal_count": 561,
                        "left_child": {
                            "split_index": 7,
                            "split_feature": 6,
                            "split_gain": 8.368539810180664,
                            "threshold": 2.5000000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.30676,
                            "internal_weight": 86.1265,
                            "internal_count": 513,
                            "left_child": {
                                "split_index": 13,
                                "split_feature": 4,
                                "split_gain": 5.665410041809082,
                                "threshold": 10159.500000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.31089,
                                "internal_weight": 31.2272,
                                "internal_count": 186,
                                "left_child": {
                                    "split_index": 25,
                                    "split_feature": 10563,
                                    "split_gain": 2.6018500328063965,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.31323,
                                    "internal_weight": 24.008,
                                    "internal_count": 143,
                                    "left_child": {
                                        "split_index": 39,
                                        "split_feature": 2714,
                                        "split_gain": 1.0118800401687622,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.31456,
                                        "internal_weight": 20.6502,
                                        "internal_count": 123,
                                        "left_child": {
                                            "split_index": 40,
                                            "split_feature": 3883,
                                            "split_gain": 2.032020092010498,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -1.31253,
                                            "internal_weight": 11.2485,
                                            "internal_count": 67,
                                            "left_child": {
                                                "leaf_index": 3,
                                                "leaf_value": -1.3169792728932928,
                                                "leaf_weight": 5.37241458892823,
                                                "leaf_count": 32
                                            },
                                            "right_child": {
                                                "leaf_index": 41,
                                                "leaf_value": -1.3084701964549827,
                                                "leaf_weight": 5.8760784566402435,
                                                "leaf_count": 35
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 44,
                                            "split_feature": 2,
                                            "split_gain": 3.552710078910475e-15,
                                            "threshold": 4.500000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -1.31698,
                                            "internal_weight": 9.40173,
                                            "internal_count": 56,
                                            "left_child": {
                                                "leaf_index": 40,
                                                "leaf_value": -1.3169792728932928,
                                                "leaf_weight": 5.204526633024216,
                                                "leaf_count": 31
                                            },
                                            "right_child": {
                                                "leaf_index": 45,
                                                "leaf_value": -1.3169792728932928,
                                                "leaf_weight": 4.197198897600174,
                                                "leaf_count": 25
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 26,
                                        "leaf_value": -1.3050665658796587,
                                        "leaf_weight": 3.3577591180801383,
                                        "leaf_count": 20
                                    }
                                },
                                "right_child": {
                                    "split_index": 14,
                                    "split_feature": 12,
                                    "split_gain": 6.244229793548584,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.30313,
                                    "internal_weight": 7.21918,
                                    "internal_count": 43,
                                    "left_child": {
                                        "leaf_index": 14,
                                        "leaf_value": -1.293153858866025,
                                        "leaf_weight": 3.3577591180801383,
                                        "leaf_count": 20
                                    },
                                    "right_child": {
                                        "leaf_index": 15,
                                        "leaf_value": -1.311799835061278,
                                        "leaf_weight": 3.86142298579216,
                                        "leaf_count": 23
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 8,
                                "split_feature": 8,
                                "split_gain": 8.168549537658691,
                                "threshold": 160.00000000000003,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -1.30441,
                                "internal_weight": 54.8994,
                                "internal_count": 327,
                                "left_child": {
                                    "split_index": 10,
                                    "split_feature": 2,
                                    "split_gain": 6.3636298179626465,
                                    "threshold": 18.500000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.30209,
                                    "internal_weight": 40.2931,
                                    "internal_count": 240,
                                    "left_child": {
                                        "split_index": 12,
                                        "split_feature": 10564,
                                        "split_gain": 5.979360103607178,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.3001800000000001,
                                        "internal_weight": 32.7382,
                                        "internal_count": 195,
                                        "left_child": {
                                            "split_index": 18,
                                            "split_feature": 11777,
                                            "split_gain": 4.8024702072143555,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -1.3017400000000001,
                                            "internal_weight": 28.8767,
                                            "internal_count": 172,
                                            "left_child": {
                                                "split_index": 19,
                                                "split_feature": 7,
                                                "split_gain": 5.988870143890381,
                                                "threshold": 13.500000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -1.30384,
                                                "internal_weight": 22.8328,
                                                "internal_count": 136,
                                                "left_child": {
                                                    "split_index": 23,
                                                    "split_feature": 7832,
                                                    "split_gain": 3.213200092315674,
                                                    "threshold": 1.0000000180025095e-35,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -1.30006,
                                                    "internal_weight": 14.7741,
                                                    "internal_count": 88,
                                                    "left_child": {
                                                        "split_index": 24,
                                                        "split_feature": 4,
                                                        "split_gain": 5.9268798828125,
                                                        "threshold": 1973.0000000000002,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -1.29679,
                                                        "internal_weight": 9.90539,
                                                        "internal_count": 59,
                                                        "left_child": {
                                                            "leaf_index": 8,
                                                            "leaf_value": -1.3046557828791887,
                                                            "leaf_weight": 4.868750721216207,
                                                            "leaf_count": 29
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 25,
                                                            "leaf_value": -1.289182956528147,
                                                            "leaf_weight": 5.036638677120209,
                                                            "leaf_count": 30
                                                        }
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 24,
                                                        "leaf_value": -1.3067096978815393,
                                                        "leaf_weight": 4.868750721216201,
                                                        "leaf_count": 29
                                                    }
                                                },
                                                "right_child": {
                                                    "split_index": 36,
                                                    "split_feature": 11776,
                                                    "split_gain": 1.4587199687957764,
                                                    "threshold": 1.0000000180025095e-35,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -1.31077,
                                                    "internal_weight": 8.05862,
                                                    "internal_count": 48,
                                                    "left_child": {
                                                        "leaf_index": 20,
                                                        "leaf_value": -1.3061495392445346,
                                                        "leaf_weight": 3.6935350298881513,
                                                        "leaf_count": 22
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 37,
                                                        "leaf_value": -1.3146883676983632,
                                                        "leaf_weight": 4.365086853504181,
                                                        "leaf_count": 26
                                                    }
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 19,
                                                "leaf_value": -1.2938156759223378,
                                                "leaf_weight": 6.04396641254425,
                                                "leaf_count": 36
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 13,
                                            "leaf_value": -1.2884923648172117,
                                            "leaf_weight": 3.861422985792159,
                                            "leaf_count": 23
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 38,
                                        "split_feature": 6,
                                        "split_gain": 1.2817800045013428,
                                        "threshold": 6.500000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.31036,
                                        "internal_weight": 7.55496,
                                        "internal_count": 45,
                                        "left_child": {
                                            "leaf_index": 11,
                                            "leaf_value": -1.3143895539772854,
                                            "leaf_weight": 3.861422985792159,
                                            "leaf_count": 23
                                        },
                                        "right_child": {
                                            "leaf_index": 39,
                                            "leaf_value": -1.3061495392445346,
                                            "leaf_weight": 3.693535029888153,
                                            "leaf_count": 22
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 27,
                                    "split_feature": 7,
                                    "split_gain": 2.4178199768066406,
                                    "threshold": 30.500000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -1.31082,
                                    "internal_weight": 14.6063,
                                    "internal_count": 87,
                                    "left_child": {
                                        "split_index": 35,
                                        "split_feature": 2714,
                                        "split_gain": 1.7971800565719604,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -1.31326,
                                        "internal_weight": 10.7448,
                                        "internal_count": 64,
                                        "left_child": {
                                            "leaf_index": 9,
                                            "leaf_value": -1.30876361288389,
                                            "leaf_weight": 4.8687507212162,
                                            "leaf_count": 29
                                        },
                                        "right_child": {
                                            "leaf_index": 36,
                                            "leaf_value": -1.3169792728932928,
                                            "leaf_weight": 5.8760784566402435,
                                            "leaf_count": 35
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 28,
                                        "leaf_value": -1.3040306783132558,
                                        "leaf_weight": 3.861422985792159,
                                        "leaf_count": 23
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 17,
                            "split_feature": 2714,
                            "split_gain": 5.3260498046875,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -1.29216,
                            "internal_weight": 8.05862,
                            "internal_count": 48,
                            "left_child": {
                                "leaf_index": 4,
                                "leaf_value": -1.2993308180582794,
                                "leaf_weight": 4.532974809408186,
                                "leaf_count": 27
                            },
                            "right_child": {
                                "leaf_index": 18,
                                "leaf_value": -1.282942967140053,
                                "leaf_weight": 3.525647073984146,
                                "leaf_count": 21
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "tree_index": 1,
        "num_leaves": 49,
        "num_cat": 0,
        "shrinkage": 0.01,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 10,
            "split_gain": 42.08470153808594,
            "threshold": 1.0000000180025095e-35,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": 0,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 16,
                "split_feature": 9825,
                "split_gain": 4.535950183868408,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -0.006778,
                "internal_weight": 64.217,
                "internal_count": 384,
                "left_child": {
                    "split_index": 17,
                    "split_feature": 143,
                    "split_gain": 5.047639846801758,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00840855,
                    "internal_weight": 46.6558,
                    "internal_count": 279,
                    "left_child": {
                        "split_index": 32,
                        "split_feature": 8,
                        "split_gain": 1.8071800470352173,
                        "threshold": 18.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00987079,
                        "internal_weight": 38.9568,
                        "internal_count": 233,
                        "left_child": {
                            "split_index": 34,
                            "split_feature": 4,
                            "split_gain": 1.5295300483703613,
                            "threshold": 4330.500000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00783459,
                            "internal_weight": 20.5711,
                            "internal_count": 123,
                            "left_child": {
                                "split_index": 35,
                                "split_feature": 4,
                                "split_gain": 5.280129909515381,
                                "threshold": 42.00000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00464878,
                                "internal_weight": 8.69806,
                                "internal_count": 52,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": -0.010819304325436799,
                                    "leaf_weight": 5.34534113109112,
                                    "leaf_count": 32
                                },
                                "right_child": {
                                    "leaf_index": 36,
                                    "leaf_value": 0.005189063091819604,
                                    "leaf_weight": 3.352721020579338,
                                    "leaf_count": 20
                                }
                            },
                            "right_child": {
                                "split_index": 38,
                                "split_feature": 8,
                                "split_gain": 0.5874729752540588,
                                "threshold": 2.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0101685,
                                "internal_weight": 11.873,
                                "internal_count": 71,
                                "left_child": {
                                    "split_index": 41,
                                    "split_feature": 4,
                                    "split_gain": 0.14785799384117126,
                                    "threshold": 30413.500000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00821025,
                                    "internal_weight": 6.68902,
                                    "internal_count": 40,
                                    "left_child": {
                                        "leaf_index": 35,
                                        "leaf_value": -0.009698345053735737,
                                        "leaf_weight": 3.3415151685476285,
                                        "leaf_count": 20
                                    },
                                    "right_child": {
                                        "leaf_index": 42,
                                        "leaf_value": -0.006724823251696575,
                                        "leaf_weight": 3.3475073873996735,
                                        "leaf_count": 20
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 39,
                                    "leaf_value": -0.0126952359285808,
                                    "leaf_weight": 5.183989033102989,
                                    "leaf_count": 31
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 39,
                            "split_feature": 2509,
                            "split_gain": 0.24566200375556946,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.012149,
                            "internal_weight": 18.3857,
                            "internal_count": 110,
                            "left_child": {
                                "split_index": 42,
                                "split_feature": 4,
                                "split_gain": 7.437360181938857e-06,
                                "threshold": 3069.0000000000005,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0126937,
                                "internal_weight": 15.0452,
                                "internal_count": 90,
                                "left_child": {
                                    "leaf_index": 33,
                                    "leaf_value": -0.012705326967572513,
                                    "leaf_weight": 4.021882295608523,
                                    "leaf_count": 24
                                },
                                "right_child": {
                                    "split_index": 43,
                                    "split_feature": 4,
                                    "split_gain": 3.3543699373694835e-06,
                                    "threshold": 22545.500000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0126894,
                                    "internal_weight": 11.0234,
                                    "internal_count": 66,
                                    "left_child": {
                                        "leaf_index": 43,
                                        "leaf_value": -0.012682589774346107,
                                        "leaf_weight": 4.336213886737822,
                                        "leaf_count": 26
                                    },
                                    "right_child": {
                                        "split_index": 47,
                                        "split_feature": 4,
                                        "split_gain": 6.147919862087292e-07,
                                        "threshold": 39147.50000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0126939,
                                        "internal_weight": 6.68715,
                                        "internal_count": 40,
                                        "left_child": {
                                            "leaf_index": 44,
                                            "leaf_value": -0.012690848119629792,
                                            "leaf_weight": 3.341405361890793,
                                            "leaf_count": 20
                                        },
                                        "right_child": {
                                            "leaf_index": 48,
                                            "leaf_value": -0.012696912321813596,
                                            "leaf_weight": 3.345744773745537,
                                            "leaf_count": 20
                                        }
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 40,
                                "leaf_value": -0.009695852159563518,
                                "leaf_weight": 3.3404353708028784,
                                "leaf_count": 20
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 29,
                        "split_feature": 7,
                        "split_gain": 2.2887699604034424,
                        "threshold": 2.5000000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00100972,
                        "internal_weight": 7.69908,
                        "internal_count": 46,
                        "left_child": {
                            "leaf_index": 18,
                            "leaf_value": -0.005796126144463028,
                            "leaf_weight": 4.348169431090354,
                            "leaf_count": 26
                        },
                        "right_child": {
                            "leaf_index": 30,
                            "leaf_value": 0.005201170652345079,
                            "leaf_weight": 3.3509082198143005,
                            "leaf_count": 20
                        }
                    }
                },
                "right_child": {
                    "split_index": 20,
                    "split_feature": 7,
                    "split_gain": 4.116340160369873,
                    "threshold": 5.500000000000001,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00244603,
                    "internal_weight": 17.5612,
                    "internal_count": 105,
                    "left_child": {
                        "split_index": 36,
                        "split_feature": 8,
                        "split_gain": 1.308940052986145,
                        "threshold": 27.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00253288,
                        "internal_weight": 8.53487,
                        "internal_count": 51,
                        "left_child": {
                            "leaf_index": 17,
                            "leaf_value": -0.0007444201457458406,
                            "leaf_weight": 5.019500464200975,
                            "leaf_count": 30
                        },
                        "right_child": {
                            "leaf_index": 37,
                            "leaf_value": 0.007212452004584035,
                            "leaf_weight": 3.515372186899185,
                            "leaf_count": 21
                        }
                    },
                    "right_child": {
                        "split_index": 21,
                        "split_feature": 4,
                        "split_gain": 4.005090236663818,
                        "threshold": 11631.500000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00715388,
                        "internal_weight": 9.02629,
                        "internal_count": 54,
                        "left_child": {
                            "leaf_index": 21,
                            "leaf_value": 0.0008659705042349074,
                            "leaf_weight": 3.684895142912863,
                            "leaf_count": 22
                        },
                        "right_child": {
                            "leaf_index": 22,
                            "leaf_value": -0.012686581959017146,
                            "leaf_weight": 5.3413956463336945,
                            "leaf_count": 32
                        }
                    }
                }
            },
            "right_child": {
                "split_index": 1,
                "split_feature": 4,
                "split_gain": 25.615400314331055,
                "threshold": 257.50000000000006,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": 0.00289134,
                "internal_weight": 150.512,
                "internal_count": 895,
                "left_child": {
                    "split_index": 6,
                    "split_feature": 9,
                    "split_gain": 10.480799674987793,
                    "threshold": 1.5000000000000002,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.00925255,
                    "internal_weight": 44.5611,
                    "internal_count": 264,
                    "left_child": {
                        "split_index": 12,
                        "split_feature": 6,
                        "split_gain": 4.552740097045898,
                        "threshold": 5.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00737983,
                        "internal_weight": 38.7788,
                        "internal_count": 230,
                        "left_child": {
                            "split_index": 14,
                            "split_feature": 9825,
                            "split_gain": 7.732810020446777,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0108638,
                            "internal_weight": 19.0664,
                            "internal_count": 113,
                            "left_child": {
                                "split_index": 26,
                                "split_feature": 8,
                                "split_gain": 3.4442200660705566,
                                "threshold": 9.500000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00650822,
                                "internal_weight": 12.9902,
                                "internal_count": 77,
                                "left_child": {
                                    "split_index": 37,
                                    "split_feature": 6,
                                    "split_gain": 0.6969580054283142,
                                    "threshold": 1.5000000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0111985,
                                    "internal_weight": 7.09957,
                                    "internal_count": 42,
                                    "left_child": {
                                        "leaf_index": 1,
                                        "leaf_value": 0.014190559591337483,
                                        "leaf_weight": 3.7133235335350054,
                                        "leaf_count": 22
                                    },
                                    "right_child": {
                                        "leaf_index": 38,
                                        "leaf_value": 0.007917510608719038,
                                        "leaf_weight": 3.386244773864746,
                                        "leaf_count": 20
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 27,
                                    "leaf_value": 0.0008552704770919737,
                                    "leaf_weight": 5.890584960579872,
                                    "leaf_count": 35
                                }
                            },
                            "right_child": {
                                "leaf_index": 15,
                                "leaf_value": 0.02017535497092457,
                                "leaf_weight": 6.076278239488601,
                                "leaf_count": 36
                            }
                        },
                        "right_child": {
                            "split_index": 13,
                            "split_feature": 2,
                            "split_gain": 8.076749801635742,
                            "threshold": 20.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00401002,
                            "internal_weight": 19.7123,
                            "internal_count": 117,
                            "left_child": {
                                "split_index": 15,
                                "split_feature": 4,
                                "split_gain": 5.490670204162598,
                                "threshold": 7.500000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.000262059,
                                "internal_weight": 13.6377,
                                "internal_count": 81,
                                "left_child": {
                                    "leaf_index": 13,
                                    "leaf_value": 0.008461793503298782,
                                    "leaf_weight": 4.718422785401347,
                                    "leaf_count": 28
                                },
                                "right_child": {
                                    "split_index": 18,
                                    "split_feature": 2,
                                    "split_gain": 4.395679950714111,
                                    "threshold": 1.5000000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00487711,
                                    "internal_weight": 8.91926,
                                    "internal_count": 53,
                                    "left_child": {
                                        "leaf_index": 16,
                                        "leaf_value": 0.0034436141821161423,
                                        "leaf_weight": 3.7088877707719785,
                                        "leaf_count": 22
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": -0.010800039839635114,
                                        "leaf_weight": 5.210367396473885,
                                        "leaf_count": 31
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 14,
                                "leaf_value": 0.013600921570761426,
                                "leaf_weight": 6.074640735983848,
                                "leaf_count": 36
                            }
                        }
                    },
                    "right_child": {
                        "leaf_index": 7,
                        "leaf_value": 0.021811841260720808,
                        "leaf_weight": 5.782308742403983,
                        "leaf_count": 34
                    }
                },
                "right_child": {
                    "split_index": 2,
                    "split_feature": 7,
                    "split_gain": 17.756799697875977,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.000215919,
                    "internal_weight": 105.951,
                    "internal_count": 631,
                    "left_child": {
                        "split_index": 7,
                        "split_feature": 10,
                        "split_gain": 8.795989990234375,
                        "threshold": 1.5000000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0117617,
                        "internal_weight": 11.832699999999999,
                        "internal_count": 70,
                        "left_child": {
                            "leaf_index": 2,
                            "leaf_value": 0.004035891624343885,
                            "leaf_weight": 6.56296321749687,
                            "leaf_count": 39
                        },
                        "right_child": {
                            "leaf_index": 8,
                            "leaf_value": 0.02138349803755092,
                            "leaf_weight": 5.269749224185944,
                            "leaf_count": 31
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 10,
                        "split_gain": 15.322799682617188,
                        "threshold": 6.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00123565,
                        "internal_weight": 94.1178,
                        "internal_count": 561,
                        "left_child": {
                            "split_index": 4,
                            "split_feature": 9825,
                            "split_gain": 12.097000122070312,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00247503,
                            "internal_weight": 86.0033,
                            "internal_count": 513,
                            "left_child": {
                                "split_index": 11,
                                "split_feature": 104,
                                "split_gain": 4.570320129394531,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00596877,
                                "internal_weight": 46.0454,
                                "internal_count": 275,
                                "left_child": {
                                    "split_index": 19,
                                    "split_feature": 7,
                                    "split_gain": 4.149640083312988,
                                    "threshold": 11.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00696599,
                                    "internal_weight": 41.8523,
                                    "internal_count": 250,
                                    "left_child": {
                                        "split_index": 27,
                                        "split_feature": 10383,
                                        "split_gain": 3.0748701095581055,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00392061,
                                        "internal_weight": 21.6248,
                                        "internal_count": 129,
                                        "left_child": {
                                            "split_index": 28,
                                            "split_feature": 8,
                                            "split_gain": 3.9793100357055664,
                                            "threshold": 60.50000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00143816,
                                            "internal_weight": 15.0864,
                                            "internal_count": 90,
                                            "left_child": {
                                                "split_index": 30,
                                                "split_feature": 11776,
                                                "split_gain": 2.214669942855835,
                                                "threshold": 1.0000000180025095e-35,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.00275359,
                                                "internal_weight": 9.05466,
                                                "internal_count": 54,
                                                "left_child": {
                                                    "leaf_index": 3,
                                                    "leaf_value": -0.002773898211022065,
                                                    "leaf_weight": 4.025787845253946,
                                                    "leaf_count": 24
                                                },
                                                "right_child": {
                                                    "leaf_index": 31,
                                                    "leaf_value": 0.007178543958744628,
                                                    "leaf_weight": 5.028873324394226,
                                                    "leaf_count": 30
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 29,
                                                "leaf_value": -0.007730715417575801,
                                                "leaf_weight": 6.0317120999097815,
                                                "leaf_count": 36
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 28,
                                            "leaf_value": -0.009648486550453136,
                                            "leaf_weight": 6.538422167301177,
                                            "leaf_count": 39
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 22,
                                        "split_feature": 6,
                                        "split_gain": 3.7260499000549316,
                                        "threshold": 5.500000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0102217,
                                        "internal_weight": 20.2275,
                                        "internal_count": 121,
                                        "left_child": {
                                            "split_index": 44,
                                            "split_feature": 2714,
                                            "split_gain": 1.6720999838071293e-06,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0126899,
                                            "internal_weight": 15.2005,
                                            "internal_count": 91,
                                            "left_child": {
                                                "split_index": 46,
                                                "split_feature": 2,
                                                "split_gain": 1.5074599559739e-06,
                                                "threshold": 9.500000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126935,
                                                "internal_weight": 7.02099,
                                                "internal_count": 42,
                                                "left_child": {
                                                    "leaf_index": 20,
                                                    "leaf_value": -0.012698142947629967,
                                                    "leaf_weight": 3.5139517933130273,
                                                    "leaf_count": 21
                                                },
                                                "right_child": {
                                                    "leaf_index": 47,
                                                    "leaf_value": -0.012688875634691947,
                                                    "leaf_weight": 3.507041096687317,
                                                    "leaf_count": 21
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 45,
                                                "split_feature": 2,
                                                "split_gain": 1.5969700370987994e-06,
                                                "threshold": 6.500000000000001,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126869,
                                                "internal_weight": 8.17948,
                                                "internal_count": 49,
                                                "left_child": {
                                                    "leaf_index": 45,
                                                    "leaf_value": -0.012681961513798547,
                                                    "leaf_weight": 3.668602854013443,
                                                    "leaf_count": 22
                                                },
                                                "right_child": {
                                                    "leaf_index": 46,
                                                    "leaf_value": -0.012690845947952983,
                                                    "leaf_weight": 4.510875388979912,
                                                    "leaf_count": 27
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 23,
                                            "leaf_value": -0.0027584923581078563,
                                            "leaf_weight": 5.026999711990356,
                                            "leaf_count": 30
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 12,
                                    "leaf_value": 0.003984617510449611,
                                    "leaf_weight": 4.193118408322333,
                                    "leaf_count": 25
                                }
                            },
                            "right_child": {
                                "split_index": 5,
                                "split_feature": 8,
                                "split_gain": 11.155699729919434,
                                "threshold": 41.50000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00155097,
                                "internal_weight": 39.9579,
                                "internal_count": 238,
                                "left_child": {
                                    "split_index": 8,
                                    "split_feature": 6,
                                    "split_gain": 6.400519847869873,
                                    "threshold": 7.500000000000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.00956095,
                                    "internal_weight": 12.1154,
                                    "internal_count": 72,
                                    "left_child": {
                                        "split_index": 33,
                                        "split_feature": 4,
                                        "split_gain": 1.5480999946594238,
                                        "threshold": 1686.0000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00323522,
                                        "internal_weight": 6.8938,
                                        "internal_count": 41,
                                        "left_child": {
                                            "leaf_index": 5,
                                            "leaf_value": -0.0013901629976556405,
                                            "leaf_weight": 3.530403718352316,
                                            "leaf_count": 21
                                        },
                                        "right_child": {
                                            "leaf_index": 34,
                                            "leaf_value": 0.008090260895227568,
                                            "leaf_weight": 3.363398104906082,
                                            "leaf_count": 20
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 9,
                                        "leaf_value": 0.017912484247419886,
                                        "leaf_weight": 5.221599519252777,
                                        "leaf_count": 31
                                    }
                                },
                                "right_child": {
                                    "split_index": 10,
                                    "split_feature": 7,
                                    "split_gain": 5.059689998626709,
                                    "threshold": 41.50000000000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0019345,
                                    "internal_weight": 27.8425,
                                    "internal_count": 166,
                                    "left_child": {
                                        "split_index": 23,
                                        "split_feature": 2,
                                        "split_gain": 3.5902299880981445,
                                        "threshold": 22.500000000000004,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00360071,
                                        "internal_weight": 24.1526,
                                        "internal_count": 144,
                                        "left_child": {
                                            "split_index": 24,
                                            "split_feature": 8,
                                            "split_gain": 4.161240100860596,
                                            "threshold": 187.00000000000003,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00196629,
                                            "internal_weight": 20.4734,
                                            "internal_count": 122,
                                            "left_child": {
                                                "split_index": 25,
                                                "split_feature": 8,
                                                "split_gain": 4.2505598068237305,
                                                "threshold": 64.50000000000001,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.00123277,
                                                "internal_weight": 13.617,
                                                "internal_count": 81,
                                                "left_child": {
                                                    "leaf_index": 6,
                                                    "leaf_value": -0.005506947388193032,
                                                    "leaf_weight": 5.546229600906382,
                                                    "leaf_count": 33
                                                },
                                                "right_child": {
                                                    "split_index": 31,
                                                    "split_feature": 7,
                                                    "split_gain": 2.1969199180603027,
                                                    "threshold": 11.500000000000002,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": 0.00586427,
                                                    "internal_weight": 8.07081,
                                                    "internal_count": 48,
                                                    "left_child": {
                                                        "leaf_index": 26,
                                                        "leaf_value": 0.01152011039474167,
                                                        "leaf_weight": 3.7104470878839475,
                                                        "leaf_count": 22
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 32,
                                                        "leaf_value": 0.0010514402406959114,
                                                        "leaf_weight": 4.360365554690361,
                                                        "leaf_count": 26
                                                    }
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 40,
                                                "split_feature": 8,
                                                "split_gain": 0.1677750051021576,
                                                "threshold": 325.50000000000006,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00831977,
                                                "internal_weight": 6.8563600000000005,
                                                "internal_count": 41,
                                                "left_child": {
                                                    "leaf_index": 25,
                                                    "leaf_value": -0.009846595561119154,
                                                    "leaf_weight": 3.511256977915763,
                                                    "leaf_count": 21
                                                },
                                                "right_child": {
                                                    "leaf_index": 41,
                                                    "leaf_value": -0.006717096928964469,
                                                    "leaf_weight": 3.3450987637043,
                                                    "leaf_count": 20
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 24,
                                            "leaf_value": -0.012695529164949614,
                                            "leaf_weight": 3.6792494356632224,
                                            "leaf_count": 22
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 11,
                                        "leaf_value": 0.008972011774577205,
                                        "leaf_weight": 3.6898498237133017,
                                        "leaf_count": 22
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 9,
                            "split_feature": 11776,
                            "split_gain": 5.30797004699707,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0119002,
                            "internal_weight": 8.11452,
                            "internal_count": 48,
                            "left_child": {
                                "leaf_index": 4,
                                "leaf_value": 0.004770762182871149,
                                "leaf_weight": 4.566287025809286,
                                "leaf_count": 27
                            },
                            "right_child": {
                                "leaf_index": 10,
                                "leaf_value": 0.021075284830797278,
                                "leaf_weight": 3.548228695988655,
                                "leaf_count": 21
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "tree_index": 2,
        "num_leaves": 49,
        "num_cat": 0,
        "shrinkage": 0.01,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 10,
            "split_gain": 41.339500427246094,
            "threshold": 1.0000000180025095e-35,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": 0,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 20,
                "split_feature": 9825,
                "split_gain": 4.4913201332092285,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -0.00673679,
                "internal_weight": 63.9663,
                "internal_count": 384,
                "left_child": {
                    "split_index": 29,
                    "split_feature": 11784,
                    "split_gain": 2.1888298988342285,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00836527,
                    "internal_weight": 46.43,
                    "internal_count": 279,
                    "left_child": {
                        "split_index": 30,
                        "split_feature": 10561,
                        "split_gain": 2.7193899154663086,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0072672,
                        "internal_weight": 36.9733,
                        "internal_count": 222,
                        "left_child": {
                            "split_index": 36,
                            "split_feature": 7,
                            "split_gain": 1.1700299978256226,
                            "threshold": 4.500000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0102661,
                            "internal_weight": 16.6342,
                            "internal_count": 100,
                            "left_child": {
                                "split_index": 47,
                                "split_feature": 7,
                                "split_gain": 2.88133992398798e-06,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0126671,
                                "internal_weight": 9.14174,
                                "internal_count": 55,
                                "left_child": {
                                    "leaf_index": 0,
                                    "leaf_value": -0.012660451660960461,
                                    "leaf_weight": 3.817474991083147,
                                    "leaf_count": 23
                                },
                                "right_child": {
                                    "leaf_index": 48,
                                    "leaf_value": -0.012671835627832018,
                                    "leaf_weight": 5.324260354042053,
                                    "leaf_count": 32
                                }
                            },
                            "right_child": {
                                "split_index": 37,
                                "split_feature": 8,
                                "split_gain": 2.642240047454834,
                                "threshold": 19.500000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00733651,
                                "internal_weight": 7.49245,
                                "internal_count": 45,
                                "left_child": {
                                    "leaf_index": 37,
                                    "leaf_value": -0.000716087822220511,
                                    "leaf_weight": 3.340576693415641,
                                    "leaf_count": 20
                                },
                                "right_child": {
                                    "leaf_index": 38,
                                    "leaf_value": -0.012663272942358406,
                                    "leaf_weight": 4.151869252324104,
                                    "leaf_count": 25
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 31,
                            "split_feature": 2509,
                            "split_gain": 2.2603600025177,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0048146,
                            "internal_weight": 20.3391,
                            "internal_count": 122,
                            "left_child": {
                                "split_index": 32,
                                "split_feature": 2456,
                                "split_gain": 2.371840000152588,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00291444,
                                "internal_weight": 15.3515,
                                "internal_count": 92,
                                "left_child": {
                                    "split_index": 34,
                                    "split_feature": 7832,
                                    "split_gain": 1.6809200048446655,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.000715124,
                                    "internal_weight": 11.6913,
                                    "internal_count": 70,
                                    "left_child": {
                                        "split_index": 42,
                                        "split_feature": 1,
                                        "split_gain": 0.5095210075378418,
                                        "threshold": 7.500000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00390932,
                                        "internal_weight": 6.8384599999999995,
                                        "internal_count": 41,
                                        "left_child": {
                                            "leaf_index": 31,
                                            "leaf_value": -0.0012418595758402903,
                                            "leaf_weight": 3.4979797303676623,
                                            "leaf_count": 21
                                        },
                                        "right_child": {
                                            "leaf_index": 43,
                                            "leaf_value": -0.0067025429462767485,
                                            "leaf_weight": 3.3404837399721146,
                                            "leaf_count": 20
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 35,
                                        "leaf_value": 0.003785994080630798,
                                        "leaf_weight": 4.8528788685798645,
                                        "leaf_count": 29
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 33,
                                    "leaf_value": -0.009939439244477254,
                                    "leaf_weight": 3.660197228193282,
                                    "leaf_count": 22
                                }
                            },
                            "right_child": {
                                "leaf_index": 32,
                                "leaf_value": -0.010663211783678834,
                                "leaf_weight": 4.987594038248061,
                                "leaf_count": 30
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 46,
                        "split_feature": 1,
                        "split_gain": 3.3920500754902605e-06,
                        "threshold": 6.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0126585,
                        "internal_weight": 9.45664,
                        "internal_count": 57,
                        "left_child": {
                            "leaf_index": 30,
                            "leaf_value": -0.012652801477374425,
                            "leaf_weight": 4.971050500869749,
                            "leaf_count": 30
                        },
                        "right_child": {
                            "leaf_index": 47,
                            "leaf_value": -0.012664795518202479,
                            "leaf_weight": 4.485586479306221,
                            "leaf_count": 27
                        }
                    }
                },
                "right_child": {
                    "split_index": 23,
                    "split_feature": 2,
                    "split_gain": 4.112750053405762,
                    "threshold": 3.5000000000000004,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00242517,
                    "internal_weight": 17.5364,
                    "internal_count": 105,
                    "left_child": {
                        "split_index": 24,
                        "split_feature": 8,
                        "split_gain": 4.091239929199219,
                        "threshold": 19.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00255325,
                        "internal_weight": 8.52606,
                        "internal_count": 51,
                        "left_child": {
                            "leaf_index": 21,
                            "leaf_value": -0.003022485226446279,
                            "leaf_weight": 5.173942536115648,
                            "leaf_count": 31
                        },
                        "right_child": {
                            "leaf_index": 25,
                            "leaf_value": 0.011159300361666758,
                            "leaf_weight": 3.3521217852830887,
                            "leaf_count": 20
                        }
                    },
                    "right_child": {
                        "split_index": 33,
                        "split_feature": 7,
                        "split_gain": 2.186569929122925,
                        "threshold": 7.500000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00713604,
                        "internal_weight": 9.01029,
                        "internal_count": 54,
                        "left_child": {
                            "leaf_index": 24,
                            "leaf_value": -0.002746941289413735,
                            "leaf_weight": 5.022938638925551,
                            "leaf_count": 30
                        },
                        "right_child": {
                            "leaf_index": 34,
                            "leaf_value": -0.012665070215288,
                            "leaf_weight": 3.987354204058647,
                            "leaf_count": 24
                        }
                    }
                }
            },
            "right_child": {
                "split_index": 1,
                "split_feature": 5,
                "split_gain": 47.20759963989258,
                "threshold": 7.500000000000001,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": 0.0028574,
                "internal_weight": 150.756,
                "internal_count": 895,
                "left_child": {
                    "split_index": 4,
                    "split_feature": 4116,
                    "split_gain": 11.835200309753418,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.0128717,
                    "internal_weight": 35.872,
                    "internal_count": 211,
                    "left_child": {
                        "split_index": 6,
                        "split_feature": 5,
                        "split_gain": 11.3858003616333,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0102207,
                        "internal_weight": 29.5726,
                        "internal_count": 174,
                        "left_child": {
                            "split_index": 15,
                            "split_feature": 6,
                            "split_gain": 5.553170204162598,
                            "threshold": 7.500000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0190852,
                            "internal_weight": 9.7247,
                            "internal_count": 57,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": 0.026248038207814482,
                                "leaf_weight": 5.122389510273935,
                                "leaf_count": 30
                            },
                            "right_child": {
                                "leaf_index": 16,
                                "leaf_value": 0.01111297445294859,
                                "leaf_weight": 4.60231414437294,
                                "leaf_count": 27
                            }
                        },
                        "right_child": {
                            "split_index": 16,
                            "split_feature": 6,
                            "split_gain": 5.251500129699707,
                            "threshold": 16.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0058774,
                            "internal_weight": 19.8479,
                            "internal_count": 117,
                            "left_child": {
                                "split_index": 17,
                                "split_feature": 10564,
                                "split_gain": 5.200530052185059,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00284856,
                                "internal_weight": 14.7379,
                                "internal_count": 87,
                                "left_child": {
                                    "split_index": 27,
                                    "split_feature": 3883,
                                    "split_gain": 2.943079948425293,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00040437,
                                    "internal_weight": 11.338,
                                    "internal_count": 67,
                                    "left_child": {
                                        "leaf_index": 7,
                                        "leaf_value": 0.00461111130045927,
                                        "leaf_weight": 5.758008375763895,
                                        "leaf_count": 34
                                    },
                                    "right_child": {
                                        "leaf_index": 28,
                                        "leaf_value": -0.005579898322297505,
                                        "leaf_weight": 5.579948544502258,
                                        "leaf_count": 33
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 18,
                                    "leaf_value": 0.013696246981154833,
                                    "leaf_weight": 3.399949073791503,
                                    "leaf_count": 20
                                }
                            },
                            "right_child": {
                                "leaf_index": 17,
                                "leaf_value": 0.01461299230483894,
                                "leaf_weight": 5.109990179538726,
                                "leaf_count": 30
                            }
                        }
                    },
                    "right_child": {
                        "leaf_index": 5,
                        "leaf_value": 0.025317028332723326,
                        "leaf_weight": 6.2993687093257895,
                        "leaf_count": 37
                    }
                },
                "right_child": {
                    "split_index": 2,
                    "split_feature": 7,
                    "split_gain": 13.608099937438965,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.000269512,
                    "internal_weight": 114.884,
                    "internal_count": 684,
                    "left_child": {
                        "split_index": 7,
                        "split_feature": 5,
                        "split_gain": 11.251299858093262,
                        "threshold": 63.50000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0118992,
                        "internal_weight": 8.50914,
                        "internal_count": 50,
                        "left_child": {
                            "leaf_index": 2,
                            "leaf_value": -0.0016027748536725601,
                            "leaf_weight": 3.577189013361929,
                            "leaf_count": 21
                        },
                        "right_child": {
                            "leaf_index": 8,
                            "leaf_value": 0.021692338154527993,
                            "leaf_weight": 4.931948184967041,
                            "leaf_count": 29
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 5,
                        "split_gain": 13.942000389099121,
                        "threshold": 28.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00124291,
                        "internal_weight": 106.375,
                        "internal_count": 634,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 6,
                            "split_gain": 11.623200416564941,
                            "threshold": 22.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00472025,
                            "internal_weight": 28.6486,
                            "internal_count": 170,
                            "left_child": {
                                "split_index": 8,
                                "split_feature": 7,
                                "split_gain": 7.653820037841797,
                                "threshold": 15.500000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00158429,
                                "internal_weight": 23.0592,
                                "internal_count": 137,
                                "left_child": {
                                    "split_index": 9,
                                    "split_feature": 11776,
                                    "split_gain": 6.957910060882568,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00218806,
                                    "internal_weight": 16.1396,
                                    "internal_count": 96,
                                    "left_child": {
                                        "split_index": 41,
                                        "split_feature": 8,
                                        "split_gain": 0.6036610007286072,
                                        "threshold": 13.500000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00980526,
                                        "internal_weight": 6.88,
                                        "internal_count": 41,
                                        "left_child": {
                                            "leaf_index": 3,
                                            "leaf_value": -0.006776442104427994,
                                            "leaf_weight": 3.3634161055088123,
                                            "leaf_count": 20
                                        },
                                        "right_child": {
                                            "leaf_index": 42,
                                            "leaf_value": -0.012702148418688258,
                                            "leaf_weight": 3.516581028699875,
                                            "leaf_count": 21
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 22,
                                        "split_feature": 9825,
                                        "split_gain": 4.312489986419678,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00347162,
                                        "internal_weight": 9.25958,
                                        "internal_count": 55,
                                        "left_child": {
                                            "leaf_index": 10,
                                            "leaf_value": -0.002780430142666329,
                                            "leaf_weight": 5.0343427658081055,
                                            "leaf_count": 30
                                        },
                                        "right_child": {
                                            "leaf_index": 23,
                                            "leaf_value": 0.010920899141863298,
                                            "leaf_weight": 4.225233614444733,
                                            "leaf_count": 25
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 21,
                                    "split_feature": 1,
                                    "split_gain": 4.479169845581055,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0103831,
                                    "internal_weight": 6.9196100000000005,
                                    "internal_count": 41,
                                    "left_child": {
                                        "leaf_index": 9,
                                        "leaf_value": 0.0021197306383247488,
                                        "leaf_weight": 3.3674401193857184,
                                        "leaf_count": 20
                                    },
                                    "right_child": {
                                        "leaf_index": 22,
                                        "leaf_value": 0.01821665167023103,
                                        "leaf_weight": 3.552171602845192,
                                        "leaf_count": 21
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 6,
                                "leaf_value": 0.017657815669041753,
                                "leaf_weight": 5.589367970824241,
                                "leaf_count": 33
                            }
                        },
                        "right_child": {
                            "split_index": 10,
                            "split_feature": 10,
                            "split_gain": 5.907470226287842,
                            "threshold": 1.5000000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00344081,
                            "internal_weight": 77.7268,
                            "internal_count": 464,
                            "left_child": {
                                "split_index": 11,
                                "split_feature": 2,
                                "split_gain": 7.219560146331787,
                                "threshold": 2.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00621625,
                                "internal_weight": 38.6024,
                                "internal_count": 231,
                                "left_child": {
                                    "split_index": 12,
                                    "split_feature": 7,
                                    "split_gain": 6.293799877166748,
                                    "threshold": 9.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.000469113,
                                    "internal_weight": 11.388,
                                    "internal_count": 68,
                                    "left_child": {
                                        "leaf_index": 4,
                                        "leaf_value": 0.007653182710546431,
                                        "leaf_weight": 5.8887682110071164,
                                        "leaf_count": 35
                                    },
                                    "right_child": {
                                        "leaf_index": 13,
                                        "leaf_value": -0.007223892935611301,
                                        "leaf_weight": 5.4991932809352875,
                                        "leaf_count": 33
                                    }
                                },
                                "right_child": {
                                    "split_index": 35,
                                    "split_feature": 9825,
                                    "split_gain": 1.3712799549102783,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00901376,
                                    "internal_weight": 27.2145,
                                    "internal_count": 163,
                                    "left_child": {
                                        "split_index": 38,
                                        "split_feature": 1,
                                        "split_gain": 1.1364599466323853,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0105339,
                                        "internal_weight": 18.658,
                                        "internal_count": 112,
                                        "left_child": {
                                            "leaf_index": 12,
                                            "leaf_value": -0.006263636593605797,
                                            "leaf_weight": 4.6718108803033855,
                                            "leaf_count": 28
                                        },
                                        "right_child": {
                                            "split_index": 43,
                                            "split_feature": 5,
                                            "split_gain": 0.22714200615882874,
                                            "threshold": 50.50000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0119603,
                                            "internal_weight": 13.9862,
                                            "internal_count": 84,
                                            "left_child": {
                                                "leaf_index": 39,
                                                "leaf_value": -0.009682592469580064,
                                                "leaf_weight": 3.334541141986846,
                                                "leaf_count": 20
                                            },
                                            "right_child": {
                                                "split_index": 45,
                                                "split_feature": 6,
                                                "split_gain": 1.3652200323122088e-05,
                                                "threshold": 1.5000000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126733,
                                                "internal_weight": 10.6517,
                                                "internal_count": 64,
                                                "left_child": {
                                                    "leaf_index": 44,
                                                    "leaf_value": -0.012661202930022746,
                                                    "leaf_weight": 4.980067744851111,
                                                    "leaf_count": 30
                                                },
                                                "right_child": {
                                                    "leaf_index": 46,
                                                    "leaf_value": -0.012683893214326437,
                                                    "leaf_weight": 5.671629309654236,
                                                    "leaf_count": 34
                                                }
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 40,
                                        "split_feature": 8,
                                        "split_gain": 1.0528500080108643,
                                        "threshold": 59.50000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00569901,
                                        "internal_weight": 8.55641,
                                        "internal_count": 51,
                                        "left_child": {
                                            "leaf_index": 36,
                                            "leaf_value": -0.009885595713180168,
                                            "leaf_weight": 3.529229924082758,
                                            "leaf_count": 21
                                        },
                                        "right_child": {
                                            "leaf_index": 41,
                                            "leaf_value": -0.0027598972250084766,
                                            "leaf_weight": 5.027181714773178,
                                            "leaf_count": 30
                                        }
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 2509,
                                "split_gain": 6.143740177154541,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.000702397,
                                "internal_weight": 39.1243,
                                "internal_count": 233,
                                "left_child": {
                                    "split_index": 14,
                                    "split_feature": 7,
                                    "split_gain": 9.606149673461914,
                                    "threshold": 30.500000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.000606565,
                                    "internal_weight": 35.2754,
                                    "internal_count": 210,
                                    "left_child": {
                                        "split_index": 18,
                                        "split_feature": 1,
                                        "split_gain": 4.972449779510498,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00258486,
                                        "internal_weight": 25.6732,
                                        "internal_count": 153,
                                        "left_child": {
                                            "split_index": 28,
                                            "split_feature": 11776,
                                            "split_gain": 2.6292200088500977,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.00467704,
                                            "internal_weight": 6.89628,
                                            "internal_count": 41,
                                            "left_child": {
                                                "leaf_index": 11,
                                                "leaf_value": -0.0013627321623064248,
                                                "leaf_weight": 3.5242298543453243,
                                                "leaf_count": 21
                                            },
                                            "right_child": {
                                                "leaf_index": 29,
                                                "leaf_value": 0.010989389965868835,
                                                "leaf_weight": 3.3720488995313644,
                                                "leaf_count": 20
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 25,
                                            "split_feature": 8,
                                            "split_gain": 3.845829963684082,
                                            "threshold": 230.50000000000003,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00525197,
                                            "internal_weight": 18.7769,
                                            "internal_count": 112,
                                            "left_child": {
                                                "split_index": 26,
                                                "split_feature": 8,
                                                "split_gain": 7.74724006652832,
                                                "threshold": 132.50000000000003,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00182418,
                                                "internal_weight": 11.9319,
                                                "internal_count": 71,
                                                "left_child": {
                                                    "split_index": 39,
                                                    "split_feature": 11776,
                                                    "split_gain": 1.0929700136184692,
                                                    "threshold": 1.0000000180025095e-35,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.00687712,
                                                    "internal_weight": 8.56419,
                                                    "internal_count": 51,
                                                    "left_child": {
                                                        "leaf_index": 19,
                                                        "leaf_value": -0.0032495939002792117,
                                                        "leaf_weight": 4.216543495655062,
                                                        "leaf_count": 25
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 40,
                                                        "leaf_value": -0.010395261414896124,
                                                        "leaf_weight": 4.347644582390785,
                                                        "leaf_count": 26
                                                    }
                                                },
                                                "right_child": {
                                                    "leaf_index": 27,
                                                    "leaf_value": 0.011025487787823626,
                                                    "leaf_weight": 3.3677419126033774,
                                                    "leaf_count": 20
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 44,
                                                "split_feature": 6,
                                                "split_gain": 0.1562269926071167,
                                                "threshold": 17.500000000000004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0112272,
                                                "internal_weight": 6.84499,
                                                "internal_count": 41,
                                                "left_child": {
                                                    "leaf_index": 26,
                                                    "leaf_value": -0.009675686534514939,
                                                    "leaf_weight": 3.3314787298440924,
                                                    "leaf_count": 20
                                                },
                                                "right_child": {
                                                    "leaf_index": 45,
                                                    "leaf_value": -0.012698252361695188,
                                                    "leaf_weight": 3.513507828116417,
                                                    "leaf_count": 21
                                                }
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 19,
                                        "split_feature": 1,
                                        "split_gain": 4.594099998474121,
                                        "threshold": 1.5000000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00913939,
                                        "internal_weight": 9.60221,
                                        "internal_count": 57,
                                        "left_child": {
                                            "leaf_index": 15,
                                            "leaf_value": 0.002102554784167106,
                                            "leaf_weight": 4.718610718846319,
                                            "leaf_count": 28
                                        },
                                        "right_child": {
                                            "leaf_index": 20,
                                            "leaf_value": 0.015938499507397324,
                                            "leaf_weight": 4.883597671985626,
                                            "leaf_count": 29
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 14,
                                    "leaf_value": -0.012699023220472488,
                                    "leaf_weight": 3.8489294797182074,
                                    "leaf_count": 23
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "tree_index": 3,
        "num_leaves": 47,
        "num_cat": 0,
        "shrinkage": 0.01,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 10,
            "split_gain": 40.60770034790039,
            "threshold": 1.0000000180025095e-35,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": 0,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 17,
                "split_feature": 11778,
                "split_gain": 4.138999938964844,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -0.00669583,
                "internal_weight": 63.7166,
                "internal_count": 384,
                "left_child": {
                    "split_index": 27,
                    "split_feature": 11784,
                    "split_gain": 2.174870014190674,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00732703,
                    "internal_weight": 60.0345,
                    "internal_count": 362,
                    "left_child": {
                        "split_index": 28,
                        "split_feature": 4,
                        "split_gain": 3.7200300693511963,
                        "threshold": 3422.5000000000005,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00648207,
                        "internal_weight": 50.1508,
                        "internal_count": 302,
                        "left_child": {
                            "split_index": 29,
                            "split_feature": 7832,
                            "split_gain": 4.903870105743408,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00267843,
                            "internal_weight": 16.9978,
                            "internal_count": 102,
                            "left_child": {
                                "split_index": 35,
                                "split_feature": 2,
                                "split_gain": 1.5966800451278687,
                                "threshold": 8.500000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00692529,
                                "internal_weight": 10.4592,
                                "internal_count": 63,
                                "left_child": {
                                    "split_index": 36,
                                    "split_feature": 8,
                                    "split_gain": 1.786460041999817,
                                    "threshold": 1.5000000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00426234,
                                    "internal_weight": 7.1417,
                                    "internal_count": 43,
                                    "left_child": {
                                        "leaf_index": 0,
                                        "leaf_value": -0.009636703028159235,
                                        "leaf_weight": 3.3145048469305056,
                                        "leaf_count": 20
                                    },
                                    "right_child": {
                                        "leaf_index": 37,
                                        "leaf_value": 0.0003920734260022541,
                                        "leaf_weight": 3.827198326587677,
                                        "leaf_count": 23
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 36,
                                    "leaf_value": -0.01265794357560283,
                                    "leaf_weight": 3.3174857795238495,
                                    "leaf_count": 20
                                }
                            },
                            "right_child": {
                                "leaf_index": 30,
                                "leaf_value": 0.004114814547563248,
                                "leaf_weight": 6.5386508852243415,
                                "leaf_count": 39
                            }
                        },
                        "right_child": {
                            "split_index": 30,
                            "split_feature": 7,
                            "split_gain": 3.1237499713897705,
                            "threshold": 5.500000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00843223,
                            "internal_weight": 33.1529,
                            "internal_count": 200,
                            "left_child": {
                                "split_index": 31,
                                "split_feature": 7,
                                "split_gain": 5.140389919281006,
                                "threshold": 3.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00574762,
                                "internal_weight": 18.7846,
                                "internal_count": 113,
                                "left_child": {
                                    "split_index": 38,
                                    "split_feature": 2,
                                    "split_gain": 1.331470012664795,
                                    "threshold": 4.500000000000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00854873,
                                    "internal_weight": 14.598700000000001,
                                    "internal_count": 88,
                                    "left_child": {
                                        "split_index": 39,
                                        "split_feature": 4,
                                        "split_gain": 1.4269399642944336,
                                        "threshold": 40562.50000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00632484,
                                        "internal_weight": 9.46576,
                                        "internal_count": 57,
                                        "left_child": {
                                            "leaf_index": 29,
                                            "leaf_value": -0.00929954828975535,
                                            "leaf_weight": 5.964555099606516,
                                            "leaf_count": 36
                                        },
                                        "right_child": {
                                            "leaf_index": 40,
                                            "leaf_value": -0.001257193598057787,
                                            "leaf_weight": 3.50120210647583,
                                            "leaf_count": 21
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 39,
                                        "leaf_value": -0.01264982958608435,
                                        "leaf_weight": 5.132978379726409,
                                        "leaf_count": 31
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 32,
                                    "leaf_value": 0.004021713585338716,
                                    "leaf_weight": 4.185819819569587,
                                    "leaf_count": 25
                                }
                            },
                            "right_child": {
                                "split_index": 42,
                                "split_feature": 8,
                                "split_gain": 0.23283100128173828,
                                "threshold": 107.50000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.011942,
                                "internal_weight": 14.3684,
                                "internal_count": 87,
                                "left_child": {
                                    "split_index": 45,
                                    "split_feature": 2,
                                    "split_gain": 7.348280178121058e-06,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0126376,
                                    "internal_weight": 11.0645,
                                    "internal_count": 67,
                                    "left_child": {
                                        "leaf_index": 31,
                                        "leaf_value": -0.01264582039219855,
                                        "leaf_weight": 5.459561750292776,
                                        "leaf_count": 33
                                    },
                                    "right_child": {
                                        "leaf_index": 46,
                                        "leaf_value": -0.012629520136714464,
                                        "leaf_weight": 5.604938104748726,
                                        "leaf_count": 34
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 43,
                                    "leaf_value": -0.009612417058246045,
                                    "leaf_weight": 3.3038862347602835,
                                    "leaf_count": 20
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 44,
                        "split_feature": 4,
                        "split_gain": 0.20169100165367126,
                        "threshold": 21094.500000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0116144,
                        "internal_weight": 9.88376,
                        "internal_count": 60,
                        "left_child": {
                            "leaf_index": 28,
                            "leaf_value": -0.01262495638357402,
                            "leaf_weight": 6.587351739406584,
                            "leaf_count": 40
                        },
                        "right_child": {
                            "leaf_index": 45,
                            "leaf_value": -0.009595056654487333,
                            "leaf_weight": 3.2964044511318207,
                            "leaf_count": 20
                        }
                    }
                },
                "right_child": {
                    "leaf_index": 18,
                    "leaf_value": 0.0035955633093292002,
                    "leaf_weight": 3.6820988804101935,
                    "leaf_count": 22
                }
            },
            "right_child": {
                "split_index": 1,
                "split_feature": 5,
                "split_gain": 45.86439895629883,
                "threshold": 7.500000000000001,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": 0.0028239,
                "internal_weight": 150.995,
                "internal_count": 895,
                "left_child": {
                    "split_index": 4,
                    "split_feature": 4116,
                    "split_gain": 11.286600112915039,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.0126504,
                    "internal_weight": 36.1323,
                    "internal_count": 211,
                    "left_child": {
                        "split_index": 6,
                        "split_feature": 5,
                        "split_gain": 10.939800262451172,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.01006,
                        "internal_weight": 29.7429,
                        "internal_count": 174,
                        "left_child": {
                            "split_index": 14,
                            "split_feature": 6,
                            "split_gain": 5.272540092468262,
                            "threshold": 7.500000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0186924,
                            "internal_weight": 9.829180000000001,
                            "internal_count": 57,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": 0.02560550936780156,
                                "leaf_weight": 5.198030561208727,
                                "leaf_count": 30
                            },
                            "right_child": {
                                "leaf_index": 15,
                                "leaf_value": 0.010932990376997671,
                                "leaf_weight": 4.631152182817459,
                                "leaf_count": 27
                            }
                        },
                        "right_child": {
                            "split_index": 9,
                            "split_feature": 0,
                            "split_gain": 7.496829986572266,
                            "threshold": 6.500000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00579911,
                            "internal_weight": 19.9137,
                            "internal_count": 117,
                            "left_child": {
                                "split_index": 10,
                                "split_feature": 0,
                                "split_gain": 7.702089786529541,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00300016,
                                "internal_weight": 16.4836,
                                "internal_count": 97,
                                "left_child": {
                                    "leaf_index": 7,
                                    "leaf_value": 0.015226183350494896,
                                    "leaf_weight": 3.9256059229373994,
                                    "leaf_count": 23
                                },
                                "right_child": {
                                    "split_index": 16,
                                    "split_feature": 7,
                                    "split_gain": 4.1496500968933105,
                                    "threshold": 2.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.000821675,
                                    "internal_weight": 12.558,
                                    "internal_count": 74,
                                    "left_child": {
                                        "leaf_index": 11,
                                        "leaf_value": -0.008404015020312216,
                                        "leaf_weight": 4.583434447646139,
                                        "leaf_count": 27
                                    },
                                    "right_child": {
                                        "split_index": 33,
                                        "split_feature": 4,
                                        "split_gain": 1.8138500452041626,
                                        "threshold": 35.00000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00353634,
                                        "internal_weight": 7.97453,
                                        "internal_count": 47,
                                        "left_child": {
                                            "leaf_index": 17,
                                            "leaf_value": 0.008610101684130539,
                                            "leaf_weight": 3.7407810389995575,
                                            "leaf_count": 22
                                        },
                                        "right_child": {
                                            "leaf_index": 34,
                                            "leaf_value": -0.0009466361965415074,
                                            "leaf_weight": 4.233751192688942,
                                            "leaf_count": 25
                                        }
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 10,
                                "leaf_value": 0.019249388854990147,
                                "leaf_weight": 3.4301538914442053,
                                "leaf_count": 20
                            }
                        }
                    },
                    "right_child": {
                        "leaf_index": 5,
                        "leaf_value": 0.024708996657905484,
                        "leaf_weight": 6.3893765807151786,
                        "leaf_count": 37
                    }
                },
                "right_child": {
                    "split_index": 2,
                    "split_feature": 7,
                    "split_gain": 13.258600234985352,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.000267211,
                    "internal_weight": 114.863,
                    "internal_count": 684,
                    "left_child": {
                        "split_index": 7,
                        "split_feature": 5,
                        "split_gain": 10.829700469970703,
                        "threshold": 63.50000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0117008,
                        "internal_weight": 8.56636,
                        "internal_count": 50,
                        "left_child": {
                            "leaf_index": 2,
                            "leaf_value": -0.0015881912657309022,
                            "leaf_weight": 3.5739530175924283,
                            "leaf_count": 21
                        },
                        "right_child": {
                            "leaf_index": 8,
                            "leaf_value": 0.021214040381626616,
                            "leaf_weight": 4.992404535412788,
                            "leaf_count": 29
                        }
                    },
                    "right_child": {
                        "split_index": 3,
                        "split_feature": 5,
                        "split_gain": 13.664299964904785,
                        "threshold": 28.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0012317,
                        "internal_weight": 106.297,
                        "internal_count": 634,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 6,
                            "split_gain": 11.237700462341309,
                            "threshold": 22.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0046602,
                            "internal_weight": 28.725,
                            "internal_count": 170,
                            "left_child": {
                                "split_index": 11,
                                "split_feature": 7,
                                "split_gain": 7.45973014831543,
                                "threshold": 15.500000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00156675,
                                "internal_weight": 23.0796,
                                "internal_count": 137,
                                "left_child": {
                                    "split_index": 12,
                                    "split_feature": 11776,
                                    "split_gain": 6.8531599044799805,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00216916,
                                    "internal_weight": 16.1191,
                                    "internal_count": 96,
                                    "left_child": {
                                        "split_index": 41,
                                        "split_feature": 8,
                                        "split_gain": 0.6018139719963074,
                                        "threshold": 13.500000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00976242,
                                        "internal_weight": 6.84129,
                                        "internal_count": 41,
                                        "left_child": {
                                            "leaf_index": 3,
                                            "leaf_value": -0.006734916049065095,
                                            "leaf_weight": 3.3503782898187717,
                                            "leaf_count": 20
                                        },
                                        "right_child": {
                                            "leaf_index": 42,
                                            "leaf_value": -0.01266804485725128,
                                            "leaf_weight": 3.490916207432747,
                                            "leaf_count": 21
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 24,
                                        "split_feature": 2,
                                        "split_gain": 2.267280101776123,
                                        "threshold": 1.5000000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00342998,
                                        "internal_weight": 9.27781,
                                        "internal_count": 55,
                                        "left_child": {
                                            "leaf_index": 13,
                                            "leaf_value": -0.0024076592656286527,
                                            "leaf_weight": 3.874653145670891,
                                            "leaf_count": 23
                                        },
                                        "right_child": {
                                            "leaf_index": 25,
                                            "leaf_value": 0.0076162102698896315,
                                            "leaf_weight": 5.403153821825981,
                                            "leaf_count": 32
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 23,
                                    "split_feature": 2,
                                    "split_gain": 2.7079598903656006,
                                    "threshold": 10.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0102184,
                                    "internal_weight": 6.96047,
                                    "internal_count": 41,
                                    "left_child": {
                                        "leaf_index": 12,
                                        "leaf_value": 0.004115689194775081,
                                        "leaf_weight": 3.556183457374572,
                                        "leaf_count": 21
                                    },
                                    "right_child": {
                                        "leaf_index": 24,
                                        "leaf_value": 0.016593399377805924,
                                        "leaf_weight": 3.4042891561985016,
                                        "leaf_count": 20
                                    }
                                }
                            },
                            "right_child": {
                                "leaf_index": 6,
                                "leaf_value": 0.017306890130790297,
                                "leaf_weight": 5.645388722419738,
                                "leaf_count": 33
                            }
                        },
                        "right_child": {
                            "split_index": 8,
                            "split_feature": 4,
                            "split_gain": 9.425600051879883,
                            "threshold": 62.00000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00341349,
                            "internal_weight": 77.5716,
                            "internal_count": 464,
                            "left_child": {
                                "leaf_index": 4,
                                "leaf_value": 0.01246528757572263,
                                "leaf_weight": 3.5664357095956793,
                                "leaf_count": 21
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 2,
                                "split_gain": 5.710269927978516,
                                "threshold": 22.500000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00417871,
                                "internal_weight": 74.0052,
                                "internal_count": 443,
                                "left_child": {
                                    "split_index": 15,
                                    "split_feature": 10,
                                    "split_gain": 4.531189918518066,
                                    "threshold": 6.500000000000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00273113,
                                    "internal_weight": 58.1996,
                                    "internal_count": 348,
                                    "left_child": {
                                        "split_index": 18,
                                        "split_feature": 3898,
                                        "split_gain": 3.8177199363708496,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00354822,
                                        "internal_weight": 53.603,
                                        "internal_count": 321,
                                        "left_child": {
                                            "split_index": 19,
                                            "split_feature": 7,
                                            "split_gain": 4.302199840545654,
                                            "threshold": 4.500000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00233507,
                                            "internal_weight": 44.4232,
                                            "internal_count": 266,
                                            "left_child": {
                                                "split_index": 20,
                                                "split_feature": 5,
                                                "split_gain": 4.299789905548096,
                                                "threshold": 158.50000000000003,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.00380629,
                                                "internal_weight": 9.07622,
                                                "internal_count": 54,
                                                "left_child": {
                                                    "leaf_index": 9,
                                                    "leaf_value": 0.009486146852291722,
                                                    "leaf_weight": 5.399367377161978,
                                                    "leaf_count": 32
                                                },
                                                "right_child": {
                                                    "leaf_index": 21,
                                                    "leaf_value": -0.004534443186250214,
                                                    "leaf_weight": 3.6768551617860794,
                                                    "leaf_count": 22
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 21,
                                                "split_feature": 7,
                                                "split_gain": 3.050179958343506,
                                                "threshold": 29.500000000000004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00391201,
                                                "internal_weight": 35.347,
                                                "internal_count": 212,
                                                "left_child": {
                                                    "split_index": 25,
                                                    "split_feature": 4,
                                                    "split_gain": 2.2098300457000732,
                                                    "threshold": 3190.5000000000005,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.00582586,
                                                    "internal_weight": 24.8142,
                                                    "internal_count": 149,
                                                    "left_child": {
                                                        "split_index": 37,
                                                        "split_feature": 6,
                                                        "split_gain": 1.4176700115203857,
                                                        "threshold": 7.500000000000001,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.00956574,
                                                        "internal_weight": 9.65321,
                                                        "internal_count": 58,
                                                        "left_child": {
                                                            "leaf_index": 20,
                                                            "leaf_value": -0.012672873644941591,
                                                            "leaf_weight": 5.824387431144716,
                                                            "leaf_count": 35
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 38,
                                                            "leaf_value": -0.004839186220766534,
                                                            "leaf_weight": 3.8288208842277527,
                                                            "leaf_count": 23
                                                        }
                                                    },
                                                    "right_child": {
                                                        "split_index": 26,
                                                        "split_feature": 5,
                                                        "split_gain": 5.782790184020996,
                                                        "threshold": 130.50000000000003,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.00344463,
                                                        "internal_weight": 15.161,
                                                        "internal_count": 91,
                                                        "left_child": {
                                                            "leaf_index": 26,
                                                            "leaf_value": 0.00432499430229382,
                                                            "leaf_weight": 5.870282769203185,
                                                            "leaf_count": 35
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 27,
                                                            "leaf_value": -0.00835381902139653,
                                                            "leaf_weight": 9.290718942880629,
                                                            "leaf_count": 56
                                                        }
                                                    }
                                                },
                                                "right_child": {
                                                    "split_index": 22,
                                                    "split_feature": 2,
                                                    "split_gain": 4.003789901733398,
                                                    "threshold": 7.500000000000001,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": 0.000596827,
                                                    "internal_weight": 10.5328,
                                                    "internal_count": 63,
                                                    "left_child": {
                                                        "split_index": 32,
                                                        "split_feature": 8,
                                                        "split_gain": 2.163559913635254,
                                                        "threshold": 130.50000000000003,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.00392678,
                                                        "internal_weight": 6.84694,
                                                        "internal_count": 41,
                                                        "left_child": {
                                                            "leaf_index": 22,
                                                            "leaf_value": 0.00155550360776579,
                                                            "leaf_weight": 3.5091807395219785,
                                                            "leaf_count": 21
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 33,
                                                            "leaf_value": -0.009690609486337428,
                                                            "leaf_weight": 3.3377630561590195,
                                                            "leaf_count": 20
                                                        }
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 23,
                                                        "leaf_value": 0.008999985737026537,
                                                        "leaf_weight": 3.685858130455017,
                                                        "leaf_count": 22
                                                    }
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 34,
                                            "split_feature": 4,
                                            "split_gain": 1.6862499713897705,
                                            "threshold": 3069.0000000000005,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00941903,
                                            "internal_weight": 9.17973,
                                            "internal_count": 55,
                                            "left_child": {
                                                "leaf_index": 19,
                                                "leaf_value": -0.003773142566972888,
                                                "leaf_weight": 3.3560353815555555,
                                                "leaf_count": 20
                                            },
                                            "right_child": {
                                                "leaf_index": 35,
                                                "leaf_value": -0.012672605976822274,
                                                "leaf_weight": 5.823690563440323,
                                                "leaf_count": 35
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 16,
                                        "leaf_value": 0.006797289873002468,
                                        "leaf_weight": 4.596622362732886,
                                        "leaf_count": 27
                                    }
                                },
                                "right_child": {
                                    "split_index": 40,
                                    "split_feature": 7821,
                                    "split_gain": 1.1837199926376343,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00950902,
                                    "internal_weight": 15.8056,
                                    "internal_count": 95,
                                    "left_child": {
                                        "split_index": 43,
                                        "split_feature": 4,
                                        "split_gain": 0.20224599540233612,
                                        "threshold": 4425.500000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.011649,
                                        "internal_weight": 9.808019999999999,
                                        "internal_count": 59,
                                        "left_child": {
                                            "leaf_index": 14,
                                            "leaf_value": -0.01267525714742384,
                                            "leaf_weight": 6.492267444729803,
                                            "leaf_count": 39
                                        },
                                        "right_child": {
                                            "leaf_index": 44,
                                            "leaf_value": -0.009639675243478855,
                                            "leaf_weight": 3.3157503604888916,
                                            "leaf_count": 20
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 41,
                                        "leaf_value": -0.006009382561871063,
                                        "leaf_weight": 5.997575789690017,
                                        "leaf_count": 36
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    },
    {
        "tree_index": 4,
        "num_leaves": 49,
        "num_cat": 0,
        "shrinkage": 0.01,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 0,
            "split_gain": 38.53200149536133,
            "threshold": 2.5000000000000004,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": 0,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 1,
                "split_feature": 6,
                "split_gain": 21.949399948120117,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -0.00180481,
                "internal_weight": 181.76,
                "internal_count": 1087,
                "left_child": {
                    "split_index": 20,
                    "split_feature": 11778,
                    "split_gain": 4.195320129394531,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00677597,
                    "internal_weight": 59.6637,
                    "internal_count": 361,
                    "left_child": {
                        "split_index": 24,
                        "split_feature": 143,
                        "split_gain": 3.4089200496673584,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00745679,
                        "internal_weight": 55.974,
                        "internal_count": 339,
                        "left_child": {
                            "split_index": 25,
                            "split_feature": 9825,
                            "split_gain": 4.31712007522583,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00846373,
                            "internal_weight": 47.9852,
                            "internal_count": 291,
                            "left_child": {
                                "split_index": 36,
                                "split_feature": 1,
                                "split_gain": 1.8220700025558472,
                                "threshold": 89.00000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0103178,
                                "internal_weight": 34.7197,
                                "internal_count": 211,
                                "left_child": {
                                    "split_index": 38,
                                    "split_feature": 8,
                                    "split_gain": 0.5852230191230774,
                                    "threshold": 12.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0112695,
                                    "internal_weight": 29.6093,
                                    "internal_count": 180,
                                    "left_child": {
                                        "split_index": 39,
                                        "split_feature": 8,
                                        "split_gain": 1.0685100555419922,
                                        "threshold": 1.5000000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00980126,
                                        "internal_weight": 14.1627,
                                        "internal_count": 86,
                                        "left_child": {
                                            "split_index": 47,
                                            "split_feature": 10360,
                                            "split_gain": 8.209950124182797e-07,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0126174,
                                            "internal_weight": 6.90458,
                                            "internal_count": 42,
                                            "left_child": {
                                                "leaf_index": 0,
                                                "leaf_value": -0.012614145309610554,
                                                "leaf_weight": 3.6141314357519168,
                                                "leaf_count": 22
                                            },
                                            "right_child": {
                                                "leaf_index": 48,
                                                "leaf_value": -0.012621049443913788,
                                                "leaf_weight": 3.290448784828186,
                                                "leaf_count": 20
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 40,
                                            "split_feature": 1,
                                            "split_gain": 1.8287999629974365,
                                            "threshold": 1.5000000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00712225,
                                            "internal_weight": 7.25811,
                                            "internal_count": 44,
                                            "left_child": {
                                                "leaf_index": 40,
                                                "leaf_value": -0.0025453055395837022,
                                                "leaf_weight": 3.963152691721916,
                                                "leaf_count": 24
                                            },
                                            "right_child": {
                                                "leaf_index": 41,
                                                "leaf_value": -0.012627360702880246,
                                                "leaf_weight": 3.294956624507904,
                                                "leaf_count": 20
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 43,
                                        "split_feature": 11784,
                                        "split_gain": 3.7411900848383084e-05,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0126157,
                                        "internal_weight": 15.4466,
                                        "internal_count": 94,
                                        "left_child": {
                                            "split_index": 44,
                                            "split_feature": 7,
                                            "split_gain": 1.0936400030914228e-05,
                                            "threshold": 12.500000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0126242,
                                            "internal_weight": 11.854,
                                            "internal_count": 72,
                                            "left_child": {
                                                "split_index": 45,
                                                "split_feature": 2,
                                                "split_gain": 9.367739949084353e-06,
                                                "threshold": 2.5000000000000004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126161,
                                                "internal_weight": 6.9026499999999995,
                                                "internal_count": 42,
                                                "left_child": {
                                                    "leaf_index": 39,
                                                    "leaf_value": -0.012628270502109587,
                                                    "leaf_weight": 3.2959463298320753,
                                                    "leaf_count": 20
                                                },
                                                "right_child": {
                                                    "leaf_index": 46,
                                                    "leaf_value": -0.012604947742568477,
                                                    "leaf_weight": 3.6067059338092804,
                                                    "leaf_count": 22
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 45,
                                                "leaf_value": -0.012635560144697737,
                                                "leaf_weight": 4.951357305049896,
                                                "leaf_count": 30
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 44,
                                            "leaf_value": -0.012587382154633779,
                                            "leaf_weight": 3.59260132908821,
                                            "leaf_count": 22
                                        }
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 37,
                                    "leaf_value": -0.004803579587534227,
                                    "leaf_weight": 5.1104017496109,
                                    "leaf_count": 31
                                }
                            },
                            "right_child": {
                                "split_index": 26,
                                "split_feature": 7,
                                "split_gain": 6.257810115814209,
                                "threshold": 5.500000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00361118,
                                "internal_weight": 13.2655,
                                "internal_count": 80,
                                "left_child": {
                                    "leaf_index": 26,
                                    "leaf_value": 0.003927848619697397,
                                    "leaf_weight": 6.016517356038092,
                                    "leaf_count": 36
                                },
                                "right_child": {
                                    "split_index": 37,
                                    "split_feature": 7,
                                    "split_gain": 0.6023560166358948,
                                    "threshold": 14.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00986844,
                                    "internal_weight": 7.24897,
                                    "internal_count": 44,
                                    "left_child": {
                                        "leaf_index": 27,
                                        "leaf_value": -0.012624619166505384,
                                        "leaf_weight": 3.786955699324608,
                                        "leaf_count": 23
                                    },
                                    "right_child": {
                                        "leaf_index": 38,
                                        "leaf_value": -0.0068535607373573825,
                                        "leaf_weight": 3.462011009454727,
                                        "leaf_count": 21
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 27,
                            "split_feature": 3,
                            "split_gain": 4.315400123596191,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00140856,
                            "internal_weight": 7.98881,
                            "internal_count": 48,
                            "left_child": {
                                "leaf_index": 25,
                                "leaf_value": -0.009777257602953037,
                                "leaf_weight": 3.478671893477439,
                                "leaf_count": 21
                            },
                            "right_child": {
                                "leaf_index": 28,
                                "leaf_value": 0.005046212787030292,
                                "leaf_weight": 4.510141149163246,
                                "leaf_count": 27
                            }
                        }
                    },
                    "right_child": {
                        "leaf_index": 21,
                        "leaf_value": 0.0035522279528179836,
                        "leaf_weight": 3.689709648489951,
                        "leaf_count": 22
                    }
                },
                "right_child": {
                    "split_index": 3,
                    "split_feature": 7,
                    "split_gain": 12.958200454711914,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.000624408,
                    "internal_weight": 122.096,
                    "internal_count": 726,
                    "left_child": {
                        "split_index": 6,
                        "split_feature": 2,
                        "split_gain": 7.335529804229736,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00938206,
                        "internal_weight": 14.8417,
                        "internal_count": 86,
                        "left_child": {
                            "split_index": 8,
                            "split_feature": 0,
                            "split_gain": 6.41431999206543,
                            "threshold": -1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.015481,
                            "internal_weight": 8.46842,
                            "internal_count": 49,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": 0.006553535022333436,
                                "leaf_weight": 4.126462712883948,
                                "leaf_count": 24
                            },
                            "right_child": {
                                "leaf_index": 9,
                                "leaf_value": 0.023965379852424317,
                                "leaf_weight": 4.341958627104758,
                                "leaf_count": 25
                            }
                        },
                        "right_child": {
                            "leaf_index": 7,
                            "leaf_value": 0.0012781573241646086,
                            "leaf_weight": 6.37326630949974,
                            "leaf_count": 37
                        }
                    },
                    "right_child": {
                        "split_index": 4,
                        "split_feature": 6,
                        "split_gain": 10.605400085449219,
                        "threshold": 31.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.000587464,
                        "internal_weight": 107.254,
                        "internal_count": 640,
                        "left_child": {
                            "split_index": 5,
                            "split_feature": 8,
                            "split_gain": 7.640120029449463,
                            "threshold": 24.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00159627,
                            "internal_weight": 97.2457,
                            "internal_count": 581,
                            "left_child": {
                                "split_index": 12,
                                "split_feature": 9825,
                                "split_gain": 5.659939765930176,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00314716,
                                "internal_weight": 25.1679,
                                "internal_count": 149,
                                "left_child": {
                                    "split_index": 31,
                                    "split_feature": 0,
                                    "split_gain": 2.9217300415039062,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -3.98969e-05,
                                    "internal_weight": 17.3373,
                                    "internal_count": 103,
                                    "left_child": {
                                        "split_index": 35,
                                        "split_feature": 13,
                                        "split_gain": 2.0643999576568604,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00430089,
                                        "internal_weight": 8.34581,
                                        "internal_count": 50,
                                        "left_child": {
                                            "leaf_index": 4,
                                            "leaf_value": 0.0015319250181823555,
                                            "leaf_weight": 3.513427391648298,
                                            "leaf_count": 21
                                        },
                                        "right_child": {
                                            "leaf_index": 36,
                                            "leaf_value": -0.008541696307849274,
                                            "leaf_weight": 4.832378447055817,
                                            "leaf_count": 29
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 34,
                                        "split_feature": 7,
                                        "split_gain": 2.2832698822021484,
                                        "threshold": 5.500000000000001,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00391511,
                                        "internal_weight": 8.9915,
                                        "internal_count": 53,
                                        "left_child": {
                                            "leaf_index": 32,
                                            "leaf_value": 0.008812423170953295,
                                            "leaf_weight": 4.624123051762579,
                                            "leaf_count": 27
                                        },
                                        "right_child": {
                                            "leaf_index": 35,
                                            "leaf_value": -0.0012701058943034242,
                                            "leaf_weight": 4.367378324270248,
                                            "leaf_count": 26
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 22,
                                    "split_feature": 12,
                                    "split_gain": 3.478440046310425,
                                    "threshold": 1.5000000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0102034,
                                    "internal_weight": 7.83062,
                                    "internal_count": 46,
                                    "left_child": {
                                        "leaf_index": 13,
                                        "leaf_value": 0.0032412219153507235,
                                        "leaf_weight": 3.7445524483919135,
                                        "leaf_count": 22
                                    },
                                    "right_child": {
                                        "leaf_index": 23,
                                        "leaf_value": 0.016583736571977196,
                                        "leaf_weight": 4.086063355207443,
                                        "leaf_count": 24
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 13,
                                "split_feature": 9825,
                                "split_gain": 5.5071001052856445,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00325256,
                                "internal_weight": 72.0777,
                                "internal_count": 432,
                                "left_child": {
                                    "split_index": 21,
                                    "split_feature": 6,
                                    "split_gain": 4.053979873657227,
                                    "threshold": 9.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00609566,
                                    "internal_weight": 35.0242,
                                    "internal_count": 211,
                                    "left_child": {
                                        "split_index": 28,
                                        "split_feature": 7,
                                        "split_gain": 3.0725200176239014,
                                        "threshold": 12.500000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00740731,
                                        "internal_weight": 30.492,
                                        "internal_count": 184,
                                        "left_child": {
                                            "split_index": 29,
                                            "split_feature": 3,
                                            "split_gain": 3.731689929962158,
                                            "threshold": 2.5000000000000004,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00388041,
                                            "internal_weight": 13.6462,
                                            "internal_count": 82,
                                            "left_child": {
                                                "leaf_index": 6,
                                                "leaf_value": -0.009509074556936569,
                                                "leaf_weight": 6.321915701031687,
                                                "leaf_count": 38
                                            },
                                            "right_child": {
                                                "split_index": 30,
                                                "split_feature": 1,
                                                "split_gain": 4.853449821472168,
                                                "threshold": 12.500000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.000977939,
                                                "internal_weight": 7.32429,
                                                "internal_count": 44,
                                                "left_child": {
                                                    "leaf_index": 30,
                                                    "leaf_value": 0.009095581718246414,
                                                    "leaf_weight": 3.6723711490631104,
                                                    "leaf_count": 22
                                                },
                                                "right_child": {
                                                    "leaf_index": 31,
                                                    "leaf_value": -0.007185158803687479,
                                                    "leaf_weight": 3.6519223749637604,
                                                    "leaf_count": 22
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 32,
                                            "split_feature": 3,
                                            "split_gain": 2.8997199535369873,
                                            "threshold": 18.500000000000004,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0102643,
                                            "internal_weight": 16.8458,
                                            "internal_count": 102,
                                            "left_child": {
                                                "split_index": 42,
                                                "split_feature": 6,
                                                "split_gain": 7.137330248951912e-05,
                                                "threshold": 2.5000000000000004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126337,
                                                "internal_weight": 12.703,
                                                "internal_count": 77,
                                                "left_child": {
                                                    "split_index": 46,
                                                    "split_feature": 12,
                                                    "split_gain": 9.118350135395303e-06,
                                                    "threshold": 8.500000000000002,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.0126166,
                                                    "internal_weight": 8.38274,
                                                    "internal_count": 51,
                                                    "left_child": {
                                                        "leaf_index": 29,
                                                        "leaf_value": -0.012629598819329258,
                                                        "leaf_weight": 3.296738043427469,
                                                        "leaf_count": 20
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 47,
                                                        "leaf_value": -0.01260824770445814,
                                                        "leaf_weight": 5.086005285382271,
                                                        "leaf_count": 31
                                                    }
                                                },
                                                "right_child": {
                                                    "leaf_index": 43,
                                                    "leaf_value": -0.012666679391589391,
                                                    "leaf_weight": 4.320289552211761,
                                                    "leaf_count": 26
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 33,
                                                "leaf_value": -0.0029992360814931826,
                                                "leaf_weight": 4.142750158905982,
                                                "leaf_count": 25
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 22,
                                        "leaf_value": 0.002728942560321682,
                                        "leaf_weight": 4.532198771834373,
                                        "leaf_count": 27
                                    }
                                },
                                "right_child": {
                                    "split_index": 14,
                                    "split_feature": 10563,
                                    "split_gain": 6.474579811096191,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.000565177,
                                    "internal_weight": 37.0535,
                                    "internal_count": 221,
                                    "left_child": {
                                        "split_index": 15,
                                        "split_feature": 7821,
                                        "split_gain": 7.216010093688965,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": 0.00136496,
                                        "internal_weight": 30.5419,
                                        "internal_count": 182,
                                        "left_child": {
                                            "split_index": 18,
                                            "split_feature": 12,
                                            "split_gain": 5.0268402099609375,
                                            "threshold": 9.500000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00217834,
                                            "internal_weight": 19.9439,
                                            "internal_count": 119,
                                            "left_child": {
                                                "split_index": 19,
                                                "split_feature": 3,
                                                "split_gain": 6.091730117797852,
                                                "threshold": 1.5000000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": 0.00261726,
                                                "internal_weight": 10.4286,
                                                "internal_count": 62,
                                                "left_child": {
                                                    "leaf_index": 14,
                                                    "leaf_value": -0.006098676186843328,
                                                    "leaf_weight": 4.53316216170788,
                                                    "leaf_count": 27
                                                },
                                                "right_child": {
                                                    "leaf_index": 20,
                                                    "leaf_value": 0.00931923197404834,
                                                    "leaf_weight": 5.895388558506966,
                                                    "leaf_count": 35
                                                }
                                            },
                                            "right_child": {
                                                "split_index": 33,
                                                "split_feature": 6,
                                                "split_gain": 2.396509885787964,
                                                "threshold": 8.500000000000002,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00743419,
                                                "internal_weight": 9.51533,
                                                "internal_count": 57,
                                                "left_child": {
                                                    "leaf_index": 19,
                                                    "leaf_value": -0.0026567211587501054,
                                                    "leaf_weight": 4.9916944950819,
                                                    "leaf_count": 30
                                                },
                                                "right_child": {
                                                    "leaf_index": 34,
                                                    "leaf_value": -0.012705972580908997,
                                                    "leaf_weight": 4.523637101054192,
                                                    "leaf_count": 27
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 16,
                                            "split_feature": 6,
                                            "split_gain": 5.9210100173950195,
                                            "threshold": 6.500000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.00803292,
                                            "internal_weight": 10.598,
                                            "internal_count": 63,
                                            "left_child": {
                                                "leaf_index": 16,
                                                "leaf_value": 0.01693619894700754,
                                                "leaf_weight": 4.381473764777185,
                                                "leaf_count": 26
                                            },
                                            "right_child": {
                                                "leaf_index": 17,
                                                "leaf_value": 0.0017578158807284496,
                                                "leaf_weight": 6.216547220945358,
                                                "leaf_count": 37
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 15,
                                        "leaf_value": -0.00961820054849779,
                                        "leaf_weight": 6.51164624094963,
                                        "leaf_count": 39
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 11,
                            "split_feature": 8,
                            "split_gain": 5.686059951782227,
                            "threshold": 251.00000000000003,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.00921434,
                            "internal_weight": 10.0085,
                            "internal_count": 59,
                            "left_child": {
                                "leaf_index": 5,
                                "leaf_value": 0.01660186556984222,
                                "leaf_weight": 5.104749411344526,
                                "leaf_count": 30
                            },
                            "right_child": {
                                "leaf_index": 12,
                                "leaf_value": 0.0015240674672191688,
                                "leaf_weight": 4.903794169425964,
                                "leaf_count": 29
                            }
                        }
                    }
                }
            },
            "right_child": {
                "split_index": 2,
                "split_feature": 12,
                "split_gain": 14.501099586486816,
                "threshold": 10.500000000000002,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": 0.00995096,
                "internal_weight": 32.9337,
                "internal_count": 192,
                "left_child": {
                    "split_index": 7,
                    "split_feature": 9,
                    "split_gain": 7.180970191955566,
                    "threshold": 1.5000000000000002,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.0140678,
                    "internal_weight": 23.7803,
                    "internal_count": 138,
                    "left_child": {
                        "split_index": 9,
                        "split_feature": 13,
                        "split_gain": 5.909860134124756,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0113282,
                        "internal_weight": 19.0465,
                        "internal_count": 111,
                        "left_child": {
                            "split_index": 17,
                            "split_feature": 8,
                            "split_gain": 5.125770092010498,
                            "threshold": 18.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0050536,
                            "internal_weight": 8.39473,
                            "internal_count": 49,
                            "left_child": {
                                "leaf_index": 1,
                                "leaf_value": -0.0020018759763554177,
                                "leaf_weight": 4.624517694115642,
                                "leaf_count": 27
                            },
                            "right_child": {
                                "leaf_index": 18,
                                "leaf_value": 0.013707789598042265,
                                "leaf_weight": 3.7702133804559708,
                                "leaf_count": 22
                            }
                        },
                        "right_child": {
                            "split_index": 23,
                            "split_feature": 2,
                            "split_gain": 3.432270050048828,
                            "threshold": 8.500000000000002,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0162733,
                            "internal_weight": 10.6517,
                            "internal_count": 62,
                            "left_child": {
                                "split_index": 41,
                                "split_feature": 8,
                                "split_gain": 0.1300469934940338,
                                "threshold": 7.500000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0120377,
                                "internal_weight": 6.84221,
                                "internal_count": 40,
                                "left_child": {
                                    "leaf_index": 10,
                                    "leaf_value": 0.013412516814138194,
                                    "leaf_weight": 3.4305777698755264,
                                    "leaf_count": 20
                                },
                                "right_child": {
                                    "leaf_index": 42,
                                    "leaf_value": 0.010655218722677377,
                                    "leaf_weight": 3.411630257964134,
                                    "leaf_count": 20
                                }
                            },
                            "right_child": {
                                "leaf_index": 24,
                                "leaf_value": 0.023880814860077954,
                                "leaf_weight": 3.809541493654251,
                                "leaf_count": 22
                            }
                        }
                    },
                    "right_child": {
                        "leaf_index": 8,
                        "leaf_value": 0.025090417974682207,
                        "leaf_weight": 4.73380134999752,
                        "leaf_count": 27
                    }
                },
                "right_child": {
                    "split_index": 10,
                    "split_feature": 1,
                    "split_gain": 5.906569957733154,
                    "threshold": 1.5000000000000002,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.000744454,
                    "internal_weight": 9.15338,
                    "internal_count": 54,
                    "left_child": {
                        "leaf_index": 3,
                        "leaf_value": -0.00851426495792025,
                        "leaf_weight": 4.729085743427275,
                        "leaf_count": 28
                    },
                    "right_child": {
                        "leaf_index": 11,
                        "leaf_value": 0.007560616061201551,
                        "leaf_weight": 4.4242976903915405,
                        "leaf_count": 26
                    }
                }
            }
        }
    },
    {
        "tree_index": 5,
        "num_leaves": 48,
        "num_cat": 0,
        "shrinkage": 0.01,
        "tree_structure": {
            "split_index": 0,
            "split_feature": 10,
            "split_gain": 39.21780014038086,
            "threshold": 1.0000000180025095e-35,
            "decision_type": "<=",
            "default_left": true,
            "missing_type": "None",
            "internal_value": 0,
            "internal_weight": 0,
            "internal_count": 1279,
            "left_child": {
                "split_index": 14,
                "split_feature": 9825,
                "split_gain": 4.414420127868652,
                "threshold": 1.0000000180025095e-35,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": -0.00661648,
                "internal_weight": 63.2316,
                "internal_count": 384,
                "left_child": {
                    "split_index": 34,
                    "split_feature": 1,
                    "split_gain": 1.5821800231933594,
                    "threshold": 89.00000000000001,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.0082462,
                    "internal_weight": 45.8054,
                    "internal_count": 279,
                    "left_child": {
                        "split_index": 36,
                        "split_feature": 7,
                        "split_gain": 1.4218900203704834,
                        "threshold": 14.500000000000002,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0091285,
                        "internal_weight": 37.3809,
                        "internal_count": 228,
                        "left_child": {
                            "split_index": 37,
                            "split_feature": 10360,
                            "split_gain": 2.6545000076293945,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00803082,
                            "internal_weight": 28.3884,
                            "internal_count": 173,
                            "left_child": {
                                "split_index": 40,
                                "split_feature": 12,
                                "split_gain": 0.8610849976539612,
                                "threshold": 2.5000000000000004,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0111537,
                                "internal_weight": 13.8958,
                                "internal_count": 85,
                                "left_child": {
                                    "split_index": 45,
                                    "split_feature": 1,
                                    "split_gain": 7.147590167733142e-06,
                                    "threshold": 6.500000000000001,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.0125848,
                                    "internal_weight": 10.4441,
                                    "internal_count": 64,
                                    "left_child": {
                                        "split_index": 46,
                                        "split_feature": 7,
                                        "split_gain": 4.597679890139261e-06,
                                        "threshold": 1.5000000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0125905,
                                        "internal_weight": 7.02627,
                                        "internal_count": 43,
                                        "left_child": {
                                            "leaf_index": 0,
                                            "leaf_value": -0.012582968441481242,
                                            "leaf_weight": 3.751907452940939,
                                            "leaf_count": 23
                                        },
                                        "right_child": {
                                            "leaf_index": 47,
                                            "leaf_value": -0.012599184388069149,
                                            "leaf_weight": 3.2743635177612305,
                                            "leaf_count": 20
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 46,
                                        "leaf_value": -0.01257289427552105,
                                        "leaf_weight": 3.417801156640053,
                                        "leaf_count": 21
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 41,
                                    "leaf_value": -0.0068235836560935625,
                                    "leaf_weight": 3.4517428278923044,
                                    "leaf_count": 21
                                }
                            },
                            "right_child": {
                                "split_index": 38,
                                "split_feature": 12,
                                "split_gain": 1.0436899662017822,
                                "threshold": -1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.00503656,
                                "internal_weight": 14.4926,
                                "internal_count": 88,
                                "left_child": {
                                    "leaf_index": 38,
                                    "leaf_value": -0.008683669794480837,
                                    "leaf_weight": 5.09043841063976,
                                    "leaf_count": 31
                                },
                                "right_child": {
                                    "split_index": 39,
                                    "split_feature": 13,
                                    "split_gain": 2.134010076522827,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00306196,
                                    "internal_weight": 9.40215,
                                    "internal_count": 57,
                                    "left_child": {
                                        "leaf_index": 39,
                                        "leaf_value": 0.002525338624932812,
                                        "leaf_weight": 3.9580990374088305,
                                        "leaf_count": 24
                                    },
                                    "right_child": {
                                        "leaf_index": 40,
                                        "leaf_value": -0.007124213038195905,
                                        "leaf_weight": 5.444054126739502,
                                        "leaf_count": 33
                                    }
                                }
                            }
                        },
                        "right_child": {
                            "split_index": 44,
                            "split_feature": 1,
                            "split_gain": 2.4026699975365773e-05,
                            "threshold": 2.5000000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.0125938,
                            "internal_weight": 8.9925,
                            "internal_count": 55,
                            "left_child": {
                                "leaf_index": 37,
                                "leaf_value": -0.012578253461480157,
                                "leaf_weight": 4.72512438893318,
                                "leaf_count": 29
                            },
                            "right_child": {
                                "leaf_index": 45,
                                "leaf_value": -0.012610987513533168,
                                "leaf_weight": 4.267376199364662,
                                "leaf_count": 26
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 35,
                        "split_feature": 4116,
                        "split_gain": 3.049639940261841,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.0043313,
                        "internal_weight": 8.42453,
                        "internal_count": 51,
                        "left_child": {
                            "leaf_index": 35,
                            "leaf_value": 0.0017658011364748802,
                            "leaf_weight": 4.156287297606466,
                            "leaf_count": 25
                        },
                        "right_child": {
                            "leaf_index": 36,
                            "leaf_value": -0.010268480382921854,
                            "leaf_weight": 4.268239721655846,
                            "leaf_count": 26
                        }
                    }
                },
                "right_child": {
                    "split_index": 16,
                    "split_feature": 7,
                    "split_gain": 3.9280600547790527,
                    "threshold": 5.500000000000001,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.00233271,
                    "internal_weight": 17.4262,
                    "internal_count": 105,
                    "left_child": {
                        "split_index": 29,
                        "split_feature": 1,
                        "split_gain": 2.1451399326324463,
                        "threshold": 17.500000000000004,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00250721,
                        "internal_weight": 8.5456,
                        "internal_count": 51,
                        "left_child": {
                            "leaf_index": 15,
                            "leaf_value": 0.006527493884043536,
                            "leaf_weight": 5.198455467820169,
                            "leaf_count": 31
                        },
                        "right_child": {
                            "leaf_index": 30,
                            "leaf_value": -0.003736699328470047,
                            "leaf_weight": 3.347148582339287,
                            "leaf_count": 20
                        }
                    },
                    "right_child": {
                        "split_index": 32,
                        "split_feature": 2714,
                        "split_gain": 1.7803000211715698,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00699005,
                        "internal_weight": 8.8806,
                        "internal_count": 54,
                        "left_child": {
                            "leaf_index": 17,
                            "leaf_value": -0.012611202702356425,
                            "leaf_weight": 3.447226166725157,
                            "leaf_count": 21
                        },
                        "right_child": {
                            "leaf_index": 33,
                            "leaf_value": -0.003423682734349215,
                            "leaf_weight": 5.433378174901009,
                            "leaf_count": 33
                        }
                    }
                }
            },
            "right_child": {
                "split_index": 1,
                "split_feature": 5,
                "split_gain": 43.55459976196289,
                "threshold": 7.500000000000001,
                "decision_type": "<=",
                "default_left": true,
                "missing_type": "None",
                "internal_value": 0.00276001,
                "internal_weight": 151.442,
                "internal_count": 895,
                "left_child": {
                    "split_index": 4,
                    "split_feature": 4116,
                    "split_gain": 10.651300430297852,
                    "threshold": 1.0000000180025095e-35,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": 0.0122603,
                    "internal_weight": 36.5959,
                    "internal_count": 211,
                    "left_child": {
                        "split_index": 5,
                        "split_feature": 2691,
                        "split_gain": 12.757200241088867,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.00974834,
                        "internal_weight": 30.0757,
                        "internal_count": 174,
                        "left_child": {
                            "split_index": 11,
                            "split_feature": 5,
                            "split_gain": 7.4581499099731445,
                            "threshold": 1.0000000180025095e-35,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0126556,
                            "internal_weight": 25.0783,
                            "internal_count": 145,
                            "left_child": {
                                "split_index": 25,
                                "split_feature": 1,
                                "split_gain": 2.775470018386841,
                                "threshold": 1.5000000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.0203278,
                                "internal_weight": 8.4176,
                                "internal_count": 48,
                                "left_child": {
                                    "leaf_index": 1,
                                    "leaf_value": 0.025834756018879267,
                                    "leaf_weight": 4.384734183549886,
                                    "leaf_count": 25
                                },
                                "right_child": {
                                    "leaf_index": 26,
                                    "leaf_value": 0.01434042186607241,
                                    "leaf_weight": 4.032866731286049,
                                    "leaf_count": 23
                                }
                            },
                            "right_child": {
                                "split_index": 12,
                                "split_feature": 1,
                                "split_gain": 6.724390029907227,
                                "threshold": 47.50000000000001,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.00877937,
                                "internal_weight": 16.6607,
                                "internal_count": 97,
                                "left_child": {
                                    "split_index": 13,
                                    "split_feature": 7,
                                    "split_gain": 4.514570236206055,
                                    "threshold": 3.5000000000000004,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.0123124,
                                    "internal_weight": 12.7253,
                                    "internal_count": 74,
                                    "left_child": {
                                        "leaf_index": 12,
                                        "leaf_value": 0.0066463827840631505,
                                        "leaf_weight": 6.6802704632282275,
                                        "leaf_count": 39
                                    },
                                    "right_child": {
                                        "leaf_index": 14,
                                        "leaf_value": 0.018573802997162537,
                                        "leaf_weight": 6.044996187090874,
                                        "leaf_count": 35
                                    }
                                },
                                "right_child": {
                                    "leaf_index": 13,
                                    "leaf_value": -0.002644564361966815,
                                    "leaf_weight": 3.935449704527854,
                                    "leaf_count": 23
                                }
                            }
                        },
                        "right_child": {
                            "leaf_index": 6,
                            "leaf_value": -0.00484147637574815,
                            "leaf_weight": 4.997345760464667,
                            "leaf_count": 29
                        }
                    },
                    "right_child": {
                        "leaf_index": 5,
                        "leaf_value": 0.023847036189320044,
                        "leaf_weight": 6.520236551761626,
                        "leaf_count": 37
                    }
                },
                "right_child": {
                    "split_index": 2,
                    "split_feature": 10,
                    "split_gain": 12.703700065612793,
                    "threshold": 6.500000000000001,
                    "decision_type": "<=",
                    "default_left": true,
                    "missing_type": "None",
                    "internal_value": -0.000267264,
                    "internal_weight": 114.846,
                    "internal_count": 684,
                    "left_child": {
                        "split_index": 3,
                        "split_feature": 7,
                        "split_gain": 12.955499649047852,
                        "threshold": 1.0000000180025095e-35,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": -0.00128348,
                        "internal_weight": 105.04,
                        "internal_count": 627,
                        "left_child": {
                            "split_index": 6,
                            "split_feature": 5,
                            "split_gain": 10.414999961853027,
                            "threshold": 69.50000000000001,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": 0.0109748,
                            "internal_weight": 7.9678,
                            "internal_count": 46,
                            "left_child": {
                                "leaf_index": 2,
                                "leaf_value": -0.0016548837902915043,
                                "leaf_weight": 3.5886275321245185,
                                "leaf_count": 21
                            },
                            "right_child": {
                                "leaf_index": 7,
                                "leaf_value": 0.021324493167724338,
                                "leaf_weight": 4.379170328378677,
                                "leaf_count": 25
                            }
                        },
                        "right_child": {
                            "split_index": 8,
                            "split_feature": 5,
                            "split_gain": 9.03596019744873,
                            "threshold": 28.500000000000004,
                            "decision_type": "<=",
                            "default_left": true,
                            "missing_type": "None",
                            "internal_value": -0.00228965,
                            "internal_weight": 97.072,
                            "internal_count": 581,
                            "left_child": {
                                "split_index": 9,
                                "split_feature": 7,
                                "split_gain": 7.480760097503662,
                                "threshold": 15.500000000000002,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": 0.002791,
                                "internal_weight": 25.7277,
                                "internal_count": 152,
                                "left_child": {
                                    "split_index": 10,
                                    "split_feature": 0,
                                    "split_gain": 7.490940093994141,
                                    "threshold": -1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.000848584,
                                    "internal_weight": 17.6753,
                                    "internal_count": 105,
                                    "left_child": {
                                        "leaf_index": 4,
                                        "leaf_value": 0.009649462921106881,
                                        "leaf_weight": 4.909200280904774,
                                        "leaf_count": 29
                                    },
                                    "right_child": {
                                        "split_index": 20,
                                        "split_feature": 1,
                                        "split_gain": 3.802150011062622,
                                        "threshold": 14.500000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.0048856,
                                        "internal_weight": 12.7661,
                                        "internal_count": 76,
                                        "left_child": {
                                            "split_index": 30,
                                            "split_feature": 7,
                                            "split_gain": 2.1377201080322266,
                                            "threshold": 9.500000000000002,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00107525,
                                            "internal_weight": 8.58235,
                                            "internal_count": 51,
                                            "left_child": {
                                                "leaf_index": 11,
                                                "leaf_value": 0.0030944543527127227,
                                                "leaf_weight": 5.05433829128742,
                                                "leaf_count": 30
                                            },
                                            "right_child": {
                                                "leaf_index": 31,
                                                "leaf_value": -0.007048887134469775,
                                                "leaf_weight": 3.528011739253998,
                                                "leaf_count": 21
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 21,
                                            "leaf_value": -0.012701960853270336,
                                            "leaf_weight": 4.183763518929482,
                                            "leaf_count": 25
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 15,
                                    "split_feature": 10360,
                                    "split_gain": 4.1357598304748535,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": 0.01078,
                                    "internal_weight": 8.0524,
                                    "internal_count": 47,
                                    "left_child": {
                                        "leaf_index": 10,
                                        "leaf_value": 0.017494598620405987,
                                        "leaf_weight": 4.288148522377012,
                                        "leaf_count": 25
                                    },
                                    "right_child": {
                                        "leaf_index": 16,
                                        "leaf_value": 0.0031309139424639475,
                                        "leaf_weight": 3.7642538100481033,
                                        "leaf_count": 22
                                    }
                                }
                            },
                            "right_child": {
                                "split_index": 17,
                                "split_feature": 9825,
                                "split_gain": 3.869800090789795,
                                "threshold": 1.0000000180025095e-35,
                                "decision_type": "<=",
                                "default_left": true,
                                "missing_type": "None",
                                "internal_value": -0.0041218,
                                "internal_weight": 71.3443,
                                "internal_count": 429,
                                "left_child": {
                                    "split_index": 21,
                                    "split_feature": 7,
                                    "split_gain": 3.430609941482544,
                                    "threshold": 12.500000000000002,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00631088,
                                    "internal_weight": 37.8792,
                                    "internal_count": 229,
                                    "left_child": {
                                        "split_index": 22,
                                        "split_feature": 0,
                                        "split_gain": 3.0608201026916504,
                                        "threshold": -1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00311247,
                                        "internal_weight": 17.7876,
                                        "internal_count": 107,
                                        "left_child": {
                                            "split_index": 31,
                                            "split_feature": 13,
                                            "split_gain": 2.0208098888397217,
                                            "threshold": 1.0000000180025095e-35,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": 0.0016501,
                                            "internal_weight": 7.67321,
                                            "internal_count": 46,
                                            "left_child": {
                                                "leaf_index": 9,
                                                "leaf_value": 0.007236738642415093,
                                                "leaf_weight": 3.511614918708804,
                                                "leaf_count": 21
                                            },
                                            "right_child": {
                                                "leaf_index": 32,
                                                "leaf_value": -0.0030639863839486098,
                                                "leaf_weight": 4.161593198776245,
                                                "leaf_count": 25
                                            }
                                        },
                                        "right_child": {
                                            "split_index": 23,
                                            "split_feature": 5,
                                            "split_gain": 3.3975698947906494,
                                            "threshold": 104.50000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.00672555,
                                            "internal_weight": 10.1144,
                                            "internal_count": 61,
                                            "left_child": {
                                                "leaf_index": 23,
                                                "leaf_value": -0.0010451572014258095,
                                                "leaf_weight": 5.158916264772413,
                                                "leaf_count": 31
                                            },
                                            "right_child": {
                                                "leaf_index": 24,
                                                "leaf_value": -0.012639116927047863,
                                                "leaf_weight": 4.955504164099693,
                                                "leaf_count": 30
                                            }
                                        }
                                    },
                                    "right_child": {
                                        "split_index": 33,
                                        "split_feature": 10,
                                        "split_gain": 1.7716599702835083,
                                        "threshold": 1.5000000000000002,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00914252,
                                        "internal_weight": 20.0915,
                                        "internal_count": 122,
                                        "left_child": {
                                            "split_index": 41,
                                            "split_feature": 7,
                                            "split_gain": 0.7640820145606995,
                                            "threshold": 35.50000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.0111539,
                                            "internal_weight": 13.7727,
                                            "internal_count": 84,
                                            "left_child": {
                                                "split_index": 43,
                                                "split_feature": 10360,
                                                "split_gain": 3.497219950077124e-05,
                                                "threshold": 1.0000000180025095e-35,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.0126023,
                                                "internal_weight": 9.99356,
                                                "internal_count": 61,
                                                "left_child": {
                                                    "leaf_index": 22,
                                                    "leaf_value": -0.012621886344730113,
                                                    "leaf_weight": 4.771776944398882,
                                                    "leaf_count": 29
                                                },
                                                "right_child": {
                                                    "leaf_index": 44,
                                                    "leaf_value": -0.012584434621396141,
                                                    "leaf_weight": 5.221784025430679,
                                                    "leaf_count": 32
                                                }
                                            },
                                            "right_child": {
                                                "leaf_index": 42,
                                                "leaf_value": -0.007323659671666567,
                                                "leaf_weight": 3.7791296988725653,
                                                "leaf_count": 23
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 34,
                                            "leaf_value": -0.0047584870038129825,
                                            "leaf_weight": 6.31885677576065,
                                            "leaf_count": 38
                                        }
                                    }
                                },
                                "right_child": {
                                    "split_index": 18,
                                    "split_feature": 2715,
                                    "split_gain": 3.8110198974609375,
                                    "threshold": 1.0000000180025095e-35,
                                    "decision_type": "<=",
                                    "default_left": true,
                                    "missing_type": "None",
                                    "internal_value": -0.00164399,
                                    "internal_weight": 33.4651,
                                    "internal_count": 200,
                                    "left_child": {
                                        "split_index": 19,
                                        "split_feature": 10563,
                                        "split_gain": 4.563849925994873,
                                        "threshold": 1.0000000180025095e-35,
                                        "decision_type": "<=",
                                        "default_left": true,
                                        "missing_type": "None",
                                        "internal_value": -0.00322516,
                                        "internal_weight": 27.4408,
                                        "internal_count": 164,
                                        "left_child": {
                                            "split_index": 24,
                                            "split_feature": 7,
                                            "split_gain": 3.0095300674438477,
                                            "threshold": 4.500000000000001,
                                            "decision_type": "<=",
                                            "default_left": true,
                                            "missing_type": "None",
                                            "internal_value": -0.001463,
                                            "internal_weight": 23.1236,
                                            "internal_count": 138,
                                            "left_child": {
                                                "leaf_index": 18,
                                                "leaf_value": 0.0070180912209345,
                                                "leaf_weight": 3.5429596453905168,
                                                "leaf_count": 21
                                            },
                                            "right_child": {
                                                "split_index": 26,
                                                "split_feature": 10,
                                                "split_gain": 2.3290600776672363,
                                                "threshold": 2.5000000000000004,
                                                "decision_type": "<=",
                                                "default_left": true,
                                                "missing_type": "None",
                                                "internal_value": -0.00299759,
                                                "internal_weight": 19.5806,
                                                "internal_count": 117,
                                                "left_child": {
                                                    "split_index": 27,
                                                    "split_feature": 12,
                                                    "split_gain": 2.189970016479492,
                                                    "threshold": 13.500000000000002,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.000275788,
                                                    "internal_weight": 12.0658,
                                                    "internal_count": 72,
                                                    "left_child": {
                                                        "split_index": 28,
                                                        "split_feature": 5,
                                                        "split_gain": 2.49960994720459,
                                                        "threshold": 125.50000000000001,
                                                        "decision_type": "<=",
                                                        "default_left": true,
                                                        "missing_type": "None",
                                                        "internal_value": -0.00397902,
                                                        "internal_weight": 6.87284,
                                                        "internal_count": 41,
                                                        "left_child": {
                                                            "leaf_index": 25,
                                                            "leaf_value": -0.009865937340253093,
                                                            "leaf_weight": 3.519330799579622,
                                                            "leaf_count": 21
                                                        },
                                                        "right_child": {
                                                            "leaf_index": 29,
                                                            "leaf_value": 0.0021989859416960884,
                                                            "leaf_weight": 3.35350601375103,
                                                            "leaf_count": 20
                                                        }
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 28,
                                                        "leaf_value": 0.004625374493797534,
                                                        "leaf_weight": 5.193001419305801,
                                                        "leaf_count": 31
                                                    }
                                                },
                                                "right_child": {
                                                    "split_index": 42,
                                                    "split_feature": 13,
                                                    "split_gain": 0.5734590291976929,
                                                    "threshold": 1.0000000180025095e-35,
                                                    "decision_type": "<=",
                                                    "default_left": true,
                                                    "missing_type": "None",
                                                    "internal_value": -0.00736775,
                                                    "internal_weight": 7.51478,
                                                    "internal_count": 45,
                                                    "left_child": {
                                                        "leaf_index": 27,
                                                        "leaf_value": -0.004548410093801602,
                                                        "leaf_weight": 3.6807908415794364,
                                                        "leaf_count": 22
                                                    },
                                                    "right_child": {
                                                        "leaf_index": 43,
                                                        "leaf_value": -0.01007444065117733,
                                                        "leaf_weight": 3.8339907974004745,
                                                        "leaf_count": 23
                                                    }
                                                }
                                            }
                                        },
                                        "right_child": {
                                            "leaf_index": 20,
                                            "leaf_value": -0.012663385182714478,
                                            "leaf_weight": 4.317260399460792,
                                            "leaf_count": 26
                                        }
                                    },
                                    "right_child": {
                                        "leaf_index": 19,
                                        "leaf_value": 0.00555830280355133,
                                        "leaf_weight": 6.024279549717902,
                                        "leaf_count": 36
                                    }
                                }
                            }
                        }
                    },
                    "right_child": {
                        "split_index": 7,
                        "split_feature": 5,
                        "split_gain": 9.588890075683594,
                        "threshold": 49.50000000000001,
                        "decision_type": "<=",
                        "default_left": true,
                        "missing_type": "None",
                        "internal_value": 0.0106178,
                        "internal_weight": 9.80639,
                        "internal_count": 57,
                        "left_child": {
                            "leaf_index": 3,
                            "leaf_value": 0.01996266523737109,
                            "leaf_weight": 5.180125176906584,
                            "leaf_count": 30
                        },
                        "right_child": {
                            "leaf_index": 8,
                            "leaf_value": 0.00015408370644254154,
                            "leaf_weight": 4.626265034079552,
                            "leaf_count": 27
                        }
                    }
                }
            }
        }
    }
]
export { treesData, linesData, streamData };