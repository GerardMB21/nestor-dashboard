import { useState } from "react";
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
import Ocupability from "./Ocupability";
import ActasOC from "./ActasOC";
import UnityBox from "./UnityBox";
import Deteriorado from "./Deteriorado";
import QuantityOcupability from "./QuantityOcupability";
import Dispatch from "./Dispatch";

const dataAROC = [
  {
    name: "2024 - Enero",
    quantity: 39967,
    AR_refrigeration: {
      process: 1,
      quantity: 199,
      box: 7,
      rest: 3,
      capacity: 28,
    },
    AR_seco: {
      process: 14,
      quantity: 39768,
      box: 297,
      rest: 1151,
      capacity: 2649,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 199,
      box: 7,
      rest: 3,
      capacity: 28,
    },
    OC_seco: {
      process: 14,
      quantity: 39768,
      box: 297,
      rest: 1151,
      capacity: 2649,
    },
  },
  {
    name: "2024 - Febrero",
    quantity: 52950,
    AR_refrigeration: {
      process: 2,
      quantity: 3562,
      box: 62,
      rest: 142,
      capacity: 260,
    },
    AR_seco: {
      process: 25,
      quantity: 52875,
      box: 625,
      rest: 1518,
      capacity: 3202,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 3562,
      box: 62,
      rest: 142,
      capacity: 260,
    },
    OC_seco: {
      process: 23,
      quantity: 49388,
      box: 563,
      rest: 1455,
      capacity: 3018,
    },
  },
  {
    name: "2024 - Marzo",
    quantity: 61977,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 15,
      quantity: 61977,
      box: 635,
      rest: 1352,
      capacity: 2610,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 15,
      quantity: 61977,
      box: 635,
      rest: 1352,
      capacity: 2610,
    },
  },
  {
    name: "2024 - Abril",
    quantity: 26659,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 13,
      quantity: 26659,
      box: 278,
      rest: 659,
      capacity: 2179,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 12,
      quantity: 24643,
      box: 250,
      rest: 659,
      capacity: 2107,
    },
  },
  {
    name: "2024 - Mayo",
    quantity: 40578,
    AR_refrigeration: {
      process: 8,
      quantity: 2845,
      box: 32,
      rest: 297,
      capacity: 662,
    },
    AR_seco: {
      process: 13,
      quantity: 38374,
      box: 522,
      rest: 301,
      capacity: 1119,
    },
    OC_refrigeration: {
      process: 6,
      quantity: 2204,
      box: 28,
      rest: 296,
      capacity: 442,
    },
    OC_seco: {
      process: 13,
      quantity: 38374,
      box: 522,
      rest: 301,
      capacity: 1119,
    },
  },
  {
    name: "2024 - Junio",
    quantity: 57086,
    AR_refrigeration: {
      process: 2,
      quantity: 3075,
      box: 61,
      rest: 19,
      capacity: 106,
    },
    AR_seco: {
      process: 14,
      quantity: 55946,
      box: 944,
      rest: 308,
      capacity: 886,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 3075,
      box: 61,
      rest: 19,
      capacity: 106,
    },
    OC_seco: {
      process: 13,
      quantity: 54011,
      box: 824,
      rest: 293,
      capacity: 870,
    },
  },
  {
    name: "2024 - Julio",
    quantity: 48892,
    AR_refrigeration: {
      process: 1,
      quantity: 839,
      box: 3,
      rest: 209,
      capacity: 210,
    },
    AR_seco: {
      process: 17,
      quantity: 48053,
      box: 530,
      rest: 754,
      capacity: 2929,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 839,
      box: 3,
      rest: 209,
      capacity: 210,
    },
    OC_seco: {
      process: 17,
      quantity: 48053,
      box: 530,
      rest: 754,
      capacity: 2929,
    },
  },
  {
    name: "2024 - Agosto",
    quantity: 39086,
    AR_refrigeration: {
      process: 1,
      quantity: 249,
      box: 8,
      rest: 25,
      capacity: 28,
    },
    AR_seco: {
      process: 14,
      quantity: 38837,
      box: 430,
      rest: 1455,
      capacity: 2634,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 249,
      box: 8,
      rest: 25,
      capacity: 28,
    },
    OC_seco: {
      process: 14,
      quantity: 38837,
      box: 430,
      rest: 1455,
      capacity: 2634,
    },
  },
  {
    name: "2024 - Setiembre",
    quantity: 58478,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 14,
      quantity: 63342,
      box: 1055,
      rest: 256,
      capacity: 843,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 11,
      quantity: 58478,
      box: 906,
      rest: 211,
      capacity: 774,
    },
  },
  {
    name: "2024 - Octubre",
    quantity: 38446,
    AR_refrigeration: {
      process: 1,
      quantity: 900,
      box: 4,
      rest: 60,
      capacity: 210,
    },
    AR_seco: {
      process: 21,
      quantity: 54808,
      box: 631,
      rest: 1079,
      capacity: 2229,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 900,
      box: 4,
      rest: 60,
      capacity: 210,
    },
    OC_seco: {
      process: 18,
      quantity: 37546,
      box: 462,
      rest: 921,
      capacity: 1861,
    },
  },
  {
    name: "2024 - Noviembre",
    quantity: 18359,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 7,
      quantity: 18359,
      box: 257,
      rest: 777,
      capacity: 1772,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 7,
      quantity: 18359,
      box: 257,
      rest: 777,
      capacity: 1772,
    },
  },
  {
    name: "2024 - Diciembre",
    quantity: 60308,
    AR_refrigeration: {
      process: 2,
      quantity: 397,
      box: 14,
      rest: 5,
      capacity: 56,
    },
    AR_seco: {
      process: 19,
      quantity: 61111,
      box: 689,
      rest: 892,
      capacity: 2383,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 397,
      box: 14,
      rest: 5,
      capacity: 56,
    },
    OC_seco: {
      process: 17,
      quantity: 59911,
      box: 678,
      rest: 792,
      capacity: 2183,
    },
  },
  {
    name: "2025 - Enero",
    quantity: 60404,
    AR_refrigeration: {
      process: 3,
      quantity: 3462,
      box: 67,
      rest: 62,
      capacity: 200,
    },
    AR_seco: {
      process: 23,
      quantity: 56942,
      box: 434,
      rest: 2383,
      capacity: 4857,
    },
    OC_refrigeration: {
      process: 3,
      quantity: 3462,
      box: 67,
      rest: 62,
      capacity: 200,
    },
    OC_seco: {
      process: 21,
      quantity: 55788,
      box: 404,
      rest: 2381,
      capacity: 4791,
    },
  },
];
const dataNormal = [
  {
    name: "2024 - Enero",
    quantity: 39967,
    trash: 1040,
    box: 304,
    AR_refrigeration: {
      process: 1,
      quantity: 199,
      box: 7,
      rest: 3,
      capacity: 28,
    },
    AR_seco: {
      process: 14,
      quantity: 39768,
      box: 297,
      rest: 1151,
      capacity: 2649,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 199,
      box: 7,
      rest: 3,
      capacity: 28,
    },
    OC_seco: {
      process: 14,
      quantity: 39768,
      box: 297,
      rest: 1151,
      capacity: 2649,
    },
  },
  {
    name: "2024 - Febrero",
    quantity: 52950,
    trash: 2750,
    box: 687,
    AR_refrigeration: {
      process: 2,
      quantity: 3562,
      box: 62,
      rest: 142,
      capacity: 260,
    },
    AR_seco: {
      process: 25,
      quantity: 52875,
      box: 625,
      rest: 1518,
      capacity: 3202,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 3562,
      box: 62,
      rest: 142,
      capacity: 260,
    },
    OC_seco: {
      process: 23,
      quantity: 49388,
      box: 563,
      rest: 1455,
      capacity: 3018,
    },
  },
  {
    name: "2024 - Marzo",
    quantity: 61977,
    trash: 6068,
    box: 635,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 15,
      quantity: 61977,
      box: 635,
      rest: 1352,
      capacity: 2610,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 15,
      quantity: 61977,
      box: 635,
      rest: 1352,
      capacity: 2610,
    },
  },
  {
    name: "2024 - Abril",
    quantity: 26659,
    trash: 4200,
    box: 278,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 13,
      quantity: 26659,
      box: 278,
      rest: 659,
      capacity: 2179,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 12,
      quantity: 24643,
      box: 250,
      rest: 659,
      capacity: 2107,
    },
  },
  {
    name: "2024 - Mayo",
    quantity: 40578,
    trash: 8039,
    box: 554,
    AR_refrigeration: {
      process: 8,
      quantity: 2845,
      box: 32,
      rest: 297,
      capacity: 662,
    },
    AR_seco: {
      process: 13,
      quantity: 38374,
      box: 522,
      rest: 301,
      capacity: 1119,
    },
    OC_refrigeration: {
      process: 6,
      quantity: 2204,
      box: 28,
      rest: 296,
      capacity: 442,
    },
    OC_seco: {
      process: 13,
      quantity: 38374,
      box: 522,
      rest: 301,
      capacity: 1119,
    },
  },
  {
    name: "2024 - Junio",
    quantity: 57086,
    trash: 3796,
    box: 1005,
    AR_refrigeration: {
      process: 2,
      quantity: 3075,
      box: 61,
      rest: 19,
      capacity: 106,
    },
    AR_seco: {
      process: 14,
      quantity: 55946,
      box: 944,
      rest: 308,
      capacity: 886,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 3075,
      box: 61,
      rest: 19,
      capacity: 106,
    },
    OC_seco: {
      process: 13,
      quantity: 54011,
      box: 824,
      rest: 293,
      capacity: 870,
    },
  },
  {
    name: "2024 - Julio",
    quantity: 48892,
    trash: 9433,
    box: 533,
    AR_refrigeration: {
      process: 1,
      quantity: 839,
      box: 3,
      rest: 209,
      capacity: 210,
    },
    AR_seco: {
      process: 17,
      quantity: 48053,
      box: 530,
      rest: 754,
      capacity: 2929,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 839,
      box: 3,
      rest: 209,
      capacity: 210,
    },
    OC_seco: {
      process: 17,
      quantity: 48053,
      box: 530,
      rest: 754,
      capacity: 2929,
    },
  },
  {
    name: "2024 - Agosto",
    quantity: 39086,
    trash: 1119,
    box: 438,
    AR_refrigeration: {
      process: 1,
      quantity: 249,
      box: 8,
      rest: 25,
      capacity: 28,
    },
    AR_seco: {
      process: 14,
      quantity: 38837,
      box: 430,
      rest: 1455,
      capacity: 2634,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 249,
      box: 8,
      rest: 25,
      capacity: 28,
    },
    OC_seco: {
      process: 14,
      quantity: 38837,
      box: 430,
      rest: 1455,
      capacity: 2634,
    },
  },
  {
    name: "2024 - Setiembre",
    quantity: 58478,
    trash: 11497,
    box: 1055,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 14,
      quantity: 63342,
      box: 1055,
      rest: 256,
      capacity: 843,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 11,
      quantity: 58478,
      box: 906,
      rest: 211,
      capacity: 774,
    },
  },
  {
    name: "2024 - Octubre",
    quantity: 38446,
    trash: 3950,
    box: 635,
    AR_refrigeration: {
      process: 1,
      quantity: 900,
      box: 4,
      rest: 60,
      capacity: 210,
    },
    AR_seco: {
      process: 21,
      quantity: 54808,
      box: 631,
      rest: 1079,
      capacity: 2229,
    },
    OC_refrigeration: {
      process: 1,
      quantity: 900,
      box: 4,
      rest: 60,
      capacity: 210,
    },
    OC_seco: {
      process: 18,
      quantity: 37546,
      box: 462,
      rest: 921,
      capacity: 1861,
    },
  },
  {
    name: "2024 - Noviembre",
    quantity: 18359,
    trash: 444,
    box: 257,
    AR_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    AR_seco: {
      process: 7,
      quantity: 18359,
      box: 257,
      rest: 777,
      capacity: 1772,
    },
    OC_refrigeration: {
      process: 0,
      quantity: 0,
      box: 0,
      rest: 0,
      capacity: 0,
    },
    OC_seco: {
      process: 7,
      quantity: 18359,
      box: 257,
      rest: 777,
      capacity: 1772,
    },
  },
  {
    name: "2024 - Diciembre",
    quantity: 60308,
    trash: 6441,
    box: 703,
    AR_refrigeration: {
      process: 2,
      quantity: 397,
      box: 14,
      rest: 5,
      capacity: 56,
    },
    AR_seco: {
      process: 19,
      quantity: 61111,
      box: 689,
      rest: 892,
      capacity: 2383,
    },
    OC_refrigeration: {
      process: 2,
      quantity: 397,
      box: 14,
      rest: 5,
      capacity: 56,
    },
    OC_seco: {
      process: 17,
      quantity: 59911,
      box: 678,
      rest: 792,
      capacity: 2183,
    },
  },
  {
    name: "2025 - Enero",
    quantity: 60404,
    trash: 7990,
    box: 501,
    AR_refrigeration: {
      process: 3,
      quantity: 3462,
      box: 67,
      rest: 62,
      capacity: 200,
    },
    AR_seco: {
      process: 23,
      quantity: 56942,
      box: 434,
      rest: 2383,
      capacity: 4857,
    },
    OC_refrigeration: {
      process: 3,
      quantity: 3462,
      box: 67,
      rest: 62,
      capacity: 200,
    },
    OC_seco: {
      process: 21,
      quantity: 55788,
      box: 404,
      rest: 2381,
      capacity: 4791,
    },
  },
];
const line = {
   name: "Total de unidades",
   data: dataNormal,
};
const lineTrash = {
   name: "Total Deteriorados",
   data: [
      {
         name: "2024 - Enero",
         value: 1040,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE": 154,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 2,
         "DIOVAN HCT 160/25MG X28 COMP.": 432,
         "SANDOSTATIN LAR 30 MG X 1 JERINGA": 3,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 0,
         "VIGAMOX .5% OPH SOL 5ML 288<PE": 53,
         "KISQA FCT 200MG ACP (3X21) R53": 4,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 1,
         "GLIVE FCT 400MG ALU (3X10) PEF": 0,
         "AZARGA 5ML-PE": 117,
         "TOBRADEX SUSP 5ML-PE": 210,
         "ENTRESTO 24MG/26MG X14 MM": 18,
         "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": 46,
      },
      {
         name: "2024 - Febrero",
         value: 2750,
         "TOBRADEX UNGUENTO 3.5G-PE": 470,
         "FEMAR FCT 2.5MG TRI (3X10) PE_1": 19,
         "GALVUS TAB 50MG X7 MM": 29,
         "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 21,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 0,
         "NEVAN LDMO 1MG/ML LDPE 1.5ML (X) MM": 88,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 20,
         "TEGRM FCT 400MG TRI (3X10) U17_3": 63,
         "JAKAV TAB 15MG ACP (6X10) PE": 4,
         "XOLAI LYVI 150MG GLW (+) U17_8": 33,
         "GALME FCT 50/1000MG ALU (6X10) U17_5": 1,
         "MYFOR FCT 360MG ALU (12X10) PE_3": 0,
         "ENTRE FCT 49/51MG ALU (6X10) PE": 204,
         "DIOVAN HCT 160/12.5MG X28 COMP.": 61,
         "TRILEPTAL SSP 60MG/ML GLB 100ML": 44,
         "ENTRESTO 49MG/51MG X14 MM": 88,
         "EXFORGE 160/5MG X7 PE MM": 97,
         "DIOVAN HCT 160/12.5MG  X 14 COMP MM": 1296,
         "ENTRE FCT 24/26MG ALU (3X10) PE": 78,
         "DIOVAN HCT 160/25 ALU X 14 MM": 31,
         "COSENTYX 150MG/1ML PE": 8,
         "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
         "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 94,
      },
      {
         name: "2024 - Marzo",
         value: 6068,
         "GALME FCT 50/850MG ALU (6X10) U17_5": 1,
         "DIOVAN FCT 160MG ALU(X2) MM": 1474,
         "DIOVA FCT 80MG ALU (2X14) PE": 462,
         "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": 8,
         "EXFORGE FCT 160/5MG ALU (2X14) U17_9": 8,
         "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 361,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 10,
         "DUOTRAV BAK-FREE 1.5ML MM": 2786,
         "GILEN HGC 0.5MG DUP (2X14) U17_9": 0,
         "RITAL TAB 10MG ALU (2X15) U17_5": 2,
         "KISQA FCT 200MG ACP (3X21) R53": 15,
         "FEMAR FCT 2.5MG TRI (3X10) PE_1": 884,
         "TOBREX 5ML-PE": 57,
      },
      {
         name: "2024 - Abril",
         value: 4200,
         "VOTRI FCT 400MG HDPE (X30) R234_2": 3,
         "DIOVAN HCT 160/25MG X28 COMP.": 143,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 9,
         "TOBRADEX UNGUENTO 3.5G-PE": 2550,
         "EXFORGE 160/5MG X7 PE MM": 14,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 46,
         "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 82,
         "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": 357,
         "AFINI TAB 10MG ALU (3X10) U17_11": 2,
         "GALME FCT 50/1000MG ALU (6X10) U17_5": 994,
      },
      {
         name: "2024 - Mayo",
         value: 8039,
         "XOLAI LYVI 150MG GLW (+) U17_8": 6,
         "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 47,
         "SANDOSTATIN LAR 30 MG X 1 JERINGA": 33,
         "TEGRETOL 2% JARABE 100ML": 0,
         "VOLTAREN SR FCT 100MG (3X10) PE": 7403,
         "EXFORGE 160/10MG X7 PE MM": 9,
         "REVOL FCT 50MG ALU (4X7) R234_5": 2,
         "ENTRE FCT 97/103MG ALU (6X10) PE": 57,
         "TEGRM FCT 400MG TRI (3X10) U17_3": 72,
         "ENTRESTO 97MG/103MG X14 MM": 24,
         "KESIMPTA LISY 20MG GLW 0.4ML (X) B0": 1,
         "ENTRESTO 49MG/51MG X14 MM": 365,
         "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 3,
         "JAKAV TAB 5MG ACP (6X10) PE": 1,
         "EXFORGE FCT 160/5MG ALU (2X14) U17_9": 10,
         "MAYZE FCT 2MG ALU (2X14) R65": 3,
         "MAYZE FCT 0.25MG ALU (10X12) R65": 2,
      },
      {
         name: "2024 - Junio",
         value: 3796,
         "DIOVAN HCT 160/12.5MG  X 14 COMP MM": 163,
         "DIOVAN FCT 160MG ALU(X2) MM": 404,
         "TEGRE TAB 200MG PVC (2X10) PE": 2415,
         "MYFOR FCT 360MG ALU (12X10) PE_3": 0,
         "VOLTAREN 75MG X 10 AMP PE": 543,
         "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 2,
         "ENTRE FCT 24/26MG ALU (3X10) PE": 100,
         "MAYZE FCT 0.25MG ALU (X12) R65": 3,
         "TRILEPTAL SSP 60MG/ML GLB 100ML": 27,
         "EXFOR FCT 160/5MG ALU (4X7) U17_1": 96,
         "COSENTYX 150MG/1ML PE": 4,
         "GLIVE FCT 400MG ALU (3X10) PEF": 4,
         "VOTRI FCT 400MG HDPE (X30) R234_2": 3,
         "GALME FCT 50/850MG ALU (6X10) U17_5": 32,
      },
      {
         name: "2024 - Julio",
         value: 9433,
         "ENTRE FCT 49/51MG ALU (6X10) PE": 497,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 925,
         "AZARGA 5ML-PE": 0,
         "XOLAI LYVI 150MG GLW (+) U17_8": 1,
         "AFINI TAB 10MG ALU (3X10) U17_11": 0,
         "GALME FCT 50/850MG ALU (6X10) U17_5": 19,
         "TOBRADEX OPH SOL 2.5ML-MM": 360,
         "ENTRESTO 24MG/26MG X14 MM": 18,
         "TOBRADEX SUSP 5ML-PE": 1560,
         "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 435,
         "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 2094,
         "GALME FCT 50/1000MG ALU (6X10) U17_5": 73,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 3,
         "FEMAR FCT 2.5MG TRI (3X10) PE_1": 24,
         "DUOTRAV BAK FREE 2.5ML-PE": 3265,
         "DIOVAN HCT 160/25 ALU X 14 MM": 93,
         "KISQA FCT 200MG ACP (3X21) R53": 66,
      },
      {
         name: "2024 - Agosto",
         value: 1119,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "TOBREX 5ML-PE": 26,
         "JAKAV TAB 15MG ACP (6X10) PE": 1,
         "VIGAMOX .5% OPH SOL 5ML 288<PE": 873,
         "TOBRADEX UNGUENTO 3.5G-PE": 4,
         "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 5,
         "ENTRE FCT 49/51MG ALU (6X10) PE": 15,
         "TRILEPTAL SSP 60MG/ML GLB 100ML": 17,
         "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 24,
         "GALME FCT 50/1000MG ALU (6X10) U17_5": 15,
         "RITAL TAB 10MG ALU (2X15) U17_5": 42,
         "SANDOSTATIN LAR 30 MG X 1 JERINGA": 9,
         "DIOVAN HCT 80/12.5MG X 28 COMP.": 60,
         "DIOVAN HCT 160/25MG X28 COMP.": 28,
      },
      {
         name: "2024 - Setiembre",
         value: 11497,
         "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": 3,
         "ENTRE FCT 24/26MG ALU (3X10) PE": 319,
         "GALVU TAB 50MG ALU (4X14) PE_1": 854,
         "SANDIMMUN LIAM 50MG/1ML 1X10 U17": 2,
         "REVOL FCT 50MG ALU (4X7) R234_5": 13,
         "MYFOR FCT 360MG ALU (12X10) PE_3": 105,
         "EXFORGE FCT 160/12.5/5MG ALU (2X7) U17_2": 25,
         "EXFORGE 160/10MG X7 PE MM": 3904,
         "VIGAD LDMO 5/1MG/ML LDPE 5ML (X) PE": 6251,
         "GILEN HGC 0.5MG DUP (2X14) U17_9": 0,
         "CERTI TAB 0.75MG ALU (6X10) R56": 21,
      },
      {
         name: "2024 - Octubre",
         value: 3950,
         "DIOVAN HCT 160/25MG X28 COMP.": 42,
         "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 97,
         "KISQA FCT 200MG ACP (3X21) R53": 757,
         "RITAL TAB 10MG ALU (2X15) U17_5": 91,
         "PATAD LDMO 2MG/ML LDPE 2.5ML (X) PE": 216,
         "XOLAI LYVI 150MG GLW (+) U17_8": 18,
         "EXFORGE FCT 160/10MG ALU (4X7) U17_1": 11,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "EXFORGE FCT 160/12.5/10MG ALU (2X7) U172": 89,
         "TASIGNA HGC 150MG DUP 3(5X8) U17_2": 3,
         "TRAVA LDMO0.04MG/ML LDPE1.5ML (X) MM": 2263,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 9,
         "VOLTAREN FCT 50MG 10X10 PE": 14,
         "ENTRE FCT 97/103MG ALU (6X10) PE": 77,
         "VOLTAREN 75MG X 10 AMP PE": 34,
         "TEGRM FCT 400MG TRI (3X10) U17_3": 19,
         "TRAVA LDMO 0.04MG/ML PPP 2.5ML (X) PE": 210,
         "JAKAV TAB 15MG ACP (6X10) PE": 0,
      },
      {
         name: "2024 - Noviembre",
         value: 444,
         "REVOL FCT 50MG ALU (4X7) R234_5": 18,
         "MYFOR FCT 360MG ALU (12X10) PE_3": 255,
         "GALME FCT 50/1000MG ALU (6X10) U17_5": 37,
         "EXFORGE FCT 80/5MG ALU (2X14) U17_9": 21,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 59,
         "AZARG LDMO10/5MG/ML LDPE 2.5ML(X) MM": 51,
         "AFINI TAB 10MG ALU (3X10) U17_11": 3,
      },
      {
         name: "2024 - Diciembre",
         value: 6441,
         "NEVAN LDMO 1MG/ML LDPE 3ML (X) PES-MM": 101,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 2,
         "GALME FCT 50/500MG ALU (6X10) U17_5": 15,
         "DIOVAN HCT 160/12.5MG X28 COMP.": 84,
         "EXFOH FCT 160/25/10MG ALU (4X7) U17_4": 0,
         "TRILEPTAL SSP 60MG/ML GLB 100ML": 81,
         "RITAL TAB 10MG ALU (2X15) U17_5": 77,
         "SANDOSTATIN LAR 30 MG X 1 JERINGA": 1,
         "JAKAV TAB 5MG ACP (6X10) PE": 0,
         "SYBRAVA LISY 284MG GLW 1.5ML (X) R234": 10,
         "ULTIBRO HNCI0.11/0.05MGALU(3X10)R53_1": 523,
         "FEMAR FCT 2.5MG TRI (3X10) PE_1": 49,
         "GILEN HGC 0.5MG DUP (2X14) U17_9": 1,
         "ENTRESTO 24MG/26MG X14 MM": 223,
         "EXFORGE 160/10MG X7 PE MM": 59,
         "DUOTRAV BAK-FREE 1.5ML MM": 5200,
         "ENTRESTO 49MG/51MG X14 MM": 10,
         "SANDOSTATIN LAR 20MG POL SUSP INY": 5,
      },
      {
         name: "2025 - Enero",
         value: 7990,
         "DIOVAN 160 MG X 28 COMP.": 105,
         "DIOVA FCT 80MG ALU (2X14) PE": 79,
         "SANDIMMUN NEORAL SOL 100 mg/ml 50 ml": 1925,
         "SIMULECT LYVI 20MG GLW 1+1 U17_13": 2,
         "KISQA FCT 200MG ACP (3X21) U17_19": 8,
         "GALME FCT 50/850MG ALU (X10) U17S_4 - MM": 206,
         "GALME FCT 50/1000MG ALU (X10) U17S_3 - MM": 1,
         "GALME FCT 50/500MG ALU (X10) U17S_4 - MM": 396,
         "EXFOR FCT 160/5MG ALU (4X7) U17_1": 12,
         "EXFOR FCT 80/5MG ALU (2X14) U17_9": 45,
         "SANDIMMUN NEORAL 50MG X 50 CAPSULAS": 122,
         "TASIGNA HGC 150MG DUP 3(5X8) U17_2": 4,
         "JAKAV TAB 5MG ACP (6X10) PE": 1,
         "AFINI TAB 10MG ALU (3X10) U17_11": 0,
         "VIGAMOX .5% OPH SOL 5ML 288<PE": 1000,
         "TOBRADEX UNGUENTO 3.5G-PE": 40,
         "NEVAN LDMO 1MG/ML LDPE 5ML (X) PE_1": 60,
         "DUOTRAV BAK FREE 2.5ML-PE": 3763,
         "DIOVAN HCT 160/12.5MG X28 COMP.": 73,
         "SANDIMMUN NEORAL 25MG X 50 CAPSULAS": 0,
         "AZARGA 5ML-PE": 80,
         "KESIMPTA LISY 20MG 0.4ML 1X1 R234 (AI)": 33,
         "COSENTYX 150MG/1ML PE": 12,
         "TASIG HGC 200MG DUP 4(7X4) U17_6": 23,
      },
   ],
};

