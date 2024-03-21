import { Link } from "react-router-dom"
export default function CategoryContainerComponent () {

    
    return(
        <>
        <div className="flex flex-col m-auto items-center justify-center p-5 lg:flex-row">
            <Link to = {'/categoria/pods'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Pods</button></Link>
            <Link to = {'/categoria/kits'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Kits</button></Link>
            <Link to = {'/categoria/e-liquids'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">E-Liquids</button></Link>
            <Link to = {'/categoria/sales-nicotina'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Sales de Nicotina</button></Link>
            <Link to = {'/categoria/resistencias'}><button className="w-48 rounded-md bg-amber-700 p-2 border-stone-600 text-white m-2 items-center text-lg font-bold">Resistencias</button></Link>
        </div>
        </>
    )
}