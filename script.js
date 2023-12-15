// الحصول على الزر والعناصر التي سيتم تغييرها
let btn = document.querySelector("#new-qoute");
let qu = document.querySelector(".qoute");
let person = document.querySelector(".person");

// مصفوفة تحتوي على الاقتباسات وأسماء الأشخاص

const qoutes = [{
    qoute:`Do your best and have fun.`,
    person: `Mo Yasser` 
},
{
    qoute: ` Don t give up always try. `,
    person: `Yasser`
},
{
    qoute: ` Do your best and have fun.`,
    person : `Ashor`
},
{
    qoute: `No surprise, no desire, no feeling.`,
    person:`Yasser`
},
{
    qoute: `Do your best and have fun.`,
    person:`Mohamed`
},
{
    qoute: `"𝒇𝒖𝒍𝒍 𝒐𝒇 𝒄𝒓𝒚𝒊𝒏𝒈, 𝒆𝒎𝒑𝒕𝒚 𝒐𝒇 𝒕𝒆𝒂𝒓𝒔"`,
    person:`Mo Ashor`
},
{
    qoute: `𝒊 𝒇𝒆𝒆𝒍 𝒍𝒊𝒌𝒆 𝒂 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒆 𝒍𝒐𝒔𝒆𝒓 𝒕𝒉𝒆𝒔𝒆 𝒅𝒂𝒚𝒔.`,
    person:` Yasser Yasser`
},
{
    qoute: `The enemy I have to fight is always inside me`,
    person:`Yasser `
},
{
    qoute: `Who told the prisoners that we are free?`,
    person:`mohamed`
},
{
    qoute: `Do your best and have fun.`,
    person:`Ashor`
},
{
    qoute: `Do your best and have fun.`,
    person:`Ashor mohamed`
},
{
    qoute: `Who told the prisoners that we are free?`,
    person:`Mohamed Ashor`
},
];

// إضافة حدث النقر لزر "New Quote"
btn.addEventListener('click', function () {
    // توليد رقم عشوائي لاختيار اقتباس عشوائي من المصفوفة
    let random = Math.floor(Math.random() * qoutes.length);

    // عرض الاقتباس واسم الشخص المرتبط به
    qu.innerText = qoutes[random].qoute;
    person.innerText = qoutes[random].person;
});