const optionsAROC = [
   {
      name: "Actas",
      value: [
         "AR_seco",
         "AR_refrigeration"
      ]
   },
   {
      name: "Actas Seco",
      value: [
         "AR_seco"
      ]
   },
   {
      name: "Actas Refrigerado",
      value: [
         "AR_refrigeration"
      ]
   },
   {
      name: "OC",
      value: [
         "OC_seco",
         "OC_refrigeration"
      ]
   },
   {
      name: "OC Seco",
      value: [
         "OC_seco",
      ]
   },
   {
      name: "OC Refrigerado",
      value: [
         "OC_refrigeration",
      ]
   },
   {
      name: "Ar VS Oc",
      value: [
         "Todos"
      ]
   },
]
const optionsOcupability = [
   {
      name: "Todos",
      value: "Todos"
   },
   {
      name: "Contramuestras",
      value: "Contramuestras"
   },
   {
      name: "Devoluciones",
      value: "Devoluciones"
   },
   {
      name: "Controlados",
      value: "Controlados"
   },
   {
      name: "Rechazados",
      value: "Rechazados"
   },
   {
      name: "PT Muestra Médica",
      value: "PT Muestra Médica"
   },
   {
      name: "Material de empaque",
      value: "Material de empaque"
   },
   {
      name: "PT Disponible",
      value: "PT Disponible"
   },
   {
      name: "PT Cuarentena",
      value: "PT Cuarentena"
   },
   {
      name: "Mat Embalaje",
      value: "Mat Embalaje"
   },
   {
      name: "Cuarentena Controlados",
      value: "Cuarentena Controlados"
   },
   {
      name: "Cuarentena Material de empaque",
      value: "Cuarentena Material de empaque"
   },
   {
      name: "MM Cuarentena",
      value: "MM Cuarentena"
   },
]
const optionsUnity = [
    // {
    //     name: "Unidades / Cajas",
    //     value: "todos"
    // },
    {
        name: "Total Unidades",
        value: "quantity"
    },
    {
        name: "Total Palletes",
        value: "palletes"
    },
    {
        name: "Total Cajas",
        value: "box"
    },
]
const optionsDeteriorado = [
   {
      name: "Detalle de Productos",
      value: "detail"
   },
   {
      name: "Porcentaje Deteriorado",
      value: "pecent"
   },
]
const optionsFilter = [
   {
      name: "Todo",
      value: "all"
   },
   {
      name: "Mes",
      value: "month"
   },
   {
      name: "Cliente",
      value: "client"
   },
]

