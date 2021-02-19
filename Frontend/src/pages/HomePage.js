import React from "react";
import "../assets/css/pageStyle.css";
import Footer from "../comps/footer";

const HomePage = () => {
    return (
        <>
            <main>
                <div className="Overly">

                </div> 
                <div className="sub-main">  
                    <div className="container intro">
                        <div className="intro-1">
                            <span>Lycée Technique Ibn Alhaytam</span><br />
                            <span>à propos de notre établisement</span>
                        </div>
                        <div className="intro-2">
                            <p>
                            Les vidéos vous permettent de faire passer votre message de façon convaincante. Quand vous cliquez sur Vidéo en ligne, vous pouvez coller le code incorporé de la vidéo que vous souhaitez ajouter. Vous pouvez également taper un mot-clé pour rechercher en ligne la vidéo qui convient le mieux à votre document. Pour donner un aspect professionnel à votre document, Word offre des conceptions d’en-tête, de pied de page, de page de garde et de zone de texte qui se complètent mutuellement. Vous pouvez par exemple ajouter une page de garde, un en-tête et une barre latérale identiques.
                            </p>
                        </div>
                    </div>
                    <div className="lastUp">

                    </div>
                </div> 
            </main>
            <Footer />
        </>
    )
}

export default HomePage;

