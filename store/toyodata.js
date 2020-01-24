export const state = () => ({
    abouttoyo: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "para": "Toyo Tires is one of the world’s leading tire manufacturers with subsidiaries or agents in over 100 countries and regions. We make tire products for passenger vehicles, large vehicles such as SUVs, CUVs and pickup trucks as well as trucks and buses"
                },
                {
                    "id": 2,
                    "para": "With a growing worldwide tire demand, the Toyo Tires Group is building a global production and supply system with the aim of ensuring a quick supply of products critical to each regional market"
                },
                {
                    "id": 3,
                    "para": "To ensure consistent, high performance and quality anywhere, our unique philosophy is to continue to refine our technologies and then transplant the latest technolog y into our newly built plants. Our unwavering policy is to deliver to the world the high performance and quality (Japanese quality) that we create as a Japanese tire manufacturer."
                },
            ],
            "subdesc":"Toyo Tires – Driven to Perform",
            "advantages":[
                {
                    "id": 1,
                    "title": "Original Equipment (OE) Fitments",
                    "para":"Toyo Tire & Rubber Co., Ltd. is an original equipment manufacturer (OEM), providing passenger and light truck tires for many well known vehicle makes and models"
                },
            ],
        },
    ],
    whytoyo: [
        {
            "writeup":[
                {
                    "id": 1,
                    "para":"When you choose Toyo, you make a statement. No matter the road, count on Toyo Tires to bring quality and performance to your sports car, luxury saloon, SUV, or pick-up truck."
                },
                {
                    "id": 2,
                    "para":"Wide range of tyres for various applications:"
                },
            ],
            "keypoints":[
                {
                    "id": 1,
                    "title": 'FAMILY AND ECO CARS',
                    "para":"A balance of comfort, safety, environmental performance and mileage"
                },
                {
                    "id": 2,
                    "title": 'SUVS',
                    "para":"Stability and comfort for modern high performance SUVs"
                },
                {
                    "id": 3,
                    "title": '4X4 VEHICLES',
                    "para":"Rugged Mobility, whatever the terrains"
                },
            ]
        },
    ]
})

export const getters = {
    abouttoyo (state){
        return state.abouttoyo
    },
    whytoyo (state){
        return state.whytoyo
    }
}