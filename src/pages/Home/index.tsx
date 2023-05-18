import Crowstealers from './Crowstealers'
import { Hero } from './Hero'

export default function Home() {
    return (
        <div className="main-wrapper grid flow">
            <Hero />
            <Crowstealers />
        </div>
    )
}
