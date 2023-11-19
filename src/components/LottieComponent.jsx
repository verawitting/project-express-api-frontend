import Lottie from "lottie-react";
import booksAni from "../assets/animations/booksAnimation.json";

export const BooksAnimation = () => {
    const style = {
        height: 300,
    };
    return <Lottie animationData={booksAni} style={style} />;
};
