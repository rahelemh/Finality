import  Category  from "../components/Category.jsx";
import { Collection } from "../components/Collection";
import { Lefter } from "../components/Lefter.jsx";
import { Title } from "../components/Title";
import { Reder } from "../components/Reder.jsx";
import { Trending } from "../components/Trending.jsx";
import { Marquee } from "../components/Marq.jsx";

export function Maincontent(){
    return(
        <>
        <Title/>
        <Collection/>
        <Trending/>
        <Marquee/>
        <Category/>
        <Lefter/>
        <Reder/>
        </>
    )
}