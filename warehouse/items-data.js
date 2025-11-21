// ============================================
// DATA ITEM - EDIT DI SINI UNTUK MENAMBAH ITEM
// ============================================
const items = [
    {
        id: 8700446,
        name: "HAPPY COW CUP 85 ML/18",
        image: "8700446.jpg",
        category: "cup"
    },
    {
        id: 8700501,
        name: "MY CUP CHOCO STRAWBERRY 60 ML/36",
        image: "8700501.jpg",
        category: "cup"
    },
    {
        id: 8700533,
        name: "OLYMPIA CHOCO FUDGE 80 ML/26",
        image: "8700533.jpg",
        category: "cup"
    },
    {
        id: 8700586,
        name: "HULA-HULA DURIAN CUP 90 ML/24",
        image: "8700586.jpg",
        category: "cup"
    },
    {
        id: 8700608,
        name: "STRAWBERRY CHEESCAKE 90 ML/24",
        image: "8700608.jpg",
        category: "cup"
    },
    {
        id: 8700623,
        name: "MARVEL CUP 80 ML/26",
        image: "8700623.jpg",
        category: "cup"
    },
    {
        id: 8700660,
        name: "O'CHEESCAKE 90 ML/24",
        image: "8700660.jpg",
        category: "cup"
    },
    {
        id: 8700674,
        name: "SPONGBOB CUP 80 ML/26",
        image: "8700674.jpg",
        category: "cup"
    },
    {
        id: 8700677,
        name: "CONCERTO SUNDAE CHOCOLATE 110 ML/16",
        image: "8700677.jpg",
        category: "concerto"
    },
    {
        id: 8700382,
        name: "CONCERTO CHOCO PASSION 110 ML/16",
        image: "8700382.jpg",
        category: "concerto"
    },
    {
        id: 8700512,
        name: "CONCERTO MIDI COOKIE CREAMY 80 ML/22",
        image: "8700512.jpg",
        category: "concerto"
    },
    {
        id: 8700554,
        name: "CONCERTO MIDI STRAWBERRY CHUNK 80 ML/22",
        image: "8700554.jpg",
        category: "concerto"
    },
    {
        id: 8700603,
        name: "CONCERTO MIDI COOKIE CREAMY 80 ML/22 (GT)",
        image: "8700603.jpg",
        category: "concerto"
    },
    {
        id: 8700604,
        name: "CONCERTO MIDI STRAWBERRY CHUNK 80 ML/22 (GT)",
        image: "8700604.jpg",
        category: "concerto"
    },
    {
        id: 8700633,
        name: "MINI CONCERTO CHOCOLATE 30 ML PARTY PACK ISI 10 PCS/8 IN",
        image: "8700633.jpg",
        category: "concerto"
    },
    {
        id: 8700639,
        name: "CONCERTO ICOWNIC 80 ML/22",
        image: "8700639.jpg",
        category: "concerto"
    },
    {
        id: 8700682,
        name: "MINI CONCERTO STRAWBERRY 30 ML PARTY PACK ISI 10 PCS/8 IN",
        image: "8700682.jpg",
        category: "concerto"
    },
    {
        id: 8700683,
        name: "MINI CONCERTO CHOCOLATE 30 ML PARTY PACK ISI 10 PCS/8 IN",
        image: "8700683.jpg",
        category: "concerto"
    },
    {
        id: 8700465,
        name: "TROPICANA CHOCO VANILLA 65 ML/30",
        image: "8700465.jpg",
        category: "stick"
    },
    {
        id: 8700546,
        name: "PATRICK STICK 65 ML/20",
        image: "8700546.jpg",
        category: "stick"
    },
    {
        id: 8700548,
        name: "SIPDERMAN 55 ML/20",
        image: "8700548.jpg",
        category: "stick"
    },
    {
        id: 8700567,
        name: "HULA-HULA KACANG HIJAU 45 ML/46",
        image: "8700567.jpg",
        category: "stick"
    },
    {
        id: 8700568,
        name: "HULA-HULA TAPE KETAN HITAM 45 ML/46",
        image: "8700568.jpg",
        category: "stick"
    },
    {
        id: 8700573,
        name: "PETIT CHOCOMIX STICK 35 ML/60",
        image: "8700573.jpg",
        category: "stick"
    },
    {
        id: 8700590,
        name: "HAPPY COW MILKY TUTTI FRUITY 55 ML/36",
        image: "8700590.jpg",
        category: "stick"
    },
    {
        id: 8700592,
        name: "SUMMER BARZ DRAGON BERRY 55 ML/30",
        image: "8700592.jpg",
        category: "stick"
    },
    {
        id: 8700600,
        name: "SPONGEBOB STICK 70 ML/24",
        image: "8700600.jpg",
        category: "stick"
    },
    {
        id: 8700609,
        name: "CASHEW NUT 90 ML/16",
        image: "8700609.jpg",
        category: "stick"
    },
    {
        id: 8700613,
        name: "PETIT MILKY CRUNCH 43 ML/46",
        image: "8700613.jpg",
        category: "stick"
    },
    {
        id: 8700615,
        name: "PETIT GRAPE WITH VIT.C 35 ML/60",
        image: "8700615.jpg",
        category: "stick"
    },
    {
        id: 8700624,
        name: "TROPICANA DOUBLE CRUNCH 65 ML/30",
        image: "8700624.jpg",
        category: "stick"
    },
    {
        id: 8700630,
        name: "FANTAZEE STROBERI 55 ML/36",
        image: "8700630.jpg",
        category: "stick"
    },
    {
        id: 8700631,
        name: "FANTAZEE CHCOC MILK 55 ML/36",
        image: "8700631.jpg",
        category: "stick"
    },
    {
        id: 8700637,
        name: "RAINBOW POPS 60 ML/50",
        image: "8700637.jpg",
        category: "stick"
    },
    {
        id: 8700638,
        name: "FANTAZEE CHOCOMIX 55 ML/36",
        image: "8700638.jpg",
        category: "stick"
    },
    {
        id: 8700643,
        name: "HEART CRUNCH 88 ML/18",
        image: "8700643.jpg",
        category: "stick"
    },
    {
        id: 8700644,
        name: "COOKIE CREAMY STICK 55 ML/36",
        image: "8700644.jpg",
        category: "stick"
    },
    {
        id: 8700657,
        name: "SEOUL LYCHEE YOGHURT 55 ML/36",
        image: "8700657.jpg",
        category: "stick"
    },
    {
        id: 8700658,
        name: "KOREAN SHINE MUSCAT 55 ML / 36",
        image: "8700658.jpg",
        category: "stick"
    },
    {
        id: 8700659,
        name: "BLUE LEMONADE 55 ML/36",
        image: "8700659.jpg",
        category: "stick"
    },
    {
        id: 8700661,
        name: "HULA HULA MAXX 65 ML/30",
        image: "8700661.jpg",
        category: "stick"
    },
    {
        id: 8700685,
        name: "HULA-HULA ALPUKAT 45 ML/46",
        image: "8700685.jpg",
        category: "stick"
    },
    {
        id: 8700687,
        name: "FROZEN 55 ML/36",
        image: "8700687.jpg",
        category: "stick"
    },
    {
        id: 8700688,
        name: "HAPPY COW MILKY TUTTI FRUITY 55 ML/36",
        image: "8700688.jpg",
        category: "stick"
    },
    {
        id: 8700691,
        name: "HEART CRUNCH 88 ML/18",
        image: "8700691.jpg",
        category: "stick"
    },
    {
        id: 8700702,
        name: "BON BON 45 ML/30",
        image: "8700702.jpg",
        category: "stick"
    },
    {
        id: 8700038,
        name: "350 ML NEAPOLITAN ISI 16",
        image: "8700038.jpg",
        category: "tub"
    },
    {
        id: 8700088,
        name: "8L CHOCOLATE",
        image: "8700088.jpg",
        category: "tub"
    },
    {
        id: 8700266,
        name: "700 ML NEAPOLITAN ISI 6",
        image: "8700266.jpg",
        category: "tub"
    },
    {
        id: 8700267,
        name: "700 ML BLUEBERRY CHOCO CHUNK ISI 6",
        image: "8700267.jpg",
        category: "tub"
    },
    {
        id: 8700269,
        name: "700 ML CHOCOLATE VANILLA CHOCO CHUNK ISI 6",
        image: "8700269.jpg",
        category: "tub"
    },
    {
        id: 8700360,
        name: "5L CHOCOLATE CHUNK",
        image: "8700360.jpg",
        category: "tub"
    },
    {
        id: 8700365,
        name: "5L STRAWBERRY",
        image: "8700365.jpg",
        category: "tub"
    },
    {
        id: 8700368,
        name: "5L VANILLA",
        image: "8700368.jpg",
        category: "tub"
    },
    {
        id: 8700641,
        name: "700 ML COOKIE CREAMY ISI 6",
        image: "8700641.jpg",
        category: "tub"
    },
    {
        id: 8700642,
        name: "350 ML COOKIE CREAMY ISI 16",
        image: "8700642.jpg",
        category: "tub"
    },
    {
        id: 8700645,
        name: "160 ML NEAPOLITAN ISI 20",
        image: "8700645.jpg",
        category: "tub"
    },
    {
        id: 8700662,
        name: "5L NEAPOLITAN",
        image: "8700662.jpg",
        category: "tub"
    },
    {
        id: 8700663,
        name: "5L CHOCOLATE",
        image: "8700663.jpg",
        category: "tub"
    },
    {
        id: 8700667,
        name: "8L NEAPOLITAN",
        image: "8700667.jpg",
        category: "tub"
    },
    {
        id: 8700668,
        name: "8L VANILLA",
        image: "8700668.jpg",
        category: "tub"
    },
    {
        id: 8700669,
        name: "8L CHOCOLATE",
        image: "8700669.jpg",
        category: "tub"
    },
    {
        id: 8700670,
        name: "700 ML CHOCOLATE VANILLA CHOCO CHUNK ISI 6",
        image: "8700670.jpg",
        category: "tub"
    },
    {
        id: 8700583,
        name: "MOCHI DURIAN 45 ML/24",
        image: "8700583.jpg",
        category: "mochi"
    },
    {
        id: 8700696,
        name: "FRUITZY APPLE 90 ML/36",
        image: "8700696.jpg",
        category: "fruitzy"
    }
];