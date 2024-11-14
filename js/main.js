const header = {
    bgImg: "../assets/img/header-bg.png",
    title: "نظافة ترفع مستوى حياتك, مع توب كلين نظافة تليق بك.",
    subTitle: "جودة عالية بسعر مناسب",
    subTitle1: "نقدم لكم افضل نتائج للنظافة بأقصر وقت وبأقل تكلفة وبدون تعب",
    buttonOneText: "تواصل معنا",
    buttonOneLink: "#contact-us",
    buttonTwoText: "تفقد خدماتنا",
    buttonTwoLink: "#services",
};
const services = [
    {
        id: 0,
        title: "تنظيف السجاد",
        imgSrc: "assets/img/14.jpg",
        text: "تنظيف السجاد بعمق لإزالة الغبار, الأوساخ, والبقع باستخدام تقنيات متقدمة",
        buttonText: "احجز الان",
        buttonLink: "#contact-us",
    },
    {
        id: 1,
        title: "تنظيف الشركات والفنادق",
        imgSrc: "assets/img/18.jpg",
        text: "تقديم خدمات تنظيف مخصصة للمكاتب والفنادق لتوفير بيئة عمل نظيفة ومريحة.",
        buttonText: "احجز الان",
        buttonLink: "#contact-us",
    },
    {
        id: 2,
        title: "تنظيف المنازل والشقق والفلل",
        imgSrc: "assets/img/20.jpg",
        text: "خدمات تنظيف شاملة للمنازل, الشقق, والفلل لضمان نظافة كل زاوية.",
        buttonText: "احجز الان",
        buttonLink: "#contact-us",
    },
];
const whoUsSection = {
    id: 0,
    title: "من نحن؟",
    text: "نحن شركة سعودية متخصصة في تقديم خدمات نظافة شاملة وعميقة, نهدف إلى تلبية احتياجات المنازل الجديدة والأثاث المنزلي في جميع أنحاء المملكة. نعتمد على فريق عمل مدرب واحترافي يتقن تنفيض الأعمال بكفاءة عالية ودقة متناهية, مستخدمين في ذلك مواد تنظيف إيطالية آمنة وفعالة, بالإضافة إلى معدات حديثة مستوردة من أوروبا وأمريكا. نفخر بتقديم حلول تنظيف تتجاوز توقعات عملائنا, مستندين إلى سنوات من اخلبرة والتفاني لضمان توفير بيئة نظيفة وصحية تُعزز راحة وسلامة كل منازل عملائنا",
    buttonText: "تواصل معنا لمعرفة المزيد عنا",
    buttonLink: "#contact-us",
    bigImgSrc: "assets/img/10.jpg",
    floatImgSrc: "assets/img/11.jpg",
};
const visionSection = [
    {
        id: 0,
        title: "رؤيتنا",
        text: "في توب كلين, نسعى لأن نكون خيارك الأول في تقديم خدمات التنظيف نلتزم بتحسين جودة الحياة من خلال توفير بيئة نظيفة وآمنة في كل مكان, مما يعزز صحتكم ويزيد من إنتاجيتكم في جميع أماكن عملكم ومنازلكم.",
        svg: ` <svg svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 256 256" >
    <path fill="#fff"
        d="M245.48 125.57c-.34-.78-8.66-19.23-27.24-37.81C201 70.54 171.38 50 128 50S55 70.54 37.76 87.76c-18.58 18.58-26.9 37-27.24 37.81a6 6 0 0 0 0 4.88c.34.77 8.66 19.22 27.24 37.8C55 185.47 84.62 206 128 206s73-20.53 90.24-37.75c18.58-18.58 26.9-37 27.24-37.8a6 6 0 0 0 0-4.88M128 194c-31.38 0-58.78-11.42-81.45-33.93A134.8 134.8 0 0 1 22.69 128a134.6 134.6 0 0 1 23.86-32.06C69.22 73.42 96.62 62 128 62s58.78 11.42 81.45 33.94A134.6 134.6 0 0 1 233.31 128C226.94 140.21 195 194 128 194m0-112a46 46 0 1 0 46 46a46.06 46.06 0 0 0-46-46m0 80a34 34 0 1 1 34-34a34 34 0 0 1-34 34" />
                        </svg>`,
    },
    {
        id: 0,
        title: "رسالتنا",
        text: `في توب كلين, نقدم خدمات تنظيف شاملة تتجاوز توقعاتكم. نحن ملتزمون
                        باستخدام أحدث التقنيات ولدينا فريق عمل مدرب لضمان تحقيق أعلى معايير النظافة, مع التركيز على
                        تلبية احتاجاتكم وتحقيق رضاكم الكامل في كل مرة.`,
        svg: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                            <path fill="#fff"
                                d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10c0-1.16-.21-2.31-.61-3.39l-1.6 1.6c.14.59.21 1.19.21 1.79a8 8 0 0 1-8 8a8 8 0 0 1-8-8a8 8 0 0 1 8-8c.6 0 1.2.07 1.79.21L15.4 2.6C14.31 2.21 13.16 2 12 2m7 0l-4 4v1.5l-2.55 2.55C12.3 10 12.15 10 12 10a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2c0-.15 0-.3-.05-.45L16.5 9H18l4-4h-3zm-7 4a6 6 0 0 0-6 6a6 6 0 0 0 6 6a6 6 0 0 0 6-6h-2a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4z" />
                        </svg>`,
    },
];
const features = {
    bigImgSrc: "assets/img/17.jpg",
    floatImgSrc: "assets/img/2.jpg",
    title: "مميزات خدماتنا",
    buttonText: "احجز الأن",
    buttonLink: "#contact-us",
    items: [
        "مواد تنظيف إيطالية",
        "عمالة إحترافية",
        "خبرة واسعة",
        "معدات أوربية وأمريكية",
        "مواعيد مرنة",
        "خدمات متنوعة",
        "خدمة عملاء متميزة",
        "التزام بالجودة",
        "ضمان رضا العميل",
        "مواد صديقة للبيئة",
        "فحص شامل قبل وبعد الخدمة",
        "أسعار تنافسية"
    ]
}
const contactItems = [
    {
        title: "الواتساب او الهاتف",
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path fill="#fff"
            d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1" />
            </svg > `,
        phone: "0551643128",
        link: "https://wa.me/message/VJHZWBPFWC7YD1",
        button: "واتساب"
    },
    {
        title: "الواتساب او الهاتف",
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path fill="#fff"
        d="m7.254 18.494l.724.423A7.95 7.95 0 0 0 12.001 20a8 8 0 1 0-8-8a7.95 7.95 0 0 0 1.084 4.024l.422.724l-.653 2.401zM2.005 22l1.352-4.968A9.95 9.95 0 0 1 2.001 12c0-5.523 4.477-10 10-10s10 4.477 10 10s-4.477 10-10 10a9.95 9.95 0 0 1-5.03-1.355zM8.392 7.308q.202-.014.403-.004q.081.006.162.016c.159.018.334.115.393.249q.447 1.015.868 2.04c.062.152.025.347-.093.537c-.06.097-.154.233-.263.372c-.113.145-.356.411-.356.411s-.099.118-.061.265c.014.056.06.137.102.205l.059.095c.256.427.6.86 1.02 1.268c.12.116.237.235.363.346c.468.413.998.75 1.57 1l.005.002c.085.037.128.057.252.11q.093.039.191.066q.036.01.073.011a.35.35 0 0 0 .295-.142c.723-.876.79-.933.795-.933v.002a.48.48 0 0 1 .378-.127q.092.004.177.04c.531.243 1.4.622 1.4.622l.582.261c.098.047.187.158.19.265c.004.067.01.175-.013.373c-.032.259-.11.57-.188.733a1.2 1.2 0 0 1-.21.302a2.4 2.4 0 0 1-.33.288q-.124.092-.125.09a5 5 0 0 1-.383.22a2 2 0 0 1-.833.23c-.185.01-.37.024-.556.014c-.008 0-.568-.087-.568-.087a9.45 9.45 0 0 1-3.84-2.046c-.226-.199-.436-.413-.65-.626c-.888-.885-1.561-1.84-1.97-2.742a3.5 3.5 0 0 1-.33-1.413a2.73 2.73 0 0 1 .565-1.68c.073-.094.142-.192.261-.305c.126-.12.207-.184.294-.228a1 1 0 0 1 .371-.1" />
        </svg > `,
        phone: "0529366182",
        link: "https://wa.me/message/KHDZQTXXTTHEP1",
        button: "واتساب"
    },
    {
        title: "الفيس بوك",
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"/></svg> `,
        link: "https://www.facebook.com/share/A3i4C7ErhYwWvyUU/",
        button: "إضغط هنا"
    },
    {
        title: "انستغرام",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><g fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M4 8a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z"/><path d="M9 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m7.5-4.5v.01"/></g></svg>`, link: "https://www.instagram.com/tobcleanservice",
        button: "إضغط هنا"
    },
    {
        title: "تيك توك",
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#fff" d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"/></svg> `,
        link: "https://www.tiktok.com/@top.clean.service0?_t=8rJ35PGMnI4&_r=1",
        button: "إضغط هنا"
    },
    {
        title: "سناب شات",
        icon: ` <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-2 -2.5 24 24"><path fill="#fff" d="M15.899 7.75q.499-.112.501-.164l.1-.045a1 1 0 0 1 .406-.082c.152 0 .304.028.435.082c.391.139.636.424.642.744c.003.131-.037.334-.242.545c-.173.176-.433.332-.798.476a5 5 0 0 1-.292.099c-.37.117-.93.295-1.076.637c-.075.174-.043.403.105.703c.048.116 1.253 2.855 3.927 3.295a.465.465 0 0 1 .391.485a.6.6 0 0 1-.05.206c-.096.223-.317.411-.676.578c-.44.203-1.097.373-1.956.508c-.043.083-.09.295-.119.428a7 7 0 0 1-.115.465c-.071.244-.259.384-.536.384c-.116 0-.266-.02-.46-.057a5.3 5.3 0 0 0-1.049-.11q-.367 0-.75.063c-.49.081-.912.379-1.402.724c-.715.503-1.525 1.075-2.763 1.075a2 2 0 0 1-.144-.004l-.101.004c-1.237 0-2.047-.572-2.762-1.077c-.49-.345-.912-.642-1.402-.723a4.6 4.6 0 0 0-.75-.064c-.438 0-.791.069-1.048.119c-.177.033-.328.063-.46.063c-.35 0-.484-.212-.537-.39a6 6 0 0 1-.115-.468c-.031-.142-.076-.348-.12-.43c-.858-.134-1.516-.305-1.956-.51c-.36-.165-.581-.354-.677-.58a.6.6 0 0 1-.05-.203a.467.467 0 0 1 .392-.487a4.5 4.5 0 0 0 1.706-.664a5.6 5.6 0 0 0 1.215-1.073a6.6 6.6 0 0 0 1.018-1.58q.205-.417.095-.68c-.146-.342-.708-.52-1.078-.637c-.106-.034-.207-.065-.292-.099q-.487-.192-.745-.426C2 8.597 2 8.319 2.026 8.179c.041-.214.191-.405.424-.542a1.2 1.2 0 0 1 .598-.167a.8.8 0 0 1 .339.07q.108.051.212.09q.003.047.414.123q.14.026.265.026a.8.8 0 0 0 .328-.062l-.028-.446c-.085-1.352-.191-3.036.257-4.035A5.5 5.5 0 0 1 6.053 1.49c.423-.4.913-.724 1.459-.964A5.8 5.8 0 0 1 9.798.042l.394-.003c.445 0 1.333.062 2.284.482a5.1 5.1 0 0 1 1.464.965a5.4 5.4 0 0 1 1.223 1.751c.448 1 .342 2.684.255 4.038l-.003.057q-.014.2-.024.387a.8.8 0 0 0 .276.06q.11-.006.232-.03z"/></svg> `,
        link: "https://www.snapchat.com/add/topcleanservice?share_id=QLhywmHq9zs&locale=ar-AE",
        button: "إضغط هنا"
    },
]


