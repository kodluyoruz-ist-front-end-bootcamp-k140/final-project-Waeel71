import React from "react";

export const cardData = {
    "cardVedio1": {
        "title": "React Hook",
        "description": "in class react hook",
        "imgUrl": "https://www.alastyr.com/blog/wp-content/uploads/2021/09/react-nedir.png"
    },
    "cardVedio2": {
        "title": "html",
        "description": "html tags",
        "imgUrl": "https://hostingdunyam.com.tr/blog/wp-content/uploads/2021/07/html-nedir.png"
    },
    "course1": {
        "title": "Html",
        "description": "Html couse zero to hero couse",
        "imgUrl": "https://resources.stdio.vn/content/article/html-phan-1-co-ban-ve-html/thumbnail-hd/blob-1598602790106@1280x720.jpg"
    },
    "course2": {
        "title": "Css",
        "description": "Css couse zero to hero couse",
        "imgUrl": "https://cdn.omeraydinoglu.com/wp-content/uploads/2021/06/q3xa7ii9iei1b8kvs451.jpg"
    },
    "course3": {
        "title": "Javascript",
        "description": "javascript couse zero to hero couse",
        "imgUrl": "https://www.setxrm.com/wp-content/uploads/2019/11/Javascript-programming-language.jpg"
    },
    "course4": {
        "title": "React",
        "description": "React couse zero to hero couse",
        "imgUrl": "https://www.ahtapotyazilim.com/wp-content/uploads/2021/10/react-js.jpg"
    }
}

const CardContext = React.createContext(cardData)

export default CardContext