import React from "react";
import Cards from "./Cards.jsx";
import Data from './Data.jsx'

console.log(Data[0].seriesName)

/*
function nCard(val){
    return (
        <Cards
            imgSrc={val.imgSrc}
            title={val.title}
            seriesName={val.seriesName}
            links={val.links}>
        </Cards>
    )
}
*/
// Data.map(nCard)

const App=()=><>
                <h1 className="heading_style">Top 5 Netflix Series</h1>
                <div className="cards">
                    {
                        Data.map((val)=>{
                            return(
                                <Cards  key={val.id}
                                        imgSrc={val.imgSrc}
                                        title={val.title}
                                        seriesName={val.seriesName}
                                        links={val.links}>
                                </Cards>
                            )
                        })
                    }                  
                </div>
            </>
   
export default App

/*
                    <Cards imgSrc={Data[0].imgSrc}
                            title={Data[0].title}
                            seriesName={Data[0].seriesName}
                            link={Data[0].links}>
                    </Cards>
                    <Cards imgSrc={Data[1].imgSrc}
                            title={Data[1].title}
                            seriesName={Data[1].seriesName}
                            link={Data[1].links}>
                    </Cards>
                    <Cards imgSrc={Data[2].imgSrc}
                            title={Data[2].title}
                            seriesName={Data[2].seriesName}
                            link={Data[2].links}>
                    </Cards>
                    <Cards imgSrc={Data[3].imgSrc}
                            title={Data[3].title}
                            seriesName={Data[3].seriesName}
                            link={Data[3].links}>
                    </Cards>
                    <Cards imgSrc={Data[4].imgSrc}
                            title={Data[4].title}
                            seriesName={Data[4].seriesName}
                            link={Data[4].links}>
                    </Cards>
 */