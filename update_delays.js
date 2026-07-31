const fs = require('fs');
const path = require('path');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(function(file) {
        file = path.join(dir, file);
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) { 
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./src');

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    const newContent = content.replace(/delay=\{([^}]+)\}/g, (match, p1) => {
        // Replace numbers like 0.05, 0.06, 0.1, 0.2, 0.03 with 0.02
        if (/^[0-9.]+$/.test(p1.trim())) {
            changed = true;
            return `delay={0.02}`;
        }
        if (p1.includes('*')) {
            const parts = p1.split('*');
            const newParts = parts.map(part => {
                const trimmed = part.trim();
                if (/^[0-9.]+$/.test(trimmed)) {
                    return '0.02';
                }
                return part;
            });
            changed = true;
            return `delay={${newParts.join('*')}}`;
        }
        return match;
    });

    if (changed && newContent !== content) {
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