function getNameParse(name) {
  switch (name) {
    case "AR_seco.process":
      return "AR Seco";

    case "AR_refrigeration.process":
      return "AR Refrigeración";

    case "OC_seco.process":
      return "OC Seco";

    case "OC_refrigeration.process":
      return "OC Refrigeración";

    default:
      return "Cantidad";
      break;
  }
}

const CustomLabel = ({ x, y, width, height, value }) => {
  if (!value || value === 0) return null;
  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      textAnchor="middle"
      fontSize={12}
      fill="white"
    >
      {value}
    </text>
  );
};

const CustomTotalLabel = ({ x, y, width, value }) => {
  if (!value || value === 0) return null;
  return (
    <text
      x={x + width / 2}
      y={y - 10}
      textAnchor="middle"
      fontSize={14}
      fill="#000"
    >
      {value}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    let quantitySeco = 0;
    let quantityRefrigeration = 0;

    const list = payload.map((entry, index) => {
      const keys = entry.dataKey.split(".");
      const principalKey = keys[0];

      if (principalKey.includes("seco")) {
        quantitySeco = quantitySeco + entry.payload[principalKey].quantity;
      } else if (principalKey.includes("refrigeration")) {
        quantityRefrigeration =
          quantityRefrigeration + entry.payload[principalKey].quantity;
      }

      return (
        <p key={index} style={{ color: entry.color }}>
          {getNameParse(entry.name)}: {entry.value}
        </p>
      );
    });

    return (
      <div
        style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
      >
        <p>
          <strong>{payload[0].payload.name}</strong>
        </p>
        <p>Total Unidades: {(quantitySeco + quantityRefrigeration) / 2}</p>
        <p>Total Unidades Seco: {quantitySeco / 2}</p>
        <p>Total Unidades Refrigerado: {quantityRefrigeration / 2}</p>
        {list}
      </div>
    );
  }
  return null;
};

