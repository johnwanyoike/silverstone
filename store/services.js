export const state = () => ({
    services: [
        {
            "id": 1,
            "image": "6.jpg",
            "title": "TYRE CHANGE",
            "shortdesc":[
                    {
                        "id": 1,
                        "para":"Having tyre problems can be one of the most frustrating times especially when out and about running errands."
                    },
                    {
                        "id": 2,
                        "para":"ContiPartner have a trained and qualified technical team to change your tyre be it a flat tyre or a worn out tyre. Once inspection is carried out, our team will be able to guide you fully on the matter"
                    }
                ],
            "fulldesc":[
                {
                    "id": 1,
                    "para": "Having tyre problems can be one of the most frustrating times especially when out and about running errands."
                },
                {
                    "id": 2,
                    "para": "ContiPartner have a trained and qualified technical team to change your tyre be it a flat tyre or a worn out tyre. Once inspection is carried out, our team will be able to guide you fully on the matter and advise you accordingly."
                },
                {
                    "id": 3,
                    "para": "This would especially be useful when preventing your tyres from further damage. We love nothing more than servicing our clients to ensure you are back on the road, having a smoother drive as quick as possible."
                },
            ]
        },
        {
            "id": 2,
            "image": "7.jpg",
            "title": "WHEEL BALANCING",
            "shortdesc":[
                    {
                        "id": 1,
                        "para":"If driving is becoming more of a balancing act, our experts are ready to even things out. Wheel balancing ensures that the weight of the wheel and tyre is even around the axle."
                    },
                    {
                        "id": 2,
                        "para":"Wheel balancing is prime for a smoother drive or else the highway drives may seem bumpier than normal and so will the steering"
                    }
                ],
            "fulldesc":[
                {
                    "id": 1,
                    "para": "If driving is becoming more of a balancing act, our experts are ready to even things out. Wheel balancing ensures that the weight of the wheel and tyre is even around the axle."
                },
                {
                    "id": 2,
                    "para": "Wheel balancing is prime for a smoother drive or else the highway drives may seem bumpier than normal and so will the steering heel vibrations be a constant pain throughout every journey."
                },
                {
                    "id": 3,
                    "para": "At ContiPartner we shall detect and locate the imbalance efficiently ensuring we restore balance in your car."
                },
                {
                    "id": 4,
                    "para": "If you are purchasing new tyres from us, wheel balancing is a MUST."
                },
            ]
        },
        {
            "id": 3,
            "image": "8.jpg",
            "title": "WHEEL ALIGNMENT",
            "shortdesc":[
                    {
                        "id": 1,
                        "para":"At ContiPartner, we believe one of the most important considerations to vehicle maintenance is to ensure your wheels are correctly aligned."
                    },
                    {
                        "id": 2,
                        "para":"Signs of misaligned wheels can be obvious as your car can feel as though it's pulling to one side of the road, or your"
                    }
                ],
            "fulldesc":[
                {
                    "id": 1,
                    "para": "At ContiPartner, we believe one of the most important considerations to vehicle maintenance is to ensure your wheels are correctly aligned."
                },
                {
                    "id": 2,
                    "para": "Signs of misaligned wheels can be obvious as your car can feel as though it's pulling to one side of the road, or your steering wheel is trembling or vibrating Wheel alignment helps provide optimal tire wear and vehicle handling. Having your wheels aligned guarantees overall safety, performance."
                },
                {
                    "id": 3,
                    "para": "Our technicians are fully qualified and trained to ensure you get the most precise wheel alignment available by using the latest, state of art aligning equipment."
                },
                {
                    "id": 4,
                    "para": "Have a professional wheel alignment every six months or 10,000km, whichever comes first."
                },
            ]
        },
        {
            "id": 4,
            "image": "5.jpg",
            "title": "OIL CHANGE",
            "shortdesc":[
                    {
                        "id": 1,
                        "para":"One of the simplest, most effective and inexpensive ways to help protect the life of your car, especially its engine, is to change the oil and the oil filter regularly."
                    },
                    {
                        "id": 2,
                        "para":"Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons"
                    }
                ],
            "fulldesc":[
                {
                    "id": 1,
                    "para": "One of the simplest, most effective and inexpensive ways to help protect the life of your car, especially its engine, is to change the oil and the oil filter regularly."
                },
                {
                    "id": 2,
                    "para": "Oil is the lifeblood of your engine. It reduces friction, lessens wear, provides lubrication, forms a seal between the pistons rings and cylinder walls while helping to cool engine parts. "
                },
                {
                    "id": 3,
                    "para": "Without the cleaning action of new oil, carbon and varnish buildup would be toxic to the engine. And engine oil even dampens the shock and noise of moving parts. "
                },
                {
                    "id": 4,
                    "para": "Your safety being our priority, this is just the least we can offer."
                },
            ]
        }
    ],
})

export const getters = {
    services (state){
        return state.services
    }
}