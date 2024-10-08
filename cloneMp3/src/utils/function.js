export const calDayAlbum = (unixStamp) => {
    return new Date(unixStamp * 1000).toLocaleDateString('vi-VN')
}

export const calTimeAlbum = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours} giờ ${minutes} phút`
}

export const calLike = (like) => {
    if (like < 1000) return like
    else return Math.round(like / 1000) + "K"
}
export const calDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, '0');
    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
}
export const calDayRelease = (unixStamp) => {
    const unixTimestamp = Math.floor(Date.now() / 1000);
    const differenceInSeconds = unixTimestamp - unixStamp;
    const daysPassed = Math.floor(differenceInSeconds / 86400);
    if (daysPassed == 0) return "Hôm nay"
    else if (daysPassed == 1) return "Hôm qua"
    else return daysPassed + " Ngày trước";
}
export const calDayRankNewRelease = (unixStamp) => {
    const date = new Date(unixStamp * 1000);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
}
export const calPercent = (score, totalScore) => {
    return Math.round(score * 100 / totalScore);
}