const CustomTooltipTotal = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
      >
        <p>
          <strong>{payload[1].payload.name}</strong>
        </p>
        <p>Total Unidades: {payload[1].value}</p>
        <p>Total Cajas: {payload[1].payload.box}</p>
      </div>
    );
  }
  return null;
};

const CustomTooltipTrash = ({ active, payload }) => {
   if (active && payload && payload.length) {
      const lists = [];
      // console.log(payload)

      // for (const key in payload[0].payload) {
      //    if (key !== "name" && key !== "value" && payload[0].payload[key] !== 0)
      //    lists.push(
      //       <div>
      //          <p className="text-sm">
      //          {key}:
      //          <strong className="text-lg ml-2">
      //             {payload[0].payload[key]}
      //          </strong>
      //          </p>
      //       </div>
      //    );
      // }

      return (
         <div
         style={{ background: "white", padding: 10, border: "1px solid #ccc" }}
         >
            <p className="text-2xl">
               <strong>{payload[0].payload.name}</strong>
            </p>
            <p className="my-4 text-xl" style={{ color: payload[0].color }}>Total Unidades Recepcionadas: <strong>{payload[0].value}</strong></p>
            <p className="my-4 text-xl" style={{ color: payload[1].color }}>Total Unidades Deterioradas: <strong>{payload[1].value}</strong></p>
            <p className="my-4 text-xl">Porcentaje de Unidades Deterioradas: <strong>{((payload[1].value / payload[0].value) * 100).toFixed(2)}%</strong></p>
            {/* <div className="flex flex-col gap-y-3">{lists}</div> */}
         </div>
      );
   }
   return null;
};

