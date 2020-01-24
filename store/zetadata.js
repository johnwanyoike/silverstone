export const state = () => ({
    aboutzeta: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "para": "ZETA is a tyre brand from SD-international with a promise of performance"
                },
                {
                    "id": 2,
                    "para": "ZETA committed itself to improve vehicles handling performance for your comfort driving"
                },
                {
                    "id": 3,
                    "para": "ZETA is not only the fulcrum between vehicles and road surface, but to make vehicles a better performance through ZETA"
                },
            ],
            "subdesc":"",
            "advantages":[],
        },
    ],
    whyzeta: [
        {
            "writeup":[
                {
                    "id": 1,
                    "para":"Premium budget tires manufactured in Thailand"
                },
                {
                    "id": 2,
                    "para":"Tyres at competitive prices, without compromising Quality and Performance."
                },
                {
                    "id": 3,
                    "para":"Variety of performance designs engineered in the USA"
                },
                {
                    "id": 4,
                    "para":"Presence in UK, USA, Canada, India, Germany, Spain, UAE, Thailand, China"
                }
            ],
            "keypoints":[]
        },
    ]
})

export const getters = {
    aboutzeta (state){
        return state.aboutzeta
    },
    whyzeta (state){
        return state.whyzeta
    }
}