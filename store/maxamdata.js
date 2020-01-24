export const state = () => ({
    aboutmaxam: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "title": '',
                    "subtitle": '',
                    "para": "As a major global specialty tire manufacturer and distributor, Maxam Tire has a strong reputation for market leading quality, reliability and delivered value. Our organization’s foundation is centered around world class engineering practices and the most advanced manufacturing platforms within our industry; ensuring superior product quality"
                },
                {
                    "id": 2,
                    "title": '',
                    "subtitle": '',
                    "para": "At Maxam Tire, it is our culture and our people that truly differentiate us from our competitors. We are driven by core values that are centered around innovation and commitment to create an exceptional customer experience. Our people are committed to continued advancement to exceed your expectations."
                },
                {
                    "id": 2,
                    "title": '',
                    "subtitle": '',
                    "para": "Maxam Tire is a rapidly growing global organization, heavily invested in our people, advanced engineering, and our manufacturing facilities to ensure unique business solutions are provided to our customers throughout the world"
                },
            ],
            "subdesc":"",
        },
    ],
    whymaxam: [
        {
            "writeup":[],
            "keypoints":[]
        },
    ]
})

export const getters = {
    aboutmaxam (state){
        return state.aboutmaxam
    },
    whymaxam (state){
        return state.whymaxam
    }
}