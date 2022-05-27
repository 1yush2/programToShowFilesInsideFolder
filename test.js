const data = {
    folders: {
        file: 'b.txt',
        folders: {
            file: ['c.txt', 'd.txt'],
            folders: {
                folders: {
                    file: 'end.txt'
                }
            }
        }
    },
    file: 'a.txt'
}

function scanTxtFile(data) {
    const leaf = Object.keys(data);

    if (leaf.includes('file')) {
        if (typeof data.file === 'string') {
            storeTxt.push(data.file)
        } else if (!!data.file.length) {
            storeTxt.push(...data.file)
        }
    }

    if (leaf.includes('folders')) {
        scanTxtFile(data.folders)
    }
}

const storeTxt = [];
scanTxtFile(data);
console.log('storestore', storeTxt)
