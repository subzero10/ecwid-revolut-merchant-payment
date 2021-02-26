'use strict';

const encoded = '_E7y4iRrVhL-uCHP-vq51QHUx5LTggGl6BUl-rbbNFp9Aqfaptqj3HtQ-AY6KvqJV7YyteR2BNWnAOAW53wJqzgH91rrof1O8mKuCZw3juuEqx8XHxq9G_UUB-AL213IFRs80_s4lF5MkhvMA4Cw7sXPw0PjvQynpljkQomH7Aq9S_UOwS7UUrqF5r6YK5vAN6i78EvFNL1Jhxp0ems92oFcmmOgQog9sZAU0x3vTWXu0q9fDLzF_Hca6HgmJ5SuCj-8mzzWwaWvnB2P7sZ4xeEP51HBdcTJxRXXhOVM5adU5zCbMAorZItxL8V6fATysqbYc9sLjHNLNBuKGd_KNJbINudWARx6ReHMRbcWDhczl4GqPgB1QMUKv-I7LUDYIfeqg_MjiGniSgIdYV3I0hA2BpCRxhSUdMVykvQuR2TuM5M_WneDjZgXla7QH6e2m2F4r1xIp9S0rGdHpYt_51cQRuVNUELC7hbadoXVr4v0wnAz9qJIrDFQqvi-MtuwG_LHVSqr67Tj_xfPk-4iOH96noMdC3_3gb45PUC-B4PCgN6XwJWnM1zi0a61XsF8OEux0vTR2O-N6B-4-QD0AWGchhyE5B0-ZXjDOEbbdvsi5AMLMimZRRx4NesqgPuq3qufmucouVZwss5w-WaADIWR2w35SoWdupmkiMFxAVLJ1AO6gYv6uzx3fQZo2z0S0uxbPI0QKsc9AQFWu1L0DFqU6dtHokiua057pTNDE0MRPgJvYjcUmTQL81ONgCgotbaXOP_yzCT5gK2EZuS5oyELuIIbnXCGywF4rG3OZbUL2FnIgemowuMxKk3SjGccuY-pgxvm6LtXVaO0FlMZAt3C61EsPr5fvrHCgbSU6Ey5cbOzJrmYz4zeY1CxHnf9jsV-6MRb6ruJgLJnsSOOoqKTZHKy_vyJGDLKfnScBXjJBFuqY_rSFcUVCeRHSrQ-t2hOeFP3mTFXbr1xVQqPrIXtasSRPk7q9thehD5_gG9rOma5SwHZNLW6LU-c1F6Fre54hbbipGmUUUnJCa5wk4WgkHnWfuFSaIjDOdyphheMdQrToAfqoA1f3l-JXN6MPYT1x3y5hoGKJ1OFjIMkPDYO2Bu338urDc6HHngGckCH4s_xbqU5MqTSXKYWmrS_i0_oIQE8G-kIEDuYwlXcdMUK3KOmQEs5PBEUjSs2PBGu5vPhgywRb6pOdbJgrrVdPXikvxx0_kSyO6skyWNRU30GIrt_Ifh4qOerOF_DNfZSm09l1-6ciqayn0I-8MRIKGu32m8tJS0WLRF67r2uGLrZibeWF8WFoh8P0V1FRQdOCxEKvqx6rhSFxIFZNgYnew2zdStKwA-26UtQTXUtm2Ih6R1A9KcBxSqZwHI_89zpRCWWKxzzie4SjkVSmOLZufzPQCaMHnEw4kTozEkJffO-D30JUI9HRsfWiju56Af4BTAU70q4yPSdumiqLDkeLD_1tPqcWaL78HBWWvum3EBppkgu-wnA49tFFVhyJxRDiA9EsPBPE5A9ARvHPk52FSsoBgt_8AAH3lcddPyszcsweTfURn1ivQufFkEjkRTbzZnHfF9CZbUOxtYifHF7pFatsri_A-5gjOUhYm19-lImuzrl4LR4daoTuKKHLGAXYEsLwORA88XnrQ4b-p7r6O7L3JT91Iwl4EWVSuy-W2x7Fd3zwzJh6wUAjXo6Bukgu9JOPWgdVliLc4p14nz6teotr6QREjbmy7UNdq7XSdE74iExaU4-EmyjGhGzYfkg_oHGVwkMX2iwS14b7NSquf52EmnReN2HWUPwKZe_u2qcbv-nM8YM15R87J5GW4YPKErOwaerpzaQt53A8m6lmS7bUAiuH6219XumF99AKDZpCrxMvDb2E5KPkCu2fqUsKnuvpurEfgkxqPFnbGmMyJNQ-CpeBbBKCafD9r8H0FhSk8DyhzAxYT1mxrE-Z-UYYJ7NIh7MxqBTdYrzEUYJAnDTOWv88oTkfbnAFs4Bxc9myEizTw2tfx8VptTFfFopUN-Y5sIPsW9B9dp0RWeUY0U9A_oi0ICHraNUyCJ9zD_kmSBsvpuwEW3X9KQMBdgjVo-BlI75p4Du9q8Sgg9nV-Cntnnre2Nk-GHVCi4oq4YZYwY1vpA4b80kyr2GdV3rSQYMeAGO6n9Wuqtn6mu6-b3nFuhRGa_5oo1TiNeOntPBHTwSClTgaZ72FRqdQeS2Oc0AYw6GRa2D8sB3AUYkMBIrBoQBLHMoU7Gpp7ZvycInDIm12il7FK-dx13BHyTcg8F_UgucZVxHubE_Ht_xXsf8EX0c9GY37GvnZZUNF94D20bXKoZPdAao4a81cy56-ZNgrEqjyq6ntbz8Mwu6EDbBUwFY1JlsD0t0yQJNiYz_NzFzUMHdPZd73FEwLEVhJquWy49UXwZhGo1ZJzgKUS1x-d_KZ6YVMwiq1BLnQYd3FVdCSCdZGfZkz-mK0_Agmzv3PCdRPbQBjx-Ph6KlmOb7SF3CimkpC9NcGUpwPWfpaGyqedRDB06T-8tUVI5wdqvCFVaZBdR7oy47lhOZZi3oe50XidEWRjI0cvWAFVLxpCJFachiyiPxycLEpvAFv1c9EAkGY3t_8XBHEu9vgiBlw1iSN8muLiuyWpffBdP5BtZxk1o8iPTU_ytr2T7jLxcLpNZlma-s49u_HkV_C3Fr9-isg55yAHJC4d2WQ9OJmCz7WK7PmWsm3-a1hufH02Z_YDWbs2UvhE1kp83xsd15DmiOONtxfJcG_txJnifPd_cQG10OpenbQcoFa1rC0TRR-n0AnwrdbiB6im3sLsiU8ussJV_PvUE9XqrnwNiVhWg4qrfIiDu6Vr_raykVYC2jH9oUataI2W6KsXY9GuXau0nO7bG-WAFwAKJoCIcEhlPVG8R6v4kd1IOelKDwWBJOswpomjF0ihWDt5w3PD797McZDZBw_8RbcwHP9UZCRltUd0tOjMdDgOZv-QHL4M3j7aOSwZEXVCVysmqLrsxTu4ew4Zf5uaeLtb1pXzyAZRYi1nAKQQNm2vL7SA6LFrVPqK_vwU2aXhHPPeKeepuV5RxQuOLO3SxU5QrzjllTt_0oMm5cARl9i9B5LdPHjT1BtPKTG-BcZVQW0MYtdLClZOTMaQkbsJ-xTokq6jgoSQpf8tWPlnr8IRgiaeSE0vPKyatLXuc1-WyZC4mC66dtcFoy0HybxiJj6m670c-mBvrzytz97UNrL2lcqNj98LMbqDNq5g1Xa7U9ga5fLEL-NltN9KhlDAqxsOJRbC493pn-mQ2yXePBlfurHcS05gFNRfGWEpit6S3G13-t5khOetkSlMvrUl-1Q2hzEIKQ8076JgIP_eknWKekUj33pGOBy7dTwXpt2ATlV2S8mneel4vRXllFZhp261S6UgyU9J3wn_aZaCDQSRj90A72GqKJHepCeEwWyG5goklIhF7FAuJw2lSZH7AkuZ5iJrBhmUx19oQ8FuGuMayQCwGjWernmyPjd_VkOVWZkttIkv0HXdXni7-RrqVcX8g1UzPXOSLE3oRjhNERyJ7hZIzHgJKMBlxqEZLoGUNnLqTYX__0A68vxHlymG_B8TXLxGlPi4wvnRCJYKueVzHer0WX17LJrZvUyU34j5TGcSFfogTlNmeZppb9AmU34OgFYw8Z-yDnP9BqN6pZqCHcosHPcSw4e_HLSS1aL6Piq9anDG0Ye1iVPUTFnB4hIjp3KkWd7rT_TZKZRC_DTPYAIvcaIRUvmVUy8F9p8tWoxZ71j5__PRg8_9nFet2sRglNc9WQ6jG2lTuf8Ss4hctvKdD5C1-3fd2f3nkipQt7NsnegXyZ5zQ1XLe_6iTIUyK86GZf57dVjBjSeKPPlQ-cHemZI4V4Er2vnAoJWuPWvGaH74oVkbjzeMinCACb0o06w04yTQsLei4RYmArqvUSYHT4qgXnT06SMsN_DpJrUYGyGjNhMNYwLC2NChJz7tYAYV3b5l_urmCMsiS82o1FOFRoSHvyEF3fK-ioeToSrWAUN_rBE-VfzQlyp6eOBwItpoyR4BgKv-TCtd9Q7JLlnYdGVajdGhC_ZrvmGrpQGu4F7-WtSVukzSfclzrtjaceG3TzppPFTsJvqqtbqpWbMRat1xLiyJpmnXKUXRVWxFjAbpsrWyZhNUg1AXWDj4EZ93rS3DMSXA_GFhszo3IzrVUzKk36mhtYhF9-6OCI9JjEDAMr5tasqLXFQfcufua9nRRHYpVXJZwEOpr5_7HldqQ8GU00bOHJrGPh4l4qbbF9PbVp8SMBshZCDbFV_dm0rR9K-IbJOJjdCN6GyzOTub-AGuqPQOtXTlUMe21_q97pfkBlVOiVDcg3YvurmIZO5L1e-fmDaZkbg0rDKb1R6sboR1GBVaj8AsQ9Ab3bW2sI27YxByGWiHQceYb7WsMifh7jk8RR5crAmauprxZZC6vc2KwSkSowLktNoH6cldhBBcHXO5sn3AGifw8yXVPTLAGxTpTaJ9bh1UbQULECYx1oEbrwEQqia2jztKfNBlZLtusOa-RF3d0KVOba1Ec9kVWnFz9Bsjw-DQDIKeQG-j4qWPionCQCRLFXeLAjXpVtiBFguUCgVSlEfqh7caHFMG7aSiE0rHqkE9RRphSj4uWdGq-8Gb1mrfTFubT66iuyHMBz2Qw0XgOJHoZ8GfZ5l3iksleM0Cxr9gsfbwWzBKI';