const GroupBars = ({ type, yearSelected }) => {
   const [typeAROC, setTypeAROC] = useState([
    "AR_seco",
    "AR_refrigeration"
    ]);
   const [typeO, setTypeO] = useState("Todos");
   const [typeUnity, setTypeUnity] = useState("quantity");
   const [typeDeteriorado, setTypeDeteriorado] = useState("detail");
   const [typeFilter, setTypeFiler] = useState("all");

   switch (type) {
      case "AROC":
         return (
            <div className="w-full h-full mt-6">

               <div className='w-full p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                  {optionsAROC.map(({ name, value }, index) => (
                     <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-lg font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeAROC[0] == value[0] && typeAROC[1] == value[1] ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeAROC(value)}>
                           {name}
                     </button>
                  ))}
               </div>

               <ActasOC typeAROC={typeAROC} yearSelected={yearSelected} />
            </div>
         );

      case "TOTAL":
         return (
            <div className="w-full h-full mt-6">

               <div className='w-full p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                  {optionsUnity.map(({ name, value }, index) => (
                     <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-lg font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeUnity == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeUnity(value)}>
                           {name}
                     </button>
                  ))}
               </div>

               <UnityBox typeUnity={typeUnity} yearSelected={yearSelected} />
            </div>
         );

      case "DETERIORADO":
         return (
            <div className="w-full h-full mt-6">

               <div className='w-full p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                  {optionsDeteriorado.map(({ name, value }, index) => (
                     <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-lg font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeDeteriorado == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeDeteriorado(value)}>
                           {name}
                     </button>
                  ))}
               </div>

               <Deteriorado typeDeteriorado={typeDeteriorado} yearSelected={yearSelected} />
            </div>
         );

      case "OCUPABILITY":
         return (
            <div className="w-full h-full mt-6">

               <div className='w-full p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                  {optionsOcupability.map(({ name, value }, index) => (
                     <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-base font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeO == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeO(value)}>
                           {name}
                     </button>
                  ))}
               </div>

               <Ocupability typeO={typeO} yearSelected={yearSelected} />
            </div>
         );

      case "QUANTITY":
         return (
            <QuantityOcupability yearSelected={yearSelected} />
         );

      case "BOX_PALLETES":
         return (
            <div className="w-full h-full mt-6">

               <div className='w-full p-3 flex items-center justify-between gap-x-4 rounded-lg bg-gray-three'>
                  {optionsFilter.map(({ name, value }, index) => (
                     <button key={"optionOcupability-" + index} className={cn('w-full p-2 text-center text-lg font-semibold rounded-lg transition-all duration-500 cursor-pointer hover:bg-white', typeFilter == value ? "border bg-white border-black-two" : "bg-gray-two")} onClick={() => setTypeFiler(value)}>
                           {name}
                     </button>
                  ))}
               </div>

               <Dispatch typeFilter={typeFilter} yearSelected={yearSelected} />
            </div>
         );

      default:
         return <div>Nada</div>;
   }
};

export default GroupBars;