$(document).ready(function () {
    function loadHeader() {
        $(".bg-img").css("background-image", header.bgImg);
        const headerContentElement = `
         <h5 class= "almarai" > ${header.subTitle}</h5>
                <h1 class="mb-3">${header.title}</h1>
                <h5 class="almarai">${header.subTitle1}</h5>
                <div class="mt-5 d-flex gap-5">
                    <a href="${header.buttonOneLink}" class="btn btn-indigo">${header.buttonOneText}</a>
                    <a href="${header.buttonTwoLink}" class="btn btn-outline-indigo">${header.buttonTwoText}</a>
                </div>
        `;
        $(".header-content").append(headerContentElement);
    }
    function loadServices() {
        services.forEach((service) => {
            const serviceElement = `
<div class= "card position-relative border-0" > <img class="card-img-top " src="${service.imgSrc}"
    alt="خدمات تنظيف توب كلين | Top Clean cleaning services">
    <div class="card-body">
        <h5 class="card-title almarai">${service.title}</h5>
        <p class="card-text almarai">${service.text}</p>
        <a href="${service.buttonLink}" class="btn btn-outline-indigo position-absolute card-contact">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" stroke-linecap="round"
                    stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6m0 0H9m9 0v9" />
            </svg>
            <span class="mx-1 ">${service.buttonText}</span>
        </a>
    </div>
</div>
            `;
            $(".owl-carousel").append(serviceElement);
        });
    }
    function loadWhoUs() {
        const whoUs = `
<div class= "row" >
                <div class="col-md-6 d-flex align-items-start justify-content-center flex-column">
                    <h1 class="bold cairo">${whoUsSection.title}</h1>
                    <p class="almarai gray para-text">${whoUsSection.text}</p>
                    <a href="${whoUsSection.buttonLink}" class="btn btn-indigo contact mt-2 p-3 d-inline-block almarai">${whoUsSection.buttonText}</a>
                </div>
                <div class="col-md-6 my-5">
                    <div class="img d-flex align-items-center justify-content-center position-relative">
                        <img src="${whoUsSection.bigImgSrc}" alt="خدمات تنظيف توب كلين | Top Clean cleaning services" class="img-border-primary big-img">
                        <img src="${whoUsSection.floatImgSrc}" alt="خدمات تنظيف توب كلين | Top Clean cleaning services" class="img-border-white float-img ">
                    </div>
                </div>
            </div>
            `;
        $("#who-us").append(whoUs);
    }
    function loadVision() {
        visionSection.forEach(item => {
            const visionElement = `<div class="col-md-6 mb-3 d-flex flex-column align-items-center justify-content-center gap-2">
                    <div class="rounded-circle p-2 vision-svg-parent">
                        ${item.svg}
                    </div>
                    <h1 class="cairo bold">${item.title}</h1>
                    <p class="para-text text-center">${item.text}</p>
                    </div>
                    `
            $(".vision-container").append(visionElement);
        })
    }
    function loadFeatures() {
        const featureElement = `
         <div class="row">
                <div class="col-md-6 my-5">
                    <div class="img d-flex align-items-center justify-content-center position-relative">
                        <img src="${features.bigImgSrc}" alt="خدمات تنظيف توب كلين | Top Clean cleaning services" class="img-border-left-primary big-img">
                        <img src="${features.floatImgSrc}" alt="خدمات تنظيف توب كلين | Top Clean cleaning services" class="img-border-white features-float-img ">
                    </div>
                </div>
                <div class="col-md-6 mt-5 position-relative">
                    <h1 class="bold cairo">${features.title}</h1>
                    <div class="my-4">
                        <div class="row features">

                        </div>
                    </div>
                    <a href="${features.buttonLink}" class="btn btn-indigo contact mt-2 p-3 d-inline-block almarai">${features.buttonText}</a>
                </div>
            </div>`
        $("#features").append(featureElement);
    }
    function loadFeaturesItems() {
        features.items.forEach(item => {
            const featureItem = `<div class="col-md-6 p-1 px-3">
            <div class="feature-item p-2 d-flex gap-2 align-items-center  rounded-3">
                <span class="item-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                        viewBox="0 0 24 24">
                        <path fill="#fff"
                            d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z" />
                    </svg>
                </span>
                <span class="text bold">${item}</span>
            </div>
        </div>`
            $("#features .features").append(featureItem)
        }
        )
    }
    function loadContactItems() {
        contactItems.forEach(item => {
            const contactItem = ` <div class="col-md-6 p-1 px-3 mb-3">
                            <div class="feature-item p-2 d-flex gap-2 align-items-center  rounded-3">
                                <span class="item-contact-icon">
                                    ${item.icon}
                                </span>
                                <div class="d-flex flex-column justify-content-center align-items-center w-75">
                                    <span class="almarai bold">${item.title}:</span>
                                    ${item.phone ?
                    `<span class="bold">${item.phone}</span>`
                    : ""
                }
                ${item.link && item.phone ?
                    `<span>أو</span>`
                    : ""}
                ${item.link ?
                    `<a href="${item.link}" class="btn bold" target="_blank">${item.button}</a>`
                    : ""}
                                </div >
                            </div >
                        </div > `
            $(".contact-items").append(contactItem)
        }
        )
    }
    loadHeader();
    loadServices();
    loadWhoUs();
    loadVision()
    loadFeatures()
    loadFeaturesItems()
    loadContactItems()
    $(".owl-carousel").owlCarousel({
        rtl: true,
        loop: true,
        margin: 50,
        nav: true,
        responsive: {
            0: {
                items: 1,
            },
            600: {
                items: 2,
            },
            1000: {
                items: 3,
            },
        },
    });
});