module.exports = {
    getEncoded: function () {
        return encoded;
    },
    getBase64Encoded: function () {
        let buff = new Buffer(encoded);
        return buff.toString('base64');
    },
    get: function () {
        return {
            "storeId": 1003,
            "lang": "en",
            "returnUrl": "https://app.ecwid.com/custompaymentapps/1003?orderId=65306446&clientId=mollie-pg",
            "merchantAppSettings": {
                "apiKey": "ug1lOqLxKp2RK2aI2070tXIjB50KX8Yr_8MOSXgR4QoGZMyVgp-SfYWBGQ2TqpTl",
                "endpointAddress": "https://sandbox-merchant.revolut.com/api/1.0/orders"
            },
            "cart": {
                "currency": "USD",
                "order": {
                    "id": "XJ12H",
                    "refundedAmount": 0,
                    "subtotal": 1076.64,
                    "total": 2014.97,
                    "email": "mscott@gmail.com",
                    "paymentModule": "CUSTOM_PAYMENT_APP-mollie-pg",
                    "paymentMethod": "Credit or debit card (Mollie)",
                    "tax": 488.48,
                    "customerTaxExempt": false,
                    "customerTaxId": "",
                    "customerTaxIdValid": false,
                    "reversedTaxApplied": false,
                    "ipAddress": "195.151.247.241",
                    "couponDiscount": 22,
                    "paymentStatus": "INCOMPLETE",
                    "fulfillmentStatus": "AWAITING_PROCESSING",
                    "orderNumber": 65306446, // deprecated. Use 'id' instead
                    "vendorOrderNumber": "XJ12H", // deprecated. Use 'id' instead
                    "refererUrl": "https://mdemo.ecwid.com/",
                    "orderComments": "555",
                    "volumeDiscount": 4,
                    "customerId": 40201284,
                    "membershipBasedDiscount": 0,
                    "totalAndMembershipBasedDiscount": 0,
                    "customDiscount": [],
                    "discount": 4,
                    "usdTotal": 2014.97,
                    "globalReferer": "https://my.ecwid.com/",
                    "createDate": "2018-05-31 15:08:36 +0000",
                    "createTimestamp": 1527779316,
                    "discountCoupon": {
                        "id": 29567026,
                        "name": "API Testing",
                        "code": "APITESTING",
                        "discountType": "ABS",
                        "status": "ACTIVE",
                        "discount": 22,
                        "launchDate": "2018-05-24 20:00:00 +0000",
                        "usesLimit": "UNLIMITED",
                        "repeatCustomerOnly": false,
                        "creationDate": "2018-05-31 15:08:33 +0000",
                        "updateDate": "2018-05-24 13:40:32 +0000",
                        "orderCount": 0
                    },
                    "items": [
                        {
                            "id": 140273658,
                            "productId": 66722487,
                            "categoryId": 19563207,
                            "price": 1060,
                            "productPrice": 1000,
                            "sku": "ABCA-IAC",
                            "quantity": 1,
                            "shortDescription": "",
                            "tax": 331.01,
                            "shipping": 0,
                            "quantityInStock": 0,
                            "name": "iMac",
                            "isShippingRequired": true,
                            "weight": 0,
                            "trackQuantity": false,
                            "fixedShippingRateOnly": false,
                            "imageUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/391870914.jpg",
                            "smallThumbnailUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/650638292.jpg",
                            "hdThumbnailUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/650638293.jpg",
                            "fixedShippingRate": 0,
                            "digital": false,
                            "productAvailable": true,
                            "couponApplied": true,
                            "selectedOptions": [
                                {
                                    "name": "Price-Optimizer",
                                    "value": "6",
                                    "valuesArray": [
                                        "6"
                                    ],
                                    "selections": [
                                        {
                                            "selectionTitle": "6",
                                            "selectionModifier": 6,
                                            "selectionModifierType": "PERCENT"
                                        }
                                    ],
                                    "type": "CHOICE"
                                }
                            ],
                            "taxes": [
                                {
                                    "name": "New Tax 2",
                                    "value": 12,
                                    "total": 124.13,
                                    "taxOnDiscountedSubtotal": 124.13,
                                    "taxOnShipping": 0
                                },
                                {
                                    "name": "TVA",
                                    "value": 20,
                                    "total": 206.88,
                                    "taxOnDiscountedSubtotal": 206.88,
                                    "taxOnShipping": 0
                                }
                            ],
                            "dimensions": {
                                "length": 0,
                                "width": 0,
                                "height": 0
                            },
                            "couponAmount": 21.66,
                            "discounts": [
                                {
                                    "discountInfo": {
                                        "value": 4,
                                        "type": "ABS",
                                        "base": "ON_TOTAL",
                                        "orderTotal": 1
                                    },
                                    "total": 3.94
                                }
                            ]
                        },
                        {
                            "id": 140273659,
                            "productId": 66821181,
                            "categoryId": 0,
                            "price": 16.64,
                            "productPrice": 16,
                            "sku": "001001",
                            "quantity": 1,
                            "shortDescription": "This sturdy white, glossy ceramic mug is an essential to your cupboard. This brawny version of ceramic mugs shows it’s ...",
                            "tax": 157.47,
                            "shipping": 471.85,
                            "quantityInStock": 0,
                            "name": "Mug",
                            "isShippingRequired": true,
                            "weight": 0.4,
                            "trackQuantity": false,
                            "fixedShippingRateOnly": false,
                            "imageUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/389900000.jpg",
                            "smallThumbnailUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/475772545.jpg",
                            "hdThumbnailUrl": "https://ecwid-images-ru.gcdn.co/images/5035009/408631478.jpg",
                            "fixedShippingRate": 0,
                            "digital": false,
                            "productAvailable": true,
                            "couponApplied": true,
                            "selectedOptions": [
                                {
                                    "name": "Color",
                                    "value": "White",
                                    "valuesArray": [
                                        "White"
                                    ],
                                    "selections": [
                                        {
                                            "selectionTitle": "White",
                                            "selectionModifier": 0,
                                            "selectionModifierType": "ABSOLUTE"
                                        }
                                    ],
                                    "type": "CHOICE"
                                },
                                {
                                    "name": "Size",
                                    "value": "11oz",
                                    "valuesArray": [
                                        "11oz"
                                    ],
                                    "selections": [
                                        {
                                            "selectionTitle": "11oz",
                                            "selectionModifier": 0,
                                            "selectionModifierType": "ABSOLUTE"
                                        }
                                    ],
                                    "type": "CHOICE"
                                },
                                {
                                    "name": "Price-Optimizer",
                                    "value": "4",
                                    "valuesArray": [
                                        "4"
                                    ],
                                    "selections": [
                                        {
                                            "selectionTitle": "4",
                                            "selectionModifier": 4,
                                            "selectionModifierType": "PERCENT"
                                        }
                                    ],
                                    "type": "CHOICE"
                                }
                            ],
                            "taxes": [
                                {
                                    "name": "New Tax 2",
                                    "value": 12,
                                    "total": 59.05,
                                    "taxOnDiscountedSubtotal": 1.95,
                                    "taxOnShipping": 57.1
                                },
                                {
                                    "name": "TVA",
                                    "value": 20,
                                    "total": 98.42,
                                    "taxOnDiscountedSubtotal": 3.25,
                                    "taxOnShipping": 95.17
                                }
                            ],
                            "dimensions": {
                                "length": 0,
                                "width": 0,
                                "height": 0
                            },
                            "couponAmount": 0.34,
                            "discounts": [
                                {
                                    "discountInfo": {
                                        "value": 4,
                                        "type": "ABS",
                                        "base": "ON_TOTAL",
                                        "orderTotal": 1
                                    },
                                    "total": 0.06
                                }
                            ]
                        }
                    ],
                    "refunds": [],
                    "billingPerson": {
                        "name": "Michael Scott",
                        "companyName": "",
                        "street": "555 Lackawanna Ave",
                        "city": "Scranton",
                        "countryCode": "US",
                        "countryName": "United States",
                        "postalCode": "18508",
                        "stateOrProvinceCode": "PA",
                        "stateOrProvinceName": "Pennsylvania",
                        "phone": ""
                    },
                    "shippingPerson": {
                        "name": "Michael Scott",
                        "companyName": "",
                        "street": "555 Lackawanna Ave",
                        "city": "Scranton",
                        "countryCode": "US",
                        "countryName": "United States",
                        "postalCode": "18508",
                        "stateOrProvinceCode": "PA",
                        "stateOrProvinceName": "Pennsylvania",
                        "phone": ""
                    },
                    "shippingOption": {
                        "shippingCarrierName": "Shipping app the-printful",
                        "shippingMethodName": "USPS Priority Mail",
                        "shippingRate": 471.85,
                        "estimatedTransitTime": "1-3",
                        "isPickup": false
                    },
                    "handlingFee": {
                        "name": "Handling Fee",
                        "value": 4,
                        "description": ""
                    },
                    "predictedPackage": [
                        {
                            "length": 0,
                            "width": 0,
                            "height": 0,
                            "weight": 0.4,
                            "declaredValue": 1076.64
                        }
                    ],
                    "additionalInfo": {
                        "google_customer_id": "2008512504.1526280224"
                    },
                    "paymentParams": {},
                    "extraFields": {
                        "lang": "en",
                        "askHowYouFoundUsApp": "From a friend",
                        "kliken_vid": "99aa74d7-75a4-4624-9ed6-87892f1c165e"
                    },
                    "discountInfo": [
                        {
                            "value": 4,
                            "type": "ABS",
                            "base": "ON_TOTAL",
                            "orderTotal": 1
                        }
                    ],
                    "hidden": false,
                    "referenceTransactionId": "transaction_65306446",
                    "taxesOnShipping": [
                        {
                            "name": "New Tax 2",
                            "value": 12,
                            "total": 57.1
                        },
                        {
                            "name": "TVA",
                            "value": 20,
                            "total": 95.17
                        }
                    ]
                }
            },
            "token": "abcdefghijklmnopqrstuv1234567890"
        };
    }
};
