import React from "react";
import { Panner } from "../components/paner/paner";
import { Card } from "../components/card/card"
import CardContext, { cardData } from "../context/cardContext";
import Info from "../components/info/info";

export function MainPage() {
    return (
        <>
            <Panner />
            <div className="container">
            <h3>Populer Vedios</h3>
            <hr />
                <CardContext.Provider value={cardData.cardVedio1}>
                    <Card />
                </CardContext.Provider>
                <CardContext.Provider value={cardData.cardVedio2}>
                    <Card />
                </CardContext.Provider>
                <hr />
                <Info />
                <h3>Top Courses</h3>
                <hr />
                <CardContext.Provider value={cardData.course1}>
                    <Card />
                </CardContext.Provider>
                <CardContext.Provider value={cardData.course2}>
                    <Card />
                </CardContext.Provider>
                <CardContext.Provider value={cardData.course3}>
                    <Card />
                </CardContext.Provider>
                <CardContext.Provider value={cardData.course4}>
                    <Card />
                </CardContext.Provider>
                <hr />
            </div>
        </>
    )
}