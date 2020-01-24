export const state = () => ({
    aboutsailun: [
        {
            "id": 1,
            "fulldesc":[
                {
                    "id": 1,
                    "para": "World Renowned Manufacturer From humble beginnings as a manufacturing testing platform to becoming the 18th largest manufacturer in the world in less than just over 10 years, Sailun pushes the limit of tire production research and development to ensure we stay customers centric. Our goal is always to provide customers and end users with the best value tire products and services. Therefore, we have established local distribution and sales support staff in key areas and ensured we partner with quality distributors who fall in line with the Sailun Tire vision"
                },
                {
                    "id": 2,
                    "para": "Sailun was established in 2002 in the National Economic and Technological Development Zone in Qingdao, China. Now, Sailun sells over 30 million tyres annually in over 50 countries worldwide. From the outset, the Sailun tyre company has combined technical expertise with innovative research and development to design and manufacture world-class tyres for all types of vehicles. It selects only world-class partners and recognised leaders in their specific technological and rubber industry specialisation. Sailun’s growth is attributable to its commitment to three core values – Quality product, service you can Trust and lifetime Support. Sailun is With You Through Every Turn"
                },
                {
                    "id": 3,
                    "para": "Sailun has two factories with a combined capacity of over 500,000 sqm. Via a corporate warehousing facility, Sailun distributes its tyres globally through a precisely-appointed professional network of tyre distributors. Sailun works closely with every single distributor to ensure that the local Sailun opportunity is maximised in the most relevant and appropriate fashion – Think Global, Act Local. Building on the strong foundations of real-world testing, Sailun will continue to develop the most advanced and cost-efficient platform for tyre manufacturing and distribution - while utilising its information technology and substantial research resources to help establish new tyre patterns"
                },
            ],
            "subdesc":"",
            "advantages":[],
        },
    ],
    whysailun: [
        {
            "writeup":[
                {
                    "id": 1,
                    "para":"Sailun Tyres have built up an enviable reputation throughout the world as the manufacturer and provider of high-quality, great value premium economy tyres. Covering a number of applications, Sailun manufactures research-led tyre patterns for every type of day-to-day use"
                },
            ],
            "keypoints":[
                {
                    "id": 1,
                    "title": 'Research and Development',
                    "data":[
                        {
                            "para":"Sailun has made great progress in the tyre industry despite its short history. Sailun currently invests over 30% of its resources in research and development. In 2009, Sailun, together with the Qingdao University of Science and Technology, were nominated to develop a National Tyre Process and Control Engineering Technology Research Centre to develop and build the optimal platform to promote and enhance tyre technology"
                        },
                        {
                            "para":"The Centre studies and resolves key technical issues in the tyre manufacturing process. The vision of the Centre is to move the tyre industry forward through the quest for improved technology and the production of higher quality products. Sailun is the first tyre manufacturer to integrate production, research, and product demonstration into the development of new products. The Centre now employs over 300 technical specialists"
                        },
                        {
                            "para":"Sailun's computerised tyre production and manufacturing processes - in conjunction with management techniques and network control systems - allows it to effectively monitor quality control, resource management, marketing, administration and logistics. In addition, Sailun uses advance information technology to help track the data of each tyre produced, and to benchmark the Sailun tyre quality against other leading international standards of quality and design. Sailun maintains a close relationship with many domestic and overseas universities to develop and improve formulation techniques, tyre structure, tyre testing methods, and information technology"
                        }
                    ]
                },
                {
                    "id": 2,
                    "title": 'Quality',
                    "data":[
                        {
                            "para":"Sailun is accredited internationally and certified to meet the most stringent quality standards and the highest levels of quality assurance. Sailun is proud to have received the Parent Tested Parent Approved (PTPA) Seal of Approval for its Sailun Atrezzo and Ice Blazer tyre line ups. PTPA is North America's largest volunteer parent testing community, with over 50,000 parents. The PTPA Winner's Seal is evidence of a product's excellence from having been evaluated by unbiased parent testers."
                        },
                        {
                            "para":"Sailun has achieved ISO9001 and TS16949 certification for management and ISO14001 certification for environmental management, occupational health and safety systems. Also, Sailun products have been approved by DOT, ECE, GCC, The Smartway Program, INMETRO, SIRIM and SONCAP."
                        }
                    ]
                    
                },
            ]
        },
    ]
})

export const getters = {
    aboutsailun (state){
        return state.aboutsailun
    },
    whysailun (state){
        return state.whysailun
    }
}