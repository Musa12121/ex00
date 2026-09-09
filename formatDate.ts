export default function formatDate(date:Date){
    return date.toLocaleDateString();
}

console.log(formatDate(new Date("invalid")))