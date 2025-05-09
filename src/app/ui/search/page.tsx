'use client'
import Nav from "../shared/top navbar/nav"
import { data } from "../data"
import { useEffect } from "react"
import { Suspense } from "react"
import Loading from "../shared/ suspense/loading"

const SearchPage: React.FC = async () => {
    let content
    useEffect(
        () => {
            data()
            .then(d => {
                console.info(d)
                content = d
            })
        }
    )
    return (
        <div>
            <Nav />
            <Suspense fallback={<Loading />}>
                <p>{content}</p>
            </Suspense>
        </div>
    )
}

export default SearchPage
