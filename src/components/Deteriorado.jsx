import { useEffect, useState } from "react";
import {
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    LabelList,
    Line,
    ComposedChart,
} from "recharts";
import { cn } from "../utils/ui";

let dataNormal = [
    {
        name: "2024 - Enero",
        quantity: 39967,
        trash: 1040,
        percent: 2600,
    },
    {
        name: "2024 - Febrero",
        quantity: 52950,
        trash: 2750,
        percent: 5190,
    },
    {
        name: "2024 - Marzo",
        quantity: 61977,
        trash: 6068,
        percent: 9790,
    },
    {
        name: "2024 - Abril",
        quantity: 26659,
        trash: 4200,
        percent: 15750,
    },
    {
        name: "2024 - Mayo",
        quantity: 40578,
        trash: 8039,
        percent: 19810,
    },
    {
        name: "2024 - Junio",
        quantity: 57086,
        trash: 3796,
        percent: 6640,
    },
    {
        name: "2024 - Julio",
        quantity: 48892,
        trash: 9433,
        percent: 19290,
    },
    {
        name: "2024 - Agosto",
        quantity: 39086,
        trash: 1119,
        percent: 2860,
    },
    {
        name: "2024 - Setiembre",
        quantity: 58478,
        trash: 11497,
        percent: 19660,
    },
    {
        name: "2024 - Octubre",
        quantity: 38446,
        trash: 3950,
        percent: 10270,
    },
    {
        name: "2024 - Noviembre",
        quantity: 18359,
        trash: 444,
        percent: 2410,
    },
    {
        name: "2024 - Diciembre",
        quantity: 60308,
        trash: 6441,
        percent: 10680,
    },
    {
        name: "2025 - Enero",
        quantity: 60404,
        trash: 7990,
        percent: 13220,
    },
];
dataNormal = [
    {
        "name": "2024 - Enero",
        "quantity": 39967,
        "box": 304,
        "box_saldo": 9,
        "palletes": 25,
        "trash": 1040,
        "percent": 2682.2197365717807,
        "AR_seco": 14,
        "AR_refrigeration": 1,
        "OC_seco": 14,
        "OC_refrigeration": 1,
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE": {
            "quantity": null,
            "trash": null,
            "percent": null,
            "124X6": {
                "quantity": 5184,
                "trash": 154,
                "percent": 2970.679012345679
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 93,
            "trash": 2,
            "percent": 2150.537634408602,
            "NJ1718": {
                "quantity": 93,
                "trash": 2,
                "percent": 2150.537634408602
            }
        },
        "DIOVAN HCT 160/25MG X28 COMP.": {
            "quantity": 432,
            "trash": 432,
            "percent": 100000.0,
            "TCEE2": {
                "quantity": 432,
                "trash": 432,
                "percent": 100000.0
            }
        },
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": {
            "quantity": 199,
            "trash": 3,
            "percent": 1507.537688442211,
            "373217": {
                "quantity": 199,
                "trash": 3,
                "percent": 1507.537688442211
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 2052,
            "trash": 0,
            "percent": 0.0,
            "KNW28": {
                "quantity": 2052,
                "trash": 0,
                "percent": 0.0
            }
        },
        "VIGAMOX .5% OPH SOL 5ML 288<PE": {
            "quantity": 6550,
            "trash": 53,
            "percent": 809.1603053435115,
            "VAR46F": {
                "quantity": 6550,
                "trash": 53,
                "percent": 809.1603053435115
            }
        },
        "KISQA FCT 200MG ACP (3X21) R53": {
            "quantity": 1164,
            "trash": 4,
            "percent": 343.64261168384877,
            "SKPX5": {
                "quantity": 1164,
                "trash": 4,
                "percent": 343.64261168384877
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 41,
            "trash": 0,
            "percent": 0.0,
            "SKME9": {
                "quantity": 41,
                "trash": 0,
                "percent": 0.0
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": {
            "quantity": 5030,
            "trash": 1,
            "percent": 19.880715705765407,
            "VAV42D": {
                "quantity": 5030,
                "trash": 1,
                "percent": 19.880715705765407
            }
        },
        "GLIVE FCT 400MG ALU (3X10) PEF": {
            "quantity": 151,
            "trash": 0,
            "percent": 0.0,
            "NL2193": {
                "quantity": 151,
                "trash": 0,
                "percent": 0.0
            }
        },
        "AZARGA 5ML-PE": {
            "quantity": 4520,
            "trash": 117,
            "percent": 2588.495575221239,
            "VAM91F": {
                "quantity": 4520,
                "trash": 117,
                "percent": 2588.495575221239
            }
        },
        "TOBRADEX SUSP 5ML-PE": {
            "quantity": 11160,
            "trash": 210,
            "percent": 2300.0,
            "77299": {
                "quantity": 11160,
                "trash": 210,
                "percent": 2300.0
            }
        },
        "ENTRESTO 24MG/26MG X14 MM": {
            "quantity": 1872,
            "trash": 18,
            "percent": 961.5384615384615,
            "TCMX9": {
                "quantity": 1872,
                "trash": 18,
                "percent": 961.5384615384615
            }
        },
        "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": {
            "quantity": 1519,
            "trash": 46,
            "percent": 3028.308097432521,
            "KNW68": {
                "quantity": 1519,
                "trash": 46,
                "percent": 3028.308097432521
            }
        }
    },
    {
        "name": "2024 - Febrero",
        "quantity": 56437,
        "box": 687,
        "box_saldo": 15,
        "palletes": 77,
        "trash": 2750,
        "percent": 4993.5383820108555,
        "AR_seco": 25,
        "AR_refrigeration": 2,
        "OC_seco": 23,
        "OC_refrigeration": 2,
        "TOBRADEX UNGUENTO 3.5G-PE": {
            "quantity": 1950,
            "trash": 470,
            "percent": 24102.5641025641,
            "VAM12A": {
                "quantity": 1950,
                "trash": 470,
                "percent": 24102.5641025641
            }
        },
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": {
            "quantity": 1260,
            "trash": 19,
            "percent": 1507.936507936508,
            "TDHJ7": {
                "quantity": 1260,
                "trash": 19,
                "percent": 1507.936507936508
            }
        },
        "GALVUS TAB 50MG X7 MM": {
            "quantity": 2000,
            "trash": 29,
            "percent": 1450.0,
            "B9131A": {
                "quantity": 2000,
                "trash": 29,
                "percent": 1450.0
            }
        },
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": {
            "quantity": 4401,
            "trash": 21,
            "percent": 477.16428084526245,
            "NK3726": {
                "quantity": 4401,
                "trash": 21,
                "percent": 477.16428084526245
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 1200,
            "trash": 0,
            "percent": 0.0,
            "KNY81": {
                "quantity": 1200,
                "trash": 0,
                "percent": 0.0
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 1.5ML (X) MM": {
            "quantity": 2964,
            "trash": 88,
            "percent": 2968.960863697706,
            "11T5P": {
                "quantity": 2964,
                "trash": 88,
                "percent": 2968.960863697706
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 158,
            "trash": 20,
            "percent": 12658.227848101265,
            "NL8184": {
                "quantity": 158,
                "trash": 20,
                "percent": 12658.227848101265
            }
        },
        "TEGRM FCT 400MG TRI (3X10) U17_3": {
            "quantity": 3874,
            "trash": 63,
            "percent": 1903.3232628398791,
            "TCPH2 ": {
                "quantity": 1128,
                "trash": 0,
                "percent": 0.0
            },
            "TCPH3": {
                "quantity": 2746,
                "trash": 63,
                "percent": 2294.246176256373
            }
        },
        "JAKAV TAB 15MG ACP (6X10) PE": {
            "quantity": 57,
            "trash": 4,
            "percent": 7142.857142857143,
            "SKLW2": {
                "quantity": 57,
                "trash": 4,
                "percent": 7142.857142857143
            }
        },
        "XOLAI LYVI 150MG GLW (+) U17_8": {
            "quantity": 550,
            "trash": 33,
            "percent": 6000.0,
            "SKMV1": {
                "quantity": 550,
                "trash": 33,
                "percent": 6000.0
            }
        },
        "GALME FCT 50/1000MG ALU (6X10) U17_5": {
            "quantity": 1800,
            "trash": 1,
            "percent": 55.55555555555556,
            "KNW90": {
                "quantity": 1800,
                "trash": 1,
                "percent": 55.55555555555556
            }
        },
        "MYFOR FCT 360MG ALU (12X10) PE_3": {
            "quantity": 2334,
            "trash": 0,
            "percent": 0.0,
            "NN4213 ": {
                "quantity": 1593,
                "trash": 0,
                "percent": 0.0
            },
            "NN4212": {
                "quantity": 741,
                "trash": 0,
                "percent": 0.0
            }
        },
        "ENTRE FCT 49/51MG ALU (6X10) PE": {
            "quantity": 3110,
            "trash": 204,
            "percent": 7476.6355140186915,
            "TCCJ5": {
                "quantity": 1512,
                "trash": 56,
                "percent": 3703.703703703704
            },
            "TDCR5": {
                "quantity": 1598,
                "trash": 148,
                "percent": 9261.576971214017
            }
        },
        "DIOVAN HCT 160/12.5MG X28 COMP.": {
            "quantity": 5184,
            "trash": 61,
            "percent": 1176.6975308641975,
            "TDKW8": {
                "quantity": 5184,
                "trash": 61,
                "percent": 1176.6975308641975
            }
        },
        "TRILEPTAL SSP 60MG/ML GLB 100ML": {
            "quantity": 1000,
            "trash": 44,
            "percent": 4400.0,
            "ADP2L2690A": {
                "quantity": 1000,
                "trash": 44,
                "percent": 4400.0
            }
        },
        "ENTRESTO 49MG/51MG X14 MM": {
            "quantity": 399,
            "trash": 88,
            "percent": 22055.13784461153,
            "TCYK2": {
                "quantity": 399,
                "trash": 88,
                "percent": 22055.13784461153
            }
        },
        "EXFORGE 160/5MG X7 PE MM": {
            "quantity": 12392,
            "trash": 97,
            "percent": 782.7630729502905,
            "B9111V": {
                "quantity": 12392,
                "trash": 97,
                "percent": 782.7630729502905
            }
        },
        "DIOVAN HCT 160/12.5MG  X 14 COMP MM": {
            "quantity": 1296,
            "trash": 1296,
            "percent": 100000.0,
            "TCDN3": {
                "quantity": 1296,
                "trash": 1296,
                "percent": 100000.0
            }
        },
        "ENTRE FCT 24/26MG ALU (3X10) PE": {
            "quantity": 4536,
            "trash": 78,
            "percent": 1719.5767195767196,
            "TCJT9": {
                "quantity": 4536,
                "trash": 78,
                "percent": 1719.5767195767196
            }
        },
        "DIOVAN HCT 160/25 ALU X 14 MM": {
            "quantity": 936,
            "trash": 31,
            "percent": 3311.965811965812,
            "TDEP5": {
                "quantity": 936,
                "trash": 31,
                "percent": 3311.965811965812
            }
        },
        "COSENTYX 150MG/1ML PE": {
            "quantity": 3012,
            "trash": 8,
            "percent": 265.6042496679947,
            "SKTJ3": {
                "quantity": 3012,
                "trash": 8,
                "percent": 265.6042496679947
            }
        },
        "GILEN HGC 0.5MG DUP (2X14) U17_9": {
            "quantity": 24,
            "trash": 1,
            "percent": 4166.666666666667,
            "SKUW7": {
                "quantity": 24,
                "trash": 1,
                "percent": 4166.666666666667
            }
        },
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": {
            "quantity": 2000,
            "trash": 94,
            "percent": 4700.0,
            "B9166V": {
                "quantity": 2000,
                "trash": 94,
                "percent": 4700.0
            }
        }
    },
    {
        "name": "2024 - Marzo",
        "quantity": 61977,
        "box": 635,
        "box_saldo": 7,
        "palletes": 33,
        "trash": 6068,
        "percent": 9694.983934026624,
        "AR_seco": 15,
        "AR_refrigeration": 0,
        "OC_seco": 15,
        "OC_refrigeration": 0,
        "GALME FCT 50/850MG ALU (6X10) U17_5": {
            "quantity": 4164,
            "trash": 1,
            "percent": 24.015369836695484,
            "A00NC3": {
                "quantity": 4164,
                "trash": 1,
                "percent": 24.015369836695484
            }
        },
        "DIOVAN FCT 160MG ALU(X2) MM": {
            "quantity": 5100,
            "trash": 1474,
            "percent": 28901.960784313724,
            "2356808": {
                "quantity": 5100,
                "trash": 1474,
                "percent": 28901.960784313724
            }
        },
        "DIOVA FCT 80MG ALU (2X14) PE": {
            "quantity": 4380,
            "trash": 462,
            "percent": 10547.945205479453,
            "2354299": {
                "quantity": 4380,
                "trash": 462,
                "percent": 10547.945205479453
            }
        },
        "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": {
            "quantity": 3490,
            "trash": 8,
            "percent": 229.22636103151862,
            "VDD01D": {
                "quantity": 3490,
                "trash": 8,
                "percent": 229.22636103151862
            }
        },
        "EXFORGE FCT 160/5MG ALU (2X14) U17_9": {
            "quantity": 5036,
            "trash": 8,
            "percent": 158.85623510722795,
            "B9173J": {
                "quantity": 5036,
                "trash": 8,
                "percent": 158.85623510722795
            }
        },
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": {
            "quantity": 6720,
            "trash": 361,
            "percent": 5372.023809523809,
            "77436": {
                "quantity": 6720,
                "trash": 361,
                "percent": 5372.023809523809
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 37,
            "trash": 0,
            "percent": 0.0,
            "SKPP9": {
                "quantity": 37,
                "trash": 0,
                "percent": 0.0
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": {
            "quantity": 5530,
            "trash": 10,
            "percent": 180.83182640144665,
            "VCV03D": {
                "quantity": 5530,
                "trash": 10,
                "percent": 180.83182640144665
            }
        },
        "DUOTRAV BAK-FREE 1.5ML MM": {
            "quantity": 5440,
            "trash": 2786,
            "percent": 51213.23529411765,
            "VDN97B": {
                "quantity": 5440,
                "trash": 2786,
                "percent": 51213.23529411765
            }
        },
        "GILEN HGC 0.5MG DUP (2X14) U17_9": {
            "quantity": 24,
            "trash": 0,
            "percent": 0.0,
            "SKUW7": {
                "quantity": 24,
                "trash": 0,
                "percent": 0.0
            }
        },
        "RITAL TAB 10MG ALU (2X15) U17_5": {
            "quantity": 19000,
            "trash": 2,
            "percent": 10.526315789473685,
            "B9137A": {
                "quantity": 19000,
                "trash": 2,
                "percent": 10.526315789473685
            }
        },
        "KISQA FCT 200MG ACP (3X21) R53": {
            "quantity": 596,
            "trash": 15,
            "percent": 2985.0746268656717,
            "SKXN9": {
                "quantity": 596,
                "trash": 15,
                "percent": 2985.0746268656717
            }
        },
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": {
            "quantity": 1260,
            "trash": 884,
            "percent": 70158.73015873016,
            "TDWC3": {
                "quantity": 1260,
                "trash": 884,
                "percent": 70158.73015873016
            }
        },
        "TOBREX 5ML-PE": {
            "quantity": 1200,
            "trash": 57,
            "percent": 4750.0,
            "77480": {
                "quantity": 1200,
                "trash": 57,
                "percent": 4750.0
            }
        }
    },
    {
        "name": "2024 - Abril",
        "quantity": 26659,
        "box": 278,
        "box_saldo": 8,
        "palletes": 38,
        "trash": 4200,
        "percent": 15271.142109851788,
        "AR_seco": 13,
        "AR_refrigeration": 0,
        "OC_seco": 12,
        "OC_refrigeration": 0,
        "VOTRI FCT 400MG HDPE (X30) R234_2": {
            "quantity": 198,
            "trash": 3,
            "percent": 1960.7843137254902,
            "NR3677": {
                "quantity": 198,
                "trash": 3,
                "percent": 1960.7843137254902
            }
        },
        "DIOVAN HCT 160/25MG X28 COMP.": {
            "quantity": 546,
            "trash": 143,
            "percent": 26190.47619047619,
            "TDHD8": {
                "quantity": 546,
                "trash": 143,
                "percent": 26190.47619047619
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 3092,
            "trash": 9,
            "percent": 291.07373868046574,
            "A00RPM": {
                "quantity": 3092,
                "trash": 9,
                "percent": 291.07373868046574
            }
        },
        "TOBRADEX UNGUENTO 3.5G-PE": {
            "quantity": 2550,
            "trash": 2550,
            "percent": 100000.0,
            "VCE61D": {
                "quantity": 2550,
                "trash": 2550,
                "percent": 100000.0
            }
        },
        "EXFORGE 160/5MG X7 PE MM": {
            "quantity": 7000,
            "trash": 14,
            "percent": 200.0,
            "B9173A": {
                "quantity": 7000,
                "trash": 14,
                "percent": 200.0
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 104,
            "trash": 0,
            "percent": 0.0,
            "SLCP6": {
                "quantity": 104,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 250,
            "trash": 46,
            "percent": 18400.0,
            "NP4314": {
                "quantity": 250,
                "trash": 46,
                "percent": 18400.0
            }
        },
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": {
            "quantity": 1571,
            "trash": 82,
            "percent": 5219.605346912795,
            "ADP4L5351": {
                "quantity": 1571,
                "trash": 82,
                "percent": 5219.605346912795
            }
        },
        "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": {
            "quantity": 4500,
            "trash": 357,
            "percent": 7933.333333333333,
            "VEM01A": {
                "quantity": 4500,
                "trash": 357,
                "percent": 7933.333333333333
            }
        },
        "AFINI TAB 10MG ALU (3X10) U17_11": {
            "quantity": 44,
            "trash": 2,
            "percent": 4545.454545454545,
            "SKFN7": {
                "quantity": 44,
                "trash": 2,
                "percent": 4545.454545454545
            }
        },
        "GALME FCT 50/1000MG ALU (6X10) U17_5": {
            "quantity": 6804,
            "trash": 994,
            "percent": 13299.319727891156,
            "A00U67": {
                "quantity": 4788,
                "trash": 815,
                "percent": 17021.72096908939
            },
            "A00UC1": {
                "quantity": 2016,
                "trash": 179,
                "percent": 8878.968253968254
            }
        }
    },
    {
        "name": "2024 - Mayo",
        "quantity": 41219,
        "box": 554,
        "box_saldo": 13,
        "palletes": 44,
        "trash": 8039,
        "percent": 19496.16913975366,
        "AR_seco": 13,
        "AR_refrigeration": 8,
        "OC_seco": 13,
        "OC_refrigeration": 6,
        "XOLAI LYVI 150MG GLW (+) U17_8": {
            "quantity": 1704,
            "trash": 6,
            "percent": 400.2911208151383,
            "SKMV1": {
                "quantity": 29,
                "trash": 0,
                "percent": 0.0
            },
            "SKTW2": {
                "quantity": 631,
                "trash": 1,
                "percent": 158.47860538827257
            },
            "SLCR1": {
                "quantity": 1044,
                "trash": 5,
                "percent": 478.9272030651341
            }
        },
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": {
            "quantity": 5015,
            "trash": 47,
            "percent": 937.1884346959123,
            "NS0224": {
                "quantity": 5015,
                "trash": 47,
                "percent": 937.1884346959123
            }
        },
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": {
            "quantity": 369,
            "trash": 33,
            "percent": 8943.08943089431,
            "374101": {
                "quantity": 369,
                "trash": 33,
                "percent": 8943.08943089431
            }
        },
        "TEGRETOL 2% JARABE 100ML": {
            "quantity": 3400,
            "trash": 0,
            "percent": 0.0,
            "ADPU00561": {
                "quantity": 3400,
                "trash": 0,
                "percent": 0.0
            }
        },
        "VOLTAREN SR FCT 100MG (3X10) PE": {
            "quantity": 14760,
            "trash": 7403,
            "percent": 50155.82655826558,
            "TDTX3": {
                "quantity": 14760,
                "trash": 7403,
                "percent": 50155.82655826558
            }
        },
        "EXFORGE 160/10MG X7 PE MM": {
            "quantity": 2124,
            "trash": 9,
            "percent": 423.728813559322,
            "B9172Y": {
                "quantity": 2124,
                "trash": 9,
                "percent": 423.728813559322
            }
        },
        "REVOL FCT 50MG ALU (4X7) R234_5": {
            "quantity": 300,
            "trash": 2,
            "percent": 666.6666666666666,
            "B9228F": {
                "quantity": 300,
                "trash": 2,
                "percent": 666.6666666666666
            }
        },
        "ENTRE FCT 97/103MG ALU (6X10) PE": {
            "quantity": 756,
            "trash": 57,
            "percent": 7539.68253968254,
            "TELR2": {
                "quantity": 756,
                "trash": 57,
                "percent": 7539.68253968254
            }
        },
        "TEGRM FCT 400MG TRI (3X10) U17_3": {
            "quantity": 3450,
            "trash": 72,
            "percent": 2086.9565217391305,
            "TEKT8": {
                "quantity": 3450,
                "trash": 72,
                "percent": 2086.9565217391305
            }
        },
        "ENTRESTO 97MG/103MG X14 MM": {
            "quantity": 1008,
            "trash": 24,
            "percent": 2380.9523809523807,
            "TEKU4": {
                "quantity": 1008,
                "trash": 24,
                "percent": 2380.9523809523807
            }
        },
        "KESIMPTA LISY 20MG GLW 0.4ML (X) B0": {
            "quantity": 300,
            "trash": 1,
            "percent": 322.5806451612903,
            "SLAX8": {
                "quantity": 290,
                "trash": 1,
                "percent": 344.82758620689657
            },
            "SHYN1 ": {
                "quantity": 10,
                "trash": 0,
                "percent": 0.0
            }
        },
        "ENTRESTO 49MG/51MG X14 MM": {
            "quantity": 1008,
            "trash": 365,
            "percent": 36210.31746031746,
            "TENL1": {
                "quantity": 1008,
                "trash": 365,
                "percent": 36210.31746031746
            }
        },
        "GILEN HGC 0.5MG DUP (2X14) U17_9": {
            "quantity": 24,
            "trash": 1,
            "percent": 4166.666666666667,
            "SLDN1": {
                "quantity": 24,
                "trash": 1,
                "percent": 4166.666666666667
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 1625,
            "trash": 3,
            "percent": 184.6153846153846,
            "A00WKA": {
                "quantity": 1625,
                "trash": 3,
                "percent": 184.6153846153846
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 66,
            "trash": 1,
            "percent": 1515.1515151515152,
            "SLHC4": {
                "quantity": 66,
                "trash": 1,
                "percent": 1515.1515151515152
            }
        },
        "EXFORGE FCT 160/5MG ALU (2X14) U17_9": {
            "quantity": 4838,
            "trash": 10,
            "percent": 206.69698222405952,
            "B9210X": {
                "quantity": 4838,
                "trash": 10,
                "percent": 206.69698222405952
            }
        },
        "MAYZE FCT 2MG ALU (2X14) R65": {
            "quantity": 447,
            "trash": 3,
            "percent": 671.1409395973154,
            "B9151X": {
                "quantity": 447,
                "trash": 3,
                "percent": 671.1409395973154
            }
        },
        "MAYZE FCT 0.25MG ALU (10X12) R65": {
            "quantity": 25,
            "trash": 2,
            "percent": 8000.0,
            "B9123X": {
                "quantity": 25,
                "trash": 2,
                "percent": 8000.0
            }
        }
    },
    {
        "name": "2024 - Junio",
        "quantity": 59021,
        "box": 1005,
        "box_saldo": 10,
        "palletes": 57,
        "trash": 3796,
        "percent": 6370.5503503137015,
        "AR_seco": 14,
        "AR_refrigeration": 2,
        "OC_seco": 13,
        "OC_refrigeration": 2,
        "DIOVAN HCT 160/12.5MG  X 14 COMP MM": {
            "quantity": 2088,
            "trash": 163,
            "percent": 7806.513409961686,
            "TEVF5": {
                "quantity": 2088,
                "trash": 163,
                "percent": 7806.513409961686
            }
        },
        "DIOVAN FCT 160MG ALU(X2) MM": {
            "quantity": 11700,
            "trash": 404,
            "percent": 2329.8731257208765,
            "2417351": {
                "quantity": 6060,
                "trash": 404,
                "percent": 6666.666666666667
            },
            "2418428": {
                "quantity": 5640,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TEGRE TAB 200MG PVC (2X10) PE": {
            "quantity": 14568,
            "trash": 2415,
            "percent": 16577.429983525537,
            "2410800": {
                "quantity": 14568,
                "trash": 2415,
                "percent": 16577.429983525537
            }
        },
        "MYFOR FCT 360MG ALU (12X10) PE_3": {
            "quantity": 2437,
            "trash": 0,
            "percent": 0.0,
            "NT9849": {
                "quantity": 502,
                "trash": 0,
                "percent": 0.0
            },
            "NT9850": {
                "quantity": 1935,
                "trash": 0,
                "percent": 0.0
            }
        },
        "VOLTAREN 75MG X 10 AMP PE": {
            "quantity": 11640,
            "trash": 543,
            "percent": 4664.948453608247,
            "NR2291": {
                "quantity": 11640,
                "trash": 543,
                "percent": 4664.948453608247
            }
        },
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": {
            "quantity": 2160,
            "trash": 2,
            "percent": 92.5925925925926,
            "B9256D": {
                "quantity": 2160,
                "trash": 2,
                "percent": 92.5925925925926
            }
        },
        "ENTRE FCT 24/26MG ALU (3X10) PE": {
            "quantity": 3852,
            "trash": 100,
            "percent": 2596.0539979231567,
            "TEMD1": {
                "quantity": 3852,
                "trash": 100,
                "percent": 2596.0539979231567
            }
        },
        "MAYZE FCT 0.25MG ALU (X12) R65": {
            "quantity": 58,
            "trash": 3,
            "percent": 5172.413793103448,
            "B9194Y": {
                "quantity": 58,
                "trash": 3,
                "percent": 5172.413793103448
            }
        },
        "TRILEPTAL SSP 60MG/ML GLB 100ML": {
            "quantity": 999,
            "trash": 27,
            "percent": 2702.7027027027025,
            "ADP2L2699A": {
                "quantity": 999,
                "trash": 27,
                "percent": 2702.7027027027025
            }
        },
        "EXFOR FCT 160/5MG ALU (4X7) U17_1": {
            "quantity": 5184,
            "trash": 96,
            "percent": 1851.851851851852,
            "TDWT3": {
                "quantity": 5184,
                "trash": 96,
                "percent": 1851.851851851852
            }
        },
        "COSENTYX 150MG/1ML PE": {
            "quantity": 3017,
            "trash": 4,
            "percent": 132.5820351342393,
            "SLCM2": {
                "quantity": 3017,
                "trash": 4,
                "percent": 132.5820351342393
            }
        },
        "GLIVE FCT 400MG ALU (3X10) PEF": {
            "quantity": 160,
            "trash": 4,
            "percent": 2500.0,
            "NT8236": {
                "quantity": 160,
                "trash": 4,
                "percent": 2500.0
            }
        },
        "VOTRI FCT 400MG HDPE (X30) R234_2": {
            "quantity": 90,
            "trash": 3,
            "percent": 3333.3333333333335,
            "NT9835": {
                "quantity": 90,
                "trash": 3,
                "percent": 3333.3333333333335
            }
        },
        "GALME FCT 50/850MG ALU (6X10) U17_5": {
            "quantity": 1068,
            "trash": 32,
            "percent": 2996.2546816479403,
            "A0127G": {
                "quantity": 1068,
                "trash": 32,
                "percent": 2996.2546816479403
            }
        }
    },
    {
        "name": "2024 - Julio",
        "quantity": 48892,
        "box": 533,
        "box_saldo": 10,
        "palletes": 77,
        "trash": 9433,
        "percent": 19270.8755984744,
        "AR_seco": 17,
        "AR_refrigeration": 1,
        "OC_seco": 17,
        "OC_refrigeration": 1,
        "ENTRE FCT 49/51MG ALU (6X10) PE": {
            "quantity": 1644,
            "trash": 497,
            "percent": 30231.143552311434,
            "TFFM8": {
                "quantity": 1644,
                "trash": 497,
                "percent": 30231.143552311434
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": {
            "quantity": 5200,
            "trash": 925,
            "percent": 17788.46153846154,
            "VFY59C": {
                "quantity": 5200,
                "trash": 925,
                "percent": 17788.46153846154
            }
        },
        "AZARGA 5ML-PE": {
            "quantity": 4500,
            "trash": 0,
            "percent": 0.0,
            "VFM64C": {
                "quantity": 4500,
                "trash": 0,
                "percent": 0.0
            }
        },
        "XOLAI LYVI 150MG GLW (+) U17_8": {
            "quantity": 839,
            "trash": 1,
            "percent": 119.18951132300357,
            "SLJT4": {
                "quantity": 839,
                "trash": 1,
                "percent": 119.18951132300357
            }
        },
        "AFINI TAB 10MG ALU (3X10) U17_11": {
            "quantity": 46,
            "trash": 0,
            "percent": 0.0,
            "SKFN7": {
                "quantity": 46,
                "trash": 0,
                "percent": 0.0
            }
        },
        "GALME FCT 50/850MG ALU (6X10) U17_5": {
            "quantity": 2016,
            "trash": 19,
            "percent": 942.4603174603175,
            "A012S2": {
                "quantity": 2016,
                "trash": 19,
                "percent": 942.4603174603175
            }
        },
        "TOBRADEX OPH SOL 2.5ML-MM": {
            "quantity": 1920,
            "trash": 360,
            "percent": 18750.0,
            "77790": {
                "quantity": 1920,
                "trash": 360,
                "percent": 18750.0
            }
        },
        "ENTRESTO 24MG/26MG X14 MM": {
            "quantity": 1122,
            "trash": 18,
            "percent": 1604.2780748663101,
            "TFLR3": {
                "quantity": 1122,
                "trash": 18,
                "percent": 1604.2780748663101
            }
        },
        "TOBRADEX SUSP 5ML-PE": {
            "quantity": 9600,
            "trash": 1560,
            "percent": 16250.0,
            "77793": {
                "quantity": 9600,
                "trash": 1560,
                "percent": 16250.0
            }
        },
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": {
            "quantity": 4860,
            "trash": 435,
            "percent": 8950.617283950618,
            "77763": {
                "quantity": 4860,
                "trash": 435,
                "percent": 8950.617283950618
            }
        },
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": {
            "quantity": 2099,
            "trash": 2094,
            "percent": 99761.79132920438,
            "ADP4L5353": {
                "quantity": 2099,
                "trash": 2094,
                "percent": 99761.79132920438
            }
        },
        "GALME FCT 50/1000MG ALU (6X10) U17_5": {
            "quantity": 4752,
            "trash": 73,
            "percent": 1536.1952861952861,
            "A0137F": {
                "quantity": 4752,
                "trash": 73,
                "percent": 1536.1952861952861
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 2280,
            "trash": 3,
            "percent": 131.57894736842104,
            "A0136L": {
                "quantity": 2280,
                "trash": 3,
                "percent": 131.57894736842104
            }
        },
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": {
            "quantity": 1190,
            "trash": 24,
            "percent": 2016.8067226890757,
            "TFVH3": {
                "quantity": 1190,
                "trash": 24,
                "percent": 2016.8067226890757
            }
        },
        "DUOTRAV BAK FREE 2.5ML-PE": {
            "quantity": 3400,
            "trash": 3265,
            "percent": 96029.41176470589,
            "VEL91V": {
                "quantity": 3400,
                "trash": 3265,
                "percent": 96029.41176470589
            }
        },
        "DIOVAN HCT 160/25 ALU X 14 MM": {
            "quantity": 3024,
            "trash": 93,
            "percent": 3154.7619047619046,
            "TFUD3": {
                "quantity": 3024,
                "trash": 93,
                "percent": 3154.7619047619046
            }
        },
        "KISQA FCT 200MG ACP (3X21) R53": {
            "quantity": 400,
            "trash": 66,
            "percent": 16500.0,
            "SLLR9": {
                "quantity": 400,
                "trash": 66,
                "percent": 16500.0
            }
        }
    },
    {
        "name": "2024 - Agosto",
        "quantity": 39086,
        "box": 438,
        "box_saldo": 11,
        "palletes": 68,
        "trash": 1119,
        "percent": 2896.903571248169,
        "AR_seco": 14,
        "AR_refrigeration": 1,
        "OC_seco": 14,
        "OC_refrigeration": 1,
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 20,
            "trash": 0,
            "percent": 0.0,
            "SLMK9": {
                "quantity": 20,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TOBREX 5ML-PE": {
            "quantity": 3639,
            "trash": 26,
            "percent": 672.9033316921057,
            "77975": {
                "quantity": 3639,
                "trash": 26,
                "percent": 672.9033316921057
            }
        },
        "JAKAV TAB 15MG ACP (6X10) PE": {
            "quantity": 46,
            "trash": 1,
            "percent": 2173.913043478261,
            "SLPX9": {
                "quantity": 46,
                "trash": 1,
                "percent": 2173.913043478261
            }
        },
        "VIGAMOX .5% OPH SOL 5ML 288<PE": {
            "quantity": 6660,
            "trash": 873,
            "percent": 13108.108108108108,
            "VFY11C": {
                "quantity": 6660,
                "trash": 873,
                "percent": 13108.108108108108
            }
        },
        "TOBRADEX UNGUENTO 3.5G-PE": {
            "quantity": 6340,
            "trash": 4,
            "percent": 63.09148264984227,
            "VEN09A": {
                "quantity": 6340,
                "trash": 4,
                "percent": 63.09148264984227
            }
        },
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": {
            "quantity": 3969,
            "trash": 5,
            "percent": 125.97631645250694,
            "NV7474": {
                "quantity": 3969,
                "trash": 5,
                "percent": 125.97631645250694
            }
        },
        "ENTRE FCT 49/51MG ALU (6X10) PE": {
            "quantity": 1584,
            "trash": 15,
            "percent": 946.969696969697,
            "TFYR7": {
                "quantity": 1584,
                "trash": 15,
                "percent": 946.969696969697
            }
        },
        "TRILEPTAL SSP 60MG/ML GLB 100ML": {
            "quantity": 998,
            "trash": 17,
            "percent": 1703.4068136272545,
            "ADP2L2759": {
                "quantity": 998,
                "trash": 17,
                "percent": 1703.4068136272545
            }
        },
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": {
            "quantity": 3920,
            "trash": 24,
            "percent": 612.2448979591836,
            "B9316E": {
                "quantity": 3920,
                "trash": 24,
                "percent": 612.2448979591836
            }
        },
        "GALME FCT 50/1000MG ALU (6X10) U17_5": {
            "quantity": 2333,
            "trash": 15,
            "percent": 642.9489927132447,
            "A015KS": {
                "quantity": 2333,
                "trash": 15,
                "percent": 642.9489927132447
            }
        },
        "RITAL TAB 10MG ALU (2X15) U17_5": {
            "quantity": 8000,
            "trash": 42,
            "percent": 525.0,
            "B9259Y": {
                "quantity": 8000,
                "trash": 42,
                "percent": 525.0
            }
        },
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": {
            "quantity": 249,
            "trash": 9,
            "percent": 3614.4578313253014,
            "375417": {
                "quantity": 249,
                "trash": 9,
                "percent": 3614.4578313253014
            }
        },
        "DIOVAN HCT 80/12.5MG X 28 COMP.": {
            "quantity": 820,
            "trash": 60,
            "percent": 7317.073170731707,
            "TFYT6": {
                "quantity": 820,
                "trash": 60,
                "percent": 7317.073170731707
            }
        },
        "DIOVAN HCT 160/25MG X28 COMP.": {
            "quantity": 508,
            "trash": 28,
            "percent": 5511.811023622047,
            "THEX9": {
                "quantity": 508,
                "trash": 28,
                "percent": 5511.811023622047
            }
        }
    },
    {
        "name": "2024 - Setiembre",
        "quantity": 63342,
        "box": 1055,
        "box_saldo": 5,
        "palletes": 74,
        "trash": 11497,
        "percent": 17632.650561832153,
        "AR_seco": 14,
        "AR_refrigeration": 0,
        "OC_seco": 11,
        "OC_refrigeration": 0,
        "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": {
            "quantity": 1000,
            "trash": 3,
            "percent": 300.0,
            "B9115N": {
                "quantity": 1000,
                "trash": 3,
                "percent": 300.0
            }
        },
        "ENTRE FCT 24/26MG ALU (3X10) PE": {
            "quantity": 5472,
            "trash": 319,
            "percent": 5829.6783625731,
            "TFWM9": {
                "quantity": 5472,
                "trash": 319,
                "percent": 5829.6783625731
            }
        },
        "GALVU TAB 50MG ALU (4X14) PE_1": {
            "quantity": 10337,
            "trash": 854,
            "percent": 8170.565929741719,
            "B9275P": {
                "quantity": 6697,
                "trash": 566,
                "percent": 8451.545468120054
            },
            "B9275R": {
                "quantity": 3640,
                "trash": 288,
                "percent": 7912.087912087912
            }
        },
        "SANDIMMUN LIAM 50MG/1ML 1X10 U17": {
            "quantity": 480,
            "trash": 2,
            "percent": 414.0786749482402,
            "N2320": {
                "quantity": 477,
                "trash": 2,
                "percent": 419.2872117400419
            },
            "P0214": {
                "quantity": 3,
                "trash": 0,
                "percent": 0.0
            }
        },
        "REVOL FCT 50MG ALU (4X7) R234_5": {
            "quantity": 350,
            "trash": 13,
            "percent": 3714.285714285714,
            "B9308K": {
                "quantity": 350,
                "trash": 13,
                "percent": 3714.285714285714
            }
        },
        "MYFOR FCT 360MG ALU (12X10) PE_3": {
            "quantity": 3029,
            "trash": 105,
            "percent": 3929.4117647058824,
            "NX6651": {
                "quantity": 1808,
                "trash": 43,
                "percent": 2378.3185840707965
            },
            "NX6650": {
                "quantity": 1221,
                "trash": 62,
                "percent": 5077.805077805077
            }
        },
        "EXFORGE FCT 160/12.5/5MG ALU (2X7) U17_2": {
            "quantity": 15000,
            "trash": 25,
            "percent": 166.66666666666666,
            "B9321J": {
                "quantity": 15000,
                "trash": 25,
                "percent": 166.66666666666666
            }
        },
        "EXFORGE 160/10MG X7 PE MM": {
            "quantity": 4608,
            "trash": 3904,
            "percent": 84722.22222222222,
            "THJH4": {
                "quantity": 4608,
                "trash": 3904,
                "percent": 84722.22222222222
            }
        },
        "VIGAD LDMO 5/1MG/ML LDPE 5ML (X) PE": {
            "quantity": 21060,
            "trash": 6251,
            "percent": 29681.861348528015,
            "78028": {
                "quantity": 21060,
                "trash": 6251,
                "percent": 29681.861348528015
            }
        },
        "GILEN HGC 0.5MG DUP (2X14) U17_9": {
            "quantity": 26,
            "trash": 0,
            "percent": 0.0,
            "SLVC1": {
                "quantity": 26,
                "trash": 0,
                "percent": 0.0
            }
        },
        "CERTI TAB 0.75MG ALU (6X10) R56": {
            "quantity": 1980,
            "trash": 21,
            "percent": 1060.6060606060605,
            "SLUR1": {
                "quantity": 1980,
                "trash": 21,
                "percent": 1060.6060606060605
            }
        }
    },
    {
        "name": "2024 - Octubre",
        "quantity": 55708,
        "box": 635,
        "box_saldo": 13,
        "palletes": 81,
        "trash": 3950,
        "percent": 7089.0165111270635,
        "AR_seco": 21,
        "AR_refrigeration": 1,
        "OC_seco": 18,
        "OC_refrigeration": 1,
        "DIOVAN HCT 160/25MG X28 COMP.": {
            "quantity": 500,
            "trash": 42,
            "percent": 8400.0,
            "THEX9": {
                "quantity": 500,
                "trash": 42,
                "percent": 8400.0
            }
        },
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": {
            "quantity": 2099,
            "trash": 97,
            "percent": 4621.248213434969,
            "ADP4L5354": {
                "quantity": 2099,
                "trash": 97,
                "percent": 4621.248213434969
            }
        },
        "KISQA FCT 200MG ACP (3X21) R53": {
            "quantity": 1152,
            "trash": 757,
            "percent": 56613.01609517145,
            "SLWD4": {
                "quantity": 1152,
                "trash": 757,
                "percent": 56613.01609517145
            }
        },
        "RITAL TAB 10MG ALU (2X15) U17_5": {
            "quantity": 10000,
            "trash": 91,
            "percent": 913.2420091324201,
            "B9267K": {
                "quantity": 71,
                "trash": 0,
                "percent": 0.0
            },
            "B9327A": {
                "quantity": 9929,
                "trash": 91,
                "percent": 916.5072011280089
            }
        },
        "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": {
            "quantity": 3480,
            "trash": 216,
            "percent": 6206.896551724138,
            "78074": {
                "quantity": 3480,
                "trash": 216,
                "percent": 6206.896551724138
            }
        },
        "XOLAI LYVI 150MG GLW (+) U17_8": {
            "quantity": 900,
            "trash": 18,
            "percent": 2000.0,
            "SLJT5": {
                "quantity": 900,
                "trash": 18,
                "percent": 2000.0
            }
        },
        "EXFORGE FCT 160/10MG ALU (4X7) U17_1": {
            "quantity": 3888,
            "trash": 11,
            "percent": 282.9218106995885,
            "THXK6": {
                "quantity": 3888,
                "trash": 11,
                "percent": 282.9218106995885
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 44,
            "trash": 0,
            "percent": 0.0,
            "SLUT2": {
                "quantity": 44,
                "trash": 0,
                "percent": 0.0
            }
        },
        "EXFORGE FCT 160/12.5/10MG ALU (2X7) U172": {
            "quantity": 9000,
            "trash": 89,
            "percent": 1114.6496815286623,
            "B9340F": {
                "quantity": 2300,
                "trash": 3,
                "percent": 130.43478260869566
            },
            "B9340H": {
                "quantity": 6700,
                "trash": 86,
                "percent": 1283.5820895522388
            }
        },
        "TASIGNA HGC 150MG DUP 3(5X8) U17_2": {
            "quantity": 24,
            "trash": 3,
            "percent": 12500.0,
            "PB2450": {
                "quantity": 24,
                "trash": 3,
                "percent": 12500.0
            }
        },
        "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": {
            "quantity": 2390,
            "trash": 2263,
            "percent": 94686.19246861925,
            "VJY32A": {
                "quantity": 2390,
                "trash": 2263,
                "percent": 94686.19246861925
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 140,
            "trash": 9,
            "percent": 6428.571428571428,
            "PB4285": {
                "quantity": 140,
                "trash": 9,
                "percent": 6428.571428571428
            }
        },
        "VOLTAREN FCT 50MG 10X10 PE": {
            "quantity": 2295,
            "trash": 14,
            "percent": 610.0217864923748,
            "A017W2": {
                "quantity": 2295,
                "trash": 14,
                "percent": 610.0217864923748
            }
        },
        "ENTRE FCT 97/103MG ALU (6X10) PE": {
            "quantity": 1008,
            "trash": 77,
            "percent": 7638.888888888889,
            "THMA2": {
                "quantity": 1008,
                "trash": 77,
                "percent": 7638.888888888889
            }
        },
        "VOLTAREN 75MG X 10 AMP PE": {
            "quantity": 11300,
            "trash": 34,
            "percent": 300.88495575221236,
            "NX5046": {
                "quantity": 11300,
                "trash": 34,
                "percent": 300.88495575221236
            }
        },
        "TEGRM FCT 400MG TRI (3X10) U17_3": {
            "quantity": 3046,
            "trash": 19,
            "percent": 516.4446860559934,
            "THEA8": {
                "quantity": 2413,
                "trash": 19,
                "percent": 787.4015748031496
            },
            "THEE5": {
                "quantity": 633,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TRAVA LDMO 0.04MG/ML PPP 2.5ML (X) PE": {
            "quantity": 4430,
            "trash": 210,
            "percent": 4740.406320541761,
            "VJY32E": {
                "quantity": 4430,
                "trash": 210,
                "percent": 4740.406320541761
            }
        },
        "JAKAV TAB 15MG ACP (6X10) PE": {
            "quantity": 12,
            "trash": 0,
            "percent": 0.0,
            "SLXP2": {
                "quantity": 12,
                "trash": 0,
                "percent": 0.0
            }
        }
    },
    {
        "name": "2024 - Noviembre",
        "quantity": 18359,
        "box": 257,
        "box_saldo": 5,
        "palletes": 32,
        "trash": 444,
        "percent": 2430.801022350318,
        "AR_seco": 7,
        "AR_refrigeration": 0,
        "OC_seco": 7,
        "OC_refrigeration": 0,
        "REVOL FCT 50MG ALU (4X7) R234_5": {
            "quantity": 302,
            "trash": 18,
            "percent": 5960.264900662251,
            "B9350U": {
                "quantity": 302,
                "trash": 18,
                "percent": 5960.264900662251
            }
        },
        "MYFOR FCT 360MG ALU (12X10) PE_3": {
            "quantity": 2660,
            "trash": 255,
            "percent": 9586.466165413534,
            "PC2589": {
                "quantity": 2660,
                "trash": 255,
                "percent": 9586.466165413534
            }
        },
        "GALME FCT 50/1000MG ALU (6X10) U17_5": {
            "quantity": 4680,
            "trash": 37,
            "percent": 790.5982905982906,
            "A01BUR": {
                "quantity": 4680,
                "trash": 37,
                "percent": 790.5982905982906
            }
        },
        "EXFORGE FCT 80/5MG ALU (2X14) U17_9": {
            "quantity": 1317,
            "trash": 21,
            "percent": 1594.5330296127563,
            "TJER8": {
                "quantity": 1317,
                "trash": 21,
                "percent": 1594.5330296127563
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": {
            "quantity": 5270,
            "trash": 59,
            "percent": 1119.5445920303605,
            "VJL44B": {
                "quantity": 5270,
                "trash": 59,
                "percent": 1119.5445920303605
            }
        },
        "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": {
            "quantity": 4100,
            "trash": 51,
            "percent": 1243.9024390243903,
            "VKJ67B": {
                "quantity": 4100,
                "trash": 51,
                "percent": 1243.9024390243903
            }
        },
        "AFINI TAB 10MG ALU (3X10) U17_11": {
            "quantity": 30,
            "trash": 3,
            "percent": 10000.0,
            "SMAD3": {
                "quantity": 30,
                "trash": 3,
                "percent": 10000.0
            }
        }
    },
    {
        "name": "2024 - Diciembre",
        "quantity": 61508,
        "box": 703,
        "box_saldo": 15,
        "palletes": 66,
        "trash": 6441,
        "percent": 10455.798864557988,
        "AR_seco": 19,
        "AR_refrigeration": 2,
        "OC_seco": 17,
        "OC_refrigeration": 2,
        "NEVAN LDMO 1MG/ML LDPE 3ML (X) PES-MM": {
            "quantity": 2440,
            "trash": 101,
            "percent": 4139.3442622950815,
            "VKL10B": {
                "quantity": 2440,
                "trash": 101,
                "percent": 4139.3442622950815
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 51,
            "trash": 2,
            "percent": 3921.5686274509803,
            "PD8293": {
                "quantity": 51,
                "trash": 2,
                "percent": 3921.5686274509803
            }
        },
        "GALME FCT 50/500MG ALU (6X10) U17_5": {
            "quantity": 1536,
            "trash": 15,
            "percent": 976.5625,
            "A01D9S": {
                "quantity": 1536,
                "trash": 15,
                "percent": 976.5625
            }
        },
        "DIOVAN HCT 160/12.5MG X28 COMP.": {
            "quantity": 5184,
            "trash": 84,
            "percent": 1620.3703703703704,
            "TJNM7": {
                "quantity": 5184,
                "trash": 84,
                "percent": 1620.3703703703704
            }
        },
        "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": {
            "quantity": 1000,
            "trash": 0,
            "percent": 0.0,
            "B9230U": {
                "quantity": 1000,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TRILEPTAL SSP 60MG/ML GLB 100ML": {
            "quantity": 2996,
            "trash": 81,
            "percent": 2753.441802252816,
            "ADP2L2782": {
                "quantity": 1997,
                "trash": 52,
                "percent": 2603.9058587881823
            },
            "ADP2L2782A": {
                "quantity": 999,
                "trash": 29,
                "percent": 2902.902902902903
            }
        },
        "RITAL TAB 10MG ALU (2X15) U17_5": {
            "quantity": 30000,
            "trash": 77,
            "percent": 273.35741481987696,
            "B9327C": {
                "quantity": 28800,
                "trash": 70,
                "percent": 243.05555555555554
            },
            "B9327A": {
                "quantity": 471,
                "trash": 0,
                "percent": 0.0
            },
            "B9365V": {
                "quantity": 729,
                "trash": 7,
                "percent": 960.2194787379973
            }
        },
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": {
            "quantity": 255,
            "trash": 1,
            "percent": 392.15686274509807,
            "376268": {
                "quantity": 255,
                "trash": 1,
                "percent": 392.15686274509807
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 121,
            "trash": 0,
            "percent": 0.0,
            "SMCC6": {
                "quantity": 121,
                "trash": 0,
                "percent": 0.0
            }
        },
        "SYBRAVA LISY 284MG GLW 1.5ML (X) R234": {
            "quantity": 135,
            "trash": 10,
            "percent": 7407.407407407408,
            "PB3869": {
                "quantity": 135,
                "trash": 10,
                "percent": 7407.407407407408
            }
        },
        "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": {
            "quantity": 2880,
            "trash": 523,
            "percent": 18159.722222222223,
            "B9387X": {
                "quantity": 2880,
                "trash": 523,
                "percent": 18159.722222222223
            }
        },
        "FEMAR FCT 2.5MG TRI (3X10) PE_1": {
            "quantity": 1190,
            "trash": 49,
            "percent": 4117.64705882353,
            "TJRV8": {
                "quantity": 1190,
                "trash": 49,
                "percent": 4117.64705882353
            }
        },
        "GILEN HGC 0.5MG DUP (2X14) U17_9": {
            "quantity": 26,
            "trash": 1,
            "percent": 3846.153846153846,
            "SMDD5": {
                "quantity": 26,
                "trash": 1,
                "percent": 3846.153846153846
            }
        },
        "ENTRESTO 24MG/26MG X14 MM": {
            "quantity": 1872,
            "trash": 223,
            "percent": 11912.393162393162,
            "TJCA7": {
                "quantity": 1872,
                "trash": 223,
                "percent": 11912.393162393162
            }
        },
        "EXFORGE 160/10MG X7 PE MM": {
            "quantity": 4320,
            "trash": 59,
            "percent": 1365.7407407407406,
            "TJFL9": {
                "quantity": 4320,
                "trash": 59,
                "percent": 1365.7407407407406
            }
        },
        "DUOTRAV BAK-FREE 1.5ML MM": {
            "quantity": 5200,
            "trash": 5200,
            "percent": 100000.0,
            "VLH17B": {
                "quantity": 5200,
                "trash": 5200,
                "percent": 100000.0
            }
        },
        "ENTRESTO 49MG/51MG X14 MM": {
            "quantity": 2160,
            "trash": 10,
            "percent": 462.962962962963,
            "TJLT2": {
                "quantity": 2160,
                "trash": 10,
                "percent": 462.962962962963
            }
        },
        "SANDOSTATIN LAR 20MG POL SUSP INY": {
            "quantity": 142,
            "trash": 5,
            "percent": 3521.1267605633802,
            "376398": {
                "quantity": 142,
                "trash": 5,
                "percent": 3521.1267605633802
            }
        }
    },
    {
        "name": "2025 - Enero",
        "quantity": 60404,
        "box": 501,
        "box_saldo": 15,
        "palletes": 135,
        "trash": 7990,
        "percent": 13233.691164327003,
        "AR_seco": 23,
        "AR_refrigeration": 3,
        "OC_seco": 21,
        "OC_refrigeration": 3,
        "DIOVAN 160 MG X 28 COMP.": {
            "quantity": null,
            "trash": null,
            "percent": null,
            "2422276": {
                "quantity": 5340,
                "trash": 105,
                "percent": 1966.2921348314608
            }
        },
        "DIOVA FCT 80MG ALU (2X14) PE": {
            "quantity": 3180,
            "trash": 79,
            "percent": 2484.276729559748,
            "2436230": {
                "quantity": 3180,
                "trash": 79,
                "percent": 2484.276729559748
            }
        },
        "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": {
            "quantity": 1925,
            "trash": 1925,
            "percent": 100000.0,
            "ADP4L0012": {
                "quantity": 917,
                "trash": 917,
                "percent": 100000.0
            },
            "ADP4L0013": {
                "quantity": 1008,
                "trash": 1008,
                "percent": 100000.0
            }
        },
        "SIMULECT LYVI 20MG GLW 1+1 U17_13": {
            "quantity": 100,
            "trash": 2,
            "percent": 2000.0,
            "SMCK6": {
                "quantity": 100,
                "trash": 2,
                "percent": 2000.0
            }
        },
        "KISQA FCT 200MG ACP (3X21) U17_19": {
            "quantity": 744,
            "trash": 8,
            "percent": 1075.268817204301,
            "PG2814": {
                "quantity": 744,
                "trash": 8,
                "percent": 1075.268817204301
            }
        },
        "GALME FCT 50/850MG ALU (X10) U17S_4 - MM": {
            "quantity": 1258,
            "trash": 206,
            "percent": 16375.198728139905,
            "A01H04": {
                "quantity": 1258,
                "trash": 206,
                "percent": 16375.198728139905
            }
        },
        "GALME FCT 50/1000MG ALU (X10) U17S_3 - MM": {
            "quantity": 2160,
            "trash": 1,
            "percent": 46.2962962962963,
            "A01HEW": {
                "quantity": 2160,
                "trash": 1,
                "percent": 46.2962962962963
            }
        },
        "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": {
            "quantity": 1152,
            "trash": 396,
            "percent": 34375.0,
            "A01HS8": {
                "quantity": 1152,
                "trash": 396,
                "percent": 34375.0
            }
        },
        "EXFOR FCT 160/5MG ALU (4X7) U17_1": {
            "quantity": 2592,
            "trash": 12,
            "percent": 462.962962962963,
            "TKAX9": {
                "quantity": 2592,
                "trash": 12,
                "percent": 462.962962962963
            }
        },
        "EXFOR FCT 80/5MG ALU (2X14) U17_9": {
            "quantity": 987,
            "trash": 45,
            "percent": 4559.270516717325,
            "TJER8": {
                "quantity": 987,
                "trash": 45,
                "percent": 4559.270516717325
            }
        },
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": {
            "quantity": 4950,
            "trash": 122,
            "percent": 2464.6464646464647,
            "PF3430": {
                "quantity": 4950,
                "trash": 122,
                "percent": 2464.6464646464647
            }
        },
        "TASIGNA HGC 150MG DUP 3(5X8) U17_2": {
            "quantity": 25,
            "trash": 4,
            "percent": 16000.0,
            "PF2151": {
                "quantity": 25,
                "trash": 4,
                "percent": 16000.0
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 55,
            "trash": 1,
            "percent": 1818.1818181818182,
            "SMEP4": {
                "quantity": 55,
                "trash": 1,
                "percent": 1818.1818181818182
            }
        },
        "AFINI TAB 10MG ALU (3X10) U17_11": {
            "quantity": 20,
            "trash": 0,
            "percent": 0.0,
            "SMAD3": {
                "quantity": 20,
                "trash": 0,
                "percent": 0.0
            }
        },
        "VIGAMOX .5% OPH SOL 5ML 288<PE": {
            "quantity": 6680,
            "trash": 1000,
            "percent": 14970.059880239522,
            "VKR40B": {
                "quantity": 6680,
                "trash": 1000,
                "percent": 14970.059880239522
            }
        },
        "TOBRADEX UNGUENTO 3.5G-PE": {
            "quantity": 2130,
            "trash": 40,
            "percent": 1877.9342723004695,
            "VKH99D": {
                "quantity": 2130,
                "trash": 40,
                "percent": 1877.9342723004695
            }
        },
        "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": {
            "quantity": 11140,
            "trash": 60,
            "percent": 538.5996409335727,
            "VKL11B": {
                "quantity": 11140,
                "trash": 60,
                "percent": 538.5996409335727
            }
        },
        "DUOTRAV BAK FREE 2.5ML-PE": {
            "quantity": 3780,
            "trash": 3763,
            "percent": 99550.26455026455,
            "VLH17F": {
                "quantity": 3780,
                "trash": 3763,
                "percent": 99550.26455026455
            }
        },
        "DIOVAN HCT 160/12.5MG X28 COMP.": {
            "quantity": 3888,
            "trash": 73,
            "percent": 1877.5720164609054,
            "TJNM7": {
                "quantity": 3888,
                "trash": 73,
                "percent": 1877.5720164609054
            }
        },
        "SANDIMMUN NEORAL 25MG X 50 CAPSULAS": {
            "quantity": 217,
            "trash": 0,
            "percent": 0.0,
            "PD8498": {
                "quantity": 217,
                "trash": 0,
                "percent": 0.0
            }
        },
        "AZARGA 5ML-PE": {
            "quantity": 4570,
            "trash": 80,
            "percent": 1750.54704595186,
            "VLJ59A": {
                "quantity": 4570,
                "trash": 80,
                "percent": 1750.54704595186
            }
        },
        "KESIMPTA LISY 20MG 0.4ML 1X1 R234 (AI)": {
            "quantity": 347,
            "trash": 33,
            "percent": 9510.086455331411,
            "SMCN2": {
                "quantity": 347,
                "trash": 33,
                "percent": 9510.086455331411
            }
        },
        "COSENTYX 150MG/1ML PE": {
            "quantity": 3015,
            "trash": 12,
            "percent": 398.00995024875624,
            "SMAU8": {
                "quantity": 3015,
                "trash": 12,
                "percent": 398.00995024875624
            }
        },
        "TASIG HGC 200MG DUP 4(7X4) U17_6": {
            "quantity": 149,
            "trash": 23,
            "percent": 15593.22033898305,
            "PF9707": {
                "quantity": 3,
                "trash": 0,
                "percent": 0.0
            },
            "PE8837": {
                "quantity": 146,
                "trash": 23,
                "percent": 15753.424657534246
            }
        }
    },
    {
        "name": "2025 - Febrero",
        "quantity": 20833,
        "box": 247,
        "box_saldo": 8,
        "palletes": 20,
        "trash": 1483,
        "percent": 9257.257854134834,
        "AR_seco": 9,
        "AR_refrigeration": 2,
        "OC_seco": 8,
        "OC_refrigeration": 2,
        "SANDOSTATIN LAR 30 MG X 1 JERINGA": {
            "quantity": 149,
            "trash": 23,
            "percent": 15436.241610738254,
            "376875": {
                "quantity": 149,
                "trash": 23,
                "percent": 15436.241610738254
            }
        },
        "DUOTRAV BAK FREE 2.5ML-PE": {
            "quantity": 2570,
            "trash": 325,
            "percent": 12645.91439688716,
            "VLP58E": {
                "quantity": 2570,
                "trash": 325,
                "percent": 12645.91439688716
            }
        },
        "JAKAV TAB 5MG ACP (6X10) PE": {
            "quantity": 55,
            "trash": 0,
            "percent": 0.0,
            "SMJU8": {
                "quantity": 55,
                "trash": 0,
                "percent": 0.0
            }
        },
        "TRILEPTAL SSP 60MG/ML GLB 100ML": {
            "quantity": 1004,
            "trash": 16,
            "percent": 1593.6254980079682,
            "ADP2L2794": {
                "quantity": 1004,
                "trash": 16,
                "percent": 1593.6254980079682
            }
        },
        "TOBRADEX UNGUENTO 3.5G-PE": {
            "quantity": 5290,
            "trash": 85,
            "percent": 1606.805293005671,
            "VMC65C": {
                "quantity": 5290,
                "trash": 85,
                "percent": 1606.805293005671
            }
        },
        "XOLAI LYVI 150MG GLW (+) U17_8": {
            "quantity": 1490,
            "trash": 15,
            "percent": 1006.7114093959732,
            "SMHM2": {
                "quantity": 1490,
                "trash": 15,
                "percent": 1006.7114093959732
            }
        },
        "AFINI TAB 10MG ALU (3X10) U17_11": {
            "quantity": 10,
            "trash": 0,
            "percent": 0.0,
            "SMAD3": {
                "quantity": 10,
                "trash": 0,
                "percent": 0.0
            }
        },
        "JAKAV TAB 15MG ACP (6X10) PE": {
            "quantity": 50,
            "trash": 5,
            "percent": 10000.0,
            "SMLV3": {
                "quantity": 50,
                "trash": 5,
                "percent": 10000.0
            }
        },
        "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": {
            "quantity": 4215,
            "trash": 13,
            "percent": 322.061191626409,
            "PG5738": {
                "quantity": 2220,
                "trash": 6,
                "percent": 270.27027027027026
            },
            "PG5739 ": {
                "quantity": 1995,
                "trash": 7,
                "percent": 350.87719298245617
            }
        },
        "DIOVAN FCT 160MG ALU(X2) MM": {
            "quantity": 6000,
            "trash": 1001,
            "percent": 16683.333333333332,
            "2448002": {
                "quantity": 6000,
                "trash": 1001,
                "percent": 16683.333333333332
            }
        }
    }
];
const lineTrash = {
    name: "Total Deteriorados",
    data: dataNormal,
};

const CustomizedLabel = ({ x, y, stroke, value }) => {
    return (
        <text x={x} y={y} dy={-10} fill={stroke} textAnchor="middle" className="text-xl font-bold">
            {value}
        </text>
    );
}
const CustomizedLabelPercent = ({ x, y, stroke, value }) => {
    return (
        <text x={x} y={y} dy={-30} fill={stroke} textAnchor="middle" className="text-xl font-bold">
            {(value / 1000).toFixed(2)}%
        </text>
    );
}
const CustomTooltipTrashDetail = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const lists = [];
        const listsHTML = [];
        const val = payload[0].payload

        for (const key in val) {
            const listLotes = [];
            if (
                key !== "name" &&
                key !== "value" &&
                key !== "quantity" &&
                key !== "box" &&
                key !== "box_saldo" &&
                key !== "palletes" &&
                key !== "trash" &&
                key !== "percent" &&
                key !== "AR_seco" &&
                key !== "AR_refrigeration" &&
                key !== "OC_seco" &&
                key !== "OC_refrigeration" &&
                val
            ) {
                const v = val[key]
                for (const k in v) {
                    if (
                        k !== "quantity" &&
                        k !== "trash" &&
                        k !== "percent" &&
                        v
                    ) {
                        listLotes.push({
                            total: v[k].trash,
                            key: k
                        })
                    }
                };
                listLotes.sort((a, b) => b.total - a.total);
                lists.push({
                    total: val[key].trash,
                    key: key,
                    list: listLotes
                })
            };
        };

        lists.sort((a, b) => b.total - a.total);

        for (let i = 0; i < lists.length; i++) {
            const {
                total,
                key,
                list
            } = lists[i];

            const lt = [];

            for (let e = 0; e < list.length; e++) {
                const {
                    total,
                    key
                } = list[e];

                lt.push(
                    <div>
                        <p className="text-sm">
                        {key}:
                        <strong className="text-xs ml-2">
                            {total}
                        </strong>
                        </p>
                    </div>
                );
            };

            listsHTML.push(
                <div>
                    <p className="text-sm">
                        {key}:
                        <strong className="text-xs ml-2">
                            {total}
                        </strong>
                    </p>
                    <div className="flex flex-col gap-y-1 ml-4 mt-1">{lt}</div>
                </div>
            );
        };

        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p className="text-2xl">
                    <strong>{payload[0].payload.name}</strong>
                </p>
                <p className="my-4 text-xl" style={{ color: payload[0].color }}>Total Unidades Deterioradas: <strong>{payload[0].value}</strong></p>
                <div className="flex flex-col gap-y-3">{listsHTML}</div>
            </div>
        );
    }
    return null;
};
const CustomTooltipTrash = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div style={{ background: "white", padding: 10, border: "1px solid #ccc" }}>
                <p className="text-2xl">
                    <strong>{payload[0].payload.name}</strong>
                </p>
                <p className="my-4 text-xl" style={{ color: payload[0].color }}>Total Unidades Recepcionadas: <strong>{payload[0].value}</strong></p>
                <p className="my-4 text-xl" style={{ color: payload[2].color }}>Total Unidades Deterioradas: <strong>{payload[2].value}</strong></p>
                <p className="my-4 text-xl" style={{ color: payload[1].color }}>Porcentaje Unidades Recepcionadas: <strong>{(payload[1].value / 1000).toFixed(2)}%</strong></p>
            </div>
        );
    }
    return null;
};

