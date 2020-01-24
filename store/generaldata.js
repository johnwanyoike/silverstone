export const state = () => ({
    aboutgeneral: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "title": 'Passenger and Van Tyres',
                    "subtitle": 'For your everyday adventures',
                    "para": "General Tire is your robust and reliable partner in every driving condition, from a family vacation, to the kid‘s football game or driving to work. General Tire offers products you can rely on for the little adventure in your everyday life."
                },
                {
                    "id": 2,
                    "title": '4x4 Tyres',
                    "subtitle": 'Your 4x4 Specialist',
                    "para": "Wether you‘re driving on paved roads or navigating uncharted territory General Tire offers SUV and 4x4 drivers robust and durable tyres for every application. This is traditionally one of General Tire‘s core competences with its American heritage."
                },
            ],
            "subdesc":"General Tire. A brand of Continental",
        },
    ],
    whygeneral: [
        {
            "writeup":[
                {
                    "id": 1,
                    "title": "Proving Anywhere Is Possible",
                    "para":"For the past 100+ years, we've brought you tires that go faster, grip harder, last longer. And we're just getting started"
                },
                {
                    "id": 2,
                    "title": "More than 100 years of adventure",
                    "para":"Whether you‘re driving paved roads or navigating uncharted territory in the desert. You can go anywhere with General Tire."
                },
                {
                    "id": 3,
                    "title": "",
                    "para":"With more than 100 years of experience in the tyre industry and as part of Continental - a leading tyre manufacturer based in Germany - General Tire delivers products you can rely on."
                },
            ],
            "keypoints":[]
        },
    ]
})

export const getters = {
    aboutgeneral (state){
        return state.aboutgeneral
    },
    whygeneral (state){
        return state.whygeneral
    }
}