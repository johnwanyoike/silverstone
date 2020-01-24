export const state = () => ({
    abouthankook: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "title": 'Contributing to advancement in driving',
                    "subtitle": '',
                    "para": "Based on a commitment to technology and quality that served as a foothold of our growth for the past 70 years, Hankook is constantly working to provide the optimal driving experience to drivers around the world"
                },
                {
                    "id": 2,
                    "title": '',
                    "subtitle": 'Production Capacity',
                    "para": "102 million units"
                },
                {
                    "id": 3,
                    "title": '',
                    "subtitle": 'Global Network',
                    "para": "Local offices in 30 countries, 5 R&D centres located in Korea, USA, Germany, China and Japan"
                },
                {
                    "id": 4,
                    "title": '',
                    "subtitle": 'Production Facilities',
                    "para": "8 production facilities in Korea (2), China (3), USA, Hungary and Indonesia"
                },
                {
                    "id": 5,
                    "title": '',
                    "subtitle": 'Distribution Network',
                    "para": "Available in over 180 countries"
                },
                {
                    "id": 6,
                    "title": 'Driving Emotion',
                    "subtitle": '',
                    "para": "Driving Emotion is an expression that is very close to the heart for all of us at Hankook. It embodies everything that the company is about and elaborately depicts what a driver deserves: dynamic range of emotions that enable drivers to enjoy driving"
                },
                {
                    "id": 7,
                    "title": 'A Spirit of Technology and Innovation',
                    "subtitle": '',
                    "para": "There is solid technological prowess behind what powers Driving Emotion. Ahead of any new development project, Hankook thoroughly analyses consumer research and extracts useful data to develop tires which satisfy the diverse needs of drivers and a broad range of driving styles. The driver is always our top priority and this enables us to always be a step ahead with our technology roadmap, making true Driving Emotion possible."
                },
                {
                    "id": 8,
                    "title": 'A Commitment for Driving Culture',
                    "subtitle": '',
                    "para": "A safe and enjoyable driving experience is every driver's expectation and is Hankook’s foremost challenge. From tire design engineers to marketing professionals, everyone at Hankook is focused on enhancing the relationship between the tires and the driving experience to maximize the feel and excitement of Driving Emotion globally"
                },
                
            ],
            "subdesc":"",
            "advantages":[],
            "writeup":[
                {
                    "id": 1,
                    "para":"Hankook is one of the world’s largest and fastest growing tyre manufacturers for innovative, high-quality and high performance radial tyres with a presence in over 180 countries across the globe."
                },
                {
                    "id": 2,
                    "para":"By combining technological expertise with consumer research, Hankook is committed to producing tyres to satisfy a broad range of driving styles and the diverse needs of drivers, but perhaps most importantly, to create tyres that provide a safe and comfortable driving experience."
                },
                {
                    "id": 3,
                    "para":"Founded in 1941, Hankook aspires to bring consumers the utmost excellence in quality and driving satisfaction, and the company continuously invests in research and development, maintaining five global R&D centres located in Korea, Germany, USA, China and Japan. European tyre production takes place at the state-of-the-art Rácalmás facility in Hungary where more than 3,200 employees produce approximately 14 million tyres a year for passenger cars, SUVs and light trucks"
                }
            ],
        },
    ],
    whyhankook: [
        {
            "writeup":[
                {
                    "id": 1,
                    "para":"To realize the highest level of satisfaction in performance, riding comfort, safety, and eco-friendly driving, our goal is to continually advance our technological capability to produce tires that perform optimally under all conditions."
                },
                {
                    "id": 2,
                    "para":"Kontrol Technology is a philosophy inherent to Hankook and is applied across the entire research, development and production process for all Hankook products. The ‘K’ of Kontrol stands for ‘Kinetic’ or, in other words ‘movement’. Kontrol is based on the basic concept of being able to fully command the interaction between car, driver and the road."
                },
                {
                    "id": 3,
                    "para":"All Hankook products are based on the concept of Kontrol Technology and aim to provide consumers the joy of driving through performance, comfort and safety whilst being more environmentally friendly. From the extreme performance of motorsports, to the daily routine of driving children safely to school on a rainy day, Kontrol Technology is always there."
                },
            ],
            "keypoints":[
                {
                    "id": 2,
                    "image": "",
                    "title": "Performance",
                    "subtitle": "Confidence in driving and smooth handling in any type of road condition",
                    "shortdesc":[
                            {
                                "id": 1,
                                "para":"Tire performance is maximized with improved durability that maintains the best handling even under the worst driving conditions. This allows drivers to always move in the direction of choice under a variety of driving conditions."
                            },
                        ],
                    "fulldesc":[]
                },
                {
                    "id": 3,
                    "image": "",
                    "title": "Safety",
                    "subtitle": "Driver peace of mind with protective technology",
                    "shortdesc":[
                            {
                                "id": 1,
                                "para":"Safety of both the car and driver is guaranteed by maintaining the cars ability to perform while driving, even under harsh weather or road conditions."
                            },
                        ],
                    "fulldesc":[]
                },
                {
                    "id": 4,
                    "image": "",
                    "title": "Comfort",
                    "subtitle": "Stress-free, enjoyable driving",
                    "shortdesc":[
                            {
                                "id": 1,
                                "para":"Based on a deeper understanding of how tires perform and behave in real world conditions, tires are designed to limit noise, vibrations and harshness on the roads to allow for an optimal driving experience."
                            },
                        ],
                    "fulldesc":[]
                },
                {
                    "id": 5,
                    "image": "",
                    "title": "Environment",
                    "subtitle": "Stress-free, enjoyable driving",
                    "shortdesc":[
                            {
                                "id": 1,
                                "para":"Cost for the customers is reduced by increasing fuel efficiency while negative impacts to the environment are minimized by reducing carbon emissions."
                            },
                        ],
                    "fulldesc":[]
                },
            ]
        },
    ]
})

export const getters = {
    abouthankook (state){
        return state.abouthankook
    },
    whyhankook (state){
        return state.whyhankook
    }
}