const Deteriorado = ({ typeDeteriorado, yearSelected }) => {

    const [dataFilter, setDataFilter] = useState(dataNormal);
    const [dataFilterLine, setDataFilterLine] = useState(lineTrash);

    useEffect(() => {
        const dataFilter = dataNormal.filter(i => i.name.includes(yearSelected));
        const lineFilter = {
            ...lineTrash,
            data: dataFilter
        }

        setDataFilter(dataFilter);
        setDataFilterLine(lineFilter);
    },[yearSelected]);

    switch (typeDeteriorado) {
        case "detail":
            return (
                <ResponsiveContainer width="98%" height="85%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataFilterLine.data}
                        margin={{
                            top: 40,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />
        
                        <Tooltip content={<CustomTooltipTrashDetail />} />
                        <Legend />
        
                        <Bar dataKey="trash" fill="#161f35">
                            <LabelList content={<CustomizedLabel />} />
                        </Bar>
                        {/* <Line
                            type="monotone"
                            dataKey="trash"
                            data={dataFilterLine.data}
                            name={dataFilterLine.name}
                            key={dataFilterLine.name}
                            strokeWidth={4}
                            stroke="#161f35"
                            fill="#161f35"
                            label={<CustomizedLabel />}
                        >
                        </Line> */}
                    </ComposedChart>
                </ResponsiveContainer>
            )

        default:
            return (
                <ResponsiveContainer width="98%" height="85%">
                    <ComposedChart
                        width={500}
                        height={300}
                        data={dataFilter}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey={"name"} />
                        <YAxis />
        
                        <Tooltip content={<CustomTooltipTrash />} />
                        <Legend />
        
                        <Line
                            type="monotone"
                            dataKey="quantity"
                            strokeWidth={4}
                            stroke="#ffd700"
                            fill="#ffd700"
                            label={<CustomizedLabel />}
                        >
                        </Line>
        
                        <Line
                            type="monotone"
                            dataKey="percent"
                            strokeWidth={4}
                            stroke="#161f35"
                            fill="#161f35"
                            label={<CustomizedLabelPercent />}
                        >
                        </Line>
        
                        <Line
                            type="monotone"
                            dataKey="trash"
                            strokeWidth={4}
                            stroke="#cf1020"
                            fill="#cf1020"
                            label={<CustomizedLabel />}
                        >
                        </Line>
                    </ComposedChart>
                </ResponsiveContainer>
            )
    }
}

export default Deteriorado