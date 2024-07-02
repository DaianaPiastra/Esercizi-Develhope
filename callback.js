const fs = require('fs');

const data = 'My name is Daiana!';
const file= "file-5.txt"

fs.writeFile(file, data, (error) => {
    if (error) {
        console.error('Errore durante la scrittura del file:', error);
        return
    } else {
        console.log('Il file è stato scritto con successo!');
    }
});