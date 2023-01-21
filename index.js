const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

console.log('> Ortalaması alınacak sayıları girip Enter tuşuna basın.\n> Sayı girmeyi bitirdiğinizde "ortalama" veya "ort" yazın.\n> Programı kapatmak için "kapat" yazın.');

const array = [];

rl.on('line', (input) => {
    if (input == 'kapat') {

        return rl.close();

    } else if (input == 'ortalama' || input == 'ort') {

        if (array.length < 1) return console.log('> En az 1 sayı girmelisiniz.');

        const ortalama = array.reduce((accum, i) => accum + i, 0) / array.length;
        console.log(`> Girilen sayılar: ${array.join(', ')}\n> Ortalama: ${ ortalama.toString().includes('.') ? (ortalama.toString().split('.')[1].length > 1 ? ortalama.toFixed(2) : ortalama) : ortalama }`);
        return rl.close();

    } else {

        if (isNaN(Number(input))) return console.log('> Bu bir sayı değil.');
        console.log(`Sayı girildi: ${input}`);
        array.push(Number(input));

    }
});
