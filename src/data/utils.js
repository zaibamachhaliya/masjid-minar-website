

export function slugify(text) {
    return text
        .toLowerCase()
        .replace(/(\d+)\.\d+/, "$1") 
        .replace(/[^a-z0-9\s]/g, "") 
        .trim()
        .replace(/\s+/g, "-");      
